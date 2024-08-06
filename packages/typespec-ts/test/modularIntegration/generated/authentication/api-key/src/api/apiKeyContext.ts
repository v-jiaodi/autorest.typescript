// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface ApiKeyContext extends Client {}

/** Optional parameters for the client. */
export interface ApiKeyClientOptionalParams extends ClientOptions {}

/** Illustrates clients generated with ApiKey authentication. */
export function createApiKey(
  credential: KeyCredential,
  options: ApiKeyClientOptionalParams = {},
): ApiKeyContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `http://localhost:3000`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "x-ms-api-key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
