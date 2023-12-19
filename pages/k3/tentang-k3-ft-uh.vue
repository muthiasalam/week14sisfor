<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten0 }}</p>
                <br>
                <ul class="list-decimal ml-10 mr-10 mb-15 text-16">
            
            <li v-for="(sentence, index) in konten.split('\n')" :key="index">{{ sentence }}</li>
            
          </ul>
          <br>
          <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten1 }}</p>
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
const konten0 = ref("");
const konten1 = ref("");

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/K3");
        const data = await response.json();
        const item = data.data[2];

        heading.value = item.Heading[0].Heading;
        konten0.value = item.Konten[0].Konten;
        konten.value = item.Konten[1].Konten;
        konten1.value = item.Konten[2].Konten;

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