<template>
    <div>
      <Headerr />
      <Navbar />
  
      <div class="flex flex-col items-center mb-10 mt-10">
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-10">Guru Besar</h2>
        <div v-if="programs && programs.data" class="my-10">
          <!-- Second Table -->
          <table class="mb-10">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Departemen</th>
                <th>NIP</th>
                <th>Golongan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in programs.data" :key="index">
                <td>{{ program.nama }}</td>
                <td>{{ program.Departemen[0] }}</td>
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
      const programsResponse = await fetch('http://localhost:8055/items/GuruBesar');
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
    width: 90%;
    font-size: 13px;
   
  }

  th,td{
    text-align: left;
    padding: 8px 18px;

  }
  
  
  th {
    border-bottom: 2px solid rgb(152, 152, 152);
    
  }

  .spesial, td{
    border-top: 1px solid rgb(152, 152, 152);
  }

  .spesial, th{
    background-color: #efefef;

  }

  td {
    border-bottom: 1px solid rgb(152, 152, 152);
    
  }

  .spesial{
    border-right: 1px solid rgb(152, 152, 152);
  }

 
  
  /* Optional: Add more spacing between columns */
  td:not(:last-child),
  th:not(:last-child) {
    margin-right: 10px;
  }
  </style>
  