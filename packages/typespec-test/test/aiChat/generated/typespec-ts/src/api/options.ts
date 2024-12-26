// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface GetStreamedCompletionOptionalParams extends OperationOptions {
  contentType?: string;
}
