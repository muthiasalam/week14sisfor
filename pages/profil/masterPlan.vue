<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
        <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
        <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
  
        
        <div class="flex justify-center embed-responsive overflow-hidden relative w-full mt-10">
          <iframe :src="pdfUrl" frameborder="0" width="80%" height="600px"></iframe>
        </div>
      </div>
      <Footerr />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Headerr from '../src/components/Headerr.vue';
  import Navbar from '../src/components/Navbar.vue';
  import Footerr from '../src/components/Footerr.vue';
  
  const konten = ref('');
  const heading = ref('');
  const pdfUrl = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Profil');
      const data = await response.json();
  
      // Assuming there's only one item in the response data array
      const item = data.data[3];
  
      heading.value = item.Heading[0]?.Heading || '';
      // Replace ".." with a newline character
      konten.value = item.Konten[0]?.Konten || '';
  
      // Set the PDF URL
      pdfUrl.value = 'https://eng.unhas.ac.id/fakultas/public/homepage/master-plan.pdf';
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  </script>
  
  <style lang="css" scoped>
  .text-2xl {
  font-size: 2rem;
  color: #333;
}
  </style>
  