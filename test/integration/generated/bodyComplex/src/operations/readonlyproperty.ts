/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { BodyComplexClient } from "../bodyComplexClient";

/**
 * Class representing a Readonlyproperty.
 */
export class Readonlyproperty {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Readonlyproperty class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   * @param options The options parameters.
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param callback The callback.
   */
  getValid(callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param options The options parameters.
   * @param callback The callback.
   */
  getValid(
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  getValid(
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest(
      { options },
      getValidOperationSpec,
      callback
    );
  }

  /**
   * Put complex types that have readonly properties
   * @param complexBody
   * @param options The options parameters.
   */
  putValid(
    complexBody: Models.ReadonlyObj,
    options?: coreHttp.RequestOptionsBase
  ): Promise<any>;
  /**
   * @param complexBody
   * @param callback The callback.
   */
  putValid(
    complexBody: Models.ReadonlyObj,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  /**
   * @param complexBody
   * @param options The options parameters.
   * @param callback The callback.
   */
  putValid(
    complexBody: Models.ReadonlyObj,
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  putValid(
    complexBody: Models.ReadonlyObj,
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec,
      callback
    );
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/readonlyproperty/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReadonlyObj
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/readonlyproperty/valid",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: "complexBody",
    mapper: Mappers.ReadonlyObj
  },
  serializer
};
