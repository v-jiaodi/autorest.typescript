// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getEvaluationsOperations,
  EvaluationsOperations,
} from "./classic/evaluations/index.js";
import {
  _getTelemetryOperations,
  TelemetryOperations,
} from "./classic/telemetry/index.js";
import {
  _getConnectionsOperations,
  ConnectionsOperations,
} from "./classic/connections/index.js";
import {
  _getAgentsOperations,
  AgentsOperations,
} from "./classic/agents/index.js";
import {
  createAIProject,
  AIProjectContext,
  AIProjectClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AIProjectClientOptionalParams } from "./api/aIProjectContext.js";

export class AIProjectClient {
  private _client: AIProjectContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: AIProjectClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAIProject(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this.evaluations = _getEvaluationsOperations(this._client);
    this.telemetry = _getTelemetryOperations(this._client);
    this.connections = _getConnectionsOperations(this._client);
    this.agents = _getAgentsOperations(this._client);
  }

  /** The operation groups for evaluations */
  public readonly evaluations: EvaluationsOperations;
  /** The operation groups for telemetry */
  public readonly telemetry: TelemetryOperations;
  /** The operation groups for connections */
  public readonly connections: ConnectionsOperations;
  /** The operation groups for agents */
  public readonly agents: AgentsOperations;
}
