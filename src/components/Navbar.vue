<template>
  <div class="menu-bar bg-merahdesain flex justify-center items-center">
    <nav class="nav-bar">
      <ul class="list-none text-xs flex justify-center items-center space-x-5 p-2">
        <div class="hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">BERANDA</a>
        </div>
        <div class="hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">PROFIL</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">BERITA</a>
            <a href="/profil/sejarahSingkat" class="py-2 block hover:text-red-500">SEJARAH SINGKAT</a>
            <a href="/profil/visiMisiSasaran" class="py-2 block hover:text-red-500">VISI MISI DAN SASARAN</a>
            <a href="#" class="py-2 block hover:text-red-500">MANAJEMEN</a>
            <a href="/profil/strukturOrganisasi" class="py-2 block hover:text-red-500">STRUKTUR ORGANISASI</a>
            <a href="#" class="py-2 block hover:text-red-500">MASTER PLAN</a>
            <a href="#" class="py-2 block hover:text-red-500">PETA KAMPUS</a>
            <a href="#" class="py-2 block hover:text-red-500">MEDIATEK</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">AKADEMIK</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/akademik/akreditasi" class="py-2 block hover:text-red-500">DEPARTEMEN</a>
            <a href="#" class="py-2 block hover:text-red-500">PROGRAM MAGISTER</a>
            <a href="#" class="py-2 block hover:text-red-500">PROGRAM DOKTOR</a>
            <a href="#" class="py-2 block hover:text-red-500">MANAJEMEN</a>
            <a href="#" class="py-2 block hover:text-red-500">PROGRAM PROFESI</a>
            <a href="#" class="py-2 block hover:text-red-500">AKREDITASI</a>
            <a href="#" class="py-2 block hover:text-red-500">KALENDER AKADEMIK</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">SUMBER DAYA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">GURU BESAR</a>
            <a href="#" class="py-2 block hover:text-red-500">TENAGA KEPENDIDIKAN</a>
            <a href="#" class="py-2 block hover:text-red-500">SARANA DAN PRASARANA</a>
            <a href="#" class="py-2 block hover:text-red-500">PERPUSTAKAAN</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">K3</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">PROFIL K3</a>
            <a href="#" class="py-2 block hover:text-red-500">STRUKTUR ORGANISASI</a>
            <a href="#" class="py-2 block hover:text-red-500">VISI MISI DAN SASARAN</a>
            <a href="#" class="py-2 block hover:text-red-500">TENTANG K3 FT-UH</a>
            <a href="#" class="py-2 block hover:text-red-500">FILE PENDUKUNG</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">KEMAHASISWAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">UPT ASRAMA (RAMTEK)</a>
            <a href="#" class="py-2 block hover:text-red-500">PENGEMBANGAN KARAKTER MAHASISWA</a>
            <a href="#" class="py-2 block hover:text-red-500">PENINGKATAN PRESTASI MAHASISWA</a>
            <a href="#" class="py-2 block hover:text-red-500">MAHASISWA INBOUND DAN OUTBOUND</a>
            <a href="#" class="py-2 block hover:text-red-500">ALUMNI</a>
            <a href="#" class="py-2 block hover:text-red-500">ATURAN KEMAHASISWAAN</a>
            <a href="#" class="py-2 block hover:text-red-500">PENGUMUMAN</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">RISET DAN INOVASI</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/riset_dan_inovasi/penelitian" class="py-2 block hover:text-red-500">DAFTAR PENELITIAN LBE TAHUN 2020</a>
            <a href="/riset_dan_inovasi/inovasi" class="py-2 block hover:text-red-500">HASIL INOVASI</a>
            <a href="/riset_dan_inovasi/haki" class="py-2 block hover:text-red-500">HAK KEKAYAAN INTELEKTUAL</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">KEMITRAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
          <a href="/kemitraan/dalamNegeri" class="py-2 block hover:text-red-500">KERJASAMA DALAM NEGERI</a>
          <a href="/kemitraan/luarNegeri" class="py-2 block hover:text-red-500">KERJASAMA LUAR NEGERI</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">GPM-PR</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/gpm-pr/profil" class="py-2 block hover:text-red-500">PROFIL GPM-PR</a>
            <a href="/gpm-pr/dokumenMutu" class="py-2 block hover:text-red-500">DOKUMEN MUTU</a>
            <a href="/gpm-pr/auditMutu" class="py-2 block hover:text-red-500">AUDIT MUTU AKADEMIK INTERNAL</a>
            <a href="/gpm-pr/akreditasi" class="py-2 block hover:text-red-500">AKREDITASI</a>
            <a href="/gpm-pr/lamTeknik" class="py-2 block hover:text-red-500">LAM TEKNIK</a>
            <a href="/gpm-pr/laporanKepuasan" class="py-2 block hover:text-red-500">LAPORAN KEPUASAN PENGGUNA</a>
            <a href="/gpm-pr/surveiKepuasan" class="py-2 block hover:text-red-500">SURVEI KEPUASAN LAYANAN MAHASISWA</a>
            <a href="/gpm-pr/galeri" class="py-2 block hover:text-red-500">GALERI</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">COT</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">COT WEBSITE</a>
            <a href="#" class="py-2 block hover:text-red-500">JURNAL COT</a>
            <a href="#" class="py-2 block hover:text-red-500">COT NEWSLATTER</a>
            <a href="#" class="py-2 block hover:text-red-500">U-I-G COLLABORATION</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">DHARMA WANITA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="#" class="py-2 block hover:text-red-500">HALAMAN UTAMA DHARMA WANITA</a>
            <a href="#" class="py-2 block hover:text-red-500">PROFIL DHARMA WANITA</a>
            <a href="#" class="py-2 block hover:text-red-500">STRUKTUR ORGANISASI DHARMAWANITA</a>
            <a href="#" class="py-2 block hover:text-red-500">PROGRAM KERJA</a>
            <a href="#" class="py-2 block hover:text-red-500">KEGIATAN DHARMA WANITA</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
      </ul>
    </nav>
    <nav class="nav-bar2 pt-3 pb-3">
      <ul class="list-none space-x-10 lg:hidden flex justify-center items-center">
        <li class="hover:text-red-500 SITEMAP text-10 text-white">SITEMAP</li>
        <li class="hover:text-red-500 QUICKACCESS text-10 text-white">
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
      <span class=" ml-17 mr-17 text-10 font-bold" >BERANDA</span>
    </li>

    
    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="profil">
      <span class=" ml-17 mr-17 text-10 font-bold" >PROFIL</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu1">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="akademik">
      <span class=" ml-17 mr-17 text-10 font-bold" >AKADEMIK</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu2">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>




      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="sumber">
      <span class=" ml-17 mr-17 text-10 font-bold" >SUMBER DAYA</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu3">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="k3">
      <span class=" ml-17 mr-17 text-10 font-bold" >K3</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu4">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="kemahasiswaan">
      <span class=" ml-17 mr-17 text-10 font-bold" >KEMAHASISWAAN</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu5">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="riset">
      <span class=" ml-17 mr-17 text-10 font-bold" >RISET DAN INOVASI</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu6">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="kemitraan">
      <span class=" ml-17 mr-17 text-10 font-bold" >KEMITRAAN</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu7">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>


    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="dpm">
      <span class=" ml-17 mr-17 text-10 font-bold" >DPM</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu8">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="cot">
      <span class=" ml-17 mr-17 text-10 font-bold" >COT</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu9">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>

    <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center" id="dharma">
      <span class=" ml-17 mr-17 text-10 font-bold" >DHARMA</span>
    </li>
    <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu10">
      <div class="flex-col">
        <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 1</a></div>
        <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold" >SUBMENU 2</a></div>
      </div>
    </li>

    </ul>
  </div>
</template>


<script>
export default {
  
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

    // Function to toggle submenu visibility
    function toggleSubMenu(event) {
      const submenu = event.currentTarget.querySelector('.submenu');
      submenu.classList.toggle('hidden');
    }

    // Loop through each menu link to add click event
    menuLinks.forEach((link) => {
      link.addEventListener('click', toggleSubMenu);
    });


  }
}
</script>
