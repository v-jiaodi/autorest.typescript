// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentDBContext } from "../../api/documentDBContext.js";
import { PrivateLinkResource } from "../../models/models.js";
import { privateLinksListByMongoCluster } from "../../api/privateLinks/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PrivateLinksListByMongoClusterOptionalParams } from "../../models/options.js";

export interface PrivateLinksOperations {
  listByMongoCluster: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
}

export function getPrivateLinks(
  context: DocumentDBContext,
  subscriptionId: string,
) {
  return {
    listByMongoCluster: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: PrivateLinksListByMongoClusterOptionalParams,
    ) =>
      privateLinksListByMongoCluster(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
  };
}

export function getPrivateLinksOperations(
  context: DocumentDBContext,
  subscriptionId: string,
): PrivateLinksOperations {
  return {
    ...getPrivateLinks(context, subscriptionId),
  };
}
