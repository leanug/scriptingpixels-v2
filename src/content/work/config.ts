import { defineCollection, z } from "astro:content";

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    slug: z.string(),
    featured: z.boolean().optional(),
    description: z.string(),
    outbound: z.string().url().optional(), // optional external link
    tags: z.array(z.string()).optional(),  // ← add this line
  }),
});

export const collections = work
