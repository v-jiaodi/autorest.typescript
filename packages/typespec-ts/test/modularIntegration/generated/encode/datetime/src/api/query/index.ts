// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DatetimeContext as Client,
  QueryDefault204Response,
  QueryRfc3339204Response,
  QueryRfc7231204Response,
  QueryUnixTimestamp204Response,
  QueryUnixTimestampArray204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  QueryDefaultOptionalParams,
  QueryRfc3339OptionalParams,
  QueryRfc7231OptionalParams,
  QueryUnixTimestampOptionalParams,
  QueryUnixTimestampArrayOptionalParams,
} from "../../models/options.js";

export function _queryDefaultSend(
  context: Client,
  value: Date,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<QueryDefault204Response> {
  return context
    .path("/encode/datetime/query/default")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
    });
}

export async function _queryDefaultDeserialize(
  result: QueryDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryDefault(
  context: Client,
  value: Date,
  options: QueryDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryDefaultSend(context, value, options);
  return _queryDefaultDeserialize(result);
}

export function _queryRfc3339Send(
  context: Client,
  value: Date,
  options: QueryRfc3339OptionalParams = { requestOptions: {} },
): StreamableMethod<QueryRfc3339204Response> {
  return context
    .path("/encode/datetime/query/rfc3339")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toISOString() },
    });
}

export async function _queryRfc3339Deserialize(
  result: QueryRfc3339204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryRfc3339(
  context: Client,
  value: Date,
  options: QueryRfc3339OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryRfc3339Send(context, value, options);
  return _queryRfc3339Deserialize(result);
}

export function _queryRfc7231Send(
  context: Client,
  value: Date,
  options: QueryRfc7231OptionalParams = { requestOptions: {} },
): StreamableMethod<QueryRfc7231204Response> {
  return context
    .path("/encode/datetime/query/rfc7231")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.toUTCString() },
    });
}

export async function _queryRfc7231Deserialize(
  result: QueryRfc7231204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryRfc7231(
  context: Client,
  value: Date,
  options: QueryRfc7231OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryRfc7231Send(context, value, options);
  return _queryRfc7231Deserialize(result);
}

export function _queryUnixTimestampSend(
  context: Client,
  value: Date,
  options: QueryUnixTimestampOptionalParams = { requestOptions: {} },
): StreamableMethod<QueryUnixTimestamp204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.getTime() },
    });
}

export async function _queryUnixTimestampDeserialize(
  result: QueryUnixTimestamp204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryUnixTimestamp(
  context: Client,
  value: Date,
  options: QueryUnixTimestampOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryUnixTimestampSend(context, value, options);
  return _queryUnixTimestampDeserialize(result);
}

export function _queryUnixTimestampArraySend(
  context: Client,
  value: Date[],
  options: QueryUnixTimestampArrayOptionalParams = { requestOptions: {} },
): StreamableMethod<QueryUnixTimestampArray204Response> {
  return context
    .path("/encode/datetime/query/unix-timestamp-array")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value.map((p) => p.getTime()) },
    });
}

export async function _queryUnixTimestampArrayDeserialize(
  result: QueryUnixTimestampArray204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function queryUnixTimestampArray(
  context: Client,
  value: Date[],
  options: QueryUnixTimestampArrayOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _queryUnixTimestampArraySend(context, value, options);
  return _queryUnixTimestampArrayDeserialize(result);
}
