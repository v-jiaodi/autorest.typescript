/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ConnectivityConfigurationsDeleteOptionalParams,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a network manager connectivity configuration, specified by the resource group, network manager name, and connectivity configuration name
 *
 * @summary Deletes a network manager connectivity configuration, specified by the resource group, network manager name, and connectivity configuration name
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerConnectivityConfigurationDelete.json
 */
async function connectivityConfigurationsDelete(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestConnectivityConfig";
  const force = false;
  const options: ConnectivityConfigurationsDeleteOptionalParams = { force };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.connectivityConfigurations.beginDeleteAndWait(
    resourceGroupName,
    networkManagerName,
    configurationName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await connectivityConfigurationsDelete();
}

main().catch(console.error);
