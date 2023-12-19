<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="mt-10 mb-10">
        <h2 class="text-2xl font-bold ml-10 mr-10">{{ heading }}</h2>
        <ul class="list-disc ml-10 mr-10 mb-15">
          <li v-for="sentence in konten.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
  
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-7 mt-10">{{ heading2 }}</h2>
        <ul class="list-disc ml-10 mr-10 mb-15">
          <li v-for="sentence in konten2.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
  
        <h2 class="text-2xl font-bold ml-10 mr-10 mt-10">{{ heading3 }}</h2>
        <ul class="list-disc ml-10 mr-10 mb-15">
          <li v-for="sentence in konten3.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
      </div>
      <Footerr />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Headerr from '../src/components/Headerr.vue';
  import Navbar from '../src/components/Navbar.vue';
  import Footerr from '../src/components/Footerr.vue';
  
  const fotoUrl = ref('');
  const heading = ref('');
  const konten = ref('');
  const heading2 = ref('');
  const konten2 = ref('');
  const heading3 = ref('');
  const konten3 = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Profil');
      const data = await response.json();
  
      // Assuming there's only one item in the response data array
      const item = data.data[1]; // Use index 1 to get the second item (index 0 is for "Sejarah Singkat")
  
      // Extracting values for "Visi"
      heading.value = item.Heading1 || '';
      konten.value = item.Konten1 || '';
  
      // Extracting values for "Misi"
      heading2.value = item.Heading2 || '';
      konten2.value = item.Konten2 || '';
  
      // Extracting values for "Sasaran"
      heading3.value = item.Heading3 || '';
      konten3.value = item.Konten3 || '';
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  </script>
  
  <style lang="css" scoped>
  .list-disc > li::before {
  content: '•'; /* Unicode character for bullet point */
  margin-right: 8px; /* Adjust spacing as needed */
}
  </style>
  