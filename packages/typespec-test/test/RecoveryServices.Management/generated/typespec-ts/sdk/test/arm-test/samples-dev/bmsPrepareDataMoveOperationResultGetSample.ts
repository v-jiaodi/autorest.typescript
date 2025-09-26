// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetches operation status for data move operation on vault
 *
 * @summary fetches operation status for data move operation on vault
 * x-ms-original-file: 2025-02-01/BackupDataMove/PrepareDataMoveOperationResult_Get.json
 */
async function getOperationResultForPrepareDataMove(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.bmsPrepareDataMoveOperationResult.get(
    "sourceRG",
    "source-rsv",
    "00000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getOperationResultForPrepareDataMove();
}

main().catch(console.error);
