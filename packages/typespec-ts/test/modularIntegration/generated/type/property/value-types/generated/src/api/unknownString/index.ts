// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownStringProperty } from "../../models/models.js";
import {
  ValueTypesContext as Client,
  UnknownStringGet200Response,
  UnknownStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownStringGetOptionalParams,
  UnknownStringPutOptionalParams,
} from "../../models/options.js";

export function _unknownStringGetSend(
  context: Client,
  options: UnknownStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownStringGet200Response> {
  return context
    .path("/type/property/value-types/unknown/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownStringGetDeserialize(
  result: UnknownStringGet200Response,
): Promise<UnknownStringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownStringGet(
  context: Client,
  options: UnknownStringGetOptionalParams = { requestOptions: {} },
): Promise<UnknownStringProperty> {
  const result = await _unknownStringGetSend(context, options);
  return _unknownStringGetDeserialize(result);
}

export function _unknownStringPutSend(
  context: Client,
  body: UnknownStringProperty,
  options: UnknownStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownStringPut204Response> {
  return context
    .path("/type/property/value-types/unknown/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownStringPutDeserialize(
  result: UnknownStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownStringPut(
  context: Client,
  body: UnknownStringProperty,
  options: UnknownStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownStringPutSend(context, body, options);
  return _unknownStringPutDeserialize(result);
}
