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
 * This sample demonstrates how to Gets information about a disk encryption set.
 *
 * @summary Gets information about a disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/GetInformationAboutADiskEncryptionSetWithAutoKeyRotationError.json
 */
async function getInformationAboutADiskEncryptionSetWhenAutoKeyRotationFailed() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskEncryptionSets.get(
    resourceGroupName,
    diskEncryptionSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets information about a disk encryption set.
 *
 * @summary Gets information about a disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-04-01/examples/GetInformationAboutADiskEncryptionSet.json
 */
async function getInformationAboutADiskEncryptionSet() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskEncryptionSets.get(
    resourceGroupName,
    diskEncryptionSetName,
  );
  console.log(result);
}

async function main() {
  getInformationAboutADiskEncryptionSetWhenAutoKeyRotationFailed();
  getInformationAboutADiskEncryptionSet();
}

main().catch(console.error);
