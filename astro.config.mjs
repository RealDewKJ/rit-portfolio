import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: vercel(),
  output: 'server',
  site: 'https://your-domain.vercel.app',
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});