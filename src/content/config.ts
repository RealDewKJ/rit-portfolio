// Content collections config
import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string().url(),
    tags: z.array(z.string()),
    client: z.string().optional(),
    link: z.string().url().optional(),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { portfolio };
