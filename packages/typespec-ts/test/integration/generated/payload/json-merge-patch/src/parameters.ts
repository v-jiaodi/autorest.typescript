// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Resource, ResourcePatchResourceMergeAndPatch } from "./models";

export interface CreateResourceBodyParam {
  body: Resource;
}

export type CreateResourceParameters = CreateResourceBodyParam &
  RequestParameters;

export interface UpdateResourceBodyParam {
  body: ResourcePatchResourceMergeAndPatch;
}

export interface UpdateResourceMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type UpdateResourceParameters = UpdateResourceMediaTypesParam &
  UpdateResourceBodyParam &
  RequestParameters;

export interface UpdateOptionalResourceBodyParam {
  body?: ResourcePatchResourceMergeAndPatch;
}

export interface UpdateOptionalResourceMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type UpdateOptionalResourceParameters =
  UpdateOptionalResourceMediaTypesParam &
    UpdateOptionalResourceBodyParam &
    RequestParameters;
