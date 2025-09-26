// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to prepares source vault for Data Move operation
 *
 * @summary prepares source vault for Data Move operation
 * x-ms-original-file: 2025-02-01/BackupDataMove/PrepareDataMove_Post.json
 */
async function prepareDataMove(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.bmsPrepareDataMove("sourceRG", "source-rsv", {
    dataMoveLevel: "Vault",
    targetRegion: "USGov Virginia",
    targetResourceId:
      "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/targetRG/providers/Microsoft.RecoveryServices/vaults/target-rsv",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await prepareDataMove();
}

main().catch(console.error);
