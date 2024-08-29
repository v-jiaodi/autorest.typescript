// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "../helpers/nameUtils.js";
import {
  hasPagingOperations,
  hasPollingOperations
} from "../helpers/operationHelpers.js";
import {
  isAzureMonorepoPackage,
  isAzurePackage,
  isAzureStandalonePackage
} from "../helpers/packageUtil.js";

import { PackageCommonInfoConfig } from "./packageJson/packageCommon.js";
import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";
import { buildAzureMonorepoPackage } from "./packageJson/buildAzureMonorepoPackage.js";
import { buildAzureStandalonePackage } from "./packageJson/buildAzureStandalonePackage.js";
import { buildFlavorlessPackage } from "./packageJson/buildFlavorlessPackage.js";
import { getRelativePartFromSrcPath } from "../helpers/pathUtils.js";

interface PackageFileOptions {
  exports?: Record<string, any>;
  dependencies?: Record<string, string>;
}

export function buildPackageFile(
  model: RLCModel,
  { exports, dependencies }: PackageFileOptions = {}
) {
  const config: PackageCommonInfoConfig = {
    description: getDescription(model),
    moduleKind: model.options?.moduleKind ?? "esm",
    name: getPackageName(model),
    version: getPackageVersion(model),
    withSamples: model.options?.generateSample === true,
    withTests: model.options?.generateTest === true,
    nameWithoutScope: model.options?.packageDetails?.nameWithoutScope,
    exports,
    azureArm: model.options?.azureArm,
    isModularLibrary: model.options?.isModularLibrary ?? false
  };

  let packageInfo: Record<string, any> = buildFlavorlessPackage(config);

  const extendedConfig = {
    ...config,
    clientFilePaths: [getClientFilePath(model)],
    hasLro: hasPollingOperations(model),
    hasPaging: hasPagingOperations(model),
    monorepoPackageDirectory: model.options?.azureOutputDirectory,
    specSource: model.options?.sourceFrom ?? "TypeSpec",
    dependencies
  };

  if (isAzureMonorepoPackage(model)) {
    packageInfo = buildAzureMonorepoPackage(extendedConfig);
  }

  if (isAzureStandalonePackage(model)) {
    packageInfo = buildAzureStandalonePackage(extendedConfig);
  }

  const project = new Project();
  const filePath = "package.json";

  if (!packageInfo) {
    return;
  }

  const packageFile = project.createSourceFile(
    filePath,
    JSON.stringify(packageInfo, null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: packageFile.getFullText()
  };
}

/**
 * Automatically updates the package.json with correct paging and LRO dependencies for Azure SDK.
 */
export function updatePackageFile(model: RLCModel, existingFilePath: string) {
  const project = new Project();
  const hasPaging = hasPagingOperations(model),
    hasLro = hasPollingOperations(model);
  if (!isAzurePackage(model) || (!hasPaging && !hasLro)) {
    return;
  }
  let packageFile;
  try {
    packageFile = project.addSourceFileAtPath(existingFilePath);
  } catch (e) {
    // If the file doesn't exist, we don't need to update it.
    return;
  }
  const packageInfo = JSON.parse(packageFile.getFullText());

  // no need to update paging dependency for modular libraries
  if (hasPaging && model.options?.isModularLibrary !== true) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-paging": "^1.5.0"
    };
  }

  if (hasLro) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-lro": "^3.0.0",
      "@azure/abort-controller": "^2.1.2"
    };
  }

  packageFile.replaceWithText(JSON.stringify(packageInfo, null, 2));
  return {
    path: "package.json",
    content: packageFile.getFullText()
  };
}

function getPackageVersion(model: RLCModel): string {
  return model.options?.packageDetails?.version ?? "1.0.0-beta.1";
}

function getDescription(model: RLCModel): string {
  const description = model.options?.packageDetails?.description;
  if (!description) {
    return `A generated SDK for ${model.libraryName}.`;
  }
  return description;
}

function getPackageName(model: RLCModel): string {
  return model.options?.packageDetails?.name ?? model.libraryName;
}

function getClientFilePath(model: RLCModel) {
  const { srcPath } = model;
  const sdkReletivePart = getRelativePartFromSrcPath(srcPath);
  const clientFilename = normalizeName(model.libraryName, NameType.File);
  return sdkReletivePart
    ? `src/${sdkReletivePart}/${clientFilename}.ts`
    : `src/${clientFilename}.ts`;
}
