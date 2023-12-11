<template>
    <div>
      <Headerr />
      <Navbar />
  
      <div class="flex flex-col items-center mb-10 mt-10">
        <div v-if="identitas" class="my-10">
          <!-- First Table -->
          <table class="mb-10">
            <tbody>
              <tr v-for="(item, index) in items.Column1" :key="index">
                <td>{{ item.Column }}</td>
                <td>{{ getColumn2Value(item.Column) }}</td>
              </tr>
            </tbody>
          </table>
  
          <!-- Second Table -->
          <table class="mb-10">
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
