<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="konten"></p>
            </div>
        </div>
        <Footerr />
    </div>
</template>

<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";

import { ref, onMounted } from "vue";
const heading = ref("");
const konten = ref("");

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/K3");
        const data = await response.json();
        const item = data.data[0];
        heading.value = item.Heading;
        konten.value = item.Konten.replace('\nMemastikan bahwa kebijakan dan Tujuan yang terkait dengan keselamatan dan Kesehatan kerja ditetapkan dalam sistem manajemen keselamatan dan kesehatan kerja dan terintegrasi dalam proses bisnis\nMemastikan sumber daya yang dibutuhkan untuk system manejemen keselamatan dan kesehatan kerja tersedia\nMenyusun persyaratan dan Standar operasional prosedur dalam menerapkan system keselamatan dan kesehatan kerja\nMemastikan bahwa pentingnya system keselamatan dan kesehatan kerja\nyang efektif dan kepatuhan terhadap keselamatan dan kesehatan kerja tersampaikan dari dekanat hingga unit-unit departemen\nMengarahkan dan mendukung pekerja untuk berkontribusi pada penerapan efektivitas sistem manajemen keselamatan dan kesehatan kerja\nMendukung peran manajemen dalam melaksanakan sistem manajemen keselamatan dan kesehatan kerja\nMenciptakan dan mengembangkan budaya dalam organisasi yang mendukung hasil yang diinginkan dari sistem manajemen keselamatan dan kesehatan kerja\nMemberikan rasa aman dan perlindungan bagi pekerja saat melaporkan insiden, bahaya, risiko dan peluang.\nMemastikan organisasi menetapkan dan menerapkan proses untuk konsultasi dan partisipasi kerja\nMendukung pembentukan dan berfungsinya komite keselamatan dan kesehatan kerja\nMendukung sistem manajemen keselamatan dan kesehatan kerja\ndalam peningkatan berkelanjutan', `<ol class="listorder">
  <li>Memastikan bahwa kebijakan dan Tujuan yang terkait dengan keselamatan dan Kesehatan kerja ditetapkan dalam sistem manajemen keselamatan dan kesehatan kerja dan terintegrasi dalam proses bisnis</li>
  <li>Memastikan sumber daya yang dibutuhkan untuk system manejemen keselamatan dan kesehatan kerja tersedia</li>
  <li>Menyusun persyaratan dan Standar operasional prosedur dalam menerapkan system keselamatan dan kesehatan kerja</li>
  <li>Memastikan bahwa pentingnya system keselamatan dan kesehatan kerja</li>
  <li>yang efektif dan kepatuhan terhadap keselamatan dan kesehatan kerja tersampaikan dari dekanat hingga unit-unit departemen</li>
  <li>Mengarahkan dan mendukung pekerja untuk berkontribusi pada penerapan efektivitas sistem manajemen keselamatan dan kesehatan kerja</li>
  <li>Mendukung peran manajemen dalam melaksanakan sistem manajemen keselamatan dan kesehatan kerja</li>
  <li>Menciptakan dan mengembangkan budaya dalam organisasi yang mendukung hasil yang diinginkan dari sistem manajemen keselamatan dan kesehatan kerja</li>
  <li>Memberikan rasa aman dan perlindungan bagi pekerja saat melaporkan insiden, bahaya, risiko dan peluang.</li>
  <li>Memastikan organisasi menetapkan dan menerapkan proses untuk konsultasi dan partisipasi kerja</li>
  <li>Mendukung pembentukan dan berfungsinya komite keselamatan dan kesehatan kerja</li>
  <li>Mendukung sistem manajemen keselamatan dan kesehatan kerja</li>
  <li>dalam peningkatan berkelanjutan</li>
</ol>`);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>
<style>
.listorder {
    list-style: auto;
    margin-top: 10px;
}
</style>