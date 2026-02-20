import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import path from 'path';

export default defineConfig({
  integrations: [tailwind()],
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