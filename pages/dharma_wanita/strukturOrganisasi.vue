<template>
    <Headerr />
    <Navbar />
    <div class="flex flex-col items-center mt-10 mb-10 ml-5 mr-5">
        <img :src="`http://localhost:8055/assets/88d674b1-efca-44e2-9d02-57b0c576a2ce`" class="w-4/5" />
    </div>
    <Footerr />
</template>
  
<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";
</script>
  