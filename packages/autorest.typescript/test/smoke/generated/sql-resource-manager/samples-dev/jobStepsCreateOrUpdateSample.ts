/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { JobStep, SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a job step. This will implicitly create a new job version.
 *
 * @summary Creates or updates a job step. This will implicitly create a new job version.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobStepMax.json
 */
async function createOrUpdateAJobStepWithAllPropertiesSpecified() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const jobName = "job1";
  const stepName = "step1";
  const parameters: JobStep = {
    action: { type: "TSql", source: "Inline", value: "select 2" },
    credential:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred1",
    executionOptions: {
      initialRetryIntervalSeconds: 11,
      maximumRetryIntervalSeconds: 222,
      retryAttempts: 42,
      retryIntervalBackoffMultiplier: 3,
      timeoutSeconds: 1234,
    },
    output: {
      type: "SqlDatabase",
      credential:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred0",
      databaseName: "database3",
      resourceGroupName: "group3",
      schemaName: "myschema1234",
      serverName: "server3",
      subscriptionId: "3501b905-a848-4b5d-96e8-b253f62d735a",
      tableName: "mytable5678",
    },
    stepId: 1,
    targetGroup:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/targetGroups/targetGroup1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobSteps.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    jobName,
    stepName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a job step. This will implicitly create a new job version.
 *
 * @summary Creates or updates a job step. This will implicitly create a new job version.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobStepMin.json
 */
async function createOrUpdateAJobStepWithMinimalPropertiesSpecified() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const jobName = "job1";
  const stepName = "step1";
  const parameters: JobStep = {
    action: { value: "select 1" },
    credential:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred0",
    targetGroup:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/targetGroups/targetGroup0",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobSteps.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    jobName,
    stepName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateAJobStepWithAllPropertiesSpecified();
  await createOrUpdateAJobStepWithMinimalPropertiesSpecified();
}

main().catch(console.error);
