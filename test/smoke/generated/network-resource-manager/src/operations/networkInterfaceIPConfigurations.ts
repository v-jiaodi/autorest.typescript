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
import {
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceIPConfigurationsListResponse,
  NetworkInterfaceIPConfigurationsGetResponse,
  NetworkInterfaceIPConfigurationsListNextResponse
} from "../models";

/**
 * Class representing a NetworkInterfaceIPConfigurations.
 */
export class NetworkInterfaceIPConfigurations {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkInterfaceIPConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Get all ip configurations in a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NetworkInterfaceIPConfiguration> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkInterfaceName,
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
        return this.listPagingPage(
          resourceGroupName,
          networkInterfaceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NetworkInterfaceIPConfiguration[]> {
    let result = await this._list(
      resourceGroupName,
      networkInterfaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkInterfaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NetworkInterfaceIPConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkInterfaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all ip configurations in a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceIPConfigurationsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<NetworkInterfaceIPConfigurationsListResponse>;
  }

  /**
   * Gets the specified network interface ip configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the ip configuration name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkInterfaceName: string,
    ipConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceIPConfigurationsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      ipConfigurationName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<NetworkInterfaceIPConfigurationsGetResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkInterfaceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceIPConfigurationsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<NetworkInterfaceIPConfigurationsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/ipConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfigurationListResult
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
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/ipConfigurations/{ipConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfiguration
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
    Parameters.networkInterfaceName,
    Parameters.ipConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceIPConfigurationListResult
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
    Parameters.nextLink,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
