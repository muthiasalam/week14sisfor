<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
        <div>
          <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
          <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
          <br>
          <!-- Use ol instead of ul for a numbered list -->
          <ol class="list-decimal ml-10 mr-10 mb-15 text-16">
            <!-- Iterate over each sentence and create a list item for each one -->
            <li v-for="(sentence, index) in konten1.split('\n')" :key="index">{{ sentence }}</li>
          </ol>
          <br>
          <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="formattedKonten"></p>
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
  
  const heading = ref('');
  const konten = ref('');
  const konten1 = ref('');
  const konten2 = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8055/items/Akademik');
      const data = await response.json();
  
      // Assuming there's only one item in the response data array
      const item = data.data[2];
  
      // Extracting "Heading" and "Konten" values
      heading.value = item.Heading[0]?.Heading || '';
      konten.value = item.Konten[0]?.Konten || '';
      konten1.value = item.Konten[1]?.Konten || '';
  
      // Replace ".." with a line break (<br>)
      konten2.value = item.Konten[2]?.Konten.replace(/\.\./g, '.<br><br>') || '';
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  // Use a computed property to safely bind HTML
  const formattedKonten = computed(() => konten2.value);
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
  