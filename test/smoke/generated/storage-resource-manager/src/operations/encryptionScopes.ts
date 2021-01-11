/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  EncryptionScope,
  EncryptionScopesPutResponse,
  EncryptionScopesPatchResponse,
  EncryptionScopesGetResponse,
  EncryptionScopesListResponse,
  EncryptionScopesListNextResponse
} from "../models";

/** Class representing a EncryptionScopes. */
export class EncryptionScopes {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class EncryptionScopes class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<EncryptionScope> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EncryptionScope[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EncryptionScope> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Synchronously creates or updates an encryption scope under the specified storage account. If an
   * encryption scope is already created and a subsequent request is issued with different properties,
   * the encryption scope properties will be updated per the specified request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesPutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      encryptionScopeName,
      encryptionScope,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putOperationSpec
    ) as Promise<EncryptionScopesPutResponse>;
  }

  /**
   * Update encryption scope properties as specified in the request body. Update fails if the specified
   * encryption scope does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      encryptionScopeName,
      encryptionScope,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      patchOperationSpec
    ) as Promise<EncryptionScopesPatchResponse>;
  }

  /**
   * Returns the properties for the specified encryption scope.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      encryptionScopeName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<EncryptionScopesGetResponse>;
  }

  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<EncryptionScopesListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionScopesListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<EncryptionScopesListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const putOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    201: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.encryptionScope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const patchOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.encryptionScope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.encryptionScopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
