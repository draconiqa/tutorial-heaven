import type { AddPluginConfig } from '@graphql-codegen/add';
import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptResolversPluginConfig } from '@graphql-codegen/typescript-resolvers';
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
    [path.join(__dirname, 'src/app/types/generated.ts')]: {
      plugins: [{ add }, 'typescript', 'typescript-resolvers'],
      config: {
        strictScalars: true,
        enumsAsTypes: true,
        useTypeImports: true,
        useIndexSignature: true,
        contextType: './context#Context',
        mappers: {
          User: '@th/db#UserModel',
        },
      } satisfies TypeScriptPluginConfig & TypeScriptResolversPluginConfig,
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

const config: IGraphQLProject = {
  schema: path.join(__dirname, 'src/app/schema.ts'),
  extensions: { codegen },
};

export default config;
