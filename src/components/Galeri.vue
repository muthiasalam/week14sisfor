<template>
    <div
    id="app"
    class="w-full mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
  >
    <div class="judul text-black text-2xl font-semibold mb-8">GALERI</div>
    <div class="relative">
      <div
        class="slides-container h-40 md:h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth"
      >
        <div v-for="item in galeri"
          :key="item.id" class="b relative group">
          <div
            class="slideim aspect-[4/3] h-full flex-shrink-0 snap-center rounded overflow-hidden transition-transform transform-gpu"
          >
            <img
              class="w-full h-full object-cover"
              :src="`http://localhost:8055/assets/` + item.Thumbnail"
              alt="Transformasi digital manajemen persuratan(mBerkas)"
            />
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center [text-shadow:0_1px_0_rgb(0_0_0/_100%)] w-full bg-black opacity-0 group-hover:opacity-50"
          ></div>
          <div
            class="absolute inset-0 flex pl-5 pr-5 items-center justify-center [text-shadow:0_1px_0_rgb(0_0_0/_100%)] text-white w-full text-xs md:text-xl font-medium opacity-0 group-hover:opacity-100"
          >
          {{ item.Judul }}
          </div>
        </div>
      </div>

      <div class="absolute top-0 -left-4 h-full items-center hidden lg:flex">
        <button
          role="button"
          class="prev2 px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          aria-label="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div class="absolute top-0 -right-4 h-full items-center hidden lg:flex">
        <button
          role="button"
          class="next2 px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          aria-label="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  async mounted() {
    await this.fetchGaleri();
    this.initSlides();
    this.setupSlideNavigation();
    this.setupAutoplay();
  },
  data() {
    return {
      galeri: [],
      slideWidth: 0,
      currentSlideIndex: 0,
      autoplayInterval: null,
    };
  },
  methods: {
    async fetchGaleri() {
      try {
        const response = await axios.get('http://localhost:8055/items/Galeri');
        if (response.data && Array.isArray(response.data.data)) {
          const sortedGaleri = response.data.data.map(item => ({
            ...item,
            date_created: new Date(item.date_created)
          }));
          sortedGaleri.sort((a, b) => b.date_created - a.date_created);
          this.galeri = sortedGaleri;
        } else {
          console.error('Invalid response structure:', response);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    },
    initSlides() {
      this.$nextTick(() => {
        const slidesContainer = document.querySelector(".slides-container");
        const firstSlide = slidesContainer.querySelector(".slideim");
        this.slideWidth = firstSlide.clientWidth;
      });
    },
    setupSlideNavigation() {
      const slidesContainer = document.querySelector(".slides-container");
      const prevButton = document.querySelector(".prev2");
      const nextButton = document.querySelector(".next2");
      const slides = slidesContainer.querySelectorAll(".slideim");

      nextButton.addEventListener("click", () => {
        this.nextSlide(slides);
      });

      prevButton.addEventListener("click", () => {
        this.prevSlide(slides);
      });
    },
    nextSlide(slides) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % slides.length;
      this.changeSlide(this.currentSlideIndex);
    },
    prevSlide(slides) {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + slides.length) % slides.length;
      this.changeSlide(this.currentSlideIndex);
    },
    changeSlide(index) {
      const slidesContainer = document.querySelector(".slides-container");
      slidesContainer.scrollLeft = index * this.slideWidth;
    },
    setupAutoplay() {
      this.autoplayInterval = setInterval(() => {
        const slides = document.querySelectorAll(".slideim");
        this.nextSlide(slides);
      }, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    restartAutoplay() {
      this.stopAutoplay();
      this.setupAutoplay();
    },
  },
};



</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter"); html, *{
  font-family: "Inter", sans-serif;
}

.slides-container {
	-ms-overflow-style: none; 
	scrollbar-width: none; 
}
.slides-container::-webkit-scrollbar {
	display: none; 
}

</style>
