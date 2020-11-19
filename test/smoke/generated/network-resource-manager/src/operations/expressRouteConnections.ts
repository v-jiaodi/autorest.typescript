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
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  ExpressRouteConnection,
  ExpressRouteConnectionsCreateOrUpdateResponse,
  ExpressRouteConnectionsGetResponse,
  ExpressRouteConnectionsListResponse
} from "../models";

/**
 * Class representing a ExpressRouteConnections.
 */
export class ExpressRouteConnections {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ExpressRouteConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
   * @param resourceGroupName The name of the resource group.
   * @param expressRouteGatewayName The name of the ExpressRoute gateway.
   * @param connectionName The name of the connection subresource.
   * @param putExpressRouteConnectionParameters Parameters required in an ExpressRouteConnection PUT
   *                                            operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    expressRouteGatewayName: string,
    connectionName: string,
    putExpressRouteConnectionParameters: ExpressRouteConnection,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ExpressRouteConnectionsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      expressRouteGatewayName,
      connectionName,
      putExpressRouteConnectionParameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ExpressRouteConnectionsCreateOrUpdateResponse
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
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Gets the specified ExpressRouteConnection.
   * @param resourceGroupName The name of the resource group.
   * @param expressRouteGatewayName The name of the ExpressRoute gateway.
   * @param connectionName The name of the ExpressRoute connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    expressRouteGatewayName: string,
    connectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteConnectionsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      expressRouteGatewayName,
      connectionName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ExpressRouteConnectionsGetResponse>;
  }

  /**
   * Deletes a connection to a ExpressRoute circuit.
   * @param resourceGroupName The name of the resource group.
   * @param expressRouteGatewayName The name of the ExpressRoute gateway.
   * @param connectionName The name of the connection subresource.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    expressRouteGatewayName: string,
    connectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      expressRouteGatewayName,
      connectionName,
      options: this.getOperationOptions(options, "location")
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
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Lists ExpressRouteConnections.
   * @param resourceGroupName The name of the resource group.
   * @param expressRouteGatewayName The name of the ExpressRoute gateway.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    expressRouteGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteConnectionsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      expressRouteGatewayName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ExpressRouteConnectionsListResponse>;
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

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteConnection
    },
    201: {
      bodyMapper: Mappers.ExpressRouteConnection
    },
    202: {
      bodyMapper: Mappers.ExpressRouteConnection
    },
    204: {
      bodyMapper: Mappers.ExpressRouteConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.putExpressRouteConnectionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.expressRouteGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.expressRouteGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.expressRouteGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteConnectionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRouteGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
