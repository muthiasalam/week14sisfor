<template>
    <div>
        <Headerr />
        <Navbar />
        <div class="mt-10 mb-10">
            <p class="text-gray-600 ml-10 mr-10 mb-15" v-html="formattedKonten"></p>
        </div>
        <Footerr />
    </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import { computed } from 'vue';
import Headerr from '../src/components/Headerr.vue';
import Navbar from '../src/components/Navbar.vue';
import Footerr from '../src/components/Footerr.vue';

const konten = ref('');

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8055/items/cot');
        if (response.ok) {
            const data = await response.json();
            const item = data.data[3];
            konten.value = item.Konten.replace(/\n\n/g, '<br><br>').replace('http://cot.unhas.ac.id', '<a href="http://cot.unhas.ac.id" class="link">http://cot.unhas.ac.id</a>');
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

onMounted(() => {
    fetchData();
});

const formattedKonten = computed(() => konten.value);

</script>

<style>
.link {
    color: blue;
}
</style>
    