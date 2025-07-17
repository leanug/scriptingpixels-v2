import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(), // ISO format recommended
    author: z.string().optional(),
    img: z.string().optional(), // thumbnail or cover image
    description: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};

