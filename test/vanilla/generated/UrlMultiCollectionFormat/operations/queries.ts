/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { AutoRestUrlMutliCollectionFormatTestService } from "../autoRestUrlMutliCollectionFormatTestService";

const WebResource = msRest.WebResource;

/** Class representing a Queries. */
export class Queries {
  private readonly client: AutoRestUrlMutliCollectionFormatTestService;
  /**
   * Create a Queries.
   * @param {AutoRestUrlMutliCollectionFormatTestService} client Reference to the service client.
   */
  constructor(client: AutoRestUrlMutliCollectionFormatTestService) {
    this.client = client;
  }

  /**
   * Get a null array of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async arrayStringMultiNullWithHttpOperationResponse(options?: Models.QueriesArrayStringMultiNullOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    let arrayQuery = (options && options.arrayQuery !== undefined) ? options.arrayQuery : undefined;
    // Validate
    try {
      if (Array.isArray(arrayQuery)) {
        for (let i = 0; i < arrayQuery.length; i++) {
          if (arrayQuery[i] !== null && arrayQuery[i] !== undefined && typeof arrayQuery[i].valueOf() !== 'string') {
            throw new Error('arrayQuery[i] must be of type string.');
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            arrayQuery
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          schemeHostAndPort: this.client.baseUri,
          path: "/queries/array/multi/string/null",
          queryParameters: [
            {
              parameterName: "arrayQuery",
              collectionFormat: msRest.QueryCollectionFormat.Multi
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get an empty array [] of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiEmptyOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async arrayStringMultiEmptyWithHttpOperationResponse(options?: Models.QueriesArrayStringMultiEmptyOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    let arrayQuery = (options && options.arrayQuery !== undefined) ? options.arrayQuery : undefined;
    // Validate
    try {
      if (Array.isArray(arrayQuery)) {
        for (let i = 0; i < arrayQuery.length; i++) {
          if (arrayQuery[i] !== null && arrayQuery[i] !== undefined && typeof arrayQuery[i].valueOf() !== 'string') {
            throw new Error('arrayQuery[i] must be of type string.');
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            arrayQuery
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          schemeHostAndPort: this.client.baseUri,
          path: "/queries/array/multi/string/empty",
          queryParameters: [
            {
              parameterName: "arrayQuery",
              collectionFormat: msRest.QueryCollectionFormat.Multi
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null,
   * ''] using the mult-array format
   *
   * @param {QueriesArrayStringMultiValidOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async arrayStringMultiValidWithHttpOperationResponse(options?: Models.QueriesArrayStringMultiValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    let arrayQuery = (options && options.arrayQuery !== undefined) ? options.arrayQuery : undefined;
    // Validate
    try {
      if (Array.isArray(arrayQuery)) {
        for (let i = 0; i < arrayQuery.length; i++) {
          if (arrayQuery[i] !== null && arrayQuery[i] !== undefined && typeof arrayQuery[i].valueOf() !== 'string') {
            throw new Error('arrayQuery[i] must be of type string.');
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            arrayQuery
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          schemeHostAndPort: this.client.baseUri,
          path: "/queries/array/multi/string/valid",
          queryParameters: [
            {
              parameterName: "arrayQuery",
              collectionFormat: msRest.QueryCollectionFormat.Multi
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get a null array of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  arrayStringMultiNull(): Promise<void>;
  arrayStringMultiNull(options: Models.QueriesArrayStringMultiNullOptionalParams): Promise<void>;
  arrayStringMultiNull(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiNull(options: Models.QueriesArrayStringMultiNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiNull(options?: Models.QueriesArrayStringMultiNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.arrayStringMultiNullWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.arrayStringMultiNullWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get an empty array [] of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiEmptyOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  arrayStringMultiEmpty(): Promise<void>;
  arrayStringMultiEmpty(options: Models.QueriesArrayStringMultiEmptyOptionalParams): Promise<void>;
  arrayStringMultiEmpty(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiEmpty(options: Models.QueriesArrayStringMultiEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiEmpty(options?: Models.QueriesArrayStringMultiEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.arrayStringMultiEmptyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.arrayStringMultiEmptyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null,
   * ''] using the mult-array format
   *
   * @param {QueriesArrayStringMultiValidOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  arrayStringMultiValid(): Promise<void>;
  arrayStringMultiValid(options: Models.QueriesArrayStringMultiValidOptionalParams): Promise<void>;
  arrayStringMultiValid(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiValid(options: Models.QueriesArrayStringMultiValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiValid(options?: Models.QueriesArrayStringMultiValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.arrayStringMultiValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.arrayStringMultiValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
