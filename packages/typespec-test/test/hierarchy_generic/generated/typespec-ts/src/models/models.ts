// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface A {
  prop1: string;
}

export function aSerializer(item: A): Record<string, unknown> {
  return {
    prop1: item["prop1"],
  };
}

export interface BEA {
  prop3: string;
}

export function bEASerializer(item: BEA): Record<string, unknown> {
  return {
    prop3: item["prop3"],
  };
}
