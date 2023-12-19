<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col  mt-10 mb-10 ml-20 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
                <br>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading1 }}</h3>
                <ul class="list-decimal ml-10 mr-10 mb-15 text-16">
                    <li v-for="(sentence, index) in konten1.split('\n')" :key="index">{{ sentence }}</li>
                </ul>
                <br>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading2 }}</h3>
                <ul class="list-decimal ml-10 mr-10 mb-15 text-16">
                    <li v-for="(sentence, index) in konten2.split('\n')" :key="index">{{ sentence }}</li>
                </ul>
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
const heading1 = ref("");
const heading2 = ref("");
const konten = ref("");
const konten2 = ref("");
const konten1 = ref("");

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[0];

        heading.value = item.Heading[0].Heading;
        konten.value = item.Konten[0].Konten;
        heading1.value = item.Heading[1].Heading;
        konten1.value = item.Konten[0].Konten;
        heading2.value = item.Heading[2].Heading;
        konten2.value = item.Konten[1].Konten;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>
<style>
.list-decimal {
    counter-reset: item;
  }
  
  .list-decimal > li::before {
    content: counter(item) ". ";
    counter-increment: item;
    margin-right: 8px; /* Adjust spacing as needed */
  }
  </style>