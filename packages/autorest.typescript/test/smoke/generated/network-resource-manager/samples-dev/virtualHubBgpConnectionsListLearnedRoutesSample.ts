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
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves a list of routes the virtual hub bgp connection has learned.
 *
 * @summary Retrieves a list of routes the virtual hub bgp connection has learned.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualRouterPeerListLearnedRoute.json
 */
async function virtualRouterPeerListLearnedRoutes() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const hubName = "virtualRouter1";
  const connectionName = "peer1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.virtualHubBgpConnections.beginListLearnedRoutesAndWait(
      resourceGroupName,
      hubName,
      connectionName,
    );
  console.log(result);
}

async function main() {
  virtualRouterPeerListLearnedRoutes();
}

main().catch(console.error);
