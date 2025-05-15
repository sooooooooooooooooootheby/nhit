<template>
    <div class="px-6 mt-32">
        <div class="w-full h-120 overflow-hidden flex items-center relative max-lg:h-auto max-lg:overflow-auto max-lg:flex-col max-lg:items-start">
            <img src="/pexels-cookiecutter-17323801.jpg" alt="pexels-cookiecutter-17323801.jpg" />
            <div class="absolute bottom-0 bg-white text-6xl px-4 py-2 font-bold max-lg:static max-lg:px-0">News</div>
        </div>
        <p class="text-2xl font-bold my-12">The latest news at North Harbin Institute of Technology</p>
        <ul class="mb-12">
            <li v-for="item in data" class="my-4 p-2">
                <NuxtLink :to="item.path">
                    <h2 class="font-bold text-lg">{{ item.title }}</h2>
                    <p class="text-sm text-gray-800">{{ item.description }}</p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "news | North Harbin Institute of Technology",
});

const { data } = await useAsyncData("newslist", () => {
    return queryCollection("news").select("title", "date", "path", "description").all();
});
</script>
