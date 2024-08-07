// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  stringPropertySerializer,
  CollectionsModelProperty,
} from "../../models/models.js";
import { OptionalContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetAllOptionalParams,
  CollectionsModelGetDefaultOptionalParams,
  CollectionsModelPutAllOptionalParams,
  CollectionsModelPutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: CollectionsModelGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/optional/collections/model/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p: any) => {
            return { property: p["property"] };
          }),
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: CollectionsModelGetAllOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: CollectionsModelGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/optional/collections/model/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p: any) => {
            return { property: p["property"] };
          }),
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: CollectionsModelGetDefaultOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/optional/collections/model/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map(stringPropertySerializer),
      },
    });
}

export async function _putAllDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/optional/collections/model/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map(stringPropertySerializer),
      },
    });
}

export async function _putDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
