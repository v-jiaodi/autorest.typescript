// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAnalyzeResult
 *
 * @summary call operation GetAnalyzeResult
 */
async function getAnalyzeResultSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const modelId = "{Your modelId}";
  const resultId = "{Your resultId}";
  const result = await client
    .path(
      "/documentModels/{modelId}/analyzeResults/{resultId}",
      modelId,
      resultId,
    )
    .get();
  console.log(result);
}

async function main() {
  getAnalyzeResultSample();
}

main().catch(console.error);
