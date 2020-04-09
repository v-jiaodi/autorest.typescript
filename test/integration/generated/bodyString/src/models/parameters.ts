/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    serializedName: "Content-Type",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const stringBody: coreHttp.OperationParameter = {
  parameterPath: ["options", "stringBody"],
  mapper: {
    serializedName: "stringBody",
    type: {
      name: "String"
    }
  }
};

export const stringBody1: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue: "",
    serializedName: "stringBody",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const stringBody2: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue:
      "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€",
    serializedName: "stringBody",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const stringBody3: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue:
      "    Now is the time for all good men to come to the aid of their country    ",
    serializedName: "stringBody",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const stringBody4: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    serializedName: "stringBody",
    required: true,
    type: {
      name: "Base64Url"
    }
  }
};

export const stringBody5: coreHttp.OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    serializedName: "stringBody",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"]
    }
  }
};

export const enumStringBody: coreHttp.OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: {
    serializedName: "enumStringBody",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"]
    }
  }
};

export const enumStringBody1: coreHttp.OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: Mappers.RefColorConstant
};
