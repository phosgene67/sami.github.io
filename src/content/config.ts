import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    customSvg: z.string().optional(),
    liveUrl: z.string().url(),
    githubUrl: z.string().url().optional(),
    techStack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { projects, blog }
