import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().default('Untitled project'),
    date: z.coerce.date().optional(),
    img: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    outbound: z.string().url().optional(),
    published: z.boolean().optional(),
    featured: z.boolean().optional(),
    more: z.boolean().optional(),
    order: z.number().optional(),
    cols: z.number().optional(),
    galleryImg1: z.string().optional(),
    galleryImg2: z.string().optional(),
    gallerySideImg1: z.string().optional(),
    gallerySideImg2: z.string().optional(),
  }).passthrough(),
});

export const collections = { blog, work };
