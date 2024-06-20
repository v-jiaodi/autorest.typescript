// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureFleetContext } from "../../api/azureFleetContext.js";
import { Operation } from "../../models/models.js";
import { list } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";

export interface OperationsOperations {
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: AzureFleetContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function getOperationsOperations(
  context: AzureFleetContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
