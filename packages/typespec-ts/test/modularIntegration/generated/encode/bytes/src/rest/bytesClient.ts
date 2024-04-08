// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { BytesContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `BytesContext`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {},
): BytesContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-encode-bytes-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(endpointUrl, options) as BytesContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
