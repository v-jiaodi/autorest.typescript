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
  ServiceTagInformationListOptionalParams,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ServiceTagInformationListResult.json
 */
async function getListOfServiceTags(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const location = "westeurope";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.serviceTagInformationOperations.list(
    location,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ServiceTagInformationListResultWithNoAddressPrefixes.json
 */
async function getListOfServiceTagsWithNoAddressPrefixes(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const location = "westeurope";
  const noAddressPrefixes = true;
  const options: ServiceTagInformationListOptionalParams = {
    noAddressPrefixes,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.serviceTagInformationOperations.list(
    location,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ServiceTagInformationListResultWithTagname.json
 */
async function getListOfServiceTagsWithTagName(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const location = "westeurope";
  const tagName = "ApiManagement";
  const options: ServiceTagInformationListOptionalParams = { tagName };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.serviceTagInformationOperations.list(
    location,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getListOfServiceTags();
  await getListOfServiceTagsWithNoAddressPrefixes();
  await getListOfServiceTagsWithTagName();
}

main().catch(console.error);
