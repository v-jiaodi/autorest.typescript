// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { list } from "../../api/operations/index.js";
import { OperationsListOptionalParams } from "../../api/options.js";
import { Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

function _getOperations(context: NetworkAnalyticsContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function getOperationsOperations(
  context: NetworkAnalyticsContext,
): OperationsOperations {
  return {
    ..._getOperations(context),
  };
}
