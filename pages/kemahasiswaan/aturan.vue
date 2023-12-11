<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="konten"></p>
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
  
  onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[5];
        heading.value = item.Heading;
        konten.value = item.Konten.replace(/\n/g, '<br>');
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  });
  </script>