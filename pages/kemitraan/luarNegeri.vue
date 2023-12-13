<template>
    <div>
      <Headerr />
      <Navbar />
  
      <div class="flex flex-col items-center mb-10 mt-10">
     <p class="text-center mb-4"> 
      Kerjasama Internasional Fakultas Teknik sudah diinisiasi sejak awal terbentuknya dan seiring dengan berkembangnya fakultas ini telah terbangun kerjasama Internsional yang cukup baik dengan berbagai stakeholders di tingkat antar negara baik itu institusi riset maupun dengan universitas secara umum. Di bawah ini daftar Memorandum of Understanding (MoU) dan Memorandum of Agreement yang telah ditandatangani minimal 5 tahun terakhir.
    </p>

    <!-- Judul -->
    <h2 class="text-xl font-bold mb-4 text-center"> 
      DAFTAR KERJASAMA UNHAS, FAKULTAS TEKNIK DENGAN UNIVERSITAS LUAR NEGERI
    </h2>

        <div v-if="programs && programs.data" class="my-10 flex flex-col items-center">
  
          <table class="mb-10">
            <thead>
              <tr>
                <th>COUNTRY</th>
                <th>PARTNER</th>
                <th>UNIVERSITY</th>
                <th>START</th>
                <th>END</th>
              </tr>
            </thead>
            <tbody>
              <!-- Iterating through programs.data -->
              <template v-for="(program, index) in programs.data" :key="index">
                <!-- Check if it's the first row for a new country or a new group -->
                <template v-if="index === 0 || program.Negara !== programs.data[index - 1].Negara">
                  <tr>
                    <!-- Display the country name only for the first row of each group -->
                    <td class="spesial istimewa">{{ program.Negara }}</td>
                    <td>{{ program.Mitra }}</td>
                    <td>{{ program.Universitas }}</td>
                    <td>{{ program.Mulai }}</td>
                    <td>{{ program.Akhir }}</td>
                  </tr>
                </template>
                <template v-else>
                  <!-- If it's not the first row, display an empty cell for the country -->
                  <tr>
                    <td class="spesial"></td>
                    <td>{{ program.Mitra }}</td>
                    <td>{{ program.Universitas }}</td>
                    <td>{{ program.Mulai }}</td>
                    <td>{{ program.Akhir }}</td>
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
      const programsResponse = await fetch('http://localhost:8055/items/KemitraanLuarNegeri');
      const programsData = await programsResponse.json();
  
      if (programsData && programsData.data) {
        // Sort the data by the "Negara" property in ascending order
        programs.value = {
          ...programsData,
          data: programsData.data.sort((a, b) => a.Negara.localeCompare(b.Negara)),
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
  
