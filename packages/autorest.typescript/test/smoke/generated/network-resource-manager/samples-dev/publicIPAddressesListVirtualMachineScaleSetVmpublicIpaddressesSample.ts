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
 * This sample demonstrates how to Gets information about all public IP addresses in a virtual machine IP configuration in a virtual machine scale set.
 *
 * @summary Gets information about all public IP addresses in a virtual machine IP configuration in a virtual machine scale set.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VmssVmPublicIpList.json
 */
async function listVmssvmPublicIP() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "vmss-tester";
  const virtualMachineScaleSetName = "vmss1";
  const virtualmachineIndex = "1";
  const networkInterfaceName = "nic1";
  const ipConfigurationName = "ip1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.publicIPAddresses.listVirtualMachineScaleSetVMPublicIPAddresses(
    resourceGroupName,
    virtualMachineScaleSetName,
    virtualmachineIndex,
    networkInterfaceName,
    ipConfigurationName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listVmssvmPublicIP();
}

main().catch(console.error);
