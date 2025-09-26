// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupContext } from "../../api/recoveryServicesBackupContext.js";
import { get } from "../../api/resourceGuardProxies/operations.js";
import { ResourceGuardProxiesGetOptionalParams } from "../../api/resourceGuardProxies/options.js";
import { ResourceGuardProxyBaseResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ResourceGuardProxies operations. */
export interface ResourceGuardProxiesOperations {
  /** List the ResourceGuardProxies under vault */
  get: (
    vaultName: string,
    resourceGroupName: string,
    options?: ResourceGuardProxiesGetOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceGuardProxyBaseResource>;
}

function _getResourceGuardProxies(context: RecoveryServicesBackupContext) {
  return {
    get: (
      vaultName: string,
      resourceGroupName: string,
      options?: ResourceGuardProxiesGetOptionalParams,
    ) => get(context, vaultName, resourceGroupName, options),
  };
}

export function _getResourceGuardProxiesOperations(
  context: RecoveryServicesBackupContext,
): ResourceGuardProxiesOperations {
  return {
    ..._getResourceGuardProxies(context),
  };
}
