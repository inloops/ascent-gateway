import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    // Add more fields as needed based on project requirements
  }),
});


const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date().optional(),
		description: z.string().optional(),
		author: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { pages, posts };

