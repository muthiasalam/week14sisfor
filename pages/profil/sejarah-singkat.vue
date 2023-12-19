<template>
    <Headerr/>
    <Navbar/>
    <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
      <img :src="fotoUrl" alt="Foto1" class="w-1/2 mb-4">
      <div>
        <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
        <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="formattedKonten"></p>
      </div>
    </div>
    <Footerr/>
  </template>
  
  <script setup>
  import Headerr from '../src/components/Headerr.vue'
  import Navbar from '../src/components/Navbar.vue'
  import Footerr from '../src/components/Footerr.vue'

  import { ref, onMounted } from 'vue';
  
  const fotoUrl = ref('');
  const heading = ref('');
  const konten = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Profil');
      const data = await response.json();
      
      // Assuming there's only one item in the response data array
      const item = data.data[0];
  
      const foto1Id = item.Foto1;
      const foto1Url = `http://localhost:8055/assets/${foto1Id}`;
      fotoUrl.value = foto1Url;
  
      // Extracting "Heading" and "Konten" values
      heading.value = item.Heading[0]?.Heading || '';
  
      // Replace ".." with a line break (<br>)
      konten.value = item.Konten[0]?.Konten.replace(/\.\./g, '.<br><br>') || '';
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  // Use a computed property to safely bind HTML
  import { computed } from 'vue';
  const formattedKonten = computed(() => konten.value);
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here if needed */
  </style>
  