// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetches resource storage config.
 *
 * @summary fetches resource storage config.
 * x-ms-original-file: 2025-02-01/Common/BackupStorageConfig_Get.json
 */
async function getVaultStorageConfiguration(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceStorageConfigsNonCRR.get(
    "PythonSDKBackupTestRg",
    "PySDKBackupTestRsVault",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getVaultStorageConfiguration();
}

main().catch(console.error);
