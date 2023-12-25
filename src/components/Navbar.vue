<template>
  <div class="menu-bar bg-merahdesain flex justify-center items-center">
    <nav class="nav-bar">
      <ul class="list-none text-xs flex justify-center items-center space-x-5 p-2">
        <div class="hidden xl:flex">
          <router-link to="/" class="hover:bg-red-500 text-white">BERANDA</router-link>
        </div>
        <div class="hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">PROFIL</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/profil/sejarah-singkat" class="py-2 block hover:bg-red-500">SEJARAH SINGKAT</router-link>
            <router-link to="/profil/visi-misi-dan-sasaran" class="py-2 block hover:bg-red-500">VISI MISI DAN
              SASARAN</router-link>
            <router-link to="/profil/manajemen" class="py-2 block hover:bg-red-500">MANAJEMEN</router-link>
            <router-link to="/profil/struktur-organisasi" class="py-2 block hover:bg-red-500">STRUKTUR
              ORGANISASI</router-link>
            <router-link to="/profil/master-plan" class="py-2 block hover:bg-red-500">MASTER PLAN</router-link>
            <router-link to="/profil/peta-kampus" class="py-2 block hover:bg-red-500">PETA KAMPUS</router-link>
            <router-link to="/profil/mediatek" class="py-2 block hover:bg-red-500">MEDIATEK</router-link>

          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">AKADEMIK</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/akademik/departemen" class="py-2 block hover:bg-red-500">DEPARTEMEN</router-link>
            <router-link to="/akademik/program-magister" class="py-2 block hover:bg-red-500">PROGRAM
              MAGISTER</router-link>
            <router-link to="/akademik/program-doktor" class="py-2 block hover:bg-red-500">PROGRAM DOKTOR</router-link>
            <router-link to="/akademik/program-profesi" class="py-2 block hover:bg-red-500">PROGRAM PROFESI</router-link>
            <router-link to="/akademik/akreditasi" class="py-2 block hover:bg-red-500">AKREDITASI</router-link>
            <router-link to="/akademik/kalender-akademik" class="py-2 block hover:bg-red-500">KALENDER
              AKADEMIK</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">SUMBER DAYA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/sumber-daya/guru-besar" class="py-2 block hover:bg-red-500">GURU BESAR</router-link>
            <router-link to="/sumber-daya/tenaga-kependidikan" class="py-2 block hover:bg-red-500">TENAGA
              KEPENDIDIKAN</router-link>
            <router-link to="/sumber-daya/sarana-dan-prasarana" class="py-2 block hover:bg-red-500">SARANA DAN
              PRASARANA</router-link>
            <router-link to="/sumber-daya/perpustakaan" class="py-2 block hover:bg-red-500">PERPUSTAKAAN</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">K3</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/k3/profil-k3" class="py-2 block hover:bg-red-500">PROFIL K3</router-link>
            <router-link to="/k3/struktur-organisasi-k3" class="py-2 block hover:bg-red-500">STRUKTUR ORGANISASI
              K3</router-link>
            <router-link to="/k3/tentang-k3-ft-uh" class="py-2 block hover:bg-red-500">TENTANG K3 FT-UH</router-link>
            <router-link to="/k3/file-pendukung" class="py-2 block hover:bg-red-500">FILE PENDUKUNG</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">KEMAHASISWAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/kemahasiswaan/upt-asrama-ramtek" class="py-2 block hover:bg-red-500">UPT ASRAMA
              (RAMTEK)</router-link>
            <router-link to="/kemahasiswaan/pengembangan-karakter-mahasiswa"
              class="py-2 block hover:bg-red-500">PENGEMBANGAN KARAKTER MAHASISWA</router-link>
            <router-link to="/kemahasiswaan/peningkatan-prestasi-mahasiswa"
              class="py-2 block hover:bg-red-500">PENINGKATAN PRESTASI MAHASISWA</router-link>
            <router-link to="/kemahasiswaan/mahasiswa-inbound-dan-outbound" class="py-2 block hover:bg-red-500">MAHASISWA
              INBOUND DAN OUTBOUND</router-link>
            <router-link to="/kemahasiswaan/alumni" class="py-2 block hover:bg-red-500">ALUMNI</router-link>
            <router-link to="/kemahasiswaan/aturan-kemahasiswaan" class="py-2 block hover:bg-red-500">ATURAN
              KEMAHASISWAAN</router-link>
            <router-link to="/kemahasiswaan/pengumuman" class="py-2 block hover:bg-red-500">PENGUMUMAN</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">RISET DAN INOVASI</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/riset-dan-inovasi/daftar-penelitian-lbe-tahun-2020"
              class="py-2 block hover:bg-red-500">DAFTAR PENELITIAN TERDAHULU</router-link>
            <router-link to="/riset-dan-inovasi/hasil-inovasi" class="py-2 block hover:bg-red-500">HASIL
              INOVASI</router-link>
            <router-link to="/riset-dan-inovasi/hak-kekayaan-intelektual" class="py-2 block hover:bg-red-500">HAK KEKAYAAN
              INTELEKTUAL</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">KEMITRAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/kemitraan/kemitraan-dalam-negeri" class="py-2 block hover:bg-red-500">KERJASAMA DALAM
              NEGERI</router-link>
            <router-link to="/kemitraan/kemitraan-luar-negeri" class="py-2 block hover:bg-red-500">KERJASAMA LUAR
              NEGERI</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">GPM-PR</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/gpm-pr/profil-gpm-pr" class="py-2 block hover:bg-red-500">PROFIL GPM-PR</router-link>
            <router-link to="/gpm-pr/dokumen-mutu" class="py-2 block hover:bg-red-500">DOKUMEN MUTU</router-link>
            <router-link to="/gpm-pr/audit-mutu-akademik-internal" class="py-2 block hover:bg-red-500">AUDIT MUTU AKADEMIK
              INTERNAL</router-link>
            <router-link to="/gpm-pr/lam-teknik" class="py-2 block hover:bg-red-500">LAM TEKNIK</router-link>
            <router-link to="/gpm-pr/laporan-kepuasan-pengguna" class="py-2 block hover:bg-red-500">LAPORAN KEPUASAN
              PENGGUNA</router-link>
            <router-link to="/gpm-pr/survei-kepuasan-layanan-mahasiswa" class="py-2 block hover:bg-red-500">SURVEI
              KEPUASAN LAYANAN MAHASISWA</router-link>
            <router-link to="/gpm-pr/galeri" class="py-2 block hover:bg-red-500">GALERI</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">COT</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/cot/cot-website" class="py-2 block hover:bg-red-500">COT WEBSITE</router-link>
            <router-link to="/cot/jurnal-cot" class="py-2 block hover:bg-red-500">JURNAL COT</router-link>
            <router-link to="/cot/cot-newsletter" class="py-2 block hover:bg-red-500">COT NEWSLETTER</router-link>
            <router-link to="/cot/u-i-g-collaboration" class="py-2 block hover:bg-red-500">U-I-G
              COLLABORATION</router-link>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">DHARMA WANITA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <router-link to="/dharma-wanita/halaman-utama" class="py-2 block hover:bg-red-500">HALAMAN UTAMA DHARMA
              WANITA</router-link>
           
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
      </ul>
    </nav>
    <nav class="nav-bar2 pt-3 pb-3">
      <ul class="list-none space-x-10 lg:hidden flex justify-center items-center">
        <li class="hover:bg-red-500 SITEMAP text-10 text-white">SITEMAP</li>
        <li class="hover:bg-red-500 QUICKACCESS text-10 text-white">
          <i class="fas fa-key"></i> QUICK ACCESS
        </li>
        <li class="group w-6 h-4">
          <img src="../assets/header/Indonesia.png" alt="Indonesia" class="w-full h-full">
        </li>
        <li class="group w-6 h-4">
          <img src="../assets/header/English.png" alt="Indonesia" class="w-full h-full mr-2">
        </li>
        <li class="SEARCH_ICON">
          <a href="#">
            <img src="../assets/header/a.png" alt="search" width="15" height="15">
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="hidden" id="mobile-menu">
    <ul class="flex-col bg-white p-0 space-y-0">
      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="beranda">
        <router-link to="/" class=" ml-17 mr-17 py-2 text-10 font-bold">BERANDA</router-link>
    </li>

    
    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="profil">
      <span class=" ml-17 mr-17 text-10 font-bold" >PROFIL</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu1">
      <div class="flex-col">
        <div><router-link to="/profil/sejarah-singkat" class="ml-17 mr-17 py-2 text-10 font-bold">SEJARAH SINGKAT</router-link></div>
        <div>    <router-link to="/profil/visi-misi-dan-sasaran" class="ml-17 mr-17 py-2 text-10 font-bold">VISI MISI DAN SASARAN</router-link></div>
        <div>    <router-link to="/profil/manajemen" class="ml-17 mr-17 py-2 text-10 font-bold">MANAJEMEN</router-link></div>
          <div>    <router-link to="/profil/struktur-organisasi" class="ml-17 mr-17 py-2 text-10 font-bold">STRUKTUR ORGANISASI</router-link></div>
            <div>    <router-link to="/profil/master-plan" class="ml-17 mr-17 py-2 text-10 font-bold">MASTER PLAN</router-link></div>
              <div>   <router-link to="/profil/peta-kampus" class="ml-17 mr-17 py-2 text-10 font-bold">PETA KAMPUS</router-link></div>
                <div>  <router-link to="/profil/mediatek" class="ml-17 mr-17 py-2 text-10 font-bold">MEDIATEK</router-link></div>
      </div>
    </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="akademik">
      <span class=" ml-17 mr-17 text-10 font-bold" >AKADEMIK</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu2">
      <div class="flex-col">
        <div><router-link to="/akademik/departemen" class="ml-17 mr-17 py-2 text-10 font-bold" >DEPARTEMEN</router-link></div>
        <div><router-link to="/akademik/magister" class="ml-17 mr-17 py-2 text-10 font-bold" >PROGRAM MAGISTER</router-link></div>
        <div><router-link to="/akademik/doktor" class="ml-17 mr-17 py-2 text-10 font-bold" >PROGRAM DOKTOR</router-link></div>
        <div><router-link to="/akademik/profesi" class="ml-17 mr-17 py-2 text-10 font-bold" >PROGRAM PROFESI</router-link></div>
        <div><router-link to="/akademik/akreditasi" class="ml-17 mr-17 py-2 text-10 font-bold" >AKREDITASI</router-link></div>
      </div>
    </li>




      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="sumber">
      <span class=" ml-17 mr-17 text-10 font-bold" >SUMBER DAYA</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu3">
      <div class="flex-col">
        <div><router-link to="/sumber-daya/guru-besar" class="ml-17 mr-17 py-2 text-10 font-bold" >GURU BESAR</router-link></div>
        <div><router-link to="/sumber-daya/tenaga-kependidikan" class="ml-17 mr-17 py-2 text-10 font-bold" >TENAGA KEPENDIDIKAN</router-link></div>
        <div><router-link to="/sumber-daya/sarana-dan-prasarana" class="ml-17 mr-17 py-2 text-10 font-bold" >SARANA DAN PRASARANA</router-link></div>
        <div><router-link to="/sumber-daya/perpustakaan" class="ml-17 mr-17 py-2 text-10 font-bold" >PERPUSTAKAAN</router-link></div>
        
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="k3">
      <span class=" ml-17 mr-17 text-10 font-bold" >K3</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu4">
      <div class="flex-col">
        <div><router-link to="/k3/profile" class="ml-17 mr-17 py-2 text-10 font-bold" >PROFIL</router-link></div>
        <div><router-link to="/k3/struktur-organisasi" class="ml-17 mr-17 py-2 text-10 font-bold" >STRUKTUR ORGANISASI</router-link></div>
        <div><router-link to="/k3/tentang" class="ml-17 mr-17 py-2 text-10 font-bold" >TENTANG K3 FT-UH</router-link></div>
        <div><router-link to="/k3/file" class="ml-17 mr-17 py-2 text-10 font-bold" >FILE PENDUKUNG</router-link></div>
        
      </div>
    </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="kemahasiswaan">
      <span class=" ml-17 mr-17 text-10 font-bold" >KEMAHASISWAAN</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu5">
      <div class="flex-col">
        <div><router-link to="/kemahasiswaan/upt-asrama-ramtek" class="ml-17 mr-17 py-2 text-10 font-bold" >UPT ASRAMA (RAMTEK)</router-link></div>
        <div><router-link to="/kemahasiswaan/pengembangan-karakter" class="ml-17 mr-17 py-2 text-10 font-bold" >PENGEMBANGAN KARAKTER MAHASISWA</router-link></div>
        <div><router-link to="/kemahasiswaan/peningkatan-prestasi" class="ml-17 mr-17 py-2 text-10 font-bold" >PENINGKATAN PRESTASI MAHASISWA</router-link></div>
        <div><router-link to="/kemahasiswaan/mahasiswa-inbound-dan-outbound" class="ml-17 mr-17 py-2 text-10 font-bold" >MAHASISWA INBOUND DAN OUTBOUND</router-link></div>
        <div><router-link to="/kemahasiswaan/alumni" class="ml-17 mr-17 py-2 text-10 font-bold" >ALUMNI</router-link></div>
        <div><router-link to="/kemahasiswaan/aturan-kemahasiswaan" class="ml-17 mr-17 py-2 text-10 font-bold" >ATURAN KEMAHASISWAAN</router-link></div>
        <div><router-link to="/kemahasiswaan/pengumuman" class="ml-17 mr-17 py-2 text-10 font-bold" >PENGUMUMAN</router-link></div>
      </div>
     
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="riset">
      <span class=" ml-17 mr-17 text-10 font-bold" >RISET DAN INOVASI</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu6">
      <div class="flex-col">
        <div><router-link to="/riset-dan-inovasi/daftar-penelitian" class="ml-17 mr-17 py-2 text-10 font-bold" >DAFTAR PENELITIAN </router-link></div>
        <div><router-link to="/riset-dan-inovasi/hasil-inovasi" class="ml-17 mr-17 py-2 text-10 font-bold" >HASIL INOVASI</router-link></div>
        <div><router-link to="/riset-dan-inovasi/hak-kekayaan-intelektual" class="ml-17 mr-17 py-2 text-10 font-bold" >HAK KEKAYAAN INTELEKTUAL</router-link></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="kemitraan">
      <span class=" ml-17 mr-17 text-10 font-bold" >KEMITRAAN</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu7">
      <div class="flex-col">
        <div><router-link to="/kemitraan/kemitraan-dalam-negeri" class="ml-17 mr-17 py-2 text-10 font-bold" >KERJASAMA DALAM NEGERI</router-link></div>
        <div><router-link to="/kemitraan/kemitraan-luar-negeri" class="ml-17 mr-17 py-2 text-10 font-bold" >KERJASAMA LUAR NEGERI</router-link></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="dpm">
      <span class=" ml-17 mr-17 text-10 font-bold" >DPM</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu8">
      <div class="flex-col">
        <div><router-link to="/gpm-pr/profil-gpm-pr" class="ml-17 mr-17 py-2 text-10 font-bold" >PROFIL GPM-PR</router-link></div>
        <div><router-link to="/gpm-pr/dokumen-mutu" class="ml-17 mr-17 py-2 text-10 font-bold" >DOKUMEN MUTU</router-link></div>
        <div><router-link to="/gpm-pr/audit-mutu-akademik" class="ml-17 mr-17 py-2 text-10 font-bold" >AUDIT MUTU AKADEMIK INTERNAL</router-link></div>
        <div><router-link to="/gpm-pr/lam-teknik" class="ml-17 mr-17 py-2 text-10 font-bold" >LAM TEKNIK</router-link></div>
        <div><router-link to="/gpm-pr/laporan-kepuasan-pengguna" class="ml-17 mr-17 py-2 text-10 font-bold" >LAPORAN KEPUASAN PENGGUNA</router-link></div>
        <div><router-link to="/gpm-pr/survei-kepuasan-layanan-mahasiswa" class="ml-17 mr-17 py-2 text-10 font-bold" >SURVEI KEPUASAN LAYANAN </router-link></div>
        <div><router-link to="/gpm-pr/galeri" class="ml-17 mr-17 py-2 text-10 font-bold" >GALERI</router-link></div>
      </div>
    </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="cot">
      <span class=" ml-17 mr-17 text-10 font-bold" >COT</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu9">
      <div class="flex-col">
        <div><router-link to="/cot/cot-website" class="ml-17 mr-17 py-2 text-10 font-bold" >COT WEBSITE</router-link></div>
        <div><router-link to="/cot/jurnal-cot" class="ml-17 mr-17 py-2 text-10 font-bold" >JURNAL COT</router-link></div>
        <div><router-link to="/cot/cot-newsletter" class="ml-17 mr-17 py-2 text-10 font-bold" >COT NEWSLETTER</router-link></div>
        <div><router-link to="/cot/u-i-g-collaboration" class="ml-17 mr-17 py-2 text-10 font-bold" >U-I-G COLLABORATION</router-link></div>
    </div>
      </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="dharma">
      <span class=" ml-17 mr-17 text-10 font-bold" >DHARMA</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu10">
      <div class="flex-col">
        <div><router-link to="/dharma_wanita/halaman-utama" class="ml-17 mr-17 py-2 text-10 font-bold" >HALAMAN UTAMA DHARMA WANITA</router-link></div>
        
      </div>
    </li>

    </ul>
  </div>
</template>


<script>
export default {
  methods: {
    toggleSubMenu(event) {
      const allSubmenus = document.querySelectorAll('.submenu');
      allSubmenus.forEach((submenu) => {
        if (submenu !== event.currentTarget.querySelector('.submenu')) {
          submenu.classList.add('hidden');
        }
      });
      event.currentTarget.querySelector('.submenu').classList.toggle('hidden');
    }
  },
  mounted() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-bar .hidden.xl\\:flex');

    let isMenuOpen = false;

    hamburgerIcon.addEventListener('click', () => {
      if (isMenuOpen) {
        mobileMenu.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
      }
      isMenuOpen = !isMenuOpen;
    });

    const profil = document.getElementById('profil');
    const profilesub = document.getElementById('submenu1');

  // Tambahkan event listener untuk menangani klik pada elemen beranda
  profil.addEventListener('click', function() {
    // Ubah visibilitas elemen profilesub saat beranda diklik
    if (profilesub.classList.contains('hidden')) {
      profilesub.classList.remove('hidden');
    } else {
      profilesub.classList.add('hidden');
    }
  });

  const akademik = document.getElementById('akademik');
  const akademiksub = document.getElementById('submenu2');

  // Tambahkan event listener untuk menangani klik pada elemen beranda
  akademik.addEventListener('click', function() {
    // Ubah visibilitas elemen profilesub saat beranda diklik
    if (akademiksub.classList.contains('hidden')) {
      akademiksub.classList.remove('hidden');
    } else {
      akademiksub.classList.add('hidden');
    }
  });


  const sumber = document.getElementById('sumber');
const sumbersub = document.getElementById('submenu3');

  
  sumber.addEventListener('click', function() {
    
    if (sumbersub.classList.contains('hidden')) {
      sumbersub.classList.remove('hidden');
    } else {
      sumbersub.classList.add('hidden');
    }
  });

  const k3 = document.getElementById('k3');
const k3sub = document.getElementById('submenu4');

  
  k3.addEventListener('click', function() {
    
    if (k3sub.classList.contains('hidden')) {
      k3sub.classList.remove('hidden');
    } else {
      k3sub.classList.add('hidden');
    }
  });


  const kemahasiswaan = document.getElementById('kemahasiswaan');
const kemahasiswaansub = document.getElementById('submenu5');

  
  kemahasiswaan.addEventListener('click', function() {
    
    if (kemahasiswaansub.classList.contains('hidden')) {
      kemahasiswaansub.classList.remove('hidden');
    } else {
      kemahasiswaansub.classList.add('hidden');
    }
  });

  const riset = document.getElementById('riset');
const risetsub = document.getElementById('submenu6');

  
  riset.addEventListener('click', function() {
    
    if (risetsub.classList.contains('hidden')) {
      risetsub.classList.remove('hidden');
    } else {
      risetsub.classList.add('hidden');
    }
  });

  const kemitraan = document.getElementById('kemitraan');
const kemitraansub = document.getElementById('submenu7');

  
  kemitraan.addEventListener('click', function() {
    
    if (kemitraansub.classList.contains('hidden')) {
      kemitraansub.classList.remove('hidden');
    } else {
      kemitraansub.classList.add('hidden');
    }
  });

  const dpm = document.getElementById('dpm');
const dpmsub = document.getElementById('submenu8');

  
  dpm.addEventListener('click', function() {
    
    if (dpmsub.classList.contains('hidden')) {
      dpmsub.classList.remove('hidden');
    } else {
      dpmsub.classList.add('hidden');
    }
  });

  const cot = document.getElementById('cot');
const cotsub = document.getElementById('submenu9');

  
  cot.addEventListener('click', function() {
    
    if (cotsub.classList.contains('hidden')) {
      cotsub.classList.remove('hidden');
    } else {
      cotsub.classList.add('hidden');
    }
  });

  const dharma = document.getElementById('dharma');
const dharmasub = document.getElementById('submenu10');

  
  dharma.addEventListener('click', function() {
    
    if (dharmasub.classList.contains('hidden')) {
      dharmasub.classList.remove('hidden');
    } else {
      dharmasub.classList.add('hidden');
    }
  });

    

    menuLinks.forEach((link) => {
      link.addEventListener('click', this.toggleSubMenu);
    });
  }
}
</script>