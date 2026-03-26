import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://www.scriptingpixels.com',

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
    ],
  },

  integrations: [partytown(), sitemap()],
});