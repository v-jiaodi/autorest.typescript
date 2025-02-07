/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes the specified ipGroups.
 *
 * @summary Deletes the specified ipGroups.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/IpGroupsDelete.json
 */
async function deleteIPGroups(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const ipGroupsName = "ipGroups1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ipGroups.beginDeleteAndWait(
    resourceGroupName,
    ipGroupsName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteIPGroups();
}

main().catch(console.error);
