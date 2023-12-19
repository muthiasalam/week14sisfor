<template>
    <div>
      <Headerr />
      <Navbar />
  
    
      <div class="flex flex-col items-center mb-10 mt-10 space-y-18">
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-10">Hak Cipta</h2>
        <div v-if="programs && programs.data" class="my-10">
            <h3 class="font-bold mb-4">Paten</h3>
          <table class="mb-10 ">
            <thead>
              <tr>
                <th>STATUS</th>
                <th>INVENTOR</th>
                <th>INVENSI</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in programs.data" :key="index">
                <td>{{ program.StatusPaten }}</td>
                <td>{{ program.Inventor }}</td>
                <td>{{ program.Invensi }}</td>
                
              </tr>
            </tbody>
          </table>

        <div v-if="secondTableData && secondTableData.data" class="my-10">
        <h3 class="font-bold mb-4">Desain Industri</h3>
        <table class="mb-10">
            <thead>
              <tr>
                <th>STATUS</th>
                <th>PENDESAIN</th>
                <th>NAMA CIPTAAN</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in secondTableData.data" :key="index ">
                <td>{{ program.StatusDesain }}</td>
                <td>{{ program.Pendesain }}</td>
                <td>{{ program.NamaCiptaan }}</td>
                
              </tr>
            </tbody>
        </table>
      </div>

      <div v-if="thirdTableData && thirdTableData.data" class="my-10">
        <h3 class="font-bold mb-4">Merek</h3>
          <table class="mb-10">
            <thead>
              <tr>
                <th>STATUS</th>
                <th>PEMILIK</th>
                <th>MEREK</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in thirdTableData.data" :key="index">
                <td>{{ program.StatusMerek }}</td>
                <td>{{ program.Pemilik }}</td>
                <td>{{ program.Merek }}</td>
                
              </tr>
            </tbody>
          </table>
          </div>

          <div v-if="fourthTableData && fourthTableData.data" class="my-10">
            <h3 class="font-bold mb-4">Hak Cipta</h3>
          <table class="mb-10">
            <thead>
              <tr>
                <th>NOMOR PERMOHONAN</th>
                <th>PENCIPTA</th>
                <th>NAMA CIPTAAN</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in fourthTableData.data" :key="index">
                <td>{{ program.NomorPermohonan }}</td>
                <td>{{ program.Pencipta }}</td>
                <td>{{ program.NamaPencipta }}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
      <Footerr />
    
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import Headerr from '../src/components/Headerr.vue';
import Navbar from '../src/components/Navbar.vue';
import Footerr from '../src/components/Footerr.vue';

const programs = ref(null);
const secondTableData = ref(null);
const thirdTableData = ref(null);
const fourthTableData = ref(null);

onMounted(async () => {
  try {
    const programsResponse = await fetch('http://localhost:8055/items/Paten');
    const programsData = await programsResponse.json();
    if (programsData && programsData.data) {
      programs.value = programsData;
    } else {
      console.error('Invalid data structure in API response for the first table');
    }

    // Fetch data for the second table from its API
    const secondTableResponse = await fetch('http://localhost:8055/items/DesainIndustri');
    const secondTableDataResult = await secondTableResponse.json();
    if (secondTableDataResult && secondTableDataResult.data) {
      secondTableData.value = secondTableDataResult;
    } else {
      console.error('Invalid data structure in API response for the second table');
    }

    // Fetch data for the third table from its API
    const thirdTableResponse = await fetch('http://localhost:8055/items/Merek');
    const thirdTableDataResult = await thirdTableResponse.json();
    if (thirdTableDataResult && thirdTableDataResult.data) {
      thirdTableData.value = thirdTableDataResult;
    } else {
      console.error('Invalid data structure in API response for the third table');
    }

    // Fetch data for the fourth table from its API
    const fourthTableResponse = await fetch('http://localhost:8055/items/HakCipta');
    const fourthTableDataResult = await fourthTableResponse.json();
    if (fourthTableDataResult && fourthTableDataResult.data) {
      fourthTableData.value = fourthTableDataResult;
    } else {
      console.error('Invalid data structure in API response for the fourth table');
    }
  } catch (error) {
    console.error('Error fetching data from APIs:', error);
  }
});
</script>

  
  <style lang="css" scoped>
  /* Add your styles here */
  table {
    border-collapse: collapse;
    width: 90vw;
    font-size: 13px;
  }

  th,td{
    text-align: left;
    padding: 8px;
    width: 34%;
   
  }
  
  
  th {
    border-bottom: 1.5px solid rgb(0, 0, 0);
    background-color:#efefef;
  }

  td {
    border-bottom: 1px solid rgb(152, 152, 152);
    
  }

  
  /* Optional: Add more spacing between columns */
  td:not(:last-child),
  th:not(:last-child) {
    margin-right: 10px;
  }
  </style>
  