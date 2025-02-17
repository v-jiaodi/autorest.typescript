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
 * This sample demonstrates how to Gets a private link resource for SQL server.
 *
 * @summary Gets a private link resource for SQL server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstancePrivateLinkResourcesGet.json
 */
async function getsAPrivateLinkResourceForSql(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const managedInstanceName = "test-cl";
  const groupName = "plr";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstancePrivateLinkResources.get(
    resourceGroupName,
    managedInstanceName,
    groupName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getsAPrivateLinkResourceForSql();
}

main().catch(console.error);
