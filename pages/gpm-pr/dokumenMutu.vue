<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading0 }}</h3>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading1 }}</h3>
            <div class="flex flex-col md:flex-row">
                <img :src='`http://localhost:8055/assets/54e87624-da3d-4aca-a739-2706d6ae4a17`' class="w-1/8 h-1/8 mr-10">
                <p v-html="formatHTML(konten1)"></p>
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading2 }}</h3>
            <div class="flex flex-col md:flex-row">
                <img :src='`http://localhost:8055/assets/364a71de-7e5e-4323-8086-eccc44e06381`' class="w-1/8 h-1/8 mr-10">
                <p v-html="formatHTML(konten2)"></p>
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading3 }}</h3>
            <div class="flex flex-col md:flex-row">
                <img :src='`http://localhost:8055/assets/d4afff9b-00a6-48e3-b73b-be54bae2305f`' class="w-1/8 h-1/8 mr-10">
                <p v-html="formatHTML(konten3)"></p>
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading4 }}</h3>
            <div class="flex flex-col md:flex-row">
                <img :src='`http://localhost:8055/assets/0b415920-9726-4e73-b47e-2cd2ebd2b416`' class="w-1/8 h-1/8 mr-10">
                <p v-html="formatHTML(konten4)"></p>
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-10" v-html="konten"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading5 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/4301164d-ee7c-492b-b925-2671444b7c11`' class="w-4/5">
                <p class="text-12 italic">Gambar 1 Siklus SPMI Unhas</p>
            </div>
            <p v-html="formatHTML(konten5)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/01fd77d3-8cb7-455b-9a8a-1ccc5266ffd4`' class="w-4/5">
                <p class="text-12 italic">Gambar 2 Peningkatan mutu yang berkelanjutan (Kaizen)</p>
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading6 }}</h3>
            <p v-html="formatHTML(konten6)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading7 }}</h3>
            <p v-html="formatHTML(konten7)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading8}}</h3>
            <p v-html="formatHTML(konten8)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading9 }}</h3>
            <p v-html="formatHTML(konten9)"></p>
        </div>
        <div class="ml-10 mr-10">
            <h3 class="font-bold mb-5">{{ heading10 }}</h3>
            <p v-html="formatHTML(konten10)"></p>
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
const heading1 = ref('');
const konten1 = ref('');
const heading2 = ref('');
const konten2 = ref('');
const heading3 = ref('');
const konten3 = ref('');
const heading4 = ref('');
const konten4 = ref('');
const heading5 = ref('');
const konten5 = ref('');
const heading6 = ref('');
const konten6 = ref('');
const heading7 = ref('');
const konten7 = ref('');
const heading8 = ref('');
const konten8 = ref('');
const heading9 = ref('');
const konten9 = ref('');
const heading10 = ref('');
const konten10 = ref('');

const konten = ref('');

const formatHTML = (content) => {
    return content.replace(/\\n/g, '<br>');
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8055/items/GPMPR');
        const data = await response.json();

        const item = data.data[1];

        konten.value = item.Konten[0]?.Konten.replace('STANDAR UNHAS', '<a href="https://docs.google.com/spreadsheets/d/1rtyW3caP9OKibK4H67g5VjoUmvQhoGXl/edit?usp=sharing&ouid=111439485557127564656&rtpof=true&sd=true" class="link">STANDAR UNHAS</a>') || '';
        heading0.value = item.Heading[0]?.Heading || '';
        heading1.value = item.Heading[1]?.Heading || '';
        konten1.value = item.Heading[1]?.Konten || '';
        heading2.value = item.Heading[2]?.Heading || '';
        konten2.value = item.Heading[2]?.Konten || '';
        heading3.value = item.Heading[3]?.Heading || '';
        konten3.value = item.Heading[3]?.Konten || '';
        heading4.value = item.Heading[4]?.Heading || '';
        konten4.value = item.Heading[4]?.Konten || '';
        heading5.value = item.Heading[5]?.Heading || '';
        konten5.value = item.Heading[5]?.Konten || '';
        heading6.value = item.Heading[6]?.Heading || '';
        konten6.value = item.Heading[6]?.Konten || '';
        heading7.value = item.Heading[7]?.Heading || '';
        konten7.value = item.Heading[7]?.Konten || '';
        heading8.value = item.Heading[8]?.Heading || '';
        konten8.value = item.Heading[8]?.Konten || '';
        heading9.value = item.Heading[9]?.Heading || '';
        konten9.value = item.Heading[9]?.Konten || '';
        heading10.value = item.Heading[10]?.Heading || '';
        konten10.value = item.Heading[10]?.Konten || '';

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<style>
.link {
    color: blue;
}
</style>