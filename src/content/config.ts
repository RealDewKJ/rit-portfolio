import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
    client: z.string().optional(),
    link: z.string().optional(),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { portfolio };
