<template>
  <div
    class="Berita mb-5 ml-8 mr-8 flex flex-wrap items-start justify-start pb-4"
  >
    <div class="judul text-2xl mb-4 mt-8 font-semibold text-black">BERITA</div>
    <div class="berita">
      <div
        class="berita-content -mx-4 mr-4 flex flex-wrap items-start justify-start pb-4 md:justify-center"
      >
        <div
          v-for="x in data.data"
          :key="x.id"
          class="mb-4 ml-4 w-full bg-slate-100 md:w-1/3 lg:w-1/5"
        >
          <a href="#" class="berita-item1 h-65 mr-10 w-64">
            <div class="relative h-40 w-full">
              <img
                class="h-full w-full"
                :src="`http://localhost:8055/assets/` + x?.thumbnail"
                alt="News Image"
              />
              <div
                class="absolute left-0 top-0 h-full w-full bg-red-600 opacity-30 hover:bg-blue-400"
              ></div>
            </div>
            <div class="judul-berita1 w-50 relative m-3 h-20 hover:bg-blue-100">
              <p class="line-clamp-3 text-xs font-medium text-neutral-700">
                {{ x?.judul }}
              </p>
              <div class="absolute bottom-0 left-0">
                <p class="text-xs font-normal text-neutral-700">
                  {{ formatDate(x?.date_created) }}
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
const data = await $fetch("http://localhost:8055/items/berita");

console.log(data);
// http://localhost:8055/items/berita

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("id-ID", options);
};

</script>