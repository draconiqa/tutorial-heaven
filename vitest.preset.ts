/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['mocks/**', '**/types.ts'],
      provider: 'v8',
    },
  },
});
