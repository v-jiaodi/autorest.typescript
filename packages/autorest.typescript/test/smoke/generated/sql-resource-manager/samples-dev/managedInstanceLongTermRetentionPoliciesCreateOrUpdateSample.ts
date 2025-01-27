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
  ManagedInstanceLongTermRetentionPolicy,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Sets a managed database's long term retention policy.
 *
 * @summary Sets a managed database's long term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceLongTermRetentionPolicyCreateOrUpdate.json
 */
async function createOrUpdateTheLtrPolicyForTheManagedDatabase(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "testResourceGroup";
  const managedInstanceName = "testInstance";
  const databaseName = "testDatabase";
  const policyName = "default";
  const parameters: ManagedInstanceLongTermRetentionPolicy = {
    monthlyRetention: "P1Y",
    weekOfYear: 5,
    weeklyRetention: "P1M",
    yearlyRetention: "P5Y",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedInstanceLongTermRetentionPolicies.beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      policyName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheLtrPolicyForTheManagedDatabase();
}

main().catch(console.error);
