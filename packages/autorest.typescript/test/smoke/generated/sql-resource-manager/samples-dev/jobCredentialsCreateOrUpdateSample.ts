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
  JobCredential,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a job credential.
 *
 * @summary Creates or updates a job credential.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobCredential.json
 */
async function createOrUpdateACredential(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const credentialName = "cred1";
  const parameters: JobCredential = {
    password: "<password>",
    username: "myuser",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobCredentials.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    credentialName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateACredential();
}

main().catch(console.error);
