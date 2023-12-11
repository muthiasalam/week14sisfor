<template>
  <div>
    <h4>Halaman > Kerjasama Dalam Negeri</h4>
    <table border="1">
      <thead>
        <tr>
          <th>KERJASAMA</th>
          <th>NO</th>
          <th>MITRA</th>
          <th>KEGIATAN</th>
          <th>KETUA TIM</th>
          <th>DEPARTEMEN</th>
          <th>RANGE</th>
        </tr>
      </thead>
      <tbody>
        <!-- Baris pertama: PEMERINTAH -->
        <tr v-for="(item, index) in pemerintahRows" :key="index">
          <td v-if="index === 0" :rowspan="pemerintahRows.length">PEMERINTAH</td>
          <td>{{ item.NO }}</td>
          <td>{{ item.MITRA }}</td>
          <td>{{ item.KEGIATAN }}</td>
          <td>{{ item.KETUA_TIM }}</td>
          <td>{{ item.DEPARTEMEN }}</td>
          <td>{{ item.RANGE }}</td>
        </tr>

        <!-- Baris kedua: BUMN -->
        <tr v-for="(item, index) in bumnRows" :key="index">
          <td v-if="index === 0" :rowspan="bumnRows.length">BUMN</td>
          <td>{{ item.NO }}</td>
          <td>{{ item.MITRA }}</td>
          <td>{{ item.KEGIATAN }}</td>
          <td>{{ item.KETUA_TIM }}</td>
          <td>{{ item.DEPARTEMEN }}</td>
          <td>{{ item.RANGE }}</td>
        </tr>

        <!-- Baris ketiga: SWASTA -->
        <tr v-for="(item, index) in swastaRows" :key="index">
          <td v-if="index === 0" :rowspan="swastaRows.length">SWASTA</td>
          <td>{{ item.NO }}</td>
          <td>{{ item.MITRA }}</td>
          <td>{{ item.KEGIATAN }}</td>
          <td>{{ item.KETUA_TIM }}</td>
          <td>{{ item.DEPARTEMEN }}</td>
          <td>{{ item.RANGE }}</td>
        </tr>

        <!-- Baris keempat: UNIVERSITAS -->
        <tr v-for="(item, index) in universitasRows" :key="index">
          <td v-if="index === 0" :rowspan="universitasRows.length">UNIVERSITAS</td>
          <td>{{ item.NO }}</td>
          <td>{{ item.MITRA }}</td>
          <td>{{ item.KEGIATAN }}</td>
          <td>{{ item.KETUA_TIM }}</td>
          <td>{{ item.DEPARTEMEN }}</td>
          <td>{{ item.RANGE }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pemerintahRows: [
        { NO: 1, MITRA: 'Rumah Sakit Umum Daerah Kabupaten Sinjai', KEGIATAN: 'Penyusunan Dokumen Evaluasi Lingkungan Hidup Rumah Sakit Umum Daerah Kabupaten Sinjai', KETUA_TIM: 'Abd. Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 2, MITRA: 'DINAS KELAUTAN DAN PERIKANAN PROVINSI SULAWESI BARAT', KEGIATAN: 'Studi penentuan lokasi breakwater pelabuhan perikanan Palipi yang Feasible dan Perencanaan Lanjutan Pembangunan Breakwater Pelabuhan Perikanan Palipi', KETUA_TIM: 'Sabaruddin Rahman, ST.,MT.,Ph.D', DEPARTEMEN: 'Dept. Teknik Kelautan', RANGE: '' },
        { NO: 3, MITRA: 'Kepala Dinas Perindustian, Perdagangan, Energi, Dan Sumber Daya Mineral. Kab Sinjai', KEGIATAN: 'Jasa Konsultansi  Perencanaan Kegiatan Penyusunan DED Biomassa', KETUA_TIM: 'Dr.Eng. Irwan Ridwan Rahim, ST.,MT', DEPARTEMEN: 'Dept. Teknik Lingkungan', RANGE: '' },
        { NO: 4, MITRA: 'BAPPEDA KABUPATEN SORONG SELATAN', KEGIATAN: 'Pekerjaan AMDAL Rencana Pembangunan Pelabuhan Kokoda', KETUA_TIM: 'Dr. Eng. Muhammad Isran Ramli, ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 5, MITRA: 'BAPPEDA KABUPATEN SORONG SELATAN', KEGIATAN: 'DED Pembangunan Pelabuhan Kokoda Kab. Sorong Selatan', KETUA_TIM: 'Dr. Eng. Muhammad Isran Ramli, ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 6, MITRA: 'BAPPEDA KABUPATEN SORONG SELATAN', KEGIATAN: 'Penyusunan DLKP-DLKR Rencana Pelabuhan Kokoda Kab. Sorong Selatan', KETUA_TIM: 'Dr. Eng. Muhammad Isran Ramli, ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 7, MITRA: 'BAPPEDA KABUPATEN SORONG SELATAN', KEGIATAN: 'Revisi RTRW Kab. Sorong Selatan', KETUA_TIM: 'Dr. Eng. Muhammad Isran Ramli, ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 8, MITRA: 'Dinas Pariwisata dan Kebudayaan Kabupaten Sinjai', KEGIATAN: 'Penyusunan Dokumen Evaluasi Lingkungan Hidup (DELH) Destinasi Wisata Hutan Mangrove Tongke-tongke Kabupaten Sinjai', KETUA_TIM: 'Abd. Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 9, MITRA: 'Kepala Dinas Kepemudaan, Olahraga dan Pariwisata Kab.Enrekang', KEGIATAN: 'Survei Investigasi dan Desain Pengembangan Objek Wisata Sungai Saddang / Swiss', KETUA_TIM: 'Dr.Eng. Bambang Bakri,ST.MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 10, MITRA: 'Kepala Dinas Kepemudaan, Olahraga dan Pariwisata Kab.Enrekang', KEGIATAN: 'Survey Investigasi Dan Desain (SID) Pengembangan Objek Wisata Sungai Mata Allo', KETUA_TIM: 'Dr.Eng. Bambang Bakri,ST.MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 11, MITRA: 'Puslitbang Transportasi Laut, Sungai, Danau dan penyeberangan', KEGIATAN: 'Uji Laboratorium Studi Pengembangan Design Breakwater Disesuaikan Dengan Wilayah Perairan', KETUA_TIM: 'Dr. Chairul Paotonan, ST.,MT', DEPARTEMEN: 'Dept. Teknik Kelautan', RANGE: '' },
        { NO: 12, MITRA: 'Dinas Pariwisata dan Kebudayaan Kabupaten Sinjai', KEGIATAN: 'Penyusunan Dokumen Analisis Mengenai Dampak Lingkungan (Amdal) Rencana Pembangunan Destinasi Wisata Hutan Mangrove Tongke-Tongke Kabupaten Sinjai', KETUA_TIM: 'Abd. Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 13, MITRA: 'BAPPEDA Kabupaten Maybrat', KEGIATAN: 'Rencana Induk Penyediaan Air Minum Distrik Aitinyo, Aitinyo Barat, Aitinyo Utara, dan Distrik Ayamaru selatan', KETUA_TIM: 'Dr. Eng. Muhammad Isran Ramli, ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 14, MITRA: 'BADAN PENELITIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA KEMINFO', KEGIATAN: 'Swakelola Beasiswa Pelatihan Intensif Non Gelar Digital Talent Scholarship', KETUA_TIM: 'A. Ais Prayogi, ST. M. Eng.', DEPARTEMEN: 'Dept. Teknik Informatika', RANGE: '' },
        { NO: 15, MITRA: 'Dinas kelautan  dan Perikanan Provinsi Sulawesi Barat', KEGIATAN: 'Pengawasan Lanjutan Pembangunan Breakwater Pelabuhan Perikanan Palipi (Porsi DAK)', KETUA_TIM: 'Dr.  Ir. Syarifuddin Dewa', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
      ],

      bumnRows: [
        { NO: 1, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pendampingan Pengukuran, Pemetaan, Inventarisasi Tanah, Tanaman, dan/atau Bangunan Serta Identifikasi Kepemilikan dalam Rangka Pengadaan Tanah T/L 150 kV Bitung - Kema (59 Tower)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 2, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pendampingan Pengukuran, Pemetaan, Inventarisasi Tanah, Tanaman, dan/atau Bangunan Serta Identifikasi Kepemilikan dalam Rangka Pengadaan Tanah T/L 150 kV Belang - Tutuyan (103 Tower)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 3, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pendampingan Pengukuran, Pemetaan, Inventarisasi Tanah, Tanaman, dan/atau Bangunan Serta Identifikasi Kepemilikan dalam Rangka Kompensasi Row Dibawah Jalur T/L 150 kV Otam - Molibagu Tahap 1 (TIP 144-212)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 4, MITRA: 'PT. PLN (persero) PUSENLIS', KEGIATAN: 'Studi Topografi dan Penyelidikan Tanah Tower Kritis Poso Sidera', KETUA_TIM: 'St. Hijraini Nur. ST, MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 5, MITRA: 'PT. PLN (persero) PUSENLIS', KEGIATAN: 'Studi Penyelidikan Lapangan PLTM Buleleng 2x600 kW', KETUA_TIM: 'St. Hijraini Nur. ST, MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 6, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pendampingan Pengukuran, Pemetaan, Inventarisasi Tanah, Tanaman, dan/atau Bangunan Serta Identifikasi Kepemilikan dalam Rangka Kompensasi Row Dibawah Jalur T/L 150 kV Otam - Molibagu Tahap 3 (TIP 72-144)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 7, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pendampingan Pengukuran, Pemetaan, Inventarisasi Tanah, Tanaman, dan/atau Bangunan Serta Identifikasi Kepemilikan dalam Rangka Kompensasi Row Dibawah Jalur T/L 150 kV Otam - Molibagu Tahap 2 (TIP 1 - 72)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 8, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Pengadaan Jasa Konsultasi Pengukuran dan Pemetaan Persil Tanah, Inventarisasi Tanaman, Identifikasi Kepemilikan dalam Rangka Pengadaan Tanah T/L 150 kV Kema - Belang Section 2 (97 Tower)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 9, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Konsultasi Pendampingan Pelaksanaan ROW dan Pemberkasan Dokumen Kompensasi pada ROW Jalur SUTT 150 kV Otam - Molibagu (TIP 80-174)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 10, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Jasa Konsultasi Pengukuran dan Pemetaan Persil Tanah, Inventarisasi Tanaman, Identifikasi Kepemilikan Tanah dalam Rangka Pengadaan Tanah T/L 150 kV Tolitoli - Bangkir 1 (134 Tower)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
        { NO: 11, MITRA: 'PT. PLN (persero) PUSENLIS', KEGIATAN: 'Studi Penyelidikan Lapangan SUTT 150 Kv T.39-T.41 Poso-Sidera', KETUA_TIM: 'St. Hijraini Nur. ST, MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 12, MITRA: 'PT PLN (Persero) Unit Induk Sulsel, Sultra & Sulbar', KEGIATAN: 'Jasa Pelatihan Sertifikasi Ahli K3 Umum', KETUA_TIM: 'Dr. Eng. Irwan Ridwan, ST., MT.', DEPARTEMEN: 'Dept. Teknik Lingkungan', RANGE: '' },
        { NO: 13, MITRA: 'PT PLN (Persero) Unit Induk Sulsel, Sultra & Sulbar', KEGIATAN: 'Jasa Pelatihan Sertifikasi Ahli K3 Listrik', KETUA_TIM: 'Dr. Eng. Irwan Ridwan, ST., MT.', DEPARTEMEN: 'Dept. Teknik Lingkungan', RANGE: '' },
        { NO: 14, MITRA: 'PT. PLN Unit Induk Pembangunan Sulawesi Bagian Selatan', KEGIATAN: 'Pengadaan Jasa Konsultansi Untuk Pendampingan penebangan dan pemberkasan dalam rangka kompensasi ROW T/L 150 KV Mamuju - Topoyo', KETUA_TIM: 'A. Subhan Mustari. ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 15, MITRA: 'PT. PLN (persero) Unit Induk Pembangunan SULBAGUT', KEGIATAN: 'Pengadaan Jasa Konsultasi Pengukuran dan Pemetaan Persil Tanah, Inventarisasi Tanaman, Identifikasi Kepemilikan Tanah dalam Rangka Pengadaan Tanah T/L 150 kV Tutuyan - Molibagu Section 2 (133 Tower)', KETUA_TIM: 'Haris Djalante, ST. MT', DEPARTEMEN: 'Dept. Teknik Perkapalan', RANGE: '' },
      ],

      swastaRows: [
        { NO: 1, MITRA: 'PT. BUKAKA TEKNIK UTAMA', KEGIATAN: 'Jasa Konsultan Dan Analisis Seismik Kegempaan', KETUA_TIM: 'Dr. Eng. Ir. Ardy Arsyad, ST. M. Eng.', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 2, MITRA: 'PT VALE INDONESIA Tbk', KEGIATAN: 'Penyelenggaraan Program Pelatihan Dan Sertifikasi Kompetensi Getotechnical laboratory', KETUA_TIM: 'Dr. Akbar Caronge.', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 3, MITRA: 'PT VALE INDONESIA Tbk', KEGIATAN: 'Kerjasama Dalam Bidang Survey Pemantauan Dan Formulir Strategi Konservasi Keanekargaman Hayati Dalam Wilayah Kontrak Karya PT Vale Indonesia TBK, Pembuiatan Sistem Informasi Data Base Pembibitan (Nursery) Dan Analisa Tanah Lahan Reklamasi', KETUA_TIM: 'A. Subhan Mustari. ST., MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 4, MITRA: 'PT. Sawerigading Utama', KEGIATAN: 'Kerjasama Pengembangan Sumber Daya Manusia Bidang Eksplorasi', KETUA_TIM: 'Dr. Eng. Asri Jaya, ST., MT', DEPARTEMEN: 'Dept. Teknik Geologi', RANGE: '' },
        { NO: 5, MITRA: '50 HERTZ LIMITED PT PRAKARSA EKATAMA ADVISORY', KEGIATAN: 'Rencana Implementasi Jasa Prakiraan Energi Terbarukan Di Sulawesi', KETUA_TIM: 'St. Hijraini Nur. ST, MT', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 6, MITRA: 'PT.HADJI KALLA', KEGIATAN: 'RENOVASI KANTOR PT.HADJI KALLA', KETUA_TIM: 'Dr. Rita Irmawati', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
        { NO: 7, MITRA: 'PT. Ceria Nugraha Indotama', KEGIATAN: 'Pembuatan Revisi Dokumen Studi Kelayakan Penambangan, Pengolahan & Pemurnian Biji Nikel Serta Fasilitas Penungjangnya', KETUA_TIM: 'Dr. Sufriadin, ST., MT', DEPARTEMEN: 'Dept. Teknik Pertambangan', RANGE: '' },
      ],

      universitasRows: [
      { NO: 1, MITRA: 'Universitas Kristen Indonesia (UKI) Toraja', KEGIATAN: 'Praktikum Mahasiswa Teknik Mesin UKI Toraja di Laboratorium Departemen Teknik Mesin Unhas', KETUA_TIM: 'Dr. Ilyas Renreng, MT', DEPARTEMEN: 'Dept. Teknik Mesin', RANGE: '' },
      { NO: 2, MITRA: 'Politeknik Negeri Pangkep', KEGIATAN: 'Survei Investigasi dan Desain (SID) Dermaga Pendidikan', KETUA_TIM: 'Prof. Wihardi Tjaronge', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
      { NO: 3, MITRA: 'Politeknik Negeri Pangkep', KEGIATAN: 'Jasa Konsultansi DELH dan AMDAL Kampus dan Dermaga Pendidikan', KETUA_TIM: 'Prof. Wihardi Tjaronge', DEPARTEMEN: 'Dept. Teknik Sipil', RANGE: '' },
      ],
     };
  },
};
</script>

 <style>
      h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }

      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }

      tr:hover {
        background-color: #f5f5f5;
      }

      /* Section Separator Styles */
      .section-separator {
        border-top: 2px solid #333;
        margin: 20px 0;
      }

      .section-title {
        font-size: 18px;
        color: #333;
        background-color: #f2f2f2;
        padding: 5px;
      }
    </style>