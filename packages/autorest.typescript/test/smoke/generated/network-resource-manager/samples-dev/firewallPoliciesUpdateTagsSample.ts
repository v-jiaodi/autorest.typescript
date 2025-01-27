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
  TagsObject,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates tags of a Azure Firewall Policy resource.
 *
 * @summary Updates tags of a Azure Firewall Policy resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/FirewallPolicyPatch.json
 */
async function updateFirewallPolicyTags(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const firewallPolicyName = "firewallPolicy";
  const parameters: TagsObject = { tags: { key1: "value1", key2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicies.updateTags(
    resourceGroupName,
    firewallPolicyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateFirewallPolicyTags();
}

main().catch(console.error);
