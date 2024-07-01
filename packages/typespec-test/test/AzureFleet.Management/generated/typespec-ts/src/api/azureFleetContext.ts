// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureFleetContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface AzureFleetClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { AzureFleetContext } from "../rest/index.js";

export function createAzureFleet(
  credential: TokenCredential,
  options: AzureFleetClientOptions = {},
): AzureFleetContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
