/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecoverableManagedDatabase,
  RecoverableManagedDatabasesListByInstanceOptionalParams,
  RecoverableManagedDatabasesGetOptionalParams,
  RecoverableManagedDatabasesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecoverableManagedDatabases. */
export interface RecoverableManagedDatabases {
  /**
   * Gets a list of recoverable managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RecoverableManagedDatabasesListByInstanceOptionalParams,
  ): PagedAsyncIterableIterator<RecoverableManagedDatabase>;
  /**
   * Gets a recoverable managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param recoverableDatabaseName
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    recoverableDatabaseName: string,
    options?: RecoverableManagedDatabasesGetOptionalParams,
  ): Promise<RecoverableManagedDatabasesGetResponse>;
}
