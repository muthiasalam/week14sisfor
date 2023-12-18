<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col  mt-10 mb-10 ml-15 mr-15">
            <h3 class="text-2xl font-bold ml-10 mr-10 mb-4">{{ heading }}</h3>
            <ol class="list">
                <li><a href="https://drive.google.com/file/d/10rdBjpZPoNmlVHDmRW-cKVpHjEcr7N8b/view?usp=sharing"
                        target="_blank">Peraturan Rektor</a></li>
                <li><a href="https://drive.google.com/file/d/1JWDirmLACE0KUo9YLMSpi_plU0pA62Yd/view?usp=sharing"
                        target="_blank">Panduan Pelaksanaan Kegiatan Tri Dharma Unhas Selama Masa Pandemi Covid-19</a></li>
                <li><a href="https://drive.google.com/file/d/1tZfVdesgP0IhlLyUt7WAXIQkt-q9vrJG/view?usp=sharing"
                        target="_blank">PP No 53 2015 Statuta Unhas</a></li>
                <li><a href="https://drive.google.com/file/d/1UoYZdIEXIOvkRBSyUv5a-rYzNE6UlkGZ/view?usp=sharing"
                        target="_blank">Peraturan Dekan Tentang Pengelolaan dan Penyelenggaraan Kemahasiswaan Program
                        Sarjana FT-UH</a></li>
            </ol>
        </div>
        <Footerr />
    </div>
</template>
  
<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";

import { ref, onMounted } from "vue";
const heading = ref("");
const konten = ref("");

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[4];
        heading.value = item.Heading[0].Heading;
        konten.value = item.Konten.replace(/\n/g, '<br>');
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<style>
.list {
    list-style: auto;
    color: blue;
}</style>