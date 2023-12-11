import Vue from 'vue';
import Router from 'vue-router';
import Beranda from '@/pages/index.vue';

import Akreditasi from '@/pages/akademik/akreditasi.vue';
import SejarahSingkat from '@/pages/profil/sejarahSingkat.vue';
import VisiMisiSasaran from '@/pages/profil/visiMisiSasaran.vue';
import StrukturOrganisasi from '@/pages/profil/strukturOrganisasi.vue';

//k3
import ProfilK3 from '@/pages/k3/profile.vue';
import StrukturOrganisasik3 from '@/pages/k3/strukturOrganisasi.vue';
import TentangK3 from '@/pages/k3/tentang.vue';
import FilePendukung from '@/pages/k3/file.vue';

//kemahasiswaan
import Ramtek from '@/pages/kemahasiswaan/ramtek.vue';
import PengembanganKarakter from '@/pages/kemahasiswaan/pengembanganKarakter.vue';
import PeningkatanPrestasi from '@/pages/kemahasiswaan/peningkatanPrestasi.vue';
import MahasiswaInOutbound from '@/pages/kemahasiswaan/inboundOutbound.vue';
import Alumni from '@/pages/kemahasiswaan/alumni.vue';
import AturanKemahasiswaan from '@/pages/kemahasiswaan/aturan.vue';
import Pengumuman from '@/pages/kemahasiswaan/pengumuman.vue';

//cot
import Website from '@/pages/cot/website.vue';
import Jurnal from '@/pages/cot/jurnal.vue';
import Newsletter from '@/pages/cot/newsletter.vue';
import UIGcolab from '@/pages/cot/uigcolab.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beranda',
      component: Beranda,
    },
    {
      path: '/akademik/akreditasi',
      name: 'Akreditasi',
      component: Akreditasi,
    },
    {
      path: '/profil/sejarahSingkat',
      name: 'SejarahSingkat',
      component: SejarahSingkat,
    },
    {
      path: '/profil/visiMisiSasaran',
      name: 'VisiMisiSasaran',
      component: VisiMisiSasaran,
    },
    {
      path: '/profil/strukturOrganisasi',
      name: 'StrukturOrganisasi',
      component: StrukturOrganisasi,
    },
    { //k3
      path: '/k3/profile',
      name: 'ProfilK3',
      component: ProfilK3,
    },
    {
      path: '/k3/strukturOrganisasi',
      name: 'StrukturOrganisasik3',
      component: StrukturOrganisasik3,
    },
    {
      path: '/k3/tentang',
      name: 'TentangK3',
      component: TentangK3,
    },
    {
      path: '/k3/file',
      name: 'FilePendukung',
      component: FilePendukung,
    },
    { //kemahasiswaan
      path: '/kemahasiswaan/ramtek',
      name: 'Ramtek',
      component: Ramtek,
    },
    { 
      path: '/kemahasiswaan/pengembanganKarakter',
      name: 'PengembanganKarakter',
      component: PengembanganKarakter,
    },
    { 
      path: '/kemahasiswaan/peningkatanPrestasi',
      name: 'PeningkatanPrestasi',
      component: PeningkatanPrestasi,
    },
    { 
      path: '/kemahasiswaan/inboundOutbound',
      name: 'MahasiswaInOutbound',
      component: MahasiswaInOutbound,
    },
    { 
      path: '/kemahasiswaan/alumni',
      name: 'Alumni',
      component: Alumni,
    },
    { 
      path: '/kemahasiswaan/aturan',
      name: 'AturanKemahasiswaan',
      component: AturanKemahasiswaan,
    },
    { 
      path: '/kemahasiswaan/pengumuman',
      name: 'Pengumuman',
      component: Pengumuman,
    },
    { //cot
      path: '/cot/website',
      name: 'Website',
      component: Website,
    },
    {
      path: '/cot/jurnal',
      name: 'Jurnal',
      component: Jurnal,
    },
    {
      path: '/cot/newsletter',
      name: 'Newsletter',
      component: Newsletter,
    },
    {
      path: '/cot/uigcolab',
      name: 'UIGcolab',
      component: UIGcolab,
    },

    // ... rute lainnya ...
  ],
});
