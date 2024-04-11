// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../api/fooContext.js";
import { BA } from "../../../models/models.js";
import { op1 } from "../../../api/b/c/index.js";
import { BCOp1OptionalParams } from "../../../models/options.js";

export interface BCOperations {
  op1: (body: BA, options?: BCOp1OptionalParams) => Promise<void>;
}

export function getBC(context: FooContext) {
  return {
    op1: (body: BA, options?: BCOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBCOperations(context: FooContext): BCOperations {
  return {
    ...getBC(context),
  };
}
