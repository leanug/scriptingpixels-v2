import { defineConfig, fontProviders } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

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
        },
      ],
    ],
  },
  integrations: [partytown(), icon(), sitemap()],
  fonts: [{
    provider: fontProviders.google(),
    name: 'Inter',
    cssVariable: '--font-inter',
    weights: ['400', '500', '600', '700']
  }]
});