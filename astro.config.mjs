import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import rehypeWrapPres from './src/lib/rehype-wrap-pres.js'

import partytown from '@astrojs/partytown';

export default defineConfig({
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' }
        }
      ],
      rehypeWrapPres
    ],
  },

  integrations: [partytown()],
});