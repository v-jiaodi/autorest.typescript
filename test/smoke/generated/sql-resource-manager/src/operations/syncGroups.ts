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
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  SyncDatabaseIdProperties,
  SyncFullSchemaProperties,
  SyncGroupLogProperties,
  Enum21,
  SyncGroupsListLogsNextOptionalParams,
  SyncGroupsListLogsOptionalParams,
  SyncGroup,
  SyncGroupsListSyncDatabaseIdsResponse,
  SyncGroupsListHubSchemasResponse,
  SyncGroupsListLogsResponse,
  SyncGroupsGetResponse,
  SyncGroupsCreateOrUpdateResponse,
  SyncGroupsUpdateResponse,
  SyncGroupsListByDatabaseResponse,
  SyncGroupsListSyncDatabaseIdsNextResponse,
  SyncGroupsListHubSchemasNextResponse,
  SyncGroupsListLogsNextResponse,
  SyncGroupsListByDatabaseNextResponse
} from "../models";

/**
 * Class representing a SyncGroups.
 */
export class SyncGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class SyncGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a collection of sync database ids.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  public listSyncDatabaseIds(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SyncDatabaseIdProperties> {
    const iter = this.listSyncDatabaseIdsPagingAll(locationName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSyncDatabaseIdsPagingPage(locationName, options);
      }
    };
  }

  private async *listSyncDatabaseIdsPagingPage(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncDatabaseIdProperties[]> {
    let result = await this._listSyncDatabaseIds(locationName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSyncDatabaseIdsNext(
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSyncDatabaseIdsPagingAll(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncDatabaseIdProperties> {
    for await (const page of this.listSyncDatabaseIdsPagingPage(
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a collection of hub database schemas.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  public listHubSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SyncFullSchemaProperties> {
    const iter = this.listHubSchemasPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
        return this.listHubSchemasPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          syncGroupName,
          options
        );
      }
    };
  }

  private async *listHubSchemasPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncFullSchemaProperties[]> {
    let result = await this._listHubSchemas(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listHubSchemasNext(
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listHubSchemasPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncFullSchemaProperties> {
    for await (const page of this.listHubSchemasPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a collection of sync group logs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param typeParam The types of logs to retrieve.
   * @param options The options parameters.
   */
  public listLogs(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum21,
    options?: SyncGroupsListLogsOptionalParams
  ): PagedAsyncIterableIterator<SyncGroupLogProperties> {
    const iter = this.listLogsPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      startTime,
      endTime,
      typeParam,
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
        return this.listLogsPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          syncGroupName,
          startTime,
          endTime,
          typeParam,
          options
        );
      }
    };
  }

  private async *listLogsPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum21,
    options?: SyncGroupsListLogsOptionalParams
  ): AsyncIterableIterator<SyncGroupLogProperties[]> {
    let result = await this._listLogs(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      startTime,
      endTime,
      typeParam,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listLogsNext(
        resourceGroupName,
        serverName,
        databaseName,
        syncGroupName,
        startTime,
        endTime,
        continuationToken,
        typeParam,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listLogsPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum21,
    options?: SyncGroupsListLogsOptionalParams
  ): AsyncIterableIterator<SyncGroupLogProperties> {
    for await (const page of this.listLogsPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      startTime,
      endTime,
      typeParam,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists sync groups under a hub database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SyncGroup> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncGroup[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SyncGroup> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a collection of sync database ids.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  private _listSyncDatabaseIds(
    locationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListSyncDatabaseIdsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      locationName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSyncDatabaseIdsOperationSpec
    ) as Promise<SyncGroupsListSyncDatabaseIdsResponse>;
  }

  /**
   * Refreshes a hub database schema.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  async refreshHubSchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
      refreshHubSchemaOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: refreshHubSchemaOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a collection of hub database schemas.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  private _listHubSchemas(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListHubSchemasResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listHubSchemasOperationSpec
    ) as Promise<SyncGroupsListHubSchemasResponse>;
  }

  /**
   * Gets a collection of sync group logs.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param typeParam The types of logs to retrieve.
   * @param options The options parameters.
   */
  private _listLogs(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    typeParam: Enum21,
    options?: SyncGroupsListLogsOptionalParams
  ): Promise<SyncGroupsListLogsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      startTime,
      endTime,
      typeParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listLogsOperationSpec
    ) as Promise<SyncGroupsListLogsResponse>;
  }

  /**
   * Cancels a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  cancelSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      cancelSyncOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Triggers a sync group synchronization.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  triggerSync(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      triggerSyncOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<SyncGroupsGetResponse>;
  }

  /**
   * Creates or updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<SyncGroupsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        SyncGroupsCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
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
      deleteOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates a sync group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param parameters The requested sync group resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    parameters: SyncGroup,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<SyncGroupsUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        SyncGroupsUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Lists sync groups under a hub database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListByDatabaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseOperationSpec
    ) as Promise<SyncGroupsListByDatabaseResponse>;
  }

  /**
   * ListSyncDatabaseIdsNext
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListSyncDatabaseIds method.
   * @param options The options parameters.
   */
  private _listSyncDatabaseIdsNext(
    locationName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListSyncDatabaseIdsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      locationName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSyncDatabaseIdsNextOperationSpec
    ) as Promise<SyncGroupsListSyncDatabaseIdsNextResponse>;
  }

  /**
   * ListHubSchemasNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param nextLink The nextLink from the previous successful call to the ListHubSchemas method.
   * @param options The options parameters.
   */
  private _listHubSchemasNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListHubSchemasNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listHubSchemasNextOperationSpec
    ) as Promise<SyncGroupsListHubSchemasNextResponse>;
  }

  /**
   * ListLogsNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param syncGroupName The name of the sync group.
   * @param startTime Get logs generated after this time.
   * @param endTime Get logs generated before this time.
   * @param nextLink The nextLink from the previous successful call to the ListLogs method.
   * @param typeParam The types of logs to retrieve.
   * @param options The options parameters.
   */
  private _listLogsNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    syncGroupName: string,
    startTime: string,
    endTime: string,
    nextLink: string,
    typeParam: Enum21,
    options?: SyncGroupsListLogsNextOptionalParams
  ): Promise<SyncGroupsListLogsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      startTime,
      endTime,
      nextLink,
      typeParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listLogsNextOperationSpec
    ) as Promise<SyncGroupsListLogsNextResponse>;
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database on which the sync group is hosted.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SyncGroupsListByDatabaseNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseNextOperationSpec
    ) as Promise<SyncGroupsListByDatabaseNextResponse>;
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

const listSyncDatabaseIdsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/syncDatabaseIds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncDatabaseIdListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const refreshHubSchemaOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/refreshHubSchema",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  serializer
};
const listHubSchemasOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/hubSchemas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupLogListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.typeParam,
    Parameters.continuationToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelSyncOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/cancelSync",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  serializer
};
const triggerSyncOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/triggerSync",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    201: {
      bodyMapper: Mappers.SyncGroup
    },
    202: {
      bodyMapper: Mappers.SyncGroup
    },
    204: {
      bodyMapper: Mappers.SyncGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup
    },
    201: {
      bodyMapper: Mappers.SyncGroup
    },
    202: {
      bodyMapper: Mappers.SyncGroup
    },
    204: {
      bodyMapper: Mappers.SyncGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSyncDatabaseIdsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncDatabaseIdListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listHubSchemasNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncFullSchemaPropertiesListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupLogListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.typeParam,
    Parameters.continuationToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.syncGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
