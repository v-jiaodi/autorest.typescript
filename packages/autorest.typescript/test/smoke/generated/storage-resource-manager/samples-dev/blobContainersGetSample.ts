/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets properties of a specified container.
 *
 * @summary Gets properties of a specified container.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/BlobContainersGetWithAllowProtectedAppendWritesAll.json
 */
async function getBlobContainersGetWithAllowProtectedAppendWritesAll() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "res9871";
  const accountName = "sto6217";
  const containerName = "container1634";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.get(
    resourceGroupName,
    accountName,
    containerName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets properties of a specified container.
 *
 * @summary Gets properties of a specified container.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/BlobContainersGet.json
 */
async function getContainers() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "res9871";
  const accountName = "sto6217";
  const containerName = "container1634";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.get(
    resourceGroupName,
    accountName,
    containerName,
  );
  console.log(result);
}

async function main() {
  await getBlobContainersGetWithAllowProtectedAppendWritesAll();
  await getContainers();
}

main().catch(console.error);
