// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete Private Endpoint requests. This call is made by Backup Admin.
 *
 * @summary delete Private Endpoint requests. This call is made by Backup Admin.
 * x-ms-original-file: 2025-02-01/PrivateEndpointConnection/DeletePrivateEndpointConnection.json
 */
async function deletePrivateEndpointConnection(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.privateEndpointConnection.delete(
    "gaallaRG",
    "gaallavaultbvtd2msi",
    "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b",
  );
}

async function main(): Promise<void> {
  await deletePrivateEndpointConnection();
}

main().catch(console.error);
