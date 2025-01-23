// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMetricDefinitions
 *
 * @summary call operation ListMetricDefinitions
 */
async function loadTestRunListMetricDefinitionsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/metric-definitions", testRunId)
    .get({ queryParameters: { metricNamespace: "{Your metricNamespace}" } });
  console.log(result);
}

async function main() {
  await loadTestRunListMetricDefinitionsSample();
}

main().catch(console.error);
