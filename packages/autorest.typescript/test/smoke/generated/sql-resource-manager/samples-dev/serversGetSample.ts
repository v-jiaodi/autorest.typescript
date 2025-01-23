/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a server.
 *
 * @summary Gets a server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/ServerGet.json
 */
async function getServer() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.servers.get(resourceGroupName, serverName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a server.
 *
 * @summary Gets a server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/ServerGetWithExpandEqualsAdministrators.json
 */
async function getServerWithExpandAdministrators() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.servers.get(resourceGroupName, serverName);
  console.log(result);
}

async function main() {
  await getServer();
  await getServerWithExpandAdministrators();
}

main().catch(console.error);
