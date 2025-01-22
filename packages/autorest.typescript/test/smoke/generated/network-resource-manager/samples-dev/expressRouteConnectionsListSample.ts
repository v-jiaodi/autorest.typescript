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
 * This sample demonstrates how to Lists ExpressRouteConnections.
 *
 * @summary Lists ExpressRouteConnections.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRouteConnectionList.json
 */
async function expressRouteConnectionList() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "resourceGroupName";
  const expressRouteGatewayName = "expressRouteGatewayName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteConnections.list(
    resourceGroupName,
    expressRouteGatewayName,
  );
  console.log(result);
}

async function main() {
  await expressRouteConnectionList();
}

main().catch(console.error);
