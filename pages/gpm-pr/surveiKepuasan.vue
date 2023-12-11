<template>
  <div>
    <h1 class="survey-title">Survey Kepuasan Mahasiswa</h1>
    
    <p class="survey-instruction">
      Diharapkan Mahasiswa di Fakultas Teknik untuk mengisi Survey Kepuasan Mahasiswa S3/S2/Profesi/S1 terhadap layanan yang diterima melalui link berikut:
    </p>
    
    <ul>
      <li><a :href="s3Link">S3 Survey</a></li>
      <li><a :href="s2ProfesiLink">S2/Profesi Survey</a></li>
      <li><a :href="s1Link">S1 Survey</a></li>
    </ul>

    <div class="survey-instrument">
      <h2>Instrumen Survey</h2>
      <p>Pengukuran kepuasan mahasiswa terhadap layanan dan pelaksanaan proses pendidikan mencakup aspek:</p>
      
      <!-- Insert other content as needed -->

      <h3>Aspek Tangibles</h3>
      <!-- Insert questions for Aspek Tangibles -->

      <h3>Aspek Reliability</h3>
      <!-- Insert questions for Aspek Reliability -->

      <h3>Aspek Responsiveness</h3>
      <!-- Insert questions for Aspek Responsiveness -->

      <h3>Aspek Assurance</h3>
      <!-- Insert questions for Aspek Assurance -->

      <h3>Aspek Empathy</h3>
      <!-- Insert questions for Aspek Empathy -->

      <h3>Aspek Transparency</h3>
      <!-- Insert questions for Aspek Transparency -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s3Link: 'https://forms.gle/iXa6DQez5sWAi4TM8',
      s2ProfesiLink: 'https://forms.gle/Gyt5ZZhgQvKv8WmT7',
      s1Link: 'https://forms.gle/RVXiGTDmirXrTuzM6'
    };
  }
};
</script>

<style>
/* Add your custom styles here */
.survey-title {
  font-size: 24px;
  font-weight: bold;
}

.survey-instruction {
  font-size: 16px;
}

.survey-instrument {
  margin-top: 20px;
}

/* Add styles for other elements as needed */
</style>

