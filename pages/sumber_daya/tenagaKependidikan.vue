<template>
    <div>
      <Headerr />
      <Navbar />
  
      <div class="flex flex-col items-center mb-10 mt-10">
        <div v-if="programs && programs.data" class="my-10">
          <!-- Second Table -->
          <table class="mb-10">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>NIP</th>
                <th>Golongan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in programs.data" :key="index">
                <td>{{ program.Nama }}</td>
                <td>{{ program.Jabatan }}</td>
                <td>{{ program.NIP }}</td>
                <td>{{ program.Golongan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <Footerr />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Headerr from '../src/components/Headerr.vue';
  import Navbar from '../src/components/Navbar.vue';
  import Footerr from '../src/components/Footerr.vue';
  
  const programs = ref(null);
  
  onMounted(async () => {
    try {
      const programsResponse = await fetch('http://localhost:8055/items/TenagaKependidikan');
      const programsData = await programsResponse.json();
  
      if (programsData && programsData.data) {
        programs.value = programsData;
      } else {
        console.error('Invalid data structure in API response');
      }
    } catch (error) {
      console.error('Error fetching data from API 3:', error);
    }
  });
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  /* Optional: Add more spacing between columns */
  td:not(:last-child),
  th:not(:last-child) {
    margin-right: 10px;
  }
  </style>
  