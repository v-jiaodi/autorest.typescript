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
 * This sample demonstrates how to Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 *
 * @summary Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/UpdateManagedInstanceDnsServers.json
 */
async function synchronizesTheDnsServerSettingsUsedByTheManagedInstancesInsideTheGivenVirtualCluster(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const virtualClusterName = "sqlcrudtest-4645";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.virtualClusters.updateDnsServers(
    resourceGroupName,
    virtualClusterName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await synchronizesTheDnsServerSettingsUsedByTheManagedInstancesInsideTheGivenVirtualCluster();
}

main().catch(console.error);
