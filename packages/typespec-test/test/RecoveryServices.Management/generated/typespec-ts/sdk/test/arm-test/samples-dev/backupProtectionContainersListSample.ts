// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists the containers registered to Recovery Services Vault.
 *
 * @summary lists the containers registered to Recovery Services Vault.
 * x-ms-original-file: 2025-02-01/AzureStorage/ProtectionContainers_List.json
 */
async function listBackupProtectionContainers(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.backupProtectionContainers.list(
    "testVault",
    "testRg",
    { filter: "backupManagementType eq 'AzureWorkload'" },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listBackupProtectionContainers();
}

main().catch(console.error);
