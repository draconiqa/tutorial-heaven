import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { IGraphQLProject } from 'graphql-config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const codegen: CodegenConfig = {
  generates: {
    [path.join(__dirname, 'src/lib/graphql/generated/')]: {
      documents: [path.join(__dirname, 'src/**/*.{ts,tsx}')],
      preset: 'client',
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
