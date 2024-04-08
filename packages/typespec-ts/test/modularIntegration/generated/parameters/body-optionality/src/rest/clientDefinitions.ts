// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  RequiredExplicitParameters,
  RequiredImplicitParameters,
  SetModelParameters,
  OmitParameters,
} from "./parameters.js";
import {
  RequiredExplicit204Response,
  RequiredImplicit204Response,
  SetModel204Response,
  Omit204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface RequiredExplicit {
  post(
    options: RequiredExplicitParameters,
  ): StreamableMethod<RequiredExplicit204Response>;
}

export interface RequiredImplicit {
  post(
    options?: RequiredImplicitParameters,
  ): StreamableMethod<RequiredImplicit204Response>;
}

export interface SetModel {
  post(options?: SetModelParameters): StreamableMethod<SetModel204Response>;
}

export interface Omit {
  post(options?: OmitParameters): StreamableMethod<Omit204Response>;
}

export interface Routes {
  /** Resource for '/parameters/body-optionality/required-explicit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/required-explicit"): RequiredExplicit;
  /** Resource for '/parameters/body-optionality/required-implicit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/required-implicit"): RequiredImplicit;
  /** Resource for '/parameters/body-optionality/optional-explicit/set' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/optional-explicit/set"): SetModel;
  /** Resource for '/parameters/body-optionality/optional-explicit/omit' has methods for the following verbs: post */
  (path: "/parameters/body-optionality/optional-explicit/omit"): Omit;
}

export type BodyOptionalityContext = Client & {
  path: Routes;
};
