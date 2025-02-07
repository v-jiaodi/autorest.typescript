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
 * This sample demonstrates how to Description for Get details of a top-level domain.
 *
 * @summary Description for Get details of a top-level domain.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.DomainRegistration/stable/2021-02-01/examples/GetTopLevelDomain.json
 */
async function getTopLevelDomain(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const name = "com";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.topLevelDomains.get(name);
  console.log(result);
}

async function main(): Promise<void> {
  await getTopLevelDomain();
}

main().catch(console.error);
