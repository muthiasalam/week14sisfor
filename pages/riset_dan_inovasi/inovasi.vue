<template>
  <div>
    <h4>Halaman > Hasil Inovasi</h4>
    <p> Daftar produk dan hasil inovasi yang telah dihasilkan oleh Fakultas Teknik, Universitas Hasanuddin antara lain: </p>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Inovasi</th>
          <th>Inovator</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(inovasi, index) in hasilInovasi" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ inovasi.NamaInovasi }}</td>
          <td>{{ inovasi.Inovator }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasilInovasi: [
        { No: 1, NamaInovasi: 'Smart Wheel Chair', Inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
        { No: 2, NamaInovasi: 'MOLIKU', Inovator: 'Rafiuddin Syam, ST., M.Eng. Ph.D' },
        { No: 3, NamaInovasi: 'Smart Room (Miniatur)', Inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
        { No: 4, NamaInovasi: 'Smart Parking', Inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
        { No: 5, NamaInovasi: 'ATM Beras', Inovator: 'Muh. Anshar ST., M.Sc., P.hd' },
        { No: 6, NamaInovasi: 'Sistem Fluidisasi sebagai Alternative Baru Pemeriharaan Alur Perairan', Inovator: 'Muhammad Arsyad Thaha' },
        { No: 7, NamaInovasi: 'Breakwater, Dari Penghancur Energi Gelombang ke Penangkap Energi Gelombang', Inovator: 'Dr. Muhammad Arsyad Thaha' },
        { No: 8, NamaInovasi: 'KALINA (Kapal Listrik Nelayan)', Inovator: 'Dr. Faisal Mahmuddin' },
        { No: 9, NamaInovasi: 'Sistem Monitoring Aplikasi Energi Terbarukan', Inovator: 'Dr. Faisal Mahmuddin' },
        { No: 10, NamaInovasi: 'Open Loop Ground Heat Pump (GHP)', Inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
        { No: 11, NamaInovasi: 'Solar Water Heater dengan PCM Storage', Inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
        { No: 12, NamaInovasi: 'Pompa air tenaga matahari untuk petani palawija', Inovator: 'Dr.Eng. Jalaluddin, ST., MT.' },
        { No: 13, NamaInovasi: 'Gading Baja sebagai Pengganti Gading Kayu pada Kapal Kayu', Inovator: 'Lukman Bochary ST., MT.' },
        { No: 14, NamaInovasi: 'Perahu Fiberglass untuk Petani Rumput Laut', Inovator: 'Syamsul Asri, ST., MT.' },
        { No: 15, NamaInovasi: 'Desain Perumahan dan Lingkungan Permukiman', Inovator: 'Dr. Idawarni Asmal' },
        { No: 16, NamaInovasi: 'Model Estimasi Konsumsi Bahan Bakar Kendaraan Ringan pada Jalan Tol', Inovator: 'Dr. Eng. Ir. Muhammad Isran Ramli, ST, MT.' },
        { No: 17, NamaInovasi: 'Pemecah Gelombang Sheetpile', Inovator: 'Dr. Chairul Paotonan' },
        { No: 18, NamaInovasi: 'Technology of Rain Water Harvesting', Inovator: 'DR.Eng. Ir. Rita Tahir Lopa, MT. PU SDA' },
        { No: 19, NamaInovasi: 'Groin Permeable Tiang', Inovator: 'DR. Hasdinar Umar, ST., MT.' },
        { No: 20, NamaInovasi: 'Technology of Ocean Wave Energy Converter', Inovator: 'Dr. Ir. Luther Sule, MT.' },
        { No: 21, NamaInovasi: 'ROV Survey', Inovator: 'Ir. Rahimuddin, ST., MT., PhD' },
        { No: 22, NamaInovasi: 'Aplikasi Sistem Cerdas Menentukan Peluang Terjadi Tubrukan Kapal', Inovator: 'Ir. Rahimuddin, ST., MT., PhD' },
        { No: 23, NamaInovasi: 'Model Prediksi Kebisingan Lalu Lintas Heterogen pada Jalan Perkotaan', Inovator: 'Dr. Eng. Muralia Hustim' },
        { No: 24, NamaInovasi: 'Model Mitigasi Kebisingan Lalu Lintas Heterogen pada Jalan Perkotaan', Inovator: 'Dr. Eng. Muralia Hustim' },
        { No: 25, NamaInovasi: 'Model Formula Rancangan Campuran Beraspal Berbasis Limbah Botol Plastik (Campuran Aspal Plastik)', Inovator: 'Dr. Eng. Ir. Muhammad Isran Ramli, ST, MT.' },
        { No: 26, NamaInovasi: 'Model Estimasi Emisi Kendaraan Ringan pada Kondisi Lalu Lintas Heterogen (MARNI Model)', Inovator: 'Dr. Ir. Sumarni Hamid Aly, ST., MT.' },
        { No: 27, NamaInovasi: 'Teknologi Mesin Press Pakan untuk Peningkatan Produktivitas Ternak Sapi', Inovator: 'Fauzan, ST., MT., PhD' },
      ],
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
