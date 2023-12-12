<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="konten"></p>
                <img :src="`http://localhost:8055/assets/67296f8c-1876-4424-801e-6564db1224ec`" alt="Foto5"
                    class="w-1/2 mb-4 ml-10 mr-10 mb-15">
                <a href="https://ikateknikunhas.org/" class="link  ml-10 mr-10 mb-15">Engineering Faculty Alumni Association</a>
            </div>
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
//
onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[4];
        heading.value = item.Heading;
        konten.value = item.Konten
        console.error("Error fetching data:", error);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<style>
.link {
    color: blue;
}
</style>