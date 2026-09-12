import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      language: z.enum(['en', 'zh-CN']).default('en'),
      topics: z.array(z.string()).min(1),
      audience: z.string(),
      draft: z.boolean().default(true),
      featured: z.boolean().default(false),
      series: z.string().optional(),
      order: z.number().int().positive().optional(),
      translationOf: z.string().optional(),
    })
    .refine((data) => Boolean(data.series) === Boolean(data.order), {
      message: 'A series and its order must be supplied together.',
    }),
});

export const collections = { writing };
