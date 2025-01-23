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
 * This sample demonstrates how to Gets all the Azure Web Categories in a subscription.
 *
 * @summary Gets all the Azure Web Categories in a subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/AzureWebCategoriesListBySubscription.json
 */
async function listAllAzureWebCategoriesForAGivenSubscription() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "4de8428a-4a92-4cea-90ff-b47128b8cab8";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webCategories.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAllAzureWebCategoriesForAGivenSubscription();
}

main().catch(console.error);
