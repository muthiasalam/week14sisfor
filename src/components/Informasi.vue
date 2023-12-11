<template>
  <div class="informasi bg-zinc-100 pt-2 pb-5">
  <div class="judul text-black text-[26px] ml-7 mr-8 mt-4 mb-4 font-semibold">
    INFORMASI
  </div>

  <div class="info-content flex-col items-center justify-center ml-8 mr-8">
    <div
      v-for="item in infoTerbaru"
      :key="item.id"
      class="info-item1 bg-white w-128 h-24 mr-30 mb-5 drop-shadow hover:bg-slate-100"
    >
      <a href="#" class="flex">
        <div class="item1-top">
          <div class="item1-left flex">
            <div
              class="item1-date-container bg-red-700 flex flex-col justify-center items-center w-24 h-24 p-2"
            >
              <p class="pt-3 pr-3 pl-3 text-24 font-bold text-white">{{ item. Date }}</p>
              <p class="pb-3 pr-3 pl-3 text-11 text-white">{{ item.Month + " " + item.Year }}</p>
            </div>
          </div>
        </div>
        <div class="item1-right items-center justify-items-center flex">
          <p class="text-black text-10 md:text-14 pt-3 pl-3 pb-3">
            {{ item.Judul }}
          </p>
        </div>
        <div
          class="panah flex items-center justify-center mr-10 ml-auto relative"
        >
          <img
            src="../assets/informasi/panah.png"
            class="md:w-15 md:h-12 w-8 h-6 inset-0"
          />
        </div>
      </a>
    </div>

    <div class="flex justify-end">
      <p
        class="text-gray-800 text-xs font-light w-auto h-auto ml-auto"
      >
      <a href="#"><span class="more-info text-xs font-light hover:text-blue-600"
          >LIHAT INFORMASI LAIN ></span
        ></a>
      </p>
    </div>
  </div>
</div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const info = ref([]);

const fetchInfo = async () => {
  try {
    const response = await axios.get('http://localhost:8055/items/Informasi');
    if (response.data && Array.isArray(response.data.data)) {
      const sortedInfo = response.data.data.map(item => ({
        ...item,
        date_created: new Date(item.date_created)
      }));
      sortedInfo.sort((a, b) => b.date_created - a.date_created);
      info.value = sortedInfo;
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Fetch error:', error);

  }
};

fetchInfo();

const infoTerbaru = computed(() => info.value.slice(0, 4));
</script>
