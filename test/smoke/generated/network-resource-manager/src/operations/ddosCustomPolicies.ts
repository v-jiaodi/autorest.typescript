/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  DdosCustomPoliciesGetResponse,
  DdosCustomPolicy,
  DdosCustomPoliciesCreateOrUpdateResponse,
  TagsObject,
  DdosCustomPoliciesUpdateTagsResponse
} from "../models";

/** Class representing a DdosCustomPolicies. */
export class DdosCustomPolicies {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class DdosCustomPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      ddosCustomPolicyName,
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
   * Gets information about the specified DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DdosCustomPoliciesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      ddosCustomPolicyName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<DdosCustomPoliciesGetResponse>;
  }

  /**
   * Creates or updates a DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param parameters Parameters supplied to the create or update operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    parameters: DdosCustomPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DdosCustomPoliciesCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      ddosCustomPolicyName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        DdosCustomPoliciesCreateOrUpdateResponse
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
   * Update a DDoS custom policy tags.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param parameters Parameters supplied to update DDoS custom policy resource tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<DdosCustomPoliciesUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      ddosCustomPolicyName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<DdosCustomPoliciesUpdateTagsResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}",
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
    Parameters.ddosCustomPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DdosCustomPolicy
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
    Parameters.ddosCustomPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DdosCustomPolicy
    },
    201: {
      bodyMapper: Mappers.DdosCustomPolicy
    },
    202: {
      bodyMapper: Mappers.DdosCustomPolicy
    },
    204: {
      bodyMapper: Mappers.DdosCustomPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ddosCustomPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DdosCustomPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ddosCustomPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
