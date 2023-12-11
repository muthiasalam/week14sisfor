<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
       <div>
          
          <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten0 }}</p>
          <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten1 }}</p>
          
          <div class=" flex flex-col items-center">
        <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading0 }}</h3>
          <img :src="fotoUrl1" alt="Foto1" class="w-1/2 mb-4">
          </div>

          <div class=" flex flex-col items-center">
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading1 }}</h3>
          <img :src="fotoUrl2" alt="Foto1" class="w-1/2 mb-4">
        </div>

        <div class=" flex flex-col items-center">
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading2 }}</h3>
          <img :src="fotoUrl3" alt="Foto1" class="w-1/2 mb-4">
          <img :src="fotoUrl4" alt="Foto1" class="w-1/2 mb-4">
        </div>
          
          <div class=" flex flex-col items-center">
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading3 }}</h3>
          <img :src="fotoUrl5" alt="Foto1" class="w-1/2 mb-4">
        </div>
          
          <div class=" flex flex-col items-center">
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading4 }}</h3>
          <img :src="fotoUrl6" alt="Foto1" class="w-1/2 mb-4">
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
  const heading3 = ref('');
  const heading4 = ref('');
  const konten0 = ref('');
  const konten1 = ref('');

  const fotoUrl1 = ref('');
const fotoUrl2 = ref('');
const fotoUrl3 = ref('');
const fotoUrl4 = ref('');
const fotoUrl5 = ref('');
const fotoUrl6 = ref('');

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:8055/items/SumberDaya');
    const data = await response.json();

    // Assuming there's only one item in the response data array
    const item = data.data[0];

    // Extracting "Heading" and "Konten" values
    heading0.value = item.Heading[0]?.Heading || '';
    heading1.value = item.Heading[1]?.Heading || '';
    heading2.value = item.Heading[2]?.Heading || '';
    heading3.value = item.Heading[3]?.Heading || '';
    heading4.value = item.Heading[4]?.Heading || '';

    konten0.value = item.Konten[0]?.Konten || '';
    konten1.value = item.Konten[1]?.Konten || '';

    fotoUrl1.value = `http://localhost:8055/assets/fffeaf4d-dd9f-4392-a102-765221ac7426`;
    fotoUrl2.value = `http://localhost:8055/assets/68ae4d5f-3c4d-41d3-9c33-1a2ef146df23`;
    fotoUrl3.value = `http://localhost:8055/assets/f2eeabad-997e-4f49-8f39-de86ab946d81`;
    fotoUrl4.value = `http://localhost:8055/assets/15451652-8994-4e70-a2f6-a1e4387a4a47`;
    fotoUrl5.value = `http://localhost:8055/assets/dad93495-ab6f-468c-84d9-c35e796b9f7f`;
    fotoUrl6.value = `http://localhost:8055/assets/44491959-9062-4a85-95e1-8f89b388e721`;
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
  