/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
 *
 * @summary Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/ListResourceHealthMetadataBySite.json
 */
async function listResourceHealthMetadataForASite() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "4adb32ad-8327-4cbb-b775-b84b4465bb38";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-Web-NorthCentralUS";
  const name = "newsiteinnewASE-NCUS";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceHealthMetadataOperations.listBySiteSlot(
    resourceGroupName,
    name,
    slot,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listResourceHealthMetadataForASite();
}

main().catch(console.error);
