// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrReplaceParameters,
  DeleteParameters,
  ExportParameters,
} from "./parameters.js";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  Delete202Response,
  DeleteDefaultResponse,
  Export202Response,
  ExportDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrReplace {
  /** Creates or replaces a User */
  put(
    options: CreateOrReplaceParameters,
  ): StreamableMethod<
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
  >;
  /** Deletes a User */
  delete(
    options?: DeleteParameters,
  ): StreamableMethod<Delete202Response | DeleteDefaultResponse>;
}

export interface Export {
  /** Exports a User */
  post(
    options: ExportParameters,
  ): StreamableMethod<Export202Response | ExportDefaultResponse>;
}

export interface Routes {
  /** Resource for '/users/\{name\}' has methods for the following verbs: put, delete */
  (path: "/users/{name}", name: string): CreateOrReplace;
  /** Resource for '/users/\{name\}:export' has methods for the following verbs: post */
  (path: "/users/{name}:export", name: string): Export;
}

export type StandardContext = Client & {
  path: Routes;
};
