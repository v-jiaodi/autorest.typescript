// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RecoveryServicesBackupClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetches the result of any operation.
 *
 * @summary fetches the result of any operation.
 * x-ms-original-file: 2025-02-01/Common/CancelJobOperationResult.json
 */
async function cancelJobOperationResult(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  await client.jobOperationResults.get(
    "SwaggerTestRg",
    "NetSDKTestRsVault",
    "00000000-0000-0000-0000-000000000000",
    "00000000-0000-0000-0000-000000000000",
  );
}

async function main(): Promise<void> {
  await cancelJobOperationResult();
}

main().catch(console.error);
