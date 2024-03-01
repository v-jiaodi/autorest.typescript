// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a resource. */
export interface Resource {
  name: string;
  description?: string;
  map?: Record<string, InnerModel>;
  array?: Array<InnerModel>;
  intValue?: number;
  floatValue?: number;
  innerModel?: InnerModel;
  intArray?: number[];
}

/** It is the model used by Resource model */
export interface InnerModel {
  name?: string;
  description?: string;
}

/** Details about a resource for patch operation. */
export interface ResourcePatch {
  description?: string;
  map?: Record<string, InnerModel>;
  array?: Array<InnerModel>;
  intValue?: number;
  floatValue?: number;
  innerModel?: InnerModel;
  intArray?: number[];
}

/** undefined */
export interface InnerModelResourceMergeAndPatch {
  name?: string | null;
  description?: string | null;
}

/** */
export interface ResourcePatchResourceMergeAndPatch {
  description?: string | null;
  map?: Record<string, InnerModelResourceMergeAndPatch> | null;
  array?: Array<InnerModelResourceMergeAndPatch> | null;
  intValue?: number | null;
  floatValue?: number | null;
  innerModel?: InnerModelResourceMergeAndPatch | null;
  intArray?: number[] | null;
}
