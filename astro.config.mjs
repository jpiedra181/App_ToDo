// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jpiedra181.github.io',
  base: 'App_ToDo',

  vite: {
    plugins: [tailwindcss()],
  },
});