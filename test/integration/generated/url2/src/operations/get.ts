/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "../models/parameters";
import { UrlClient } from "../urlClient";
import { GetUrlResponse } from "../models";

/** Class representing a Get. */
export class Get {
  private readonly client: UrlClient;

  /**
   * Initialize a new instance of the class Get class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClient) {
    this.client = client;
  }

  /**
   * @param testUrl
   * @param options The options parameters.
   */
  url(
    testUrl: string,
    options?: coreHttp.OperationOptions
  ): Promise<GetUrlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      testUrl,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      urlOperationSpec
    ) as Promise<GetUrlResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const urlOperationSpec: coreHttp.OperationSpec = {
  path: "/Url",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.testUrl],
  serializer
};
