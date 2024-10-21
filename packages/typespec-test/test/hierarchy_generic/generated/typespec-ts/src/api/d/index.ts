// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext as Client, DOp1OptionalParams } from "../index.js";
import { A, aSerializer } from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _dOp1Send(
  context: Client,
  body: A,
  options: DOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: aSerializer(body),
    });
}

export async function _dOp1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function dOp1(
  context: Client,
  body: A,
  options: DOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dOp1Send(context, body, options);
  return _dOp1Deserialize(result);
}
