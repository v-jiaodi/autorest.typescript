// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
}

export interface Widget {
  /** The UUID of this widget. This is generated automatically by the service. */
  id: string;
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export interface WidgetError {
  /** The HTTP error code. */
  code: number;
  /** A human-readable message describing the error. */
  message: string;
}

export interface ListWidgetsPagesResults {
  /** The current page of results. */
  results: Widget[];
  /** The URL to get the next set of results. */
  "odata.nextLink"?: string;
}

export interface CreateWidget {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight: number;
  /** The color of the widget. */
  color: "red" | "blue";
}

export interface UpdateWidget {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

export interface AnalyzeResult {
  summary: string;
}

export interface NonReferencedModel {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  prop1: number;
  /** The color of the widget. */
  prop2: string;
}

/** The Contoso Widget Manager service version. */
export type Versions = "1.0.0";
