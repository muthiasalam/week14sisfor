<template>
    <div flex flex-col items-center>
      <Headerr />
      <Navbar />
      <div class="flex flex-col items-center mb-10 mt-10 ">
        <h2 class="text-2xl font-bold ml-10 mr-10 mb-10">Akreditasi</h2>
        <div v-if="identitas" class="flex flex-col my-10 items-center">
          <table class="mb-10 ">
            <tbody>
              <tr v-for="(item, index) in items.Column1" :key="index">
                <td class="spesial font-bold">{{ item.Column }}</td>
                <td>{{ getColumn2Value(item.Column) }}</td>
              </tr>
            </tbody>
          </table>
  
          <table class="mb-10 ">
            <thead>
              <tr>
                <th>Jenis Program</th>
                <th>Nama Program</th>
                <th>Status</th>
                <th>SK Nasional</th>
                <th>Kadaluarsa</th>
                <th>SK Internasional 1</th>
                <th>Kadaluarsa 1</th>
                <th>SK Internasional 1</th>
                <th>Kadaluarsa 2</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(program, index) in programs.data" :key="index">
                <td>{{ program.JenisProgram }}</td>
                <td>{{ program.NamaProgram }}</td>
                <td>{{ program.Peringkat }}</td>
                <td>{{ program.AkreNasional }}</td>
                <td>{{ program.KadaluarsaAkreNasional }}</td>
                <td>{{ program.AkreInter1 }}</td>
                <td>{{ program.KadaluarsaAkreInter1 }}</td>
                <td>{{ program.AkreInter2 }}</td>
                <td>{{ program.KadaluarsaAkreInter2 }}</td>
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
  
  const items = ref(null);
  const identitas = ref(null);
  const programs = ref(null);
  
  onMounted(async () => {
    // Fetch data from API 1
    const response = await fetch('http://localhost:8055/items/Akreditas');
    const data = await response.json();
    items.value = data.data[0];
   
    // Fetch data from API 2
    const identitasResponse = await fetch('http://localhost:8055/items/identitas');
    const identitasData = await identitasResponse.json();
    identitas.value = identitasData.data[0];
  
    // Fetch data from API 3 for the second table
    const programsResponse = await fetch('http://localhost:8055/items/tabelupps');
    const programsData = await programsResponse.json();
    programs.value = programsData;
  });
  
  // Function to get values from API 2 based on the column name
  const getColumn2Value = (columnName) => {
    const columnMap = {
      "Nama Organisasi": identitas.value.Nama,
      "Alamat": identitas.value.Alamat,
      "Kontak": identitas.value.Homepage,
      "SK": identitas.value.sk,
      "Nama Fakultas": identitas.value.fakultas,
      "Alamat Fakultas": identitas.value.alamatfakultas,
      "Kontak Fakultas": identitas.value.homepagefakultas,
      "SK Fakultas": identitas.value.skfakultas,
      "Diterbitkan Oleh": identitas.value.pejabatmenerbitkan
    };
  
    return columnMap[columnName] || "";
  };
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
  