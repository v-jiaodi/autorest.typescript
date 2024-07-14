// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getLroLogicalResponseName,
  Imports,
  OperationResponse,
  ResponseHeaderSchema,
  ResponseMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import {
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkClient
} from "@azure-tools/typespec-client-generator-core";
import { getDoc, ignoreDiagnostics, isVoidType } from "@typespec/compiler";
import {
  getHttpOperation,
  HttpOperation,
  HttpOperationResponse
} from "@typespec/http";
import { SdkContext } from "../utils/interfaces.js";
import {
  getBinaryType,
  getImportedModelName,
  getSchemaForType,
  getTypeName
} from "../utils/modelUtils.js";
import {
  getOperationGroupName,
  getOperationLroOverload,
  getOperationName,
  getOperationStatuscode,
  isBinaryPayload,
  sortedOperationResponses
} from "../utils/operationUtil.js";

export function transformToResponseTypes(
  client: SdkClient,
  dpgContext: SdkContext,
  importDetails: Imports
): OperationResponse[] {
  const program = dpgContext.program;
  const rlcResponses: OperationResponse[] = [];
  const inputImportedSet = new Set<string>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    transformToResponseTypesForRoute(route);
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      transformToResponseTypesForRoute(route);
    }
  }
  if (inputImportedSet.size > 0) {
    importDetails.response.importsSet = inputImportedSet;
  }
  function transformToResponseTypesForRoute(route: HttpOperation) {
    const rlcOperationUnit: OperationResponse = {
      operationGroup: getOperationGroupName(dpgContext, route),
      operationName: getOperationName(dpgContext, route.operation),
      path: route.path,
      isDefaultSubsetOfOthers: false,
      responses: []
    };
    for (const resp of sortedOperationResponses(route.responses)) {
      const statusCode = getOperationStatuscode(resp);
      const rlcResponseUnit: ResponseMetadata = {
        statusCode,
        description: resp.description
      };
      // transform header
      const headers = transformHeaders(dpgContext, resp, inputImportedSet);
      // transform body
      const body = transformBody(dpgContext, resp, inputImportedSet);
      rlcOperationUnit.responses.push({
        ...rlcResponseUnit,
        headers,
        body
      });
    }
    const lroLogicalResponse = transformLroLogicalResponse(
      dpgContext,
      route,
      getOperationGroupName(dpgContext, route),
      rlcOperationUnit.responses
    );
    if (lroLogicalResponse) {
      rlcOperationUnit.responses.push(lroLogicalResponse);
    }
    rlcOperationUnit.isDefaultSubsetOfOthers = transformIsDefaultSubsetOfOthers(
      rlcOperationUnit.responses
    );
    rlcResponses.push(rlcOperationUnit);
  }
  return rlcResponses;
}

function transformIsDefaultSubsetOfOthers(responses: ResponseMetadata[]) {
  const defaultResponse = responses.find((r) => r.statusCode === "default");
  const nonDefaultResponses = responses.filter(
    (r) => r.statusCode !== "default"
  );
  if (!defaultResponse && nonDefaultResponses.length === 0) {
    return false;
  }
  const defaultSchema = defaultResponse?.body;
  for (const response of nonDefaultResponses) {
    if (response.body?.type !== defaultSchema) {
      return false;
    }
  }
  return false;
}

/**
 * Return undefined if no valid header param
 * @param response response detail
 * @returns rlc header schema
 */
function transformHeaders(
  dpgContext: SdkContext,
  response: HttpOperationResponse,
  importedModels: Set<string>
): ResponseHeaderSchema[] | undefined {
  if (!response.responses.length) {
    return;
  }

  const rlcHeaders: Map<string, ResponseHeaderSchema> = new Map();
  // Current RLC client can't represent different headers per content type.
  // So we merge headers here, and report any duplicates.
  // It may be possible in principle to not error for identically declared
  // headers.
  for (const data of response.responses) {
    const headers = data?.headers ?? {};
    if (data.body?.contentTypeProperty) {
      headers["content-type"] = data.body?.contentTypeProperty;
    }
    if (!headers || !Object.keys(headers).length) {
      continue;
    }

    for (const [key, value] of Object.entries(headers)) {
      if (!value) {
        continue;
      }
      const typeSchema = getSchemaForType(dpgContext, value!.type, {
        usage: [SchemaContext.Output]
      }) as Schema;
      const type = getTypeName(typeSchema, [SchemaContext.Output]);
      getImportedModelName(typeSchema, [SchemaContext.Output])?.forEach(
        importedModels.add,
        importedModels
      );
      const header: ResponseHeaderSchema = {
        name: `"${key.toLowerCase()}"`,
        type,
        required: !value?.optional,
        description: getDoc(dpgContext.program, value!)
      };
      rlcHeaders.set(header.name, header);
    }
  }

  return rlcHeaders.size ? Array.from(rlcHeaders.values()) : undefined;
}

function transformBody(
  dpgContext: SdkContext,
  response: HttpOperationResponse,
  importedModels: Set<string>
) {
  if (!response.responses.length) {
    return;
  }
  // Currently RLC response only have one header and body defined
  // So we'll union all body shapes together with "|"
  const typeSet = new Set<string>();
  const descriptions = new Set<string>();
  let fromCore = false;
  for (const data of response.responses) {
    const body = data?.body;
    if (!body || isVoidType(body.type)) {
      continue;
    }
    const hasBinaryContent = body.contentTypes.some((contentType) =>
      isBinaryPayload(dpgContext, body.type, contentType)
    );
    if (hasBinaryContent) {
      typeSet.add(getBinaryType([SchemaContext.Output]));
      descriptions.add("Value may contain any sequence of octets");
      continue;
    }
    const bodySchema = getSchemaForType(dpgContext, body!.type, {
      usage: [SchemaContext.Output]
    }) as Schema;
    fromCore = bodySchema.fromCore ?? false;
    const bodyType = getTypeName(bodySchema);
    const importedNames = getImportedModelName(bodySchema);
    if (importedNames && !fromCore) {
      importedNames
        .filter((name) => {
          return name !== "any";
        })
        .forEach(importedModels.add, importedModels);
    }
    typeSet.add(bodyType);
  }

  if (!typeSet.size) {
    return;
  }

  return {
    name: "body",
    type: [...typeSet].join("|"),
    description: [...descriptions].join("\n\n"),
    fromCore
  };
}

function transformLroLogicalResponse(
  dpgContext: SdkContext,
  route: HttpOperation,
  operationGroupName: string,
  existingResponses: ResponseMetadata[]
): ResponseMetadata | undefined {
  const operationLroOverload = getOperationLroOverload(
    dpgContext.program,
    route,
    undefined,
    existingResponses
  );
  if (!operationLroOverload) {
    return;
  }
  const sortedResponses = existingResponses
    .filter((r) => r.statusCode.startsWith("20"))
    .sort((r1, r2) => (r1.statusCode > r2.statusCode ? 1 : -1));
  const successResp = sortedResponses[0];
  const logicalLROResponse: ResponseMetadata = {
    statusCode: "200",
    description: `The final response for long-running ${route.operation.name} operation`,
    predefinedName: getLroLogicalResponseName(
      operationGroupName,
      getOperationName(dpgContext, route.operation)
    ),
    body: successResp?.body
  };
  return logicalLROResponse;
}
