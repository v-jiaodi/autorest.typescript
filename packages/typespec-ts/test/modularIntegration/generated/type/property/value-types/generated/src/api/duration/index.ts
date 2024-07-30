// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationProperty } from "../../models/models.js";
import {
  ValueTypesContext as Client,
  DurationGet200Response,
  DurationPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationGetOptionalParams,
  DurationPutOptionalParams,
} from "../../models/options.js";

export function _durationGetSend(
  context: Client,
  options: DurationGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationGet200Response> {
  return context
    .path("/type/property/value-types/duration")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetDeserialize(
  result: DurationGet200Response,
): Promise<DurationProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function durationGet(
  context: Client,
  options: DurationGetOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetSend(context, options);
  return _durationGetDeserialize(result);
}

export function _durationPutSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutOptionalParams = { requestOptions: {} },
): StreamableMethod<DurationPut204Response> {
  return context
    .path("/type/property/value-types/duration")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _durationPutDeserialize(
  result: DurationPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function durationPut(
  context: Client,
  body: DurationProperty,
  options: DurationPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPutSend(context, body, options);
  return _durationPutDeserialize(result);
}
