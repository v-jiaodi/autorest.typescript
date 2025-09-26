// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns ResourceGuardProxy under vault and with the name referenced in request
 *
 * @summary returns ResourceGuardProxy under vault and with the name referenced in request
 * x-ms-original-file: 2025-02-01/ResourceGuardProxyCRUD/GetResourceGuardProxy.json
 */
async function getResourceGuardProxy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.resourceGuardProxy.get(
    "SampleResourceGroup",
    "sampleVault",
    "swaggerExample",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getResourceGuardProxy();
}

main().catch(console.error);
