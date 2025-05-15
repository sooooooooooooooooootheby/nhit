import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        news: defineCollection({
            source: "news/*.md",
            type: "page",
            schema: z.object({
                title: z.string(),
                date: z.date(),
                cover: z.string(),
                description: z.string(),
            }),
        }),
    },
});
