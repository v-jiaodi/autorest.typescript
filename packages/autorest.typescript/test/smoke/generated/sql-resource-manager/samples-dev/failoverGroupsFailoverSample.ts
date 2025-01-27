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
 * This sample demonstrates how to Fails over from the current primary server to this server.
 *
 * @summary Fails over from the current primary server to this server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/FailoverGroupFailover.json
 */
async function plannedFailoverOfAFailoverGroup(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const serverName = "failover-group-secondary-server";
  const failoverGroupName = "failover-group-test-3";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.failoverGroups.beginFailoverAndWait(
    resourceGroupName,
    serverName,
    failoverGroupName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await plannedFailoverOfAFailoverGroup();
}

main().catch(console.error);
