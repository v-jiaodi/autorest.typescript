// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createVersioningAddedClient from "@msinternal/versioning-added";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation V2
 *
 * @summary call operation V2
 */
async function v2Sample() {
  const endpointParam = "{Your endpointParam}";
  const version = "v1";
  const client = createVersioningAddedClient(endpointParam, version);
  const result = await client
    .path("/v2")
    .post({
      body: {
        prop: "{Your prop}",
        enumProp: "enumMember",
        unionProp: "{Your unionProp}",
      },
    });
  console.log(result);
}

async function main() {
  v2Sample();
}

main().catch(console.error);
