// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete ResourceGuardProxy under vault
 *
 * @summary delete ResourceGuardProxy under vault
 * x-ms-original-file: 2025-02-01/ResourceGuardProxyCRUD/DeleteResourceGuardProxy.json
 */
async function deleteResourceGuardProxy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.resourceGuardProxy.delete(
    "SampleResourceGroup",
    "sampleVault",
    "swaggerExample",
  );
}

async function main(): Promise<void> {
  await deleteResourceGuardProxy();
}

main().catch(console.error);
