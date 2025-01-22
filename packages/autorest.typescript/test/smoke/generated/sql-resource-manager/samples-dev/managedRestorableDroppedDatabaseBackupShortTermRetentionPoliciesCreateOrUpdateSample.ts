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
  ManagedBackupShortTermRetentionPolicy,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sets a database's short term retention policy.
 *
 * @summary Sets a database's short term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/UpdateManagedShortTermRetentionPolicyRestorableDropped.json
 */
async function updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "resourceGroup";
  const managedInstanceName = "testsvr";
  const restorableDroppedDatabaseId = "testdb,131403269876900000";
  const policyName = "default";
  const parameters: ManagedBackupShortTermRetentionPolicy = {
    retentionDays: 14,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies.beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      restorableDroppedDatabaseId,
      policyName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await updateTheShortTermRetentionPolicyForTheRestorableDroppedDatabase();
}

main().catch(console.error);
