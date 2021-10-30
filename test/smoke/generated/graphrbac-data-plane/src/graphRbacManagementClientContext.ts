/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { GraphRbacManagementClientOptionalParams } from "./models";

export class GraphRbacManagementClientContext extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  tenantID: string;

  /**
   * Initializes a new instance of the GraphRbacManagementClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param tenantID The tenant ID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    tenantID: string,
    options?: GraphRbacManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (tenantID === undefined) {
      throw new Error("'tenantID' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GraphRbacManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-@msinternal/graphrbac-data-plane/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://graph.windows.net"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.tenantID = tenantID;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://graph.windows.net";
    this.apiVersion = options.apiVersion || "1.6";
  }
}
