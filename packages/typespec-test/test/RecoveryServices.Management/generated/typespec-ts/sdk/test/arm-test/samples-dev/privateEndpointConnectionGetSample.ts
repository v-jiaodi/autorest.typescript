// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get Private Endpoint Connection. This call is made by Backup Admin.
 *
 * @summary get Private Endpoint Connection. This call is made by Backup Admin.
 * x-ms-original-file: 2025-02-01/PrivateEndpointConnection/GetPrivateEndpointConnection.json
 */
async function getPrivateEndpointConnection(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.privateEndpointConnection.get(
    "gaallaRG",
    "gaallavaultbvtd2msi",
    "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getPrivateEndpointConnection();
}

main().catch(console.error);
