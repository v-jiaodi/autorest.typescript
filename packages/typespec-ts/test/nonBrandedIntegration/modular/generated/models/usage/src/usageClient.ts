// Licensed under the MIT license.

import { Pipeline } from "@typespec/ts-http-runtime";
import {
  InputRecord,
  OutputRecord,
  InputOutputRecord,
} from "./models/models.js";
import {
  InputOptionalParams,
  OutputOptionalParams,
  InputAndOutputOptionalParams,
} from "./models/options.js";
import {
  input,
  output,
  inputAndOutput,
  createUsage,
  UsageContext,
  UsageClientOptionalParams,
} from "./api/index.js";

export { UsageClientOptionalParams } from "./api/usageContext.js";

export class UsageClient {
  private _client: UsageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates usage of Record in different places(Operation parameters, return type or both). */
  constructor(options: UsageClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createUsage({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  input(
    inputParameter: InputRecord,
    options: InputOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return input(this._client, inputParameter, options);
  }

  output(
    options: OutputOptionalParams = { requestOptions: {} },
  ): Promise<OutputRecord> {
    return output(this._client, options);
  }

  inputAndOutput(
    body: InputOutputRecord,
    options: InputAndOutputOptionalParams = { requestOptions: {} },
  ): Promise<InputOutputRecord> {
    return inputAndOutput(this._client, body, options);
  }
}
