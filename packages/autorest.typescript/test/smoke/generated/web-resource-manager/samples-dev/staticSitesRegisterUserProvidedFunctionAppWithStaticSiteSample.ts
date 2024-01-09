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
  StaticSiteUserProvidedFunctionAppARMResource,
  StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteOptionalParams,
  WebSiteManagementClient,
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Description for Register a user provided function app with a static site
 *
 * @summary Description for Register a user provided function app with a static site
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/RegisterUserProvidedFunctionAppWithStaticSite.json
 */
async function registerAUserProvidedFunctionAppWithAStaticSite() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const functionAppName = "testFunctionApp";
  const isForced = true;
  const staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource =
    {
      functionAppRegion: "West US 2",
      functionAppResourceId:
        "/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp",
    };
  const options: StaticSitesRegisterUserProvidedFunctionAppWithStaticSiteOptionalParams =
    { isForced };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result =
    await client.staticSites.beginRegisterUserProvidedFunctionAppWithStaticSiteAndWait(
      resourceGroupName,
      name,
      functionAppName,
      staticSiteUserProvidedFunctionEnvelope,
      options,
    );
  console.log(result);
}

async function main() {
  registerAUserProvidedFunctionAppWithAStaticSite();
}

main().catch(console.error);
