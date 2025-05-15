<template>
    <div class="w-full p-6">
        <div class="w-full border-t-2 border-b-2 border-blue-800 flex items-center">
            <span class="text-blue-800 text-6xl font-bold flex-1 px-4">NHIT</span>
            <div
                class="h-18 flex items-center justify-center px-6 border-l-2 border-blue-800 cursor-pointer hover:bg-[#ffffff36] duration-300"
                @click="cutMenu"
            >
                <Icon class="text-4xl text-blue-800" name="mynaui:menu" />
            </div>
        </div>
    </div>
    <div
        class="w-screen h-screen fixed top-0 left-0 z-50 p-12 bg-white transition-all duration-300 ease-in-out transform opacity-0 -translate-y-full"
        :class="{
            'translate-y-0 opacity-100 pointer-events-auto': isMenu,
            'pointer-events-none': !isMenu,
        }"
    >
        <div class="w-full h-full relative">
            <div @click="cutMenu" class="absolute right-0 top-0 z-10 flex items-center cursor-pointer">
                <span class="text-lg">Close</span>
                <Icon class="text-2xl ml-2" name="material-symbols:close" />
            </div>
            <h1 class="text-4xl font-bold max-lg:pt-12" @click="cutMenu">
                <NuxtLink to="/">North Harbin Institute of Technology</NuxtLink>
            </h1>
            <ul class="mt-6 border-l-2 border-blue-800 pl-4 [&>*]:text-2xl [&>*]:hover:underline [&>*]:my-2">
                <li>
                    <NuxtLink to="/" @click="cutMenu">Index</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/news" @click="cutMenu">News</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" @click="cutMenu">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/apply" @click="cutMenu">Apply</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const isMenu = ref<boolean>(false);

const cutMenu = () => {
    isMenu.value = !isMenu.value;
    if (isMenu.value) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
};
</script>
