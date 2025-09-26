// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ResourceGuardProxyBaseResource,
  _ResourceGuardProxyBaseResourceList,
  _resourceGuardProxyBaseResourceListDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { ResourceGuardProxiesGetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  vaultName: string,
  resourceGroupName: string,
  options: ResourceGuardProxiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vaultName: vaultName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<_ResourceGuardProxyBaseResourceList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _resourceGuardProxyBaseResourceListDeserializer(result.body);
}

/** List the ResourceGuardProxies under vault */
export function get(
  context: Client,
  vaultName: string,
  resourceGroupName: string,
  options: ResourceGuardProxiesGetOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ResourceGuardProxyBaseResource> {
  return buildPagedAsyncIterator(
    context,
    () => _getSend(context, vaultName, resourceGroupName, options),
    _getDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
