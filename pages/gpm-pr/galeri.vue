<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <p class="font-bold mb-5" v-html="formatHTML(konten0)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/0debde4f-02db-4899-b38e-1a23d258ef8d`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten1)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten2)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten3)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten4)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten5)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten6)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten7)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten10)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten11)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cd880c1f-2b57-46cb-8fd4-b7c27669d7f8`' class="w-4/5">
            </div>
        </div>
    </div>
    <Footerr />
</template>
  
<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";

import { ref, onMounted } from 'vue';

const konten0 = ref('');
const konten1 = ref('');
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

const formatHTML = (content) => {
    return content.replace(/\\n/g, '<br>');
};

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8055/items/GPMPR');
        const data = await response.json();

        const item = data.data[6];

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