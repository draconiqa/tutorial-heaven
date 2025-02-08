import type { AddPluginConfig } from '@graphql-codegen/add';
import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { IGraphQLProject } from 'graphql-config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToSelf = path.relative(process.cwd(), __filename);

const add: AddPluginConfig = {
  content: [
    `/* DO NOT EDIT MANUALLY - this file is generated from ${pathToSelf} using GraphQL Code Generator */`,
    '/* eslint-disable */',
  ],
};

const codegen: CodegenConfig = {
  generates: {
    [path.join(__dirname, 'src/app/graphql/generated.ts')]: {
      documents: [path.join(__dirname, 'src/app/graphql/**/*.graphql')],
      plugins: [
        { add },
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        strictScalars: true,
        enumsAsTypes: true,
        useTypeImports: true,
      } satisfies TypeScriptPluginConfig,
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

const config: IGraphQLProject = {
  schema: path.join(__dirname, '../api/src/app/schema.ts'),
  extensions: { codegen },
};

export default config;
