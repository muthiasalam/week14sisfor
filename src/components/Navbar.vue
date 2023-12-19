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
            <router-link to="/dharma_wanita/halaman-utama" class="py-2 block hover:bg-red-500">HALAMAN UTAMA DHARMA
              WANITA</router-link>
            <router-link to="/dharma_wanita/struktur-organisasi-dharmawanita" class="py-2 block hover:bg-red-500">STRUKTUR
              ORGANISASI DHARMAWANITA</router-link>
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
      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="beranda">
        <span class=" ml-17 mr-17 text-10 font-bold">BERANDA</span>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="profil">
        <span class=" ml-17 mr-17 text-10 font-bold">PROFIL</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu1">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>

      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="akademik">
        <span class=" ml-17 mr-17 text-10 font-bold">AKADEMIK</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu2">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>




      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="sumber">
        <span class=" ml-17 mr-17 text-10 font-bold">SUMBER DAYA</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu3">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="k3">
        <span class=" ml-17 mr-17 text-10 font-bold">K3</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu4">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="kemahasiswaan">
        <span class=" ml-17 mr-17 text-10 font-bold">KEMAHASISWAAN</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu5">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="riset">
        <span class=" ml-17 mr-17 text-10 font-bold">RISET DAN INOVASI</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu6">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="kemitraan">
        <span class=" ml-17 mr-17 text-10 font-bold">KEMITRAAN</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu7">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>


      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="dpm">
        <span class=" ml-17 mr-17 text-10 font-bold">DPM</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu8">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>

      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="cot">
        <span class=" ml-17 mr-17 text-10 font-bold">COT</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu9">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
        </div>
      </li>

      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center"
        id="dharma">
        <span class=" ml-17 mr-17 text-10 font-bold">DHARMA</span>
      </li>
      <li class="hidden py-2 ml-10 mr-10 m-0 p-0 flex items-center" id="submenu10">
        <div class="flex-col">
          <div><a href="#submenu1" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 1</a></div>
          <div><a href="#submenu2" class="ml-17 mr-17 py-2 text-10 font-bold">SUBMENU 2</a></div>
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
