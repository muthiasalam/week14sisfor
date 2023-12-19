<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col  mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-4">{{ heading }}</h3>
                <div class="flex justify-center ml-10 mr-10 mb-15">
                    <img :src="`http://localhost:8055/assets/7e2d300a-cb19-47a9-bc87-780bc09a8cae`" alt="Foto4">
                </div>
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

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[6];
        heading.value = item.Heading[0].Heading;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>