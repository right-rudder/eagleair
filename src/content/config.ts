import { defineCollection, z } from "astro:content";

const crewCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    image: z.string(),
    order: z.number().optional(),
    certifications: z.array(z.string()).optional(),
    experience: z.string().optional(),
  }),
});

const programsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    cost: z.string().optional(),
    image: z.string(),
    alt: z.string().optional(),
    reverse: z.boolean().optional(),
    top: z.boolean().optional(),
    order: z.number().optional(),
    highlights: z.array(z.string()).optional(),
    requirements: z.array(z.string()).optional(),
  }),
});

const aircraftCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    model: z.string(),
    description: z.string(),
    tailNumber: z.string().optional(),
    image: z.string(),
    specifications: z
      .object({
        engines: z.string().optional(),
        seats: z.number().optional(),
        range: z.string().optional(),
        cruiseSpeed: z.string().optional(),
      })
      .optional(),
    features: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  crew: crewCollection,
  programs: programsCollection,
  aircraft: aircraftCollection,
  blog: blogCollection,
};
