<template>
    <Headerr/>
    <Navbar/>
    <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
      <h3 class="text-2xl font-bold ml-10 mr-10">{{ heading }}</h3>
      <img :src="fotoUrl" alt="Foto1" class="w-1/2 mb-4">
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

  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Profil');
      const data = await response.json();
      
      // Assuming there's only one item in the response data array
      const item = data.data[6];
  
      const foto1Id = item.Foto1;
      const foto1Url = `http://localhost:8055/assets/9798f63b-b31b-4151-bf27-98205c3ef751`;
      fotoUrl.value = foto1Url;
  
      // Extracting "Heading" and "Konten" values
      heading.value = item.Heading[0]?.Heading || '';
  
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  // Use a computed property to safely bind HTML
  import { computed } from 'vue';
  
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here if needed */
  </style>
  