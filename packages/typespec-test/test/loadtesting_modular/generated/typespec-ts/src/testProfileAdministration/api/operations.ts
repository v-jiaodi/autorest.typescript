// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TestProfileAdministrationContext as Client,
  CreateOrUpdateTestProfileOptionalParams,
  DeleteTestProfileOptionalParams,
  GetTestProfileOptionalParams,
  ListTestProfilesOptionalParams,
} from "./index.js";
import {
  TestProfile,
  testProfileSerializer,
  testProfileDeserializer,
  _PagedTestProfile,
  _pagedTestProfileDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listTestProfilesSend(
  context: Client,
  options: ListTestProfilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        maxpagesize: options?.maxpagesize,
        lastModifiedStartTime: !options?.lastModifiedStartTime
          ? options?.lastModifiedStartTime
          : options?.lastModifiedStartTime.toISOString(),
        lastModifiedEndTime: !options?.lastModifiedEndTime
          ? options?.lastModifiedEndTime
          : options?.lastModifiedEndTime.toISOString(),
        testProfileIds: options?.testProfileIds,
        testIds: options?.testIds,
      },
    });
}

export async function _listTestProfilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTestProfileDeserializer(result.body);
}

/** Get all test profiles for the given filters. */
export function listTestProfiles(
  context: Client,
  options: ListTestProfilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TestProfile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTestProfilesSend(context, options),
    _listTestProfilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getTestProfileSend(
  context: Client,
  testProfileId: string,
  options: GetTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Get load test profile details by test profile Id. */
export async function getTestProfile(
  context: Client,
  testProfileId: string,
  options: GetTestProfileOptionalParams = { requestOptions: {} },
): Promise<TestProfile> {
  const result = await _getTestProfileSend(context, testProfileId, options);
  return _getTestProfileDeserialize(result);
}

export function _deleteTestProfileSend(
  context: Client,
  testProfileId: string,
  options: DeleteTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _deleteTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a test profile by its test profile Id. */
export async function deleteTestProfile(
  context: Client,
  testProfileId: string,
  options: DeleteTestProfileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTestProfileSend(context, testProfileId, options);
  return _deleteTestProfileDeserialize(result);
}

export function _createOrUpdateTestProfileSend(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: CreateOrUpdateTestProfileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/test-profiles/{testProfileId}", testProfileId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: testProfileSerializer(body),
    });
}

export async function _createOrUpdateTestProfileDeserialize(
  result: PathUncheckedResponse,
): Promise<TestProfile> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testProfileDeserializer(result.body);
}

/** Create a new test profile or update an existing test profile by providing the test profile Id. */
export async function createOrUpdateTestProfile(
  context: Client,
  testProfileId: string,
  body: TestProfile,
  options: CreateOrUpdateTestProfileOptionalParams = { requestOptions: {} },
): Promise<TestProfile> {
  const result = await _createOrUpdateTestProfileSend(
    context,
    testProfileId,
    body,
    options,
  );
  return _createOrUpdateTestProfileDeserialize(result);
}
