<template>
    <div>
      <Headerr />
      <Navbar />
      <div class="mt-10 mb-10">
        <h2 class="text-2xl font-bold ml-10 mr-10">{{ heading0 }}</h2>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading1 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten0.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
  
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading2 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten1.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
  
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading3 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten2.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading4 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten3.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading5 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten4.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>

        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading6 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten5.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading7 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten6.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading8 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten7.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading9 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten8.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading10 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten9.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>
        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading11 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten10.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>

        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading12 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten11.split('\n')" :key="sentence">{{ sentence }}</li>
        </ul>

        <h3 class="text-19 font-bold ml-10 mr-10 mt-10">{{ heading13 }}</h3>
        <ul class="list-disc ml-10 mr-10 mb-15 text-16">
          <li v-for="sentence in konten12.split('\n')" :key="sentence">{{ sentence }}</li>
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

const heading0 = ref('');
const heading1 = ref('');
const konten0 = ref('');
const heading2 = ref('');
const konten1 = ref('');
const heading3 = ref('');
const heading4 = ref('');
const heading5 = ref('');
const heading6 = ref('');
const heading7 = ref('');
const heading8 = ref('');
const heading9 = ref('');
const heading10 = ref('');
const heading11 = ref('');
const heading12 = ref('');
const heading13 = ref('');
const konten2 = ref('');
const konten3 = ref('');
const konten4 = ref('');
const konten5 = ref('');
const konten6 = ref('');
const konten7 = ref('');
const konten8 = ref('');
const konten9 = ref('');
const konten10 = ref('');
const konten11 = ref('');
const konten12 = ref('');


onMounted(async () => {
  try {
    const response = await fetch('http://localhost:8055/items/Akademik');
    const data = await response.json();

    // Assuming there's only one item in the response data array
    const item = data.data[0];


     
      heading0.value = item.Heading[0]?.Heading || '';
      heading1.value = item.Heading[1]?.Heading || '';
      heading2.value = item.Heading[2]?.Heading || '';
      heading3.value = item.Heading[3]?.Heading || '';
      heading4.value = item.Heading[4]?.Heading || '';
      heading5.value = item.Heading[5]?.Heading || '';
      heading6.value = item.Heading[6]?.Heading || '';
      heading7.value = item.Heading[7]?.Heading || '';
      heading8.value = item.Heading[8]?.Heading || '';
      heading9.value = item.Heading[9]?.Heading || '';
      heading10.value = item.Heading[10]?.Heading || '';
      heading11.value = item.Heading[11]?.Heading || '';
      heading12.value = item.Heading[12]?.Heading || '';
      heading13.value = item.Heading[13]?.Heading || '';
    
      konten0.value = item.Konten[0]?.Konten || '';
      konten1.value = item.Konten[1]?.Konten || '';
      konten2.value = item.Konten[2]?.Konten || '';
      konten3.value = item.Konten[3]?.Konten || '';
      konten4.value = item.Konten[4]?.Konten || '';
      konten5.value = item.Konten[5]?.Konten || '';
      konten6.value = item.Konten[6]?.Konten || '';
      konten7.value = item.Konten[7]?.Konten || '';
      konten8.value = item.Konten[8]?.Konten || '';
      konten9.value = item.Konten[9]?.Konten || '';
      konten10.value = item.Konten[10]?.Konten || '';
      konten11.value = item.Konten[11]?.Konten || '';
      konten12.value = item.Konten[12]?.Konten || '';
    
      
    
    

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
  