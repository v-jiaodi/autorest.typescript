// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { A } from "../models/models.js";
import { FooContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { OpTopLevelOptionalParams } from "../models/options.js";

export function _opTopLevelSend(
  context: Client,
  body: A,
  options: OpTopLevelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _opTopLevelDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** show example opTopLevel */
export async function opTopLevel(
  context: Client,
  body: A,
  options: OpTopLevelOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _opTopLevelSend(context, body, options);
  return _opTopLevelDeserialize(result);
}
