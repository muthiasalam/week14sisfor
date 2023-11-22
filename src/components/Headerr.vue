<template>
    <header class="h-20 w-full flex items-center justify-between bg-white">
    <div class="navbar-left pl-10">
      <p id="logo">
        <img src="../assets/logo/imglogo-b.png" alt="logo" width="300" height="60">
      </p>
    </div>
    <div class="navbar-right flex items-center pr-10">
      <ul class="list-none space-x-10 hidden md:flex">
        <!-- Daftar item menu -->
        <li class="hover:text-red-500 SITEMAP">SITEMAP</li>
        <li class="hover:text-red-500 QUICKACCESS">
          <i class="fas fa-key"></i> QUICK ACCESS
        </li>
        <li class="relative group">
          <a href="#">
            <img src="../assets/header/globe.png" alt="other icon" width="19" height="19">
          </a>
          <div class="hidden absolute right-0 mt-0 w-6 bg-white shadow-lg group-hover:block">
            <ul class="divide-y divide-gray-200">
              <li class="group hover:bg-gray-100 p-1 cursor-pointer">
                <a href="#" class="flex items-center">
                  <img src="../assets/header/Indonesia.png" alt="Indonesia" class="w-6 h-4 mr-2">
                </a>
              </li>
              <li class="group hover:bg-gray-100 p-1 cursor-pointer">
                <a href="#" class="flex items-center">
                  <img src="../assets/header/English.png" alt="English" class="w-6 h-4 mr-2">
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="SEARCH_ICON">
          <a href="#">
            <img src="../assets/header/search.png" alt="search" width="19" height="19">
          </a>
        </li>
      </ul>
      <div class="hamburger md:hidden" id="hamburger-icon">
         <img src="../assets/header/hamburger.jpg" alt="hamburger" width="19" height="19">
      </div>
    </div>
  </header>
</template>