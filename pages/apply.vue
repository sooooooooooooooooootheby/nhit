<template>
    <div class="px-6 mt-32">
        <div class="w-full h-120 overflow-hidden flex items-center relative">
            <img src="/pexels-tima-miroshnichenko-9574411.jpg" alt="pexels-tima-miroshnichenko-9574411.jpg" />
            <div class="absolute bottom-0 bg-white text-6xl px-4 py-2 font-bold">Apply undergraduate</div>
        </div>
        <p class="w-2xl text-2xl font-semibold my-12">
            Please fill in some information. We will review it within 7 working days and send you the admission notice.
        </p>
        <form action="" class="w-md flex flex-col">
            <label for="email" class="w-full flex items-center mb-4">
                <span class="w-[42px] mr-2">Email</span>
                <input class="input flex-1" id="email" type="email" />
            </label>
            <label for="name" class="w-full flex items-center mb-4">
                <span class="w-[42px] mr-2">Name</span>
                <input class="input flex-1" id="name" type="email" />
            </label>
            <button type="submit" class="bg-blue-800 text-white py-3 cursor-pointer">Apply</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Apply | North Harbin Institute of Technology",
});
</script>

<style scoped>
.input {
    font-size: var(--text-xl);
    padding: 2px 6px;
    outline: var(--color-blue-800);
    @apply outline-2;
}
</style>
