<template>
    <div>
      <Headerr />
      <Navbar />
  
      <div class="flex flex-col items-center mb-10 mt-10">
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-10">Kemitraan Dalam Negeri</h2>
        <div v-if="programs && programs.data" class="my-10 flex flex-col items-center">
  
          <table class="mb-10">
            <thead>
              <tr>
                <th>TIPE</th>
                <th>MITRA</th>
                <th>KEGIATAN</th>
                <th>KETUA TIM</th>
                <th>DEPARTEMEN</th>
              </tr>
            </thead>
            <tbody>
              <!-- Iterating through programs.data -->
              <template v-for="(program, index) in programs.data" :key="index">
                <!-- Check if it's the first row for a new country or a new group -->
                <template v-if="index === 0 || program.TipeMitra !== programs.data[index - 1].TipeMitra">
                  <tr>
                    <!-- Display the country name only for the first row of each group -->
                    <td class="spesial istimewa">{{ program.TipeMitra }}</td>
                    <td>{{ program.Mitra }}</td>
                    <td>{{ program.Kegiatan }}</td>
                    <td>{{ program.KetuaTim }}</td>
                    <td>{{ program.Departemen }}</td>
                  </tr>
                </template>
                <template v-else>
                  <!-- If it's not the first row, display an empty cell for the country -->
                  <tr>
                    <td class="spesial"></td>
                    <td>{{ program.Mitra }}</td>
                    <td>{{ program.Kegiatan }}</td>
                    <td>{{ program.KetuaTim }}</td>
                    <td>{{ program.Departemen }}</td>
                  </tr>
                </template>
              </template>
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
      const programsResponse = await fetch('http://localhost:8055/items/KemitraanDalamNegeri');
      const programsData = await programsResponse.json();
  
      if (programsData && programsData.data) {
        // Sort the data by the "Negara" property in ascending order
        programs.value = {
          ...programsData,
          data: programsData.data.sort((a, b) => a.TipeMitra.localeCompare(b.TipeMitra)),
        };
      } else {
        console.error('Invalid data structure in API response');
      }
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  });
  </script>
  
  <style lang="css" scoped>
  /* Add your styles here */
  table {
    border-collapse: collapse;
    width: 90%;
    border-bottom: 1px solid rgb(152, 152, 152) ;
    font-size: 13px;
  }

  th,td{
    text-align: left;
    padding: 8px;
  }
  
  
  th {
    border-bottom: 2px solid rgb(152, 152, 152);
    background-color: #efefef;
  }

  td {
    border-bottom: 1px solid rgb(152, 152, 152);
    
  }

  .spesial{
    border-right: 1px solid rgb(152, 152, 152); 
    border-bottom: none;
    
    width: 40px
  }

  .istimewa{
    border-top: 1px solid rgb(152, 152, 152);

  }
  
  /* Optional: Add more spacing between columns */
  td:not(:last-child),
  th:not(:last-child) {
    margin-right: 10px;
  }
  </style>
  