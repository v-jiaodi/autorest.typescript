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
 * This sample demonstrates how to Lists all Network Virtual Appliance Sites in a Network Virtual Appliance resource.
 *
 * @summary Lists all Network Virtual Appliance Sites in a Network Virtual Appliance resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkVirtualApplianceSiteList.json
 */
async function listAllNetworkVirtualApplianceSitesForAGivenNetworkVirtualAppliance(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualApplianceSites.list(
    resourceGroupName,
    networkVirtualApplianceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllNetworkVirtualApplianceSitesForAGivenNetworkVirtualAppliance();
}

main().catch(console.error);
