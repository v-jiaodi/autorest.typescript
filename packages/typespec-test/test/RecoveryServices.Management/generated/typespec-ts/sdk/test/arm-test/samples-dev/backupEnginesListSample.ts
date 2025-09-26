// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.
 *
 * @summary backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.
 * x-ms-original-file: 2025-02-01/Dpm/BackupEngines_List.json
 */
async function listDpmOrAzureBackupServerOrLajollaBackupEngines(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.backupEngines.list("testRG", "testVault")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listDpmOrAzureBackupServerOrLajollaBackupEngines();
}

main().catch(console.error);
