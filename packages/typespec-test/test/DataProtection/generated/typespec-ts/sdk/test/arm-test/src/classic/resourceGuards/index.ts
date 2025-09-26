// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataProtectionContext } from "../../api/dataProtectionContext.js";
import {
  getBackupSecurityPINRequestsObjects,
  getDefaultBackupSecurityPINRequestsObject,
  getDeleteProtectedItemRequestsObjects,
  getDefaultDeleteProtectedItemRequestsObject,
  getUpdateProtectionPolicyRequestsObjects,
  getDefaultUpdateProtectionPolicyRequestsObject,
  getUpdateProtectedItemRequestsObjects,
  getDefaultUpdateProtectedItemRequestsObject,
  getDisableSoftDeleteRequestsObjects,
  getDefaultDisableSoftDeleteRequestsObject,
  getResourcesInSubscription,
  getResourcesInResourceGroup,
  $delete,
  patch,
  put,
  get,
  getDeleteResourceGuardProxyRequestsObjects,
  getDefaultDeleteResourceGuardProxyRequestsObject,
} from "../../api/resourceGuards/operations.js";
import {
  ResourceGuardsGetBackupSecurityPINRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOptionalParams,
  ResourceGuardsGetDeleteProtectedItemRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOptionalParams,
  ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOptionalParams,
  ResourceGuardsGetUpdateProtectedItemRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOptionalParams,
  ResourceGuardsGetDisableSoftDeleteRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOptionalParams,
  ResourceGuardsGetResourcesInSubscriptionOptionalParams,
  ResourceGuardsGetResourcesInResourceGroupOptionalParams,
  ResourceGuardsDeleteOptionalParams,
  ResourceGuardsPatchOptionalParams,
  ResourceGuardsPutOptionalParams,
  ResourceGuardsGetOptionalParams,
  ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOptionalParams,
  ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOptionalParams,
} from "../../api/resourceGuards/options.js";
import {
  DppBaseResource,
  ResourceGuardResource,
  PatchResourceGuardInput,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ResourceGuards operations. */
export interface ResourceGuardsOperations {
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getBackupSecurityPINRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetBackupSecurityPINRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultBackupSecurityPINRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDeleteProtectedItemRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDeleteProtectedItemRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultDeleteProtectedItemRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getUpdateProtectionPolicyRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultUpdateProtectionPolicyRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getUpdateProtectedItemRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetUpdateProtectedItemRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultUpdateProtectedItemRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDisableSoftDeleteRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDisableSoftDeleteRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultDisableSoftDeleteRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
  /** Returns ResourceGuards collection belonging to a subscription. */
  getResourcesInSubscription: (
    options?: ResourceGuardsGetResourcesInSubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceGuardResource>;
  /** Returns ResourceGuards collection belonging to a ResourceGroup. */
  getResourcesInResourceGroup: (
    resourceGroupName: string,
    options?: ResourceGuardsGetResourcesInResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceGuardResource>;
  /** Deletes a ResourceGuard resource from the resource group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a ResourceGuard resource belonging to a resource group. For example, updating tags for a resource. */
  patch: (
    resourceGroupName: string,
    resourceGuardsName: string,
    parameters: PatchResourceGuardInput,
    options?: ResourceGuardsPatchOptionalParams,
  ) => Promise<ResourceGuardResource>;
  /** Creates or updates a ResourceGuard resource belonging to a resource group. */
  put: (
    resourceGroupName: string,
    resourceGuardsName: string,
    parameters: ResourceGuardResource,
    options?: ResourceGuardsPutOptionalParams,
  ) => Promise<ResourceGuardResource>;
  /** Returns a ResourceGuard belonging to a resource group. */
  get: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetOptionalParams,
  ) => Promise<ResourceGuardResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDeleteResourceGuardProxyRequestsObjects: (
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOptionalParams,
  ) => PagedAsyncIterableIterator<DppBaseResource>;
  /** Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource. */
  getDefaultDeleteResourceGuardProxyRequestsObject: (
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOptionalParams,
  ) => Promise<DppBaseResource>;
}

function _getResourceGuards(context: DataProtectionContext) {
  return {
    getBackupSecurityPINRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetBackupSecurityPINRequestsObjectsOptionalParams,
    ) =>
      getBackupSecurityPINRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultBackupSecurityPINRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOptionalParams,
    ) =>
      getDefaultBackupSecurityPINRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
    getDeleteProtectedItemRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetDeleteProtectedItemRequestsObjectsOptionalParams,
    ) =>
      getDeleteProtectedItemRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultDeleteProtectedItemRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOptionalParams,
    ) =>
      getDefaultDeleteProtectedItemRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
    getUpdateProtectionPolicyRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOptionalParams,
    ) =>
      getUpdateProtectionPolicyRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultUpdateProtectionPolicyRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOptionalParams,
    ) =>
      getDefaultUpdateProtectionPolicyRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
    getUpdateProtectedItemRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetUpdateProtectedItemRequestsObjectsOptionalParams,
    ) =>
      getUpdateProtectedItemRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultUpdateProtectedItemRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOptionalParams,
    ) =>
      getDefaultUpdateProtectedItemRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
    getDisableSoftDeleteRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetDisableSoftDeleteRequestsObjectsOptionalParams,
    ) =>
      getDisableSoftDeleteRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultDisableSoftDeleteRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOptionalParams,
    ) =>
      getDefaultDisableSoftDeleteRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
    getResourcesInSubscription: (
      options?: ResourceGuardsGetResourcesInSubscriptionOptionalParams,
    ) => getResourcesInSubscription(context, options),
    getResourcesInResourceGroup: (
      resourceGroupName: string,
      options?: ResourceGuardsGetResourcesInResourceGroupOptionalParams,
    ) => getResourcesInResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, resourceGuardsName, options),
    patch: (
      resourceGroupName: string,
      resourceGuardsName: string,
      parameters: PatchResourceGuardInput,
      options?: ResourceGuardsPatchOptionalParams,
    ) =>
      patch(
        context,
        resourceGroupName,
        resourceGuardsName,
        parameters,
        options,
      ),
    put: (
      resourceGroupName: string,
      resourceGuardsName: string,
      parameters: ResourceGuardResource,
      options?: ResourceGuardsPutOptionalParams,
    ) =>
      put(context, resourceGroupName, resourceGuardsName, parameters, options),
    get: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetOptionalParams,
    ) => get(context, resourceGroupName, resourceGuardsName, options),
    getDeleteResourceGuardProxyRequestsObjects: (
      resourceGroupName: string,
      resourceGuardsName: string,
      options?: ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOptionalParams,
    ) =>
      getDeleteResourceGuardProxyRequestsObjects(
        context,
        resourceGroupName,
        resourceGuardsName,
        options,
      ),
    getDefaultDeleteResourceGuardProxyRequestsObject: (
      resourceGroupName: string,
      resourceGuardsName: string,
      requestName: string,
      options?: ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOptionalParams,
    ) =>
      getDefaultDeleteResourceGuardProxyRequestsObject(
        context,
        resourceGroupName,
        resourceGuardsName,
        requestName,
        options,
      ),
  };
}

export function _getResourceGuardsOperations(
  context: DataProtectionContext,
): ResourceGuardsOperations {
  return {
    ..._getResourceGuards(context),
  };
}
