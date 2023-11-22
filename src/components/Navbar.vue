<template>
     <div class="menu-bar bg-merahdesain flex justify-center items-center">
    <nav class="nav-bar">
      <ul class="list-none text-xs flex justify-center items-center space-x-5 p-2">
        <div class="hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">BERANDA</a>
        </div>
        <div class="hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">PROFIL</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">AKADEMIK</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">SUMBER DAYA</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">K3</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">KEMAHASISWAAN</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">RISET DAN INOVASI</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">KEMITRAAN</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">DPM-PR</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">COT</a>
          <img loading="lazy" src="../assets/footer/dropdown.png"
            class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
        </div>
        <div class=" hidden xl:flex">
          <a href="#" class="hover:text-red-500 text-white">DHARMA WANITA</a>
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
      <li class="py-2 ml-10 mr-10 border-t-2 border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-17 mr-17 text-10 font-bold">BERANDA</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">PROFIL</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">AKADEMIK</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">SUMBER DAYA</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">K3</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">KEMAHASISWAAN</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">RISET DAN INOVASI</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">KEMITRAAN</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">DPM-PR</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">COT</span>
      </li>
      <li class="py-2 ml-10 mr-10 border-t border-b hover:bg-red-500 hover:text-white m-0 p-0 flex items-center">
        <span class="ml-15 text-10 font-bold">DHARMA WANITA</span>
      </li>
    </ul>
  </div>
</template>