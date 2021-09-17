/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface Product {
  integer?: number;
  string?: string;
  /** The OS of agent machine */
  custom?: OS;
}

/** Known values of {@link Enum0} that the service accepts. */
export enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Known values of {@link OS} that the service accepts. */
export enum KnownOS {
  Windows = "Windows",
  Linux = "Linux"
}

/**
 * Defines values for OS. \
 * {@link KnownOS} can be used interchangeably with OS,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Windows** \
 * **Linux**
 */
export type OS = string;

/** Optional parameters. */
export interface ArrayConstraintsClientPostValueOptionalParams
  extends coreClient.OperationOptions {
  /** Specify page number or range of page numbers to process, e.g: 1, 5, 7, 9-10 */
  pageRange?: string[];
}

/** Contains response data for the postValue operation. */
export type ArrayConstraintsClientPostValueResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface ArrayConstraintsClientApiV1ValueGetOptionalParams
  extends coreClient.OperationOptions {
  /** Specify page number or range of page numbers to process, e.g: 1, 5, 7, 9-10 */
  pageRange?: string[];
}

/** Contains response data for the apiV1ValueGet operation. */
export type ArrayConstraintsClientApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface ArrayConstraintsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
