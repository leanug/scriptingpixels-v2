import { defineCollection } from "astro:content";

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    category: z.object({
      label: z.string(),
      slug: z.string(),
    }).optional(),
    title: z.string(),
    date: z.coerce.date(), // ISO format recommended
    authorId: z.string().optional(), // This links the blog to the authors collection
    image: z.string().optional(), // thumbnail or cover image
    description: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
    pinned: z.boolean().optional(),
  }),
});

export const collections = { blog };