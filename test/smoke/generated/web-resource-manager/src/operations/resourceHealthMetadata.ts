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
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  ResourceHealthMetadata as ResourceHealthMetadataModel,
  ResourceHealthMetadataListResponse,
  ResourceHealthMetadataListByResourceGroupResponse,
  ResourceHealthMetadataListBySiteResponse,
  ResourceHealthMetadataGetBySiteResponse,
  ResourceHealthMetadataListBySiteSlotResponse,
  ResourceHealthMetadataGetBySiteSlotResponse,
  ResourceHealthMetadataListNextResponse,
  ResourceHealthMetadataListByResourceGroupNextResponse,
  ResourceHealthMetadataListBySiteNextResponse,
  ResourceHealthMetadataListBySiteSlotNextResponse
} from "../models";

/** Class representing a ResourceHealthMetadata. */
export class ResourceHealthMetadata {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class ResourceHealthMetadata class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ResourceHealthMetadataModel> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ResourceHealthMetadataModel> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The options parameters.
   */
  public listBySite(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ResourceHealthMetadataModel> {
    const iter = this.listBySitePagingAll(resourceGroupName, name, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySitePagingPage(resourceGroupName, name, options);
      }
    };
  }

  private async *listBySitePagingPage(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel[]> {
    let result = await this._listBySite(resourceGroupName, name, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySiteNext(
        resourceGroupName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySitePagingAll(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel> {
    for await (const page of this.listBySitePagingPage(
      resourceGroupName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  public listBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ResourceHealthMetadataModel> {
    const iter = this.listBySiteSlotPagingAll(
      resourceGroupName,
      name,
      slot,
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
        return this.listBySiteSlotPagingPage(
          resourceGroupName,
          name,
          slot,
          options
        );
      }
    };
  }

  private async *listBySiteSlotPagingPage(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel[]> {
    let result = await this._listBySiteSlot(
      resourceGroupName,
      name,
      slot,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySiteSlotNext(
        resourceGroupName,
        name,
        slot,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySiteSlotPagingAll(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ResourceHealthMetadataModel> {
    for await (const page of this.listBySiteSlotPagingPage(
      resourceGroupName,
      name,
      slot,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ResourceHealthMetadataListResponse>;
  }

  /**
   * Description for List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<ResourceHealthMetadataListByResourceGroupResponse>;
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The options parameters.
   */
  private _listBySite(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListBySiteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySiteOperationSpec
    ) as Promise<ResourceHealthMetadataListBySiteResponse>;
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param options The options parameters.
   */
  getBySite(
    resourceGroupName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataGetBySiteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBySiteOperationSpec
    ) as Promise<ResourceHealthMetadataGetBySiteResponse>;
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  private _listBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListBySiteSlotResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      slot,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySiteSlotOperationSpec
    ) as Promise<ResourceHealthMetadataListBySiteSlotResponse>;
  }

  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  getBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataGetBySiteSlotResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      slot,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBySiteSlotOperationSpec
    ) as Promise<ResourceHealthMetadataGetBySiteSlotResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<ResourceHealthMetadataListNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<ResourceHealthMetadataListByResourceGroupNextResponse>;
  }

  /**
   * ListBySiteNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param nextLink The nextLink from the previous successful call to the ListBySite method.
   * @param options The options parameters.
   */
  private _listBySiteNext(
    resourceGroupName: string,
    name: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListBySiteNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySiteNextOperationSpec
    ) as Promise<ResourceHealthMetadataListBySiteNextResponse>;
  }

  /**
   * ListBySiteSlotNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param nextLink The nextLink from the previous successful call to the ListBySiteSlot method.
   * @param options The options parameters.
   */
  private _listBySiteSlotNext(
    resourceGroupName: string,
    name: string,
    slot: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceHealthMetadataListBySiteSlotNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      name,
      slot,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySiteSlotNextOperationSpec
    ) as Promise<ResourceHealthMetadataListBySiteSlotNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBySiteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteSlotOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBySiteSlotOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySiteSlotNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink,
    Parameters.slot
  ],
  headerParameters: [Parameters.accept],
  serializer
};
