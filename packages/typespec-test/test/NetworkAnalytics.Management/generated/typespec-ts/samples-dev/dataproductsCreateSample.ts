// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

/**
 * This sample demonstrates how to create data product resource.
 *
 * @summary create data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Create_MaximumSet_Gen.json
 */
async function dataProductsCreateMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.create(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      properties: {
        provisioningState: "Succeeded",
        publisher: "Microsoft",
        product: "MCC",
        majorVersion: "1.0.0",
        owners: ["abc@micros.com"],
        redundancy: "Disabled",
        purviewAccount: "testpurview",
        purviewCollection: "134567890",
        privateLinksEnabled: "Disabled",
        publicNetworkAccess: "Enabled",
        customerManagedKeyEncryptionEnabled: "Enabled",
        customerEncryptionKey: {
          keyVaultUri: "https://KeyVault.vault.azure.net",
          keyName: "keyName",
          keyVersion: "keyVersion",
        },
        networkacls: {
          virtualNetworkRule: [
            {
              id: "/subscriptions/subscriptionId/resourcegroups/resourceGroupName/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName",
              action: "Allow",
              state: "",
            },
          ],
          ipRules: [{ value: "1.1.1.1", action: "Allow" }],
          allowedQueryIpRangeList: ["1.1.1.1"],
          defaultAction: "Allow",
        },
        managedResourceGroupConfiguration: {
          name: "managedResourceGroupName",
          location: "eastus",
        },
        currentMinorVersion: "1.0.1",
        consumptionEndpoints: {},
      },
      identity: {
        type: "UserAssigned",
        userAssignedIdentities: {
          "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
            {},
        },
      },
      tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
      location: "eastus",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create data product resource.
 *
 * @summary create data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Create_MinimumSet_Gen.json
 */
async function dataProductsCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproducts.create(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      location: "eastus",
      properties: {
        publisher: "Microsoft",
        product: "MCC",
        majorVersion: "1.0.0",
      },
      tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
    },
  );
  console.log(result);
}

async function main() {
  dataProductsCreateMaximumSetGen();
  dataProductsCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
