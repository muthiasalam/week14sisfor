<template>
    <div
    class="container relative min-w-full h-auto overflow-hidden"
    @mouseover="stopAutoplay"
    @mouseout="startAutoplay"
  >
    <span
      class="next absolute bottom-1/2 px-4 py-3 text-white font-bold text-2xl transition duration-500 rounded-md select-none cursor-pointer z-20 right-10 hover:bg-gray-300 hover:opacity-80 hover:text-gray-700"
      @click="nextSlide"
      >&#10095;</span
    >
    <span
      class="prev absolute bottom-1/2 px-4 py-3 text-white font-bold text-2xl transition duration-500 rounded-md select-none cursor-pointer z-20 left-10 hover:bg-gray-300 hover:opacity-80 hover:text-gray-700"
      @click="prevSlide"
      >&#10094;</span
    >

    <section class="slides-row flex h-full w-full z-0">
      <div class="slide w-full h-full relative" v-show="currentIndex === 0">
        <img
          src="../assets/banner/banner1.png"
          class="w-full h-full object-cover"
        />
        <div
          class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"
        ></div>
      </div>
      <div class="slide w-full relative" v-show="currentIndex === 1">
        <img
          src="../assets/banner/banner10.jpg"
          class="w-full h-full object-cover"
        />
        <div
          class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"
        ></div>
      </div>
      <div class="slide w-full h-full relative" v-show="currentIndex === 2">
        <img
          src="../assets/banner/banner3.png"
          class="w-full h-full object-cover"
        />
        <div
          class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"
        ></div>
      </div>
      <div class="slide w-full h-full relative" v-show="currentIndex === 3">
        <img
          src="../assets/banner/banner2.png"
          class="w-full h-full object-cover"
        />
        <div
          class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"
        ></div>
      </div>
    </section>

    <section class="relative z-50 flex justify-center bottom-12">
      <div
        v-for="(dot, index) in dots"
        :key="index"
        class="h-3 w-3 mx-1 rounded-full border-2 border-white"
        :style="{ 'background-color': index === currentIndex ? 'red' : '' }"
        @click="goToSlide(index)"
      ></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      autoplayInterval: null,
      slideCount: 4, // Jumlah slide
      dots: new Array(4).fill(null),
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
  },
  created() {
    this.startAutoplay();
  },
};

</script>
