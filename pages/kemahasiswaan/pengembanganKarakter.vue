<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col  mt-10 mb-10 ml-20 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
                <img :src="`http://localhost:8055/assets/1c54bfef-c475-46c5-b52d-69e1c074b7c9`" alt="Foto3" class="w-1/2 mb-4 ml-10 mr-10 mb-15">
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
        const item = data.data[1];
        heading.value = item.Heading[0].Heading;
        konten.value = item.Konten[0].Konten;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  });
  </script>