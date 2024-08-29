// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureExampleClient } from "@msinternal/example";

/**
 * This sample demonstrates how to execute basicAction
 *
 * @summary execute basicAction
 * x-ms-original-file: 2022-12-01-preview/basic.json
 */
async function basicAction() {
  const client = new AzureExampleClient();
  const result = await client.basicAction({
    stringProperty: "text",
    modelProperty: {
      int32Property: 1,
      float32Property: 1.5,
      enumProperty: "EnumValue1",
    },
    arrayProperty: ["item"],
    recordProperty: { record: "value" },
  });
  console.log(result);
}

async function main() {
  basicAction();
}

main().catch(console.error);
