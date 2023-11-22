<template>
    <div class="dharmawarnita mt-30 flex mb-35 flex-col md:flex-row bg-abu">
    <div class="foto md:w-2/5 w-full h-auto relative overflow-hidden">
      <div class="foto-dharma w-full h-full relative">
        <img
          src="../assets/sambutan/bg.png"
          class="foto object-cover w-full h-full"
        />
      </div>

      <div
        class="foto-tambahan absolute inset-0 flex items-center justify-center"
      >
        <img src="../assets/sambutan/top.png" class="w-2/3" />
      </div>
    </div>
    <div
      class="dharma-kanan flex flex-col justify-center items-center md:items-start w-full md:w-3/5 md:pr-20 h-full pl-10 pr-10 pb-10"
    >
      <div class="dharma-kanan-top mb-0.5 pl-10 pr-10 pt-12">
        <p id="title" class="text-19 font-bold text-merahdesain">
          DHARMA WANITA
        </p>
      </div>
      <div class="dharma-kanan-top mb-0.5 pl-10 pr-10">
        <p id="title" class="text-19 font-bold text-merahdesain">
          PERSATUAN FAKULTAS TEKNIK
        </p>
      </div>
      <hr class="my-4 w-3/5 border-1 border-abunama mb-7 mt-1.5 ml-10 mr-10" />
      <div class="dharma-kanan-bottom text-justify pl-10 pr-10">
        <span id="desc" class="text-12 text-tulisan text-abusambutan"
          >Dharma Wanita Persatuan Fakultas Teknik Unhas yang diketuai oleh Ny.
          Muralia Isran Ramli, aktif melakukan berbagai macam kegiatan seperti
          amaliah ramadhan, arisan di kapal, kegiatan BKMT dan DPW Unhas.</span
        >
      </div>
      <div class="tombol ml-auto mt-10 pr-10">
        <button
          class="bg-merahdesain text-white text-14 py-2 px-4 rounded-none hover:bg-red-400"
          onclick="window.location.href = 'https://eng.unhas.ac.id/fakultas/dharmawanita';"
        >
          Selengkapnya
        </button>
      </div>
    </div>
  </div>
</template>