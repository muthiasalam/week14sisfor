<template>
  <div>
    <Headerr />
    <Navbar />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.455182439684!2d119.4977380833077!3d-5.230259999999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee13639154f11%3A0x77d363f632d6f859!2sUniversitas%20Hasanuddin%20Kampus%20FAKULTAS%20TEKNIK%20Gowa!5e1!3m2!1sid!2sid!4v1702289765490!5m2!1sid!2sid" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <div class="col-xl-12">
      <div class="section-title mb-md-0">
        <iframe
          loading="lazy"
          class="h-[400px] w-full"
          src="https://unhas.ac.id/petakampus/virtualtour/index.php?scene=outdoortheater#outdoortheater"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <Footerr />
  </div>
</template>

<script setup>
import Headerr from "../src/components/Headerr.vue";
import Navbar from "../src/components/Navbar.vue";
import Footerr from "../src/components/Footerr.vue";
</script>

<style lang="css" scoped></style>
