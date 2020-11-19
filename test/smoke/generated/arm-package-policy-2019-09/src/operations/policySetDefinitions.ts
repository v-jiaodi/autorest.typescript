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
import { PolicyClient } from "../policyClient";
import {
  PolicySetDefinition,
  PolicySetDefinitionsCreateOrUpdateResponse,
  PolicySetDefinitionsGetResponse,
  PolicySetDefinitionsGetBuiltInResponse,
  PolicySetDefinitionsListResponse,
  PolicySetDefinitionsListBuiltInResponse,
  PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse,
  PolicySetDefinitionsGetAtManagementGroupResponse,
  PolicySetDefinitionsListByManagementGroupResponse,
  PolicySetDefinitionsListNextResponse,
  PolicySetDefinitionsListBuiltInNextResponse,
  PolicySetDefinitionsListByManagementGroupNextResponse
} from "../models";

/**
 * Class representing a PolicySetDefinitions.
 */
export class PolicySetDefinitions {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class PolicySetDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in the given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
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
  ): AsyncIterableIterator<PolicySetDefinition[]> {
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
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions.
   * @param options The options parameters.
   */
  public listBuiltIn(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
    const iter = this.listBuiltInPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBuiltInPagingPage(options);
      }
    };
  }

  private async *listBuiltInPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PolicySetDefinition[]> {
    let result = await this._listBuiltIn(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBuiltInNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBuiltInPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listBuiltInPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the a policy set definition in the given management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  public listByManagementGroup(
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
    const iter = this.listByManagementGroupPagingAll(
      managementGroupId,
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
        return this.listByManagementGroupPagingPage(managementGroupId, options);
      }
    };
  }

  private async *listByManagementGroupPagingPage(
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PolicySetDefinition[]> {
    let result = await this._listByManagementGroup(managementGroupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByManagementGroupNext(
        managementGroupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByManagementGroupPagingAll(
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listByManagementGroupPagingPage(
      managementGroupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation creates or updates a policy set definition in the given subscription with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policySetDefinitionName: string,
    parameters: PolicySetDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsCreateOrUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOperationSpec
    ) as Promise<PolicySetDefinitionsCreateOrUpdateResponse>;
  }

  /**
   * This operation deletes the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param options The options parameters.
   */
  delete(
    policySetDefinitionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * This operation retrieves the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  get(
    policySetDefinitionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<PolicySetDefinitionsGetResponse>;
  }

  /**
   * This operation retrieves the built-in policy set definition with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  getBuiltIn(
    policySetDefinitionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsGetBuiltInResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBuiltInOperationSpec
    ) as Promise<PolicySetDefinitionsGetBuiltInResponse>;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in the given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<PolicySetDefinitionsListResponse>;
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions.
   * @param options The options parameters.
   */
  private _listBuiltIn(
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListBuiltInResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBuiltInOperationSpec
    ) as Promise<PolicySetDefinitionsListBuiltInResponse>;
  }

  /**
   * This operation creates or updates a policy set definition in the given management group with the
   * given name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param managementGroupId The ID of the management group.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    parameters: PolicySetDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      managementGroupId,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateAtManagementGroupOperationSpec
    ) as Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  }

  /**
   * This operation deletes the policy set definition in the given management group with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      managementGroupId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteAtManagementGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * This operation retrieves the policy set definition in the given management group with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsGetAtManagementGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      policySetDefinitionName,
      managementGroupId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAtManagementGroupOperationSpec
    ) as Promise<PolicySetDefinitionsGetAtManagementGroupResponse>;
  }

  /**
   * This operation retrieves a list of all the a policy set definition in the given management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  private _listByManagementGroup(
    managementGroupId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListByManagementGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      managementGroupId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByManagementGroupOperationSpec
    ) as Promise<PolicySetDefinitionsListByManagementGroupResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<PolicySetDefinitionsListNextResponse>;
  }

  /**
   * ListBuiltInNext
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  private _listBuiltInNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListBuiltInNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBuiltInNextOperationSpec
    ) as Promise<PolicySetDefinitionsListBuiltInNextResponse>;
  }

  /**
   * ListByManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  private _listByManagementGroupNext(
    managementGroupId: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicySetDefinitionsListByManagementGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      managementGroupId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByManagementGroupNextOperationSpec
    ) as Promise<PolicySetDefinitionsListByManagementGroupNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBuiltInOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.policySetDefinitionName],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listBuiltInOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtManagementGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteAtManagementGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtManagementGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagementGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.managementGroupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const listBuiltInNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagementGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
