<template>
    <div class="px-6 mt-32">
        <div
            class="w-full h-120 overflow-hidden flex items-center relative max-lg:h-auto max-lg:overflow-auto max-lg:flex-col max-lg:items-start"
        >
            <img src="/pexels-cookiecutter-1732871.jpg" alt="pexels-cookiecutter-1732871.jpg" />
            <div class="absolute bottom-0 bg-white text-6xl px-4 py-2 font-bold max-lg:static max-lg:px-0">
                About North Harbin Institute of Technology
            </div>
        </div>
        <div class="w-6xl mx-auto">
            <p class="w-2/3 text-4xl font-semibold my-12">
                Welcome to North Harbin University of Technology. We are a world-leading university of science and technology,
                and we will forge the future at the edge of innovation
            </p>
            <div class="w-1/2 [&>*]:my-4 mb-12">
                <p>
                    Founded in 2025, North Harmon Institute of Technology began with a single principle: "To Engineer Tomorrow."
                    Yet we know that before technology can transform the world, it must first be mastered. That is our purpose.
                </p>
                <p>
                    At NHIT, we decode the digital universe—from quantum algorithms to AI ethics—and harness its potential to
                    empower societies in extreme environments and beyond. Across our Arctic-edge campus and global partner
                    network, we don't just adapt to the future; we build it in lines of code.
                </p>
                <p>Why? Because the coldest places on Earth demand the most inventive minds.</p>
            </div>
        </div>
        <ranking />
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "About | North Harbin Institute of Technology",
});
</script>
