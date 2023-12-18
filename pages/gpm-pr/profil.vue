<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading0 }}</h3>
            <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten0 }}</p>
            
        </div>
        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading1 }}</h3>
            <ul class="list-disc ml-10 mr-10 mb-15 text-16">
            <li v-for="(sentence, index) in konten1.split('\n')" :key="index">{{ sentence }}</li>
          </ul>
        </div>

        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading2 }}</h3>
            <ul class="list-disc ml-10 mr-10 mb-15 text-16">
            <li v-for="(sentence, index) in konten2.split('\n')" :key="index">{{ sentence }}</li>
          </ul>
        </div>
        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading3 }}</h3>
            <ul class="list-disc ml-10 mr-10 mb-15 text-16">
            <li v-for="(sentence, index) in konten3.split('\n')" :key="index">{{ sentence }}</li>
          </ul>
        </div>
        
        
    </div>
    <Footerr />
</template>
  
<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";

import { ref, onMounted } from 'vue';

const heading0 = ref('');
const konten0 = ref('');
const heading1 = ref('');
const konten1 = ref('');
const heading2 = ref('');
const konten2 = ref('');
const heading3 = ref('');
const konten3 = ref('');

const formatHTML = (content) => {
    return content.replace(/\\n/g, '<br>');
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8055/items/GPMPR');
        const data = await response.json();

        const item = data.data[0];

        heading0.value = item.Heading[0]?.Heading || '';
        konten0.value = item.Konten[0]?.Konten || '';
        heading1.value = item.Heading[1]?.Heading || '';
        konten1.value = item.Konten[4]?.Konten || '';
        heading2.value = item.Heading[2]?.Heading || '';
        konten2.value = item.Konten[1]?.Konten || '';
        heading3.value = item.Heading[3]?.Heading || '';
        konten3.value = item.Konten[3]?.Konten || '';
       
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script><style>
.list-disc > li::before {
    content: '•'; /* Unicode character for bullet point */
    margin-right: 8px; /* Adjust spacing as needed */
  }
</style>
  