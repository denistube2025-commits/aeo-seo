// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://denistube2025-commits.github.io',
  base: '/aeo-seo',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});