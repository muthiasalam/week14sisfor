<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="flex flex-col items-center mt-10 mb-10 ml-15 mr-15">
            <div>
                <h3 class="text-2xl font-bold ml-10 mr-10 mb-7">{{ heading }}</h3>
                <p class="text-gray-600 ml-10 mr-10 mb-15">{{ konten }}</p>
                <br>
                <ul class="list-disc ml-10 mr-10 mb-15 text-16">
            <!-- Iterate over each sentence and create a list item for each one -->
            <li v-for="(sentence, index) in konten0.split('\n')" :key="index">{{ sentence }}</li>
          </ul>
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
const konten0 = ref("");

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:8055/items/K3");
        const data = await response.json();
        const item = data.data[0];

        heading.value = item.Heading[0]?.Heading;
        konten.value = item.Konten[0]?.Konten || '';
        konten0.value = item.Konten[1]?.Konten || '';
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>
<style lang="css" scoped>
.list-disc > li::before {
content: '•'; /* Unicode character for bullet point */
margin-right: 8px; /* Adjust spacing as needed */
}
</style>