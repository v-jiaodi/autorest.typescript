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
 * This sample demonstrates how to Description for Get Hosting Environment Detector Response
 *
 * @summary Description for Get Hosting Environment Detector Response
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetHostingEnvironmentDetectorResponse.json
 */
async function getAppServiceEnvironmentDetectorResponses(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const name = "SampleAppServiceEnvironment";
  const detectorName = "runtimeavailability";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getHostingEnvironmentDetectorResponse(
    resourceGroupName,
    name,
    detectorName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAppServiceEnvironmentDetectorResponses();
}

main().catch(console.error);
