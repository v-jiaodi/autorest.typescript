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
  StaticSitesWorkflowPreviewRequest,
  WebSiteManagementClient,
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Generates a preview workflow file for the static site
 *
 * @summary Description for Generates a preview workflow file for the static site
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/GenerateStaticSiteWorkflowPreview.json
 */
async function generatesAPreviewWorkflowFileForTheStaticSite(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const location = "West US 2";
  const staticSitesWorkflowPreviewRequest: StaticSitesWorkflowPreviewRequest = {
    branch: "master",
    buildProperties: {
      apiLocation: "api",
      appArtifactLocation: "build",
      appLocation: "app",
    },
    repositoryUrl: "https://github.com/username/RepoName",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.previewWorkflow(
    location,
    staticSitesWorkflowPreviewRequest,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await generatesAPreviewWorkflowFileForTheStaticSite();
}

main().catch(console.error);
