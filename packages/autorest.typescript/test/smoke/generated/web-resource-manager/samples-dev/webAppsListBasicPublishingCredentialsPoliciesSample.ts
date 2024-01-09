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
 * This sample demonstrates how to Description for Returns whether Scm basic auth is allowed and whether Ftp is allowed for a given site.
 *
 * @summary Description for Returns whether Scm basic auth is allowed and whether Ftp is allowed for a given site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/ListPublishingCredentialsPolicies.json
 */
async function listPublishingCredentialsPolicies() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "3fb8d758-2e2c-42e9-a528-a8acdfe87237";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "testrg123";
  const name = "testsite";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webApps.listBasicPublishingCredentialsPolicies(
    resourceGroupName,
    name,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listPublishingCredentialsPolicies();
}

main().catch(console.error);
