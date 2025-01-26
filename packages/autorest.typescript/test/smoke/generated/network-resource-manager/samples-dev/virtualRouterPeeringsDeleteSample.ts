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
 * This sample demonstrates how to Deletes the specified peering from a Virtual Router.
 *
 * @summary Deletes the specified peering from a Virtual Router.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualRouterPeeringDelete.json
 */
async function deleteVirtualRouterPeering(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualRouterName = "virtualRouter";
  const peeringName = "peering1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualRouterPeerings.beginDeleteAndWait(
    resourceGroupName,
    virtualRouterName,
    peeringName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteVirtualRouterPeering();
}

main().catch(console.error);
