// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";

export interface AnomalyDetectorContext extends Client {}

/** Optional parameters for the client. */
export interface AnomalyDetectorClientOptionalParams extends ClientOptions {
  /** Api Version */
  apiVersion?: string;
}

/**
 * The Anomaly Detector API detects anomalies automatically in time series data.
 * It supports two kinds of mode, one is for stateless using, another is for
 * stateful using. In stateless mode, there are three functionalities. Entire
 * Detect is for detecting the whole series with model trained by the time series,
 * Last Detect is detecting last point with model trained by points before.
 * ChangePoint Detect is for detecting trend changes in time series. In stateful
 * mode, user can store time series, the stored time series will be used for
 * detection anomalies. Under this mode, user can still use the above three
 * functionalities by only giving a time range without preparing time series in
 * client side. Besides the above three functionalities, stateful model also
 * provide group based detection and labeling service. By leveraging labeling
 * service user can provide labels for each detection result, these labels will be
 * used for retuning or regenerating detection models. Inconsistency detection is
 * a kind of group based detection, this detection will find inconsistency ones in
 * a set of time series. By using anomaly detector service, business customers can
 * discover incidents and establish a logic flow for root cause analysis.
 */
export function createAnomalyDetector(
  endpointParam: string,
  credential: KeyCredential,
  options: AnomalyDetectorClientOptionalParams = {},
): AnomalyDetectorContext {
  const apiVersion = options.apiVersion ?? "v1.1";
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/anomalydetector/${apiVersion}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
