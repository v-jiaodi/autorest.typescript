// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the
 * operation, call GetProtectedItemOperationResult API.
 *
 * @summary triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the
 * operation, call GetProtectedItemOperationResult API.
 * x-ms-original-file: 2025-02-01/Common/TriggerBackup_Post.json
 */
async function triggerBackup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.backups.trigger(
    "linuxRsVaultRG",
    "linuxRsVault",
    "Azure",
    "IaasVMContainer;iaasvmcontainerv2;testrg;v1win2012r",
    "VM;iaasvmcontainerv2;testrg;v1win2012r",
    { properties: { objectType: "IaasVMBackupRequest" } },
  );
}

async function main(): Promise<void> {
  await triggerBackup();
}

main().catch(console.error);
