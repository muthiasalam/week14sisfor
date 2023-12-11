<template>
  <div>
    <h4>Halaman > Daftar Penelitian LBE Tahun 2022</h4>
     <p>
      Berikut adalah nama tim dan judul penelitian yang mendapatkan dana penelitian melalui skema Labo-Based Education (LBE) Tahun 2022:
    </p>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIP</th>
            <th>Judul Penelitian</th>
            <th>Program Studi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(research, index) in researchList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ research.Nama }}</td>
            <td>{{ research.NIP }}</td>
            <td>{{ research.Judul }}</td>
            <td>{{ research.ProgramStudi }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      researchList: [
  { No: 1, Nama: 'Prof. Baharuddin, ST, M.Arch., Ph.D', NIP: '19690308 199512 1 001', Judul: 'Studi Komparatif Kenyamanan Termal Siswa Sekolah Dasar Di Kota Makassar', ProgramStudi: 'Fakultas' },
  { No: 2, Nama: 'Ilham Alimuddin, S.T, M.Gis, Ph.D', NIP: '19690825 199903 1 001', Judul: 'Perubahan Permukaan Tanah Pasca Gempa Palu dengan Aplikasi Data SAR', ProgramStudi: 'Fakultas' },
  { No: 3, Nama: 'Dr. Eng. Abdul Mufti Radja, ST., MT.', NIP: '19690304 199903 1 004', Judul: 'Pengaruh Pandemi Covid 19 Terhadap Penggunaan Ruang Ketiga Oleh Mahasiswa Fakultas Teknik Universitas Hasanuddin', ProgramStudi: 'Fakultas' },
  { No: 4, Nama: 'Ir. Mukti Ali, ST., MT., Ph.D', NIP: '19741211 200501 1 001', Judul: 'Kajian Pengembangan Kawasan Pesisir Sebagai Zona Konservasi Mangrove dengan Pendekatan Urban Design', ProgramStudi: 'Fakultas' },
  { No: 5, Nama: 'Dr-Eng. Achmad Yasir Baeda, ST., MT', NIP: '19730709 200003 1 001', Judul: 'Skema Pemunculan MJO di Indonesia, serta Hubungannya dengan ENSO dan PDO', ProgramStudi: 'Fakultas' },
  { No: 6, Nama: 'Prof.Dr.Ir. Muhammad Arsyad, MT', NIP: '19601231 198609 1 001', Judul: 'Pengaruh Tinggi Jagaan Caisson CSP-MS Terhadap Besarnya Energi Gelombang Yang Bisa Ditangkap', ProgramStudi: 'Fakultas' },
  { No: 7, Nama: 'Adnan, ST, MT, Ph.D.', NIP: '19740426 200312 1 002', Judul: 'Optimasi Program Rekonstruksi Citra MRI dengan Pemrograman Multithreading OpenMP Pada Mini PC Berdaya Rendah', ProgramStudi: 'Informatika' },
  { No: 8, Nama: 'Dr. Ir. Ingrid Nurtanio, M.T', NIP: '19610813 198811 2 001', Judul: 'Sistem Presensi Mahasiswa Berbasis Multi-face Recognition dengan Histogram of Oriented Gradients', ProgramStudi: 'Informatika' },
  { No: 9, Nama: 'A.Ais Prayogi Alimuddin, ST, M.Eng', NIP: '19830510 201404 1 001', Judul: 'Sistem Berbasis Android untuk Deteksi Emosi Menggunakan Fitur Ekspresi Wajah', ProgramStudi: 'Informatika' },
  { No: 10, Nama: 'Dr-Eng. Zulkifli Tahir, ST., MSc', NIP: '19840403 201012 1 004', Judul: 'User Acceptance Test Untuk Aplikasi Cerdas Pelayanan Pemesanan Obat Di Rumah Sakit Universitas Hasanuddin Berbasis Android', ProgramStudi: 'Informatika' },
  { No: 11, Nama: 'Anugrayani Bustamin,ST.,M.T', NIP: '199012012001807 4 001', Judul: 'Model Analisis Sentimen Pada Ulasan Pengguna Untuk Rekomendasi E-Wallet', ProgramStudi: 'Informatika' },
  { No: 12, Nama: 'Mukarramah Yusuf, B.Sc.,M.Sc', NIP: '19831008 201212 2 003', Judul: 'Analisa dan Perbandingan Pembangkit Bilangan Acak dengan Metode Monte Carlo', ProgramStudi: 'Informatika' },
  { No: 13, Nama: 'Dr.Ir.Zahir Zainuddin,M.Sc', NIP: '19640427 198910 1 002', Judul: 'Usulan Algoritma D32 Untuk Pemodelan Aliran Air Permukaan', ProgramStudi: 'Informatika' },
  { No: 14, Nama: 'Dr. Amil Ahmad Ilham, S.T., M.IT', NIP: '19731010 199802 1 001', Judul: 'Integrasi Algoritma Data Mining pada Sistem Informasi Sumber Daya Manusia untuk Menilai Kinerja Karyawan', ProgramStudi: 'Informatika' },
  { No: 15, Nama: 'Dr.Ir. Muhammad Ramli, MT', NIP: '19680718 199309 1 001', Judul: 'Rekonstruksi Lapisan Pembawa Air Tanah Kota Majene Berdasarkan Nilai Tahanan Jenis Batuan', ProgramStudi: 'Pertambangan' },
  { No: 16, Nama: 'Asran Ilyas, ST.,MT.,Ph.D.', NIP: '197303142000121001', Judul: 'Analisis Kontinuitas Seam Batubara Berdasarkan Data Geophysical Well Logging dan Sampel Pengeboran', ProgramStudi: 'Pertambangan' },
  { No: 17, Nama: 'Dr. Sufriadin, ST., MT.', NIP: '196608172000121001', Judul: 'Analisis Mineralogi dan Logam Tanah Jarang Pada Batubara Daerah Barru, Sulawesi Selatan', ProgramStudi: 'Pertambangan' },
  { No: 18, Nama: 'Dr. Aryanti Virtanti Anas, ST.,MT.', NIP: '197010052008012026', Judul: 'Penentuan Pit Limit Tambang Nikel Laterit di PT Ang and Fang Brother Provinsi Sulawesi Tengah', ProgramStudi: 'Pertambangan' },
  { No: 19, Nama: 'Nirmana Fiqra Qaidahiyani, S.T., M.T.', NIP: '199304222019032018', Judul: 'Studi Pengaruh Perubahan Temperatur Terhadap Sifat Fisik dan Mekanis Batuan Basalt', ProgramStudi: 'Pertambangan' },
  { No: 20, Nama: 'Dr.Eng. Ir. Rosady Mulyadi, ST., MT', NIP: '197008101998021001', Judul: 'Indoor Environmental Quality (IEQ) Ruang Kelas di Area Sub-Urban Pada Masa Pandemi Covid-19', ProgramStudi: 'Arsitektur' },
  { No: 21, Nama: 'Dr.Eng. Ir. Asniawaty, ST., MT.', NIP: '197109251999032001', Judul: 'Evaluasi Performa Audio Ruang Masjid Besar Al-Abrar Makassar', ProgramStudi: 'Arsitektur' },
  { No: 22, Nama: 'Dr. Ir. Hj. Nurul Nadjmi, ST., MT.', NIP: '197609042002122001', Judul: 'Modal Sosial Dalam Pengembangan Pariwisata Berbasis Maritim di Kota Makassar', ProgramStudi: 'Arsitektur' },
  { No: 23, Nama: 'Dr. Ir. M. Yahya, ST., M.Eng', NIP: '197004041997031001', Judul: 'Evaluasi Kawasan Permukiman Kumuh di Kelurahan Panampu Kecamatan Tallo Kota Makassar', ProgramStudi: 'Arsitektur' },
  { No: 24, Nama: 'Dr. Rahmi Amin Ishak, ST., MT.', NIP: '197603142002122005', Judul: 'Analisis Konfigurasi Ruang Kuliah dan Fasilitas Kampus Teknik Unhas Gowa', ProgramStudi: 'Arsitektur' },
  { No: 25, Nama: 'Teguh Iswadi Suardi, ST. MSc', NIP: '19900125 202107 3 001', Judul: 'Pendekatan Perancangan Fasad Bangunan Berdasarkan Tipologi Arsitektur Kolonial di Jalan Kayutangan, Malang', ProgramStudi: 'Arsitektur' },
  { No: 26, Nama: 'Dr. Ir. Ria Wikantari Rosalia, M.Arch.', NIP: '19610915 198811 2 001', Judul: 'Arsitektur Raung Bermain Anak di Lingkungan Pulau Kecil Berbasis Teori Affordance', ProgramStudi: 'Arsitektur' },
  { No: 27, Nama: 'Dr. Syahriana Syam, ST.,MT', NIP: '19751124 200604 2 032', Judul: 'Konsep Pasipupukan sebagai Pembentuk Ruang Komunal Hunian Perairan Laut', ProgramStudi: 'Arsitektur' },
  { No: 28, Nama: 'Dr.Eng. Ir. Nasruddin, ST., MT.', NIP: '197103161997021001', Judul: 'Pengaruh Penambahan Bubuk Cangkang Telur dan Abu Daun Bambu Terhadap Kuat Tekan dan Daya Serap Air pada Bata Ringan CLC dengan Metode Pengujian Aplikasi UPV', ProgramStudi: 'Arsitektur' },
  { No: 29, Nama: 'Dr. Ir. Hartawan, MT.', NIP: '19641231 199103 1 034', Judul: 'Adaptasi Struktur Dalam Perkembangan Bentuk Lego-Lego Rumah Bugis', ProgramStudi: 'Arsitektur' },
  { No: 30, Nama: 'Dr. Ir. H. Edward Syarif, ST., MT', NIP: '196906121998021001', Judul: 'Kepercayaan dan Pengaruhnya terhadap Konfigurasi Ruang Permukiman Masyarakat An-Nasir Danau Mawang Kabupaten Gowa', ProgramStudi: 'Arsitektur' },
  { No: 31, Nama: 'Dr. Ir. Hj. Mimi Arifin, M.Si', NIP: '196612181993032001', Judul: 'Evaluasi Program KOTAKU dalam Penanganan Permukiman Kumuh (Studi Kasus: Kelurahan Lette, Kecamatan Mariso)', ProgramStudi: 'PWK' },
  { No: 32, Nama: 'Sri Aliah Ekawati, ST.,MT', NIP: '198508242012122004', Judul: 'Kajian Ruang Terbuka Publik Tepian Air Yang Inklusif pada Masa Pandemik Covid-19 (studi Kasus: Anjungan Pantai Losari dan Plaza Pantai Mangarabombang Kota Makassar)', ProgramStudi: 'PWK' },
  { No: 33, Nama: 'Dr. Ing. Venny Veronica Natalia, ST.,MT', NIP: '198312222010122003', Judul: 'Karakteristik Pilihan Moda Mil Terkahir (Last Mile) Pada Pengguna Teman Bus di Kota Makassar', ProgramStudi: 'PWK' },
  { No: 34, Nama: 'Isfa Sastrawati, ST.,MT', NIP: '197412202005012001', Judul: 'Karakteristik Pusat-Pusat Pertumbuhan di Suburban Makassar', ProgramStudi: 'PWK' },
  { No: 35, Nama: 'Dr. Ir. Arifuddin Akil, MT', NIP: '196305041995121002', Judul: 'Penentuan Prioritas Pengembangan Destinasi Wisata Sebagai Strategi Peningkatan City Branding Kota Makassar', ProgramStudi: 'PWK' },
  { No: 36, Nama: 'Dr.Eng. Abdul Rachman Rasyid, ST., M.Si', NIP: '197410062008121001', Judul: 'Prediksi Perubahan Tutupan Lahan Wilayah Perbatasan Timur Makassar-Maros Berbasis Multi Layer Perceptron-Markov (MLP-M) (Studi Kasus: Kecamatan Moncongloe)', ProgramStudi: 'PWK' },
  { No: 37, Nama: 'Suci Anugrah Yanti, ST., M.Si', NIP: '19931025 202011 6 001', Judul: 'Arahan Pengembangan Potensi Ekonomi Wilayah Berbasis Komoditas Unggulan Kopi Arabika (Studi Kasus: Kec. Buntu Pepasan, Kab. Toraja Utara)', ProgramStudi: 'PWK' },
  { No: 38, Nama: 'Jayanti Mandasari Andi Munawarah Abduh, S.T., M.Eng', NIP: '19940418 202012 2 015', Judul: 'Penataan Lingkungan Permukiman Melalui Peningkatan Kenyamanan Termal di Kecamatan Panakkukang Kota Makassar', ProgramStudi: 'PWK' },
  { No: 39, Nama: 'Dr-Techn.Yashinta Kumala Dewi, ST.,MIP', NIP: '19790117 200112 2 002', Judul: 'Evaluasi Tingkat Pelayanan Jalur Pendestrian Kampus Unhas Tamalanrea Terhadap Diffable', ProgramStudi: 'PWK' },
  { No: 40, Nama: 'Laode Muh. Asfan Mujahid, ST.,MT', NIP: '19930309 201903 1 014', Judul: 'Optimasi City Branding (Discover The Sacred Highlands) Terhadap Keputusan Wisatawan Pada Kawasan Wisata Di Toraja', ProgramStudi: 'PWK' },
  { No: 41, Nama: 'Marly Valenti Patandianan, ST., MT. Ph.D', NIP: '19730328 200604 2 001', Judul: 'Analisis Pencegahan Bencana Kebakaran di Permukiman Padat Kawasan Pariwisata Kota Lama Makassar', ProgramStudi: 'PWK' },
  { No: 42, Nama: 'Dr.Eng. Abdul Rachman Rasyid, ST., M.Si', NIP: '19741006 200812 1 002', Judul: 'Analisis Spasial GIS Dalam Menentukan Tingkat Resiko Bencana Covid-19 Di Kota Makassar (Magister S2)', ProgramStudi: 'PWK' },
  { No: 43, Nama: 'Marly Valenti Patandianan, ST., MT. Ph.D.', NIP: '19730328 200604 2 001', Judul: 'Pengaruh Fenomena Urban Heat Island terhadap Kualitas Hidup Masyarakat Berpenghasilan Rendah di Kota Makassar (Megister S2)', ProgramStudi: 'PWK' },
  { No: 44, Nama: 'Dr-techn. Yashinta Kumala Dewi, ST.,MIP', NIP: '19790117 200112 2 002', Judul: 'Pengembangan Kriteria dan Indikator Infrastuktur Sepeda untuk Kawasan Pendidikan (Studi Kasus : Kampus Tamalanrea Unhas)', ProgramStudi: 'PWK' },
  { No: 45, Nama: 'Dr. Ir. Arifuddin Akil, MT', NIP: '19630504 199512 1 001', Judul: 'Prediksi Pertembuhan Lahan Terbangun Mengguanakan Pendekatan Cellular Automata (Studi Kasus: Kota Makassar)', ProgramStudi: 'PWK' },
  { No: 46, Nama: 'Dr. Eng. Jalaluddin ST., MT', NIP: '19720825 200003 1 001', Judul: 'Analisis Kinerja Photovoltaik Water Heater Untuk Pemanas Air Tenaga Matahari', ProgramStudi: 'MESIN' },
  { No: 47, Nama: 'Dr.Ir. Zuryati Djafar, MT', NIP: '19680301 199702 2 001', Judul: 'Analisis Pengaruh Kadar Garam Terhadap Prestasi Lampu Air Garam', ProgramStudi: 'MESIN' },
  { No: 48, Nama: 'Prof. Dr. Ir. Zulkifli Djafar, MT', NIP: '19650630 199103 1 004', Judul: 'Analisis Kekuatan Mekanis Komposit Strik Bambu Petung (Dendrocalamu Asper) dengan Perlakuan Perendaman Larutan Kimia Yang Terkandung pada Batu Baterai', ProgramStudi: 'MESIN' },
  { No: 49, Nama: 'Fauzan, ST., MT., Ph.D', NIP: '19770103 200801 1 009', Judul: 'Analisis Penyerapan Energi Material Komposit Aluminium Foam Untuk Kereta Api Cepat', ProgramStudi: 'MESIN' },
  { No: 50, Nama: 'Dr. Muhammad  Syahid, ST.,MT', NIP: '19770707 200501 1 001', Judul: 'Karburisasi Baja Mangan untuk  Aplikasi Stone Crusher', ProgramStudi: 'MESIN' },
  { No: 51, Nama: 'Dr.Ir. Ahmad Yusran Aminy, MT', NIP: '19580921 198603 1 003', Judul: 'Analisis Perilaku chip akibat perubahan variable permesinsn pada pembubutan Baja Karbon Rendah', ProgramStudi: 'MESIN' },
  { No: 52, Nama: 'Dr. Hairul Arsyad, ST., MT.', NIP: '19750322 200212 1 001', Judul: 'Karakteristik Ethylene-Vinyl Acetate (EVA) dan Serbuk Tongkol Jagung Lamination layer pada bahan Aluminium Composite Panel', ProgramStudi: 'MESIN' },
  { No: 53, Nama: 'Ir. Andi Mangkau, MT', NIP: '19611231 199002 1 003', Judul: 'Estimasi Potensi Gas Metana TPA Antang Menggunakan Metode  land GEM dan IPCC', ProgramStudi: 'MESIN' },
  { No: 54, Nama: 'Prof.Dr.Eng. Andi Erwin Eka Putra, ST.,MT', NIP: '19711221 199802 1 001', Judul: 'Analisis Temperatur dan Kelembaban Rancangan di Sulawesi Selatan/Makassar', ProgramStudi: 'MESIN' },
  { No: 55, Nama: 'Dr. Rustan Tarakka, ST.,MT', NIP: '19750827 200501 1 002', Judul: 'Analisis Penggunaan Kontrol Pasif Aliran pada Bluff body Model Kendaraan', ProgramStudi: 'MESIN' },
      ],
    };
  },
};
</script>

<style scoped>
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

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