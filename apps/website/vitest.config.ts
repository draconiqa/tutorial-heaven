import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from '../../vitest.preset';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      coverage: {
        reportsDirectory: '../../coverage/apps/website',
      },
    },
  }),
);
