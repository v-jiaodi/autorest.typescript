// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ActionResponseOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Basic200Response extends HttpResponse {
  status: "200";
  body: ActionResponseOutput;
}
