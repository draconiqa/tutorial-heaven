// @ts-check
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset.js';
import { defineConfig } from 'cypress';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(fileURLToPath(import.meta.url), {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run-many -t serve,setup -p cms,api,db -c ci',
        production: 'nx run-many -t serve,setup -p cms,api,db -c ci',
      },
      ciWebServerCommand: 'nx run cms:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
