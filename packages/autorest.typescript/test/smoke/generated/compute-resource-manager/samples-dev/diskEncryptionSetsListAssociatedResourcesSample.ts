/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all resources that are encrypted with this disk encryption set.
 *
 * @summary Lists all resources that are encrypted with this disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/ListDiskEncryptionSetAssociatedResources.json
 */
async function listAllResourcesThatAreEncryptedWithThisDiskEncryptionSet() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.diskEncryptionSets.listAssociatedResources(
    resourceGroupName,
    diskEncryptionSetName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAllResourcesThatAreEncryptedWithThisDiskEncryptionSet();
}

main().catch(console.error);
