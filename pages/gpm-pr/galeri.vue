<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col  mb-10">
        <div class="items-center flex flex-col ml-10 mr-10 mb-5 mt-10">
            <p class="font-bold mb-5" v-html="formatHTML(konten0)"></p>
            <div class="flex flex-col items-center mb-10">
                
                <img :src='`http://localhost:8055/assets/30855b4b-3185-4965-8d3e-73848c4a8b87`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/6a9a738e-7e94-4bf6-bc8f-150cb1bf5531`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/2d9e0f6f-e23a-4d46-9861-d06fb3268c91`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten1)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/2893a593-eea8-442d-8c71-6e056aa219c3`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/4eb19d1b-7b7f-4446-860e-0a5b9b92e666`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/ad749a63-6427-422b-818c-e60388f1ecb3`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten2)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/8be28cef-7367-4d64-be31-8ad73bd1c799`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/18ffd34e-d92d-48df-80ca-e64cfc337695`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/92be492a-6d10-4ee8-b56c-6147ba1e0b14`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten3)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/0d0f3496-1d7f-4f3c-a5c3-64a3ca45dcf4`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/78b6a871-9b1e-4ddb-b4dc-613732d94e2a`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/12bd87da-1774-4fff-a15b-785357137c53`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten4)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/f36c7288-742f-46ed-91c7-278775435be5`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/3272a5d7-2203-4eee-9115-a37f436634fb`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/e7e01afb-3f12-4ba3-a426-7589dcac29ca`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten5)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/7158c792-f52d-4404-ba72-7f21ed08a2ae`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/3b565684-c8f5-4aad-b6a5-c6b45b4925c8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/2b2e7162-da55-42d0-b463-ba88ddfa96c8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/69e54794-6090-4e17-ab0f-9fc5b1c93be7`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten6)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/3e338d54-adfb-44bf-9bad-c5ae5a9a8a89`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/10c144ac-04ea-48e8-904a-c210e77544a1`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten7)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/1ba15855-f8a9-432f-b0ca-00a3a346321e`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                
                <img :src='`http://localhost:8055/assets/206ad562-dbee-4c47-a370-0fd6f5e8adde`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cdf981a2-1e46-4dce-8bfd-bd55089fb300`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/130705c6-a901-4afa-a1cf-47bea1443c48`' class="w-4/5">
            </div>
        </div>
        <div class="items-center flex flex-col ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten8)"></p>
            <div class="flex flex-col items-center mb-10">
                <img :src='`http://localhost:8055/assets/95689fa3-4826-4afa-8463-87f53877c59f`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/2c6fb596-8425-4aec-a211-79aa93eca7a1`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/1d41e81a-4312-45ca-bdce-965ff41df9c5`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/dd4dadb6-2f3f-4d2b-9478-bfcf871dd0d1`' class="w-4/5">
                
                
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten10)"></p>
            <div class="flex flex-col items-center mb-10">
                
                <img :src='`http://localhost:8055/assets/8bf7352d-a35d-441f-af8c-5f40ef03d13f`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/8078ed89-c0a9-4678-af85-eb2b168117f8`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/cfe8524d-41e6-435a-9215-9f23680d6173`' class="w-4/5">
            </div>
        </div>
        <div class="ml-10 mr-10 mb-5">
            <p class="font-bold mb-5" v-html="formatHTML(konten11)"></p>
            <div class="flex flex-col items-center mb-10">
                
                <img :src='`http://localhost:8055/assets/2e45b5d3-cf14-4d4e-9e45-9b7339235490`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/c23a0c8f-f817-4aad-88fe-d86f52e1febc`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/b4946a9d-d239-4317-9b11-03eed36e76b3`' class="w-4/5">
                <img :src='`http://localhost:8055/assets/345e4d8d-b160-40e5-9072-75ce3190320e`' class="w-4/5">
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