<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <p>Diharapkan Mahasiswa di Fakultas Teknik untuk mengisi Survey Kepuasan Mahasiswa S3/S2/Profesi/S1 terhadap layanan yang diterima melalui link berikut:<br>S3 <a href="https://forms.gle/iXa6DQez5sWAi4TM8"  class="link">https://forms.gle/iXa6DQez5sWAi4TM8</a><br>S2/Profesi <a href="https://forms.gle/Gyt5ZZhgQvKv8WmT7"  class="link">https://forms.gle/Gyt5ZZhgQvKv8WmT7</a><br>S1 <a href="https://forms.gle/RVXiGTDmirXrTuzM6" class="link">https://forms.gle/RVXiGTDmirXrTuzM6</a></p>
        </div>
        <div class="ml-10 mr-10 mb-5">
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
const konten0 = ref('');

const formatHTML = (content) => {
    return content.replace(/\n/g, '<br>');
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8055/items/GPMPR');
        const data = await response.json();

        const item = data.data[5];

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