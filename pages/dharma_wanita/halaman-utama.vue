<template>
    <div>
      <Headerr />
      <Navbar />
      
      <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
       <div>
          
          
        <div class=" flex flex-col items-center">
        <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading0 }}</h3>
        <img :src='`http://localhost:8055/assets/a1943fe0-9ec6-4026-823b-123034a50a61`' class="mr-10  ml-10 mb-7">
          </div>

          <div class=" flex flex-col items-center">
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading1 }}</h3>
          <p class="text-16 font-bold ml-10 mr-10 mb-7">{{ konten0 }}</p>
          <img :src='`http://localhost:8055/assets/84c74050-dc7f-4b43-b414-f56098ae4db9`' class="w-1/8 h-1/8 mr-10">
          <img :src='`http://localhost:8055/assets/d449ae46-2762-4b3e-aad9-1eb89a866919`' class="w-1/8 h-1/8 mr-10 mb-7">
          
        </div>

        
        <div class=" flex flex-col items-center">
          
          <p class="text-l6 font-bold ml-10 mr-10 mb-7">{{ konten1 }}</p>
          
          <img :src='`http://localhost:8055/assets/80f099fc-49e0-42af-b207-b8362b2e86a2`' class="w-1/8 h-1/8 mr-10">
          <img :src='`http://localhost:8055/assets/465fb439-ed9c-4bf6-88c5-56a17fc96a1d`' class="w-1/8 h-1/8 mr-10">
          <img :src='`http://localhost:8055/assets/0df64739-2a6a-4917-9611-c55ff4dde9fc`' class="w-1/8 h-1/8 mr-10">
        </div>
          
          
          


         
        </div>
      </div>

    
      <Footerr />
    </div>
  </template>
  
  <script setup>
  import Headerr from '../src/components/Headerr.vue';
  import Navbar from '../src/components/Navbar.vue';
  import Footerr from '../src/components/Footerr.vue';
  import { ref, onMounted, computed } from 'vue';
  
  const heading0 = ref('');
  const heading1 = ref('');
  const heading2 = ref('');

  const konten0 = ref('');
  const konten1 = ref('');
  


onMounted(async () => {
  try {
    const response = await fetch('http://localhost:8055/items/dharmawanita');
    const data = await response.json();

    // Assuming there's only one item in the response data array
    const item = data.data[1];

    // Extracting "Heading" and "Konten" values
    heading0.value = item.Heading[0]?.Heading || '';
    heading1.value = item.Heading[1]?.Heading || '';
    
    

    konten0.value = item.Heading[2]?.Heading || '';
   
    konten1.value = item.Heading[4]?.Heading || '';
    
    

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
  
  // Use a computed property to safely bind HTML
  
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here if needed */
  .list-decimal {
    counter-reset: item;
  }
  
  .list-decimal > li::before {
    content: counter(item) ". ";
    counter-increment: item;
    margin-right: 8px; /* Adjust spacing as needed */
  }
  </style>
  