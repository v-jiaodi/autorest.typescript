/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of available maintenance windows.
 *
 * @summary Gets a list of available maintenance windows.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/GetMaintenanceWindowOptions.json
 */
async function getsAListOfAvailableMaintenanceWindowsForASelectedDatabase(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const maintenanceWindowOptionsName = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.maintenanceWindowOptionsOperations.get(
    resourceGroupName,
    serverName,
    databaseName,
    maintenanceWindowOptionsName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getsAListOfAvailableMaintenanceWindowsForASelectedDatabase();
}

main().catch(console.error);
