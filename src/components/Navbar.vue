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
            <a href="/profil/sejarah-singkat" class="py-2 block hover:bg-red-500">SEJARAH SINGKAT</a>
            <a href="/profil/visi-misi-dan-sasaran" class="py-2 block hover:bg-red-500">VISI MISI DAN SASARAN</a>
            <a href="/profil/manajemen" class="py-2 block hover:bg-red-500">MANAJEMEN</a>
            <a href="/profil/struktur-organisasi" class="py-2 block hover:bg-red-500">STRUKTUR ORGANISASI</a>
            <a href="/profil/master-plan" class="py-2 block hover:bg-red-500">MASTER PLAN</a>
            <a href="/profil/peta-kampus" class="py-2 block hover:bg-red-500">PETA KAMPUS</a>
            <a href="/profil/mediatek" class="py-2 block hover:bg-red-500">MEDIATEK</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">AKADEMIK</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/akademik/departemen" class="py-2 block hover:bg-red-500">DEPARTEMEN</a>
            <a href="/akademik/program-magister" class="py-2 block hover:bg-red-500">PROGRAM MAGISTER</a>
            <a href="/akademik/program-doktor" class="py-2 block hover:bg-red-500">PROGRAM DOKTOR</a>
            <a href="/akademik/program-profesi" class="py-2 block hover:bg-red-500">PROGRAM PROFESI</a>
            <a href="/akademik/akreditasi" class="py-2 block hover:bg-red-500">AKREDITASI</a>
            <a href="/akademik/kalender-akademik" class="py-2 block hover:bg-red-500">KALENDER AKADEMIK</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">SUMBER DAYA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/sumber-daya/guru-besar" class="py-2 block hover:bg-red-500">GURU BESAR</a>
            <a href="/sumber-daya/tenaga-kependidikan" class="py-2 block hover:bg-red-500">TENAGA KEPENDIDIKAN</a>
            <a href="/sumber-daya/sarana-dan-prasarana" class="py-2 block hover:bg-red-500">SARANA DAN PRASARANA</a>
            <a href="/sumber-daya/perpustakaan" class="py-2 block hover:bg-red-500">PERPUSTAKAAN</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">K3</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/k3/profil-k3" class="py-2 block hover:bg-red-500">PROFIL K3</a>
            <a href="/k3/struktur-organisasi-k3" class="py-2 block hover:bg-red-500">STRUKTUR ORGANISASI</a>
            <a href="/k3/tentang-k3-ft-uh" class="py-2 block hover:bg-red-500">TENTANG K3 FT-UH</a>
            <a href="/k3/file-pendukung" class="py-2 block hover:bg-red-500">FILE PENDUKUNG</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">KEMAHASISWAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/kemahasiswaan/upt-asrama-ramtek" class="py-2 block hover:bg-red-500">UPT ASRAMA (RAMTEK)</a>
            <a href="/kemahasiswaan/pengembangan-karakter-mahasiswa" class="py-2 block hover:bg-red-500">PENGEMBANGAN KARAKTER MAHASISWA</a>
            <a href="/kemahasiswaan/peningkatan-prestasi-mahasiswa" class="py-2 block hover:bg-red-500">PENINGKATAN PRESTASI MAHASISWA</a>
            <a href="/kemahasiswaan/mahasiswa-inbound-dan-outbound" class="py-2 block hover:bg-red-500">MAHASISWA INBOUND DAN OUTBOUND</a>
            <a href="/kemahasiswaan/alumni" class="py-2 block hover:bg-red-500">ALUMNI</a>
            <a href="/kemahasiswaan/aturan-kemahasiswaan" class="py-2 block hover:bg-red-500">ATURAN KEMAHASISWAAN</a>
            <a href="/kemahasiswaan/pengumuman" class="py-2 block hover:bg-red-500">PENGUMUMAN</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">RISET DAN INOVASI</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/riset-dan-inovasi/daftar-penelitian-lbe-tahun-2020" class="py-2 block hover:bg-red-500">DAFTAR PENELITIAN TERDAHULU</a>
            <a href="/riset-dan-inovasi/hasil-inovasi" class="py-2 block hover:bg-red-500">HASIL INOVASI</a>
            <a href="/riset-dan-inovasi/hak-kekayaan-intelektual" class="py-2 block hover:bg-red-500">HAK KEKAYAAN INTELEKTUAL</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">KEMITRAAN</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/kemitraan/kemitraan-dalam-negeri" class="py-2 block hover:bg-red-500">KERJASAMA DALAM NEGERI</a>
            <a href="/kemitraan/kemitraan-luar-negeri" class="py-2 block hover:bg-red-500">KERJASAMA LUAR NEGERI</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">GPM-PR</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/gpm-pr/profil-gpm-pr" class="py-2 block hover:bg-red-500">PROFIL GPM-PR</a>
            <a href="/gpm-pr/dokumen-mutu" class="py-2 block hover:text-red-500">DOKUMEN MUTU</a>
            <a href="/gpm-pr/audit-mutu-akademik-internal" class="py-2 block hover:bg-red-500">AUDIT MUTU AKADEMIK INTERNAL</a>
            <a href="/gpm-pr/lam-teknik" class="py-2 block hover:bg-red-500">LAM TEKNIK</a>
            <a href="/gpm-pr/laporan-kepuasan-pengguna" class="py-2 block hover:bg-red-500">LAPORAN KEPUASAN PENGGUNA</a>
            <a href="/gpm-pr/survei-kepuasan-layanan-mahasiswa" class="py-2 block hover:bg-red-500">SURVEI KEPUASAN LAYANAN MAHASISWA</a>
            <a href="/gpm-pr/galeri" class="py-2 block hover:bg-red-500">GALERI</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">COT</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/cot/cot-website" class="py-2 block hover:bg-red-500">COT WEBSITE</a>
            <a href="/cot/jurnal-cot" class="py-2 block hover:bg-red-500">JURNAL COT</a>
            <a href="/cot/cot-newsletter" class="py-2 block hover:bg-red-500">COT NEWSLETTER</a>
            <a href="/cot/u-i-g-collaboration" class="py-2 block hover:bg-red-500">U-I-G COLLABORATION</a>
          </div>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class="hidden xl:flex">
          <a href="#" class="hover:bg-red-500 text-white">DHARMA WANITA</a>
          <div class="submenu hidden absolute bg-merahdesain z-20 mt-4 py-2 px-4 text-white shadow-lg">
            <a href="/dharma_wanita/halaman-utama" class="py-2 block hover:bg-red-500">HALAMAN UTAMA DHARMA WANITA</a>
            <a href="/dharma_wanita/struktur-organisasi-dharmawanita" class="py-2 block hover:bg-red-500">STRUKTUR ORGANISASI DHARMAWANITA</a>
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

    menuLinks.forEach((link) => {
      link.addEventListener('click', this.toggleSubMenu);
    });
  }
}
</script>
