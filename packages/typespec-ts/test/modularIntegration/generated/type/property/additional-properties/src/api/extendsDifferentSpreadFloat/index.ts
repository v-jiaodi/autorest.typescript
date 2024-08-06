// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  differentSpreadFloatDerivedSerializer,
  DifferentSpreadFloatDerived,
} from "../../models/models.js";
import { AdditionalPropertiesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ExtendsDifferentSpreadFloatGetOptionalParams,
  ExtendsDifferentSpreadFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ExtendsDifferentSpreadFloatGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DifferentSpreadFloatDerived> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: ExtendsDifferentSpreadFloatGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DifferentSpreadFloatDerived> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadFloatDerived,
  options: ExtendsDifferentSpreadFloatPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/type/property/additionalProperties/extendsDifferentSpreadFloat")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: differentSpreadFloatDerivedSerializer(body),
    });
}

export async function _putDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadFloatDerived,
  options: ExtendsDifferentSpreadFloatPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
