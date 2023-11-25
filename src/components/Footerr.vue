<template>
    <footer
    class="bg-merahgelap relative py-10 sm:flex md:items-center md:justify-between"
  >
    <img
      class="hidden md:block absolute inset-0 w-1/2 h-1/2 mx-auto my-auto bg-cover bg-center"
      src="../assets/footer/footer-bg.png"
      alt="Background Image"
    />
    <div
      class="footer-left flex flex-col justify-between pl-4 md:pl-20 pt-4 md:pt-20 pb-4 md:pb-20 text-xs md:text-base"
    >
      <div class="footer-left-top">
        <div class="logo-unhas">
          <img
            src="../assets/logo/Group 168.png"
            alt="logo"
            width="386"
            height="72"
          />
        </div>
        <p class="text-white mt-2 md:mt-10 font-bold mb-2">Alamat</p>
        <div class="alamat flex ml-0 mt-0 mb-2 md:mb-10">
          <div class="alamat-icon">
            <img
              src="../assets/logo/icons8-location-50.png"
              class="mr-3"
              width="20"
              height="20"
            />
          </div>
          <div class="alamat-text">
            <a
              href="https://www.google.com/maps?q=Jl.+Poros+Malino+Km.+6+Bontomarannu+92171+Gowa,+South+Sulawesi+Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              Jl. Poros Malino Km. 6 Bontomarannu 92171 Gowa, South Sulawesi
              Indonesia
            </a>
          </div>
        </div>
        <p class="text-white mt-2 md:mt-10 font-bold mb-2">Kontak</p>
        <div class="kontak flex flex-col">
          <div class="kontak-top flex">
            <div class="kontak-top-left">
              <a
                href="https://api.whatsapp.com/send?phone=6285299999958"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/logo/icons8-phone-30.png"
                  alt="logo"
                  class="mr-3"
                  width="20"
                  height="20"
                />
              </a>
            </div>
            <div class="kontak-top-right">
              <a href="mailto:teknik@unhas.ac.id" class="text-white">
                +62 852-9999-9958
              </a>
            </div>
          </div>
          <div class="kontak-bottom flex">
            <div class="kontak-bottom-left">
              <a href="mailto:teknik@unhas.ac.id" class="text-white">
                <img
                  src="../assets/logo/icons8-mail-24.png"
                  alt="logo"
                  class="mr-3"
                  width="20"
                  height="20"
                />
              </a>
            </div>
            <div class="kontak-bottom-right">
              <a href="mailto:teknik@unhas.ac.id" class="text-white">
                teknik@unhas.ac.id
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-white mt-2 md:mt-10 font-bold mb-2">Sosial Media</p>
      <div class="footer-left-bottom flex">
        <a
          href="https://m.facebook.com/profile.php?id=156018367789017"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-2"
        >
          <img
            src="../assets/logo/icons8-facebook-50.png"
            alt="logo"
            width="20"
            height="20"
          />
        </a>
        <a
          href="https://www.instagram.com/teknik.unhas/"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-2"
        >
          <img
            src="../assets/logo/icons8-instagram-24.png"
            alt="logo"
            width="20"
            height="20"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UC82mgDdDj_TC13JEMN5cJfQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../assets/logo/icons8-youtube-50.png"
            alt="logo"
            width="20"
            height="20"
          />
        </a>
      </div>
    </div>
    <div
      class="footer-right pr-4 ml-4 md:pr-40 flex flex-col justify-center text-xs md:text-base"
    >
      <p class="text-white font-bold mb-2">Visitor</p>
      <div class="footer-right-top">
        <a href="https://info.flagcounter.com/vhwc">
          <img
            alt="flag-counter"
            src="https://s11.flagcounter.com/count2/vhwc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
          />
        </a>
      </div>
      <p class="text-white mt-2 md:mt-10 font-bold mb-2">Didukung Oleh</p>
      <div class="footer-right-bottom flex">
        <img
          src="../assets/logo/Group 182.jpg"
          alt="logo"
          class="mr-2"
          width="70"
          height="70"
        />
        <img
          src="../assets/logo/Group 183.jpg"
          alt="logo"
          class="mr-2"
          width="70"
          height="70"
        />
      </div>
    </div>
  </footer>
</template>
