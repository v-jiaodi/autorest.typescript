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
  CsmPublishingCredentialsPoliciesEntity,
  WebSiteManagementClient,
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Updates whether user publishing credentials are allowed on the site or not.
 *
 * @summary Description for Updates whether user publishing credentials are allowed on the site or not.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/UpdatePublishingCredentialsPolicySlot.json
 */
async function updateScmAllowed(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg";
  const name = "testSite";
  const slot = "stage";
  const csmPublishingAccessPoliciesEntity: CsmPublishingCredentialsPoliciesEntity =
    { allow: true };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.updateScmAllowedSlot(
    resourceGroupName,
    name,
    slot,
    csmPublishingAccessPoliciesEntity,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateScmAllowed();
}

main().catch(console.error);
