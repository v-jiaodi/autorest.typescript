// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists the backup copies for the backed up item.
 *
 * @summary lists the backup copies for the backed up item.
 * x-ms-original-file: 2025-02-01/AzureIaasVm/RecoveryPoints_List.json
 */
async function getProtectedAzureVmRecoveryPoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.recoveryPoints.list(
    "rshhtestmdvmrg",
    "rshvault",
    "Azure",
    "IaasVMContainer;iaasvmcontainerv2;rshhtestmdvmrg;rshmdvmsmall",
    "VM;iaasvmcontainerv2;rshhtestmdvmrg;rshmdvmsmall",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getProtectedAzureVmRecoveryPoints();
}

main().catch(console.error);
