<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <h3 class="text-2xl font-bold mb-5">{{ heading0 }}</h3>
            <p v-html="formatHTML(konten0)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading1 }}</h3>
            <p v-html="formatHTML(konten1)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading2 }}</h3>
            <p v-html="formatHTML(konten2)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading3 }}</h3>
            <p v-html="formatHTML(konten3)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading4 }}</h3>
            <p v-html="formatHTML(konten4)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading5 }}</h3>
            <p v-html="formatHTML(konten5)"></p>
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
            <h3 class="font-bold mb-5">{{ heading8 }}</h3>
            <p v-html="formatHTML(konten8)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading9 }}</h3>
            <p v-html="formatHTML(konten9)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading10 }}</h3>
            <p v-html="formatHTML(konten10)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading11 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/57378388-3c42-41aa-9d79-f2734dc9f5d0`' class="w-2/6">
            </div>
            <p v-html="formatHTML(konten11)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading12 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/dbedde5b-1ea7-47fb-9c5e-b9068b7f93b5`' class="w-2/6">
            </div>
            <p v-html="formatHTML(konten12)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading13 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/6f32b6be-a960-4bc7-a45c-d95e94e2e7dc`' class="w-2/6">
            </div>
            <p v-html="formatHTML(konten13)"></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <h3 class="font-bold mb-5">{{ heading14 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/4a40471f-1eba-4ed9-ae30-ee3e5d4fa5c6`' class="w-2/6">
                <img :src='`http://localhost:8055/assets/af6a11d9-2edc-413f-8bbe-2a88c3da893b`' class="w-2/6">
            </div>
            <p v-html="formatHTML(konten14)"></p>
        </div>
        <div class="ml-10 mr-10">
            <h3 class="font-bold mb-5">{{ heading15 }}</h3>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/3ebdce98-294e-4808-8c15-055a2dabd4e8`' class="w-2/6">
            </div>
            <p v-html="formatHTML(konten15)"></p>
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
const konten11 = ref('');
const heading11 = ref('');
const konten12 = ref('');
const heading12 = ref('');
const konten13 = ref('');
const heading13 = ref('');
const konten14 = ref('');
const heading14 = ref('');
const konten15 = ref('');
const heading15 = ref('');
const konten10 = ref('');
const konten0 = ref('');

const formatHTML = (content) => {
    return content.replace(/\n/g, '<br>');
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8055/items/GPMPR');
        const data = await response.json();

        const item = data.data[4];

        heading0.value = item.Heading[0]?.Heading || '';
        konten0.value = item.Heading[0]?.Konten || '';
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
        heading11.value = item.Heading[11]?.Heading || '';
        konten11.value = item.Heading[11]?.Konten || '';
        heading12.value = item.Heading[12]?.Heading || '';
        konten12.value = item.Heading[12]?.Konten || '';
        heading13.value = item.Heading[13]?.Heading || '';
        konten13.value = item.Heading[13]?.Konten || '';
        heading14.value = item.Heading[14]?.Heading || '';
        konten14.value = item.Heading[14]?.Konten || '';
        heading15.value = item.Heading[15]?.Heading || '';
        konten15.value = item.Heading[15]?.Konten || '';

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