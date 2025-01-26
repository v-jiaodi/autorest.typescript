// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetTestRun
 *
 * @summary call operation GetTestRun
 */
async function loadTestRunGetTestRunSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client.path("/test-runs/{testRunId}", testRunId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunGetTestRunSample();
}

main().catch(console.error);
