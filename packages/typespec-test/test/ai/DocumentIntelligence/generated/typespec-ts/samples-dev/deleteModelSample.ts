// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteModel
 *
 * @summary call operation DeleteModel
 */
async function deleteModelSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const modelId = "{Your modelId}";
  const result = await client
    .path("/documentModels/{modelId}", modelId)
    .delete({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  deleteModelSample();
}

main().catch(console.error);
