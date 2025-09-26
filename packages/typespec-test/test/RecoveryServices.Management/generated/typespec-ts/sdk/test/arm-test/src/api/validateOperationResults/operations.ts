// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ValidateOperationsResponse,
  validateOperationsResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { ValidateOperationResultsGetOptionalParams } from "./options.js";
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
  operationId: string,
  options: ValidateOperationResultsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperationResults/{operationId}{?api%2Dversion}",
    {
      vaultName: vaultName,
      resourceGroupName: resourceGroupName,
      subscriptionId: context.subscriptionId,
      operationId: operationId,
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
): Promise<ValidateOperationsResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return validateOperationsResponseDeserializer(result.body);
}

/** Fetches the result of a triggered validate operation. */
export async function get(
  context: Client,
  vaultName: string,
  resourceGroupName: string,
  operationId: string,
  options: ValidateOperationResultsGetOptionalParams = { requestOptions: {} },
): Promise<ValidateOperationsResponse | null> {
  const result = await _getSend(
    context,
    vaultName,
    resourceGroupName,
    operationId,
    options,
  );
  return _getDeserialize(result);
}
