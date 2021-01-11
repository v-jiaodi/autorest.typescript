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
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  CassandraKeyspaceGetResults,
  CassandraTableGetResults,
  CassandraResourcesListCassandraKeyspacesResponse,
  CassandraResourcesGetCassandraKeyspaceResponse,
  CassandraKeyspaceCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraKeyspaceResponse,
  CassandraResourcesGetCassandraKeyspaceThroughputResponse,
  ThroughputSettingsUpdateParameters,
  CassandraResourcesUpdateCassandraKeyspaceThroughputResponse,
  CassandraResourcesListCassandraTablesResponse,
  CassandraResourcesGetCassandraTableResponse,
  CassandraTableCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraTableResponse,
  CassandraResourcesGetCassandraTableThroughputResponse,
  CassandraResourcesUpdateCassandraTableThroughputResponse
} from "../models";

/** Class representing a CassandraResources. */
export class CassandraResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class CassandraResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listCassandraKeyspaces(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<CassandraKeyspaceGetResults> {
    const iter = this.listCassandraKeyspacesPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listCassandraKeyspacesPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listCassandraKeyspacesPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CassandraKeyspaceGetResults[]> {
    let result = await this._listCassandraKeyspaces(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listCassandraKeyspacesPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CassandraKeyspaceGetResults> {
    for await (const page of this.listCassandraKeyspacesPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  public listCassandraTables(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<CassandraTableGetResults> {
    const iter = this.listCassandraTablesPagingAll(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listCassandraTablesPagingPage(
          resourceGroupName,
          accountName,
          keyspaceName,
          options
        );
      }
    };
  }

  private async *listCassandraTablesPagingPage(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CassandraTableGetResults[]> {
    let result = await this._listCassandraTables(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    );
    yield result.value || [];
  }

  private async *listCassandraTablesPagingAll(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<CassandraTableGetResults> {
    for await (const page of this.listCassandraTablesPagingPage(
      resourceGroupName,
      accountName,
      keyspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listCassandraKeyspaces(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesListCassandraKeyspacesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listCassandraKeyspacesOperationSpec
    ) as Promise<CassandraResourcesListCassandraKeyspacesResponse>;
  }

  /**
   * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesGetCassandraKeyspaceResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getCassandraKeyspaceOperationSpec
    ) as Promise<CassandraResourcesGetCassandraKeyspaceResponse>;
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
   *                                                keyspace.
   * @param options The options parameters.
   */
  async createUpdateCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<CassandraResourcesCreateUpdateCassandraKeyspaceResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      createUpdateCassandraKeyspaceParameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        CassandraResourcesCreateUpdateCassandraKeyspaceResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createUpdateCassandraKeyspaceOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createUpdateCassandraKeyspaceOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra keyspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  async deleteCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteCassandraKeyspaceOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteCassandraKeyspaceOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesGetCassandraKeyspaceThroughputResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getCassandraKeyspaceThroughputOperationSpec
    ) as Promise<CassandraResourcesGetCassandraKeyspaceThroughputResponse>;
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra Keyspace.
   * @param options The options parameters.
   */
  async updateCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      updateThroughputParameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        CassandraResourcesUpdateCassandraKeyspaceThroughputResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateCassandraKeyspaceThroughputOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateCassandraKeyspaceThroughputOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Lists the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  private _listCassandraTables(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesListCassandraTablesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listCassandraTablesOperationSpec
    ) as Promise<CassandraResourcesListCassandraTablesResponse>;
  }

  /**
   * Gets the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesGetCassandraTableResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getCassandraTableOperationSpec
    ) as Promise<CassandraResourcesGetCassandraTableResponse>;
  }

  /**
   * Create or update an Azure Cosmos DB Cassandra Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
   *                                             Table.
   * @param options The options parameters.
   */
  async createUpdateCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<CassandraResourcesCreateUpdateCassandraTableResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      createUpdateCassandraTableParameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        CassandraResourcesCreateUpdateCassandraTableResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createUpdateCassandraTableOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createUpdateCassandraTableOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes an existing Azure Cosmos DB Cassandra table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async deleteCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteCassandraTableOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteCassandraTableOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CassandraResourcesGetCassandraTableThroughputResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getCassandraTableThroughputOperationSpec
    ) as Promise<CassandraResourcesGetCassandraTableThroughputResponse>;
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra table.
   * @param options The options parameters.
   */
  async updateCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<CassandraResourcesUpdateCassandraTableThroughputResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      keyspaceName,
      tableName,
      updateThroughputParameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        CassandraResourcesUpdateCassandraTableThroughputResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateCassandraTableThroughputOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateCassandraTableThroughputOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listCassandraKeyspacesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCassandraKeyspaceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateCassandraKeyspaceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    201: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    202: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    },
    204: {
      bodyMapper: Mappers.CassandraKeyspaceGetResults
    }
  },
  requestBody: Parameters.createUpdateCassandraKeyspaceParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCassandraKeyspaceOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  serializer
};
const getCassandraKeyspaceThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCassandraKeyspaceThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCassandraTablesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCassandraTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createUpdateCassandraTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    201: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    202: {
      bodyMapper: Mappers.CassandraTableGetResults
    },
    204: {
      bodyMapper: Mappers.CassandraTableGetResults
    }
  },
  requestBody: Parameters.createUpdateCassandraTableParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteCassandraTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  serializer
};
const getCassandraTableThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCassandraTableThroughputOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    }
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
    Parameters.keyspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
