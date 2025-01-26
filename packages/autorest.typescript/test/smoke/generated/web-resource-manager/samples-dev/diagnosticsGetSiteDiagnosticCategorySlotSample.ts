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
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Get Diagnostics Category
 *
 * @summary Description for Get Diagnostics Category
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetSiteDiagnosticCategory.json
 */
async function getAppDiagnosticCategory(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDiagnosticCategorySlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    slot,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Get Diagnostics Category
 *
 * @summary Description for Get Diagnostics Category
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetSiteDiagnosticCategorySlot.json
 */
async function getAppSlotDiagnosticCategory(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDiagnosticCategorySlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    slot,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAppDiagnosticCategory();
  await getAppSlotDiagnosticCategory();
}

main().catch(console.error);
