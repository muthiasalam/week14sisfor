<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <img :src="`http://localhost:8055/assets/9bb78806-a7a6-4605-b41c-5edb2ce2c77a`" alt="Foto2"
                class="w-1/2 mb-4 mb-15">
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
</script>
  
<style>
.list {
    list-style: auto;
    color: blue;
}</style>