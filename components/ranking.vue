<template>
    <div class="w-6xl mx-auto mb-10 background">
        <ul class="text-white p-12 grid grid-cols-2 [&>*]:min-h-24">
            <li v-for="item in ranking" class="m-6 pt-4 border-t border-white">
                <h2 class="text-4xl font-semibold">{{ item.title }}</h2>
                <p class="mt-2 text-blue-600">{{ item.info }} Nobel Prize winners</p>
            </li>
            <li v-for="item in awards" class="m-6 pt-4 border-t border-white flex flex-col">
                <h2 class="text-4xl font-semibold">{{ item.title }}</h2>
                <p class="mt-2 text-blue-600">{{ item.number }} Nobel Prize winners</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
interface rankin {
    title: string;
    info: string;
}
interface award {
    title: string;
    number: number;
}

const ranking = ref<rankin[]>([
    {
        title: "Ranked No.1 in Velmora",
        info: "The OS ranking of Velmora in 2025",
    },
    {
        title: "Ranked No.3 in Moon",
        info: "The OS ranking of Moon in 2025",
    },
]);
const awards = ref<award[]>([
    {
        title: "The Halberg Laureate",
        number: 4,
    },
    {
        title: "The Caelum Award",
        number: 2,
    },
    {
        title: "Thorne Institute Grand Award",
        number: 8,
    },
]);
</script>

<style scoped>
.background {
    background: -webkit-linear-gradient(90deg, #030712, #020617, #111827); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        90deg,
        #030712,
        #020617,
        #111827
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
