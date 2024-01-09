/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
 *
 * @summary Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/LedgerDigestUploadsDisable.json
 */
async function disablesUploadingLedgerDigestsForADatabase() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ledgertestrg";
  const serverName = "ledgertestserver";
  const databaseName = "testdb";
  const ledgerDigestUploads = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.ledgerDigestUploadsOperations.beginDisableAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    ledgerDigestUploads,
  );
  console.log(result);
}

async function main() {
  disablesUploadingLedgerDigestsForADatabase();
}

main().catch(console.error);
