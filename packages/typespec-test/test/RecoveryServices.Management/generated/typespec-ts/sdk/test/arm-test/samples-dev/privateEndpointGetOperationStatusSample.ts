// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the operation status for a private endpoint connection.
 *
 * @summary gets the operation status for a private endpoint connection.
 * x-ms-original-file: 2025-02-01/PrivateEndpointConnection/GetPrivateEndpointConnectionOperationStatus.json
 */
async function getOperationStatus(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.privateEndpoint.getOperationStatus(
    "gaallaRG",
    "gaallavaultbvtd2msi",
    "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b",
    "0f48183b-0a44-4dca-aec1-bba5daab888a",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getOperationStatus();
}

main().catch(console.error);
