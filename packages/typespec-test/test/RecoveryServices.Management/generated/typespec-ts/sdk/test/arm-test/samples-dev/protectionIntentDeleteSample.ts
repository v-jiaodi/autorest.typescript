// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to used to remove intent from an item
 *
 * @summary used to remove intent from an item
 * x-ms-original-file: 2025-02-01/AzureWorkload/BackupProtectionIntent_Delete.json
 */
async function deleteProtectionIntentFromItem(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.protectionIntent.delete(
    "myRG",
    "myVault",
    "Azure",
    "249D9B07-D2EF-4202-AA64-65F35418564E",
  );
}

async function main(): Promise<void> {
  await deleteProtectionIntentFromItem();
}

main().catch(console.error);
