<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col mt-10 mb-10 ml-15 mr-15">
            <h2 class="text-2xl font-bold ml-10 mr-10 mb-10">Sasaran Strategis</h2>
            <div>
                <img :src="`http://localhost:8055/assets/09a0b076-4031-4144-b79d-5cc022d99a32`" alt="Foto3" class="w-1/2 mb-4 ml-10 mr-10 mb-15">
            </div>
            <ol class="list">
                <li>
                    <a href="https://drive.google.com/file/d/1a4DpQyJGu4S4dKt4ogmNZaaJBpfP79Lg/view?usp=sharing"
                        target="_blank">Daftar Prestasi Mahasiswa FT-UH 2020 Tingkat Internasional</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/153G4eJK2BW_YR5N0lmPzAZtLsYQHXp9A/view?usp=sharing"
                        target="_blank">Daftar Prestasi Mahasiswa FT-UH 2020 Tingkat Nasional</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1oWF5pOhGlgYrBASpK4SwPUsGMxRdiBaS/view?usp=sharing"
                        target="_blank">Daftar Prestasi Mahasiswa FT-UH 2020 Tingkat Wilayah (Regional)</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/169Rxk8X96DYczNJ7gV89ivj6FtFtBxrA/view?usp=sharing"
                        target="_blank">Daftar Prestasi Mahasiswa FT-UH 2020 Tingkat Lokal</a>
                </li>
            </ol>
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
        const response = await fetch("http://localhost:8055/items/Kemahasiswaan");
        const data = await response.json();
        const item = data.data[1];
        heading.value = item.Heading[0].Heading;
        konten.value = item.Konten[0].Konten;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
  });
  </script>