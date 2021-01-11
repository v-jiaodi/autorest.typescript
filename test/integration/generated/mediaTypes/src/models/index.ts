/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** Uri or local path to source data. */
export interface SourcePath {
  /** File source path. */
  source?: string;
}

/** Defines values for ContentType. */
export type ContentType =
  | "application/pdf"
  | "image/jpeg"
  | "image/png"
  | "image/tiff";

/** Optional parameters. */
export interface MediaTypesClientAnalyzeBody$binaryOptionalParams
  extends coreHttp.OperationOptions {}

/** Optional parameters. */
export interface MediaTypesClientAnalyzeBody$jsonOptionalParams
  extends coreHttp.OperationOptions {
  /** Input parameter. */
  input?: SourcePath;
}

/** Contains response data for the analyzeBody operation. */
export type MediaTypesClientAnalyzeBodyResponse = {
  /** The parsed response body. */
  body: string;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string;
  };
};

/** Contains response data for the contentTypeWithEncoding operation. */
export type MediaTypesClientContentTypeWithEncodingResponse = {
  /** The parsed response body. */
  body: string;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string;
  };
};

/** Optional parameters. */
export interface MediaTypesClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
