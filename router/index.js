import Vue from 'vue';
import Router from 'vue-router';
import Akreditasi from '@/pages/akademik/akreditasi.vue';
import Departemen from '@/pages/akademik/departemen.vue';
import Magister from '@/pages/akademik/Magister.vue';
import Doktor from '@/pages/akademik/Doktor.vue';
import Profesi from '@/pages/akademik/Profesi.vue';
import KalendarAkademik from '@/pages/akademik/kalendarAkademik.vue';

import GuruBesar from '@/pages/sumber_daya/guru_besar.vue';
import TenagaKependidikan from '@/pages/sumber_daya/tenagaKependidikan.vue';
import SaranaPrasarana from '@/pages/sumber_daya/saranaPrasarana.vue';
import Perpustakaan from '@/pages/sumber_daya/perpustakaan.vue';



import SejarahSingkat from '@/pages/profil/sejarahSingkat.vue';
import VisiMisiSasaran from '@/pages/profil/visiMisiSasaran.vue';
import StrukturOrganisasi from '@/pages/profil/strukturOrganisasi.vue';
import MasterPlan from '@/pages/profil/masterPlan.vue';
import PetaKampus from '@/pages/profil/petaKampus.vue';
import Mediatek from '@/pages/profil/mediatek.vue';
import Manajemen from '@/pages/profil/manajemen.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beranda',  // Nama rute beranda
      component: () => import('@/pages/index.vue'),  // Komponen index.vue
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
      {
        path: '/profil/masterPlan',
        name: 'MasterPlan',
        component: MasterPlan,
      },
      {
        path: '/profil/petaKampus',
        name: 'PetaKampus',
        component: PetaKampus,
      },
      {
        path: '/profil/mediatek',
        name: 'Mediatek',
        component: Mediatek,
      },
      {
        path: '/akademik/departemen',
        name: 'Departemen',
        component: Departemen,
      },
      {
        path: '/akademik/magister',
        name: 'Magister',
        component: Magister,
      },
      {
        path: '/akademik/doktor',
        name: 'Doktor',
        component: Doktor,
      },
      {
        path: '/akademik/profesi',
        name: 'Profesi',
        component: Profesi,
      },
      {
        path: '/akademik/kalendarAkademik',
        name: 'KalendarAkademik',
        component: KalendarAkademik,
      },
      {
        path: '/sumber_daya/guru_besar',
        name: 'GuruBesar',
        component: GuruBesar,
      },
      {
        path: '/sumber_daya/tenagaKependidikan',
        name: 'TenagaKependidikan',
        component: TenagaKependidikan,
      },
      {
        path: '/sumber_daya/saranaPrasarana',
        name: 'SaranaPrasarana',
        component: SaranaPrasarana,
      },
      {
        path: '/sumber_daya/perpustakaan',
        name: 'Perpustakaan',
        component: Perpustakaan,
      },
      {
        path: '/profil/manajemen',
        name: 'Manajemen',
        component: Manajemen,
      },
      
    // ... rute lainnya ...
  ],
});
