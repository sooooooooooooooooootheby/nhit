<template>
    <div class="mt-32 mb-16">
        <template v-if="page">
            <article class="prose lg:prose-xl mx-auto">
                <h1 class="mb-2!">{{ page.title }}</h1>
                <span class="text-sm text-gray-600">{{ formatDate(page.date) }}</span>
                <ContentRenderer :value="page" />
            </article>
        </template>
        <template v-else>
            <div class="empty-page [&>*]:text-center">
                <h1>Page Not Found</h1>
                <p>Oops! The content you're looking for doesn't exist.</p>
                <p><NuxtLink to="/" class="underline">Go back home</NuxtLink></p>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("news").path(route.path).first();
});

function formatDate(dateString: Date): string {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

const title = page?.value?.title || "Default Title";

useHead({
    title: `${title} | North Harbin Institute of Technology`,
});
</script>
