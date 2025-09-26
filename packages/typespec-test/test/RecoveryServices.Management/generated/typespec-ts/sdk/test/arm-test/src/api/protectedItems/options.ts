// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ProtectedItemsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ProtectedItemsCreateOrUpdateOptionalParams
  extends OperationOptions {
  xMsAuthorizationAuxiliary?: string;
}

/** Optional parameters. */
export interface ProtectedItemsGetOptionalParams extends OperationOptions {
  filter?: string;
}
