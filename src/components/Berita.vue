<template>
  <div
    class="Berita mb-5 ml-8 mr-8 flex flex-wrap items-start justify-start pb-4"
  >
    <div class="judul text-2xl mb-4 mt-8 font-semibold text-black">BERITA</div>
    <div class="berita">
      <div
        class="berita-content -mx-4 mr-4 flex flex-wrap items-start justify-start pb-4 sm:justify-center"
      >
        <div
          v-for="item in beritaTerbaru"
          :key="item.id"
          class="mb-4 ml-4 w-full bg-slate-100 sm:w-1/3 lg:w-1/5"
        >
          <a href="#" class="berita-item1 h-65 mr-10 w-64">
            <div class="relative h-40 w-full">
              <img
                class="h-full w-full"
                :src="`http://localhost:8055/assets/` + item.thumbnail"
                alt="News Image"
              />
              <div
                class="absolute left-0 top-0 h-full w-full bg-red-600 opacity-30 hover:bg-blue-400"
              ></div>
            </div>
            <div class="judul-berita1 w-50 relative m-3 h-20 hover:bg-blue-100">
              <p class="line-clamp-3 text-xs font-medium text-neutral-700">
                {{ item.judul }}
              </p>
              <div class="absolute bottom-0 left-0">
                <p class="text-xs font-normal text-neutral-700">
                  {{ formatDate(item.date_created) }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="flex justify-end">
        <p class="text-xs font-light text-gray-800">
          <a href="#"><span class="more-news text-xs font-light hover:text-blue-600"
            >LIHAT BERITA LAIN ></span
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const berita = ref([]);

const fetchBerita = async () => {
  try {
    const response = await axios.get('http://localhost:8055/items/Berita');
    if (response.data && Array.isArray(response.data.data)) {
      const sortedBerita = response.data.data.map(item => ({
        ...item,
        date_created: new Date(item.date_created)
      }));
      sortedBerita.sort((a, b) => b.date_created - a.date_created);
      berita.value = sortedBerita;
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Fetch error:', error);

  }
};

const formatDate = (date) => {
  const formattedDate = new Date(date);

  const day = formattedDate.getDate().toString().padStart(2, '0');
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const month = monthNames[formattedDate.getMonth()];
  const year = formattedDate.getFullYear();

  return `${day} ${month} ${year}`;
};

fetchBerita();

const beritaTerbaru = computed(() => berita.value.slice(0, 4));
</script>
