// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { ResourcesClient, ResourcesClientOptions } from "./resourcesClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ProxyResource,
  NestedProxyResource,
  NestedProxyResourceProperties,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  NestedProxyResourceUpdate,
  NestedProxyResourceUpdateProperties,
  TrackedResource,
  TopLevelTrackedResource,
  TopLevelTrackedResourceProperties,
  TopLevelTrackedResourceUpdate,
  TopLevelTrackedResourceUpdateProperties,
  Versions,
  ProvisioningState,
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
export {
  NestedProxyResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/index.js";
