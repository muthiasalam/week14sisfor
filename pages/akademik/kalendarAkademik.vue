<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h2>
  
        <!-- Display the first image -->
        <img :src="fotoUrl1" alt="Foto1" class="w-1/2 mb-4">
  
        <!-- Display the second image -->
        <img :src="fotoUrl2" alt="Foto2" class="w-1/2 mb-4">
      </div>
      <Footerr />
    </div>
  </template>
  
  <script setup>
  import Headerr from '../src/components/Headerr.vue';
  import Navbar from '../src/components/Navbar.vue';
  import Footerr from '../src/components/Footerr.vue';
  import { ref, onMounted } from 'vue';
  
  const fotoUrl1 = ref('');
  const fotoUrl2 = ref('');
  const heading = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Akademik');
      const data = await response.json();
  
      // Assuming there's only one item in the response data array
      const item = data.data[4];
  
      heading.value = item.Heading[0]?.Heading || '';
  
      // Assign the URLs to the refs
      fotoUrl1.value = `http://localhost:8055/assets/979fcbf4-3ced-4615-b3f9-b8052a8b7cd7`; // Assuming it's a direct URL
      fotoUrl2.value = `http://localhost:8055/assets/3d3024b8-ea47-498e-a1a0-3178da907dfc`; // Assuming it's a direct URL
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here if needed */
  </style>
  