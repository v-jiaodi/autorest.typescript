// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates vault security config.
 *
 * @summary updates vault security config.
 * x-ms-original-file: 2025-02-01/Common/BackupResourceVaultConfigs_Put.json
 */
async function updateVaultSecurityConfig(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceVaultConfigs.put(
    "SwaggerTestRg",
    "SwaggerTest",
    {
      properties: {
        enhancedSecurityState: "Enabled",
        softDeleteFeatureState: "Enabled",
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateVaultSecurityConfig();
}

main().catch(console.error);
