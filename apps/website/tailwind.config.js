import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const projectDir = fileURLToPath(dirname(import.meta.url));

/** @type {import('tailwindcss').Config} */
export const content = [
  join(
    projectDir,
    '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ),
  ...createGlobPatternsForDependencies(projectDir),
];
export const theme = {
  extend: {},
};
export const plugins = [];
