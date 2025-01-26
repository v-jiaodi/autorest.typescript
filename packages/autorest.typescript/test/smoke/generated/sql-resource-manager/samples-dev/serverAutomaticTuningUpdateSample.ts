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
  ServerAutomaticTuning,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update automatic tuning options on server.
 *
 * @summary Update automatic tuning options on server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAutomaticTuningUpdateMax.json
 */
async function updatesServerAutomaticTuningSettingsWithAllProperties(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "default-sql-onebox";
  const serverName = "testsvr11";
  const parameters: ServerAutomaticTuning = {
    desiredState: "Auto",
    options: {
      createIndex: { desiredState: "Off" },
      dropIndex: { desiredState: "On" },
      forceLastGoodPlan: { desiredState: "Default" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update automatic tuning options on server.
 *
 * @summary Update automatic tuning options on server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAutomaticTuningUpdateMin.json
 */
async function updatesServerAutomaticTuningSettingsWithMinimalProperties(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "default-sql-onebox";
  const serverName = "testsvr11";
  const parameters: ServerAutomaticTuning = { desiredState: "Auto" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updatesServerAutomaticTuningSettingsWithAllProperties();
  await updatesServerAutomaticTuningSettingsWithMinimalProperties();
}

main().catch(console.error);
