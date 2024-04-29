import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { normalizeName, NameType } from "@azure-tools/rlc-common";

export function buildRootIndex(
  client: Client,
  codeModel: ModularCodeModel,
  rootIndexFile: SourceFile
) {
  const { project } = codeModel;
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}${normalizeName(
      clientName,
      NameType.File
    )}.ts`
  );

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/${normalizeName(
        clientName,
        NameType.File
      )}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile, subfolder);
  exportModules(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    "models",
    subfolder,
    true
  );
  exportModules(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    "classic",
    subfolder,
    true
  );
}

function exportClassicalClient(
  client: Client,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName, `${clientName}Options`],
    moduleSpecifier: `./${
      subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${normalizeName(clientName, NameType.File)}.js`
  });
}

function exportModules(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  moduleName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      subfolder !== "" ? subfolder + "/" : ""
    }${moduleName}/index.ts`
  );
  if (!modelsFile) {
    return;
  }

  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...modelsFile.getExportedDeclarations().keys()].map(
    (modelName) => {
      if (exported.indexOf(modelName) > -1) {
        return `${modelName} as ${clientName}${modelName}`;
      }
      return modelName;
    }
  );
  const moduleSpecifier = `./${
    isTopLevel && subfolder !== "" ? subfolder + "/" : ""
  }${moduleName}/index.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

export function buildSubClientIndexFile(
  client: Client,
  codeModel: ModularCodeModel
) {
  const subfolder = client.subfolder ?? "";
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subClientIndexFile = codeModel.project.createSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClientName(client)}Client`;
  const clientFilePath = `${srcPath}/${
    subfolder !== "" ? subfolder + "/" : ""
  }${normalizeName(clientName, NameType.File)}.ts`;
  const clientFile = codeModel.project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "models",
    subfolder
  );
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "classic",
    subfolder
  );
}
