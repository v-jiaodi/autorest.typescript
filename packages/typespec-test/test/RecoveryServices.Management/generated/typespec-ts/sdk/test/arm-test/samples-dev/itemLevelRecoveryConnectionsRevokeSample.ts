// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer
 * displaying all recoverable files and folders. This is an asynchronous operation.
 *
 * @summary revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer
 * displaying all recoverable files and folders. This is an asynchronous operation.
 * x-ms-original-file: 2025-02-01/AzureIaasVm/Revoke_Ilr.json
 */
async function revokeInstantItemLevelRecoveryForAzureVm(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.itemLevelRecoveryConnections.revoke(
    "PythonSDKBackupTestRg",
    "PySDKBackupTestRsVault",
    "Azure",
    "iaasvmcontainer;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1",
    "vm;iaasvmcontainerv2;pysdktestrg;pysdktestv2vm1",
    "1",
  );
}

async function main(): Promise<void> {
  await revokeInstantItemLevelRecoveryForAzureVm();
}

main().catch(console.error);
