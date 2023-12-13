<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col mb-10">
        <div class="ml-10 mr-10 mb-5 mt-10">
            <p class="font-bold mb-5" v-html="formatHTML(konten0)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/838314c7-ab10-482b-b4ec-cf9379a12d46`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/7cb689c3-d1de-4df0-82bf-dd7c6bfc8fba`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/2334d7cf-4386-4143-98fa-d5fb9232744f`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten1)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/74c64812-dee9-4d6a-8a65-be994fbe0316`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/707730a2-725a-47a1-a033-06c6c2b6127a`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/d2118b0f-c291-46a0-9a90-0d3a440b0175`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten2)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/7154b589-6fa7-4a95-8678-5822317cf5f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/c88a7635-6e64-4b37-9388-2a615a326776`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/35530db3-6d35-4ff7-ba24-9952c2442f64`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten3)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/b7321a87-fb2a-44a9-87c6-42d47d3d1c94`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/00f304e0-c9a5-4cbb-9837-17d971602964`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/d1bb3c3f-e54b-4006-98d5-04ebeb6d1427`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten4)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/93578ac3-92b7-481d-aee9-9117412ccf0e`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/a4742686-9568-4de6-9f4e-7cd085a691a6`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/17f3c278-d1fa-4a49-bab2-e161a80d5de2`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten5)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/cfab76c1-1e72-4b7e-8a77-43266233c912`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/176a0ba2-6124-48d0-967d-11f519d23e5a`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/208a0072-7727-4b61-9c3c-6d9bba76645e`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/4bfcce9d-2206-4fc3-b3f5-51b70df2f7e0`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten6)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/d7251224-9b4a-4a45-974b-f64f9deb7b26`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/bc7cbb37-667a-4038-bbff-8257bcc9e1f0`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten7)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/48c871c5-75ff-4f1a-8709-a18db4a06a67`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/add86b03-d741-44cf-9058-71f8070b4739`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/6a7b35cf-c7e4-4d71-8882-584db00a6646`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/32aa04ff-724d-4984-b83f-2d390b5f222c`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/b67ebe73-9537-4d70-8ba0-8eb679ef942e`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/661c8fbb-50ba-4e6a-8e0a-8abc1d3eca32`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/a796acf9-ef9a-46a4-9664-d235a5c74a6a`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/523aba71-fa24-4e0a-b08d-563821b57c9c`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten10)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/2b65f604-184f-41f6-9c94-0981415e1239`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/2b65f604-184f-41f6-9c94-0981415e1239`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/e893b347-7ac6-40ab-bf7d-091f43dbd403`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten11)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/c2a96772-0c2b-4b69-b528-f16d23c48f89`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/124b82a1-af56-4df1-8c1c-3329a4268f40`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/466c19f1-1977-432c-b80e-63eead8d30fb`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/0debde4f-02db-4899-b38e-1a23d258ef8d`' class="w-4/5">
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