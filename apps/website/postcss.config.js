import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

export const plugins = {
  tailwindcss: {
    config: join(fileURLToPath(dirname(import.meta.url)), 'tailwind.config.js'),
  },
  autoprefixer: {},
};
