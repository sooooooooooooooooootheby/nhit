import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxt/icon"],

    vite: {
        plugins: [tailwindcss()],
    },
    css:["~/assets/tailwind.css"],

    app: {
        head: {
            title: "North Harbin Institute of Technology",
            link: [
                { rel: "icon", type: "image/webp", href: "/logo.webp" }
            ]
        }
    }
});
