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

/** */
export interface ResourcePatchResourceMergeAndPatch {
  description?: string | null;
  map?: Record<string, InnerModel> | null;
  array?: Array<InnerModel> | null;
  intValue?: number | null;
  floatValue?: number | null;
  innerModel?: InnerModel | null;
  intArray?: number[] | null;
}

/** */
export interface ResourcePatchResourceMergeAndPatch {
  description?: string | null;
  map?: Record<string, InnerModel> | null;
  array?: Array<InnerModel> | null;
  intValue?: number | null;
  floatValue?: number | null;
  innerModel?: InnerModel | null;
  intArray?: number[] | null;
}
