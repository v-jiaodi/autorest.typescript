// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetches resource vault config.
 *
 * @summary fetches resource vault config.
 * x-ms-original-file: 2025-02-01/Common/BackupResourceVaultConfigs_Get.json
 */
async function getVaultSecurityConfig(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceVaultConfigs.get(
    "SwaggerTestRg",
    "SwaggerTest",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getVaultSecurityConfig();
}

main().catch(console.error);
