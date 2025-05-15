<template>
    <div class="min-h-screen relative">
        <div class="absolute -z-10 inset-0 bg-blue-200 opacity-60"></div>
        <div class="absolute -z-20 w-full h-full bg-[url(/pexels-pixabay-158826.jpg)] bg-cover"></div>
        <div class="h-24"></div>
        <p class="w-xl p-6 text-8xl font-bold leading-28 max-lg:text-6xl max-lg:w-full max-lg:leading-18">
            Forging <span class="text-blue-800">Futures</span> at the Edge of Innovation
        </p>
    </div>
    <!-- <div class="w-6xl bg-blue-800 mx-auto py-4 -mt-20 flex items-center justify-center">
        <div class="text-9xl text-blue-200 font-bold [&>*]:mx-8">
            <span>N</span>
            <span>H</span>
            <span>I</span>
            <span>T</span>
        </div>
    </div> -->
    <div class="w-6xl mx-auto mt-24 max-lg:px-4 max-lg:w-full">
        <div class="flex justify-between items-center">
            <h1 class="text-4xl font-bold">More News</h1>
            <NuxtLink to="/news" class="flex items-center text-blue-800 hover:underline">
                Read More News
                <Icon class="ml-2" name="mynaui:arrow-right" />
            </NuxtLink>
        </div>
        <div class="my-10 flex max-lg:flex-col">
            <div v-for="item in data" class="w-1/3 p-2 first:pl-0 last:pr-0 max-lg:p-0 max-lg:my-2 max-lg:w-full">
                <NuxtLink :to="item.path" class="text-xl font-semibold hover:underline">{{ item.title }}</NuxtLink>
            </div>
        </div>
    </div>
    <ranking />
    <div class="w-6xl mx-auto mb-10 max-lg:w-full max-lg:px-4">
        <div class="w-xl text-blue-600 [&>*]:text-2xl mt-12 mb-8 max-lg:w-full">
            <p>
                In a world shaped by rapid change, the role of a university is not only to transmit knowledge — but to inspire
                purpose. Here at North Harbin Institute of Technology, we believe that science and technology must serve
                something greater than progress itself: they must serve people, society, and our shared future.
            </p>
        </div>
        <p class="text-xl font-bold text-blue-600">Professor Alice Clodia</p>
        <p class="text-xl text-blue-600">President of North Harbin Institute of Technology</p>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "North Harbin Institute of Technology",
});

const { data } = await useAsyncData("news", () => {
    return queryCollection("news").limit(3).select("title", "path").all();
});
</script>
