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
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a restore point.
 *
 * @summary Deletes a restore point.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseRestorePointsDelete.json
 */
async function deletesARestorePoint() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testserver";
  const databaseName = "testDatabase";
  const restorePointName = "131546477590000000";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.restorePoints.delete(
    resourceGroupName,
    serverName,
    databaseName,
    restorePointName,
  );
  console.log(result);
}

async function main() {
  await deletesARestorePoint();
}

main().catch(console.error);
