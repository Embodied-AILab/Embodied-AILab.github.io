import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  author: z.string().default('EAI-Lab'),
  cover: z.string().optional(),
  readingMinutes: z.number().int().positive().optional()
});

const papers = defineCollection({
  loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    paperTitle: z.string().optional(),
    paperUrl: z.string().url().optional(),
    projectUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    venue: z.string().optional(),
    year: z.number().int().optional()
  })
});

const agents = defineCollection({
  loader: glob({ base: './src/content/agents', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    tools: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: baseSchema.extend({
    status: z.enum(['规划中', '进行中', '已完成']).default('进行中'),
    repoUrl: z.string().url().optional()
  })
});

export const collections = { papers, agents, projects };
