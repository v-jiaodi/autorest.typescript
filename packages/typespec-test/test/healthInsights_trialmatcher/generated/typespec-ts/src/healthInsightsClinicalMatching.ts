// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { HealthInsightsClinicalMatchingClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `HealthInsightsClinicalMatchingClient`
 * @param endpoint - Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {},
): HealthInsightsClinicalMatchingClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/healthinsights`;
  options.apiVersion = options.apiVersion ?? "2023-03-01-preview";
  const userAgentInfo = `azsdk-js-health-insights-clinicalmatching-rest/1.0.0-beta.1`;
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
    credentials: {
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as HealthInsightsClinicalMatchingClient;

  return client;
}
