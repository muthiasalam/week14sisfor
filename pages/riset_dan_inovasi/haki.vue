<template>
  <div>
    <h4>Halaman > Hak Kekayaan Intelektual</h4>

    <!-- Tabel 1: Paten -->
    <h2>Paten</h2>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Status</th>
          <th>Inventor</th>
          <th>Invensi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paten, index) in patenData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ paten.Status }}</td>
          <td>{{ paten.Inventor }}</td>
          <td>{{ paten.Invensi }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Tabel 2: Desain Industri -->
    <h2>Desain Industri</h2>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Status</th>
          <th>Pendesain</th>
          <th>Nama Ciptaan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(desain, index) in desainIndustriData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ desain.Status }}</td>
          <td>{{ desain.Pendesain }}</td>
          <td>{{ desain['Nama Ciptaan'] }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Tabel 3: Merek -->
    <h2>Merek</h2>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Status</th>
          <th>Pemilik</th>
          <th>Merek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(merek, index) in merekData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ merek.Status }}</td>
          <td>{{ merek.Pemilik }}</td>
          <td>{{ merek.Merek }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Tabel 4: Hak Cipta -->
    <h2>Hak Cipta</h2>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nomor Permohonan</th>
          <th>Pencipta</th>
          <th>Nama Ciptaan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hakCipta, index) in hakCiptaData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ hakCipta['Nomor Permohonan'] }}</td>
          <td>{{ hakCipta.Pencipta }}</td>
          <td>{{ hakCipta['Nama Ciptaan'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    patenData: [
  { No: 1, Status: 'Masa Pengumuman', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'PAPAN CETAK SIRKUIT ELEKTRONIK MODULAR UNTUK PENGEMBANGAN HIPERKOMPUTER ATAU SUPERKOMPUTER' },
  { No: 2, Status: 'Pelayanan Teknis', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'PEMBANGKIT LISTRIK TENAGA SOLAR-TERMAL UNTUK SISTEM PENDINGIN MOBIL PARKIR' },
  { No: 3, Status: 'Pembuatan Sertifikat', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'BUKU PINTAR ELEKTRONIK' },
  { No: 4, Status: 'Pelayanan Teknis', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'PENYUPLAI DAYA LISTRIK DENGAN SUMBER ENERGI TERBARUKAN DAN TERMINAL ARUS SEARAH DAN ARUS' },
  { No: 5, Status: 'Masa Pengumuman', Inventor: 'Dr. Ir. Zuryati Djafar, MT ; Dr.-ing. Faizal Arya Samman, ST.,MT ; Dr.-ing. Ir. Wahyu Haryadi Piarah, MSME', Invensi: 'SISTEM PENYEJUK KABIN KENDARAAN DENGAN MEMANFAATKAN ENERGI PANAS BUANG' },
  { No: 6, Status: 'Pelayanan Teknis', Inventor: 'Amaliah Nurdin, ST., MT ; Dr. Eng, Ir. Rita Tahir Lopa, MT.', Invensi: 'PROSES PEMURNIAN AIR HUJAN UNTUK KEBUTUHAN AIR MINUM' },
  { No: 7, Status: 'Masa Pengumuman', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'ROUTER JARINGAN ON-CHIP UNTUK SISTEM MULTI PROSESOR DENGAN PENYANGGA DATA ADAPTIF' },
  { No: 8, Status: 'Pelayanan Teknis', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'ALGORlTMA TRANSFER DAYA MAKSIMUM MELALUi METODE PENYAKLARAN' },
  { No: 9, Status: 'Pelayanan Teknis', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'JARINGAN ON-CHIP DENGAN KUALITAS-LAYANAN MENGGUNAKAN METODE AKSES JAMAK BERBASIS LABEL IDENTITAS DINAMIS' },
  { No: 10, Status: 'Diberi Paten', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'MONITORING DAN KENDALI TERPADU SISTEM LISTRIK HIBRID TENAGA SURYA DENGAN EKSTRA INSTALASI LISTRIK ARUS SEARAH' },
  { No: 11, Status: 'Pelayanan Teknis', Inventor: 'Dr. Syafaruddin', Invensi: 'SIMULATOR REAL-TIME UNTUK PELACAK TITIK MAKSIMUM PANEL SURYA BERBASIS SISTEM CERDAS' },
  { No: 12, Status: 'Masa Pengumuman', Inventor: 'Dr.-Ing. Faizal Arya Samman, ST, MT.', Invensi: 'Sistem Otomatis Pembersih Permukaan Panel Surya' },
  { No: 13, Status: 'Pelayanan Teknis', Inventor: 'Dr. Rudy Djarnaluddin, ST, MEng', Invensi: 'METODE SAMBUNGAN HUBUNGAN BALOK-KOLOM PRACETAK MENGGUNAKAN LEMBARAN FIBER REINFORCED PLASTICS (FRP)' },
  { No: 14, Status: 'Pengecekan Pembayaran Substantif', Inventor: 'Prof. Dr.Ir. Syafruddin Syarif.,MT.;Dr. Mardiana Ahmad, S.SiT.,M.Keb;Nila Trisna Yulianti, S.SiT.,M.Keb;Putri Yayu, S.SiT.,M.keb', Invensi: 'PARTOGRAF BERBASIS SISTEM KOMPUTER DALAM MEMONITORING KEMAJUAN PERSALINAN' },
  { No: 15, Status: 'Pengecekan Pembayaran Substantif', Inventor: 'Andi Amrayani, S.ST .,M.Keb ; Prof. Dr.Ir. Syafruddin Syarif.,MT ; Sukmawati, S.ST .,M.Keb ; Murni Lestari, S.ST .,M.Keb ; Karnilan Lestari Ningsi Sam, S.ST .,M.Keb ; Dr. Mardiana Ahmad, S.SiT .,M.Keb', Invensi: 'KURSI ERGONOMIS UNTUK IBU NIFAS' },
  { No: 16, Status: 'Diberi Paten', Inventor: 'Dr.-lng. Faizal Arya Samman, ST, MT.', Invensi: 'METODE ARBITRASI PAKET DATA DENGAN TINGKAT PRIORITAS MAJEMUK DAN TUNGGAL PADA JARINGAN ON-CHIP' },
  { No: 17, Status: 'Masa Pengumuman', Inventor: 'Dr. Syafaruddin', Invensi: 'SISTEM PENDINGIN UDARA DENGAN ENERGI MATAHARI' },
],
desainIndustriData: [
  { No: 1, Status: 'Didaftar', Pendesain: 'Ir. Syarifuddin Dewa, M.Si', 'Nama Ciptaan': 'Kapal Layar' },
],
merekData: [
  { No: 1, Status: 'Pelayanan Teknis', Pemilik: 'Rafiuddin Syam, ST., M.Eng.,PhD ; Aswar Hayat, ST., M.Sc.,Ph.D ; Dr.-Eng Andi Amijoyo Mochtar, ST., M.Sc. ; Dr-Ing. Faizal Arya Samman, ST, MT. ; Amiruddin, ST.,MT ; Arham Hamid, SE., M.Si', Merek: 'Moliku' },
],
hakCiptaData: [
  { No: 1, 'Nomor Permohonan': 'C00201816271', Pencipta: 'Indrabayu', 'Nama Ciptaan': 'Sistem Transportasi Cerdas (Tinjauan Pengkodean Dengan MATLAB)' },
  { No: 2, 'Nomor Permohonan': 'EC00201860073', Pencipta: 'Indrabayu', 'Nama Ciptaan': 'Menjadi Technopreneur (Pendekatan Business Model Canvas)' },
  { No: 3, 'Nomor Permohonan': 'EC00201860072', Pencipta: 'Syafruddin Syarif', 'Nama Ciptaan': 'Model Sistem Cerdas Untuk Deteksi Awal Penebangan Liar Kawasan Hutan Pada Daerah Aliran Sungai' },
  { No: 4, 'Nomor Permohonan': 'EC00201857683', Pencipta: 'Muhammad Isran Ramli', 'Nama Ciptaan': 'Model Ketepatan Penentuan Lokasi Transit Oriented Development (TOD)' },
],
    };
  },
};
</script>


