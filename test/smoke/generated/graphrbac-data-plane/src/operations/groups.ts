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
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  ADGroup,
  GroupsListOptionalParams,
  DirectoryObjectUnion,
  GroupGetMemberGroupsParameters,
  CheckGroupMembershipParameters,
  GroupsIsMemberOfResponse,
  GroupAddMemberParameters,
  GroupCreateParameters,
  GroupsCreateResponse,
  GroupsListResponse,
  GroupsGetGroupMembersResponse,
  GroupsGetResponse,
  GroupsGetMemberGroupsResponse,
  GroupsListOwnersResponse,
  AddOwnerParameters,
  GroupsListNextResponse,
  GroupsGetGroupMembersNextResponse,
  GroupsListOwnersNextResponse
} from "../models";

/** Class representing a Groups. */
export class Groups {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class Groups class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  public list(
    options?: GroupsListOptionalParams
  ): PagedAsyncIterableIterator<ADGroup> {
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
    options?: GroupsListOptionalParams
  ): AsyncIterableIterator<ADGroup[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: GroupsListOptionalParams
  ): AsyncIterableIterator<ADGroup> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  public listGroupMembers(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getGroupMembersPagingAll(objectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getGroupMembersPagingPage(objectId, options);
      }
    };
  }

  private async *getGroupMembersPagingPage(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getGroupMembers(objectId, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getGroupMembersNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getGroupMembersPagingAll(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getGroupMembersPagingPage(
      objectId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  public listMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getMemberGroupsPagingAll(objectId, parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getMemberGroupsPagingPage(objectId, parameters, options);
      }
    };
  }

  private async *getMemberGroupsPagingPage(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string[]> {
    let result = await this._getMemberGroups(objectId, parameters, options);
    yield result.value || [];
  }

  private async *getMemberGroupsPagingAll(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string> {
    for await (const page of this.getMemberGroupsPagingPage(
      objectId,
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  public listOwners(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnersPagingAll(objectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOwnersPagingPage(objectId, options);
      }
    };
  }

  private async *listOwnersPagingPage(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._listOwners(objectId, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listOwnersNext(objectId, continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listOwnersPagingAll(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnersPagingPage(objectId, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ADGroup> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ADGroup[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<ADGroup> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listGroupMembersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getGroupMembersNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getGroupMembersNextPagingPage(nextLink, options);
      }
    };
  }

  private async *getGroupMembersNextPagingPage(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getGroupMembersNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getGroupMembersNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getGroupMembersNextPagingAll(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getGroupMembersNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks whether the specified user, group, contact, or service principal is a direct or transitive
   * member of the specified group.
   * @param parameters The check group membership parameters.
   * @param options The options parameters.
   */
  isMemberOf(
    parameters: CheckGroupMembershipParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsIsMemberOfResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      isMemberOfOperationSpec
    ) as Promise<GroupsIsMemberOfResponse>;
  }

  /**
   * Remove a member from a group.
   * @param groupObjectId The object ID of the group from which to remove the member.
   * @param memberObjectId Member object id
   * @param options The options parameters.
   */
  removeMember(
    groupObjectId: string,
    memberObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      groupObjectId,
      memberObjectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      removeMemberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Add a member to a group.
   * @param groupObjectId The object ID of the group to which to add the member.
   * @param parameters The URL of the member object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addMember(
    groupObjectId: string,
    parameters: GroupAddMemberParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      groupObjectId,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addMemberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Create a group in the directory.
   * @param parameters The parameters for the group to create.
   * @param options The options parameters.
   */
  create(
    parameters: GroupCreateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<GroupsCreateResponse>;
  }

  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: GroupsListOptionalParams
  ): Promise<GroupsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<GroupsListResponse>;
  }

  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  private _getGroupMembers(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetGroupMembersResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getGroupMembersOperationSpec
    ) as Promise<GroupsGetGroupMembersResponse>;
  }

  /**
   * Gets group information from the directory.
   * @param objectId The object ID of the user for which to get group information.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<GroupsGetResponse>;
  }

  /**
   * Delete a group from the directory.
   * @param objectId The object ID of the group to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  private _getMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetMemberGroupsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMemberGroupsOperationSpec
    ) as Promise<GroupsGetMemberGroupsResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  private _listOwners(
    objectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListOwnersResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnersOperationSpec
    ) as Promise<GroupsListOwnersResponse>;
  }

  /**
   * Add an owner to a group.
   * @param objectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    objectId: string,
    parameters: AddOwnerParameters,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Remove a member from owners.
   * @param objectId The object ID of the group from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    objectId: string,
    ownerObjectId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      ownerObjectId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      removeOwnerOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<GroupsListNextResponse>;
  }

  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _getGroupMembersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsGetGroupMembersNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getGroupMembersNextOperationSpec
    ) as Promise<GroupsGetGroupMembersNextResponse>;
  }

  /**
   * ListOwnersNext
   * @param objectId The object ID of the group for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  private _listOwnersNext(
    objectId: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GroupsListOwnersNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      objectId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOwnersNextOperationSpec
    ) as Promise<GroupsListOwnersNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const isMemberOfOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/isMemberOf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckGroupMembershipResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeMemberOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId,
    Parameters.memberObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addMemberOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupMembersOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/members",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const getMemberGroupsOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/getMemberGroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GroupGetMemberGroupsResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnersOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const addOwnerOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOwnerOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.ownerObjectId,
    Parameters.objectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupMembersNextOperationSpec: coreHttp.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.objectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
