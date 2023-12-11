<template>
    <Headerr/>
    <Navbar/>
    <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
      <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
      <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
      <div class="mt-10 space-x-5">
        <a href="https://www.instagram.com/teknik.unhas/" class="bg-merahdesain text-white text-14 py-2 px-4 rounded-none hover:bg-red-400">
            Instagram
        </a>
        <a href="https://www.youtube.com/channel/UC82mgDdDj_TC13JEMN5cJfQ" class="bg-merahdesain text-white text-14 py-2 px-4 rounded-none hover:bg-red-400 ">
            Youtube
        </a>
        <a href="https://www.facebook.com/mediatekftuh/" class="bg-merahdesain text-white text-14 py-2 px-4 rounded-none hover:bg-red-400">
            Facebook
        </a>
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
      const item = data.data[5];
  
      const foto1Id = item.Foto1;
      const foto1Url = `http://localhost:8055/assets/${foto1Id}`;
      fotoUrl.value = foto1Url;
  
      // Extracting "Heading" and "Konten" values
      heading.value = item.Heading[0]?.Heading || '';
      konten.value = item.Konten[0]?.Konten || '';
      
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
  