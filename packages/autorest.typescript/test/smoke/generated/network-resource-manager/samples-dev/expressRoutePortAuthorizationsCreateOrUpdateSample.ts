/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ExpressRoutePortAuthorization,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an authorization in the specified express route port.
 *
 * @summary Creates or updates an authorization in the specified express route port.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRoutePortAuthorizationCreate.json
 */
async function createExpressRoutePortAuthorization(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const expressRoutePortName = "expressRoutePortName";
  const authorizationName = "authorizatinName";
  const authorizationParameters: ExpressRoutePortAuthorization = {};
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.expressRoutePortAuthorizations.beginCreateOrUpdateAndWait(
      resourceGroupName,
      expressRoutePortName,
      authorizationName,
      authorizationParameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createExpressRoutePortAuthorization();
}

main().catch(console.error);
