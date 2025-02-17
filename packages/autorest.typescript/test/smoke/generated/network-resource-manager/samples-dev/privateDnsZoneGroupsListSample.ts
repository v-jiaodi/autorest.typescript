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
 * This sample demonstrates how to Gets all private dns zone groups in a private endpoint.
 *
 * @summary Gets all private dns zone groups in a private endpoint.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/PrivateEndpointDnsZoneGroupList.json
 */
async function listPrivateEndpointsInResourceGroup(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const privateEndpointName = "testPe";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateDnsZoneGroups.list(
    privateEndpointName,
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listPrivateEndpointsInResourceGroup();
}

main().catch(console.error);
