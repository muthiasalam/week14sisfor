import Vue from 'vue';
import Router from 'vue-router';
import Akreditasi from '@/pages/akademik/akreditasi.vue';
import SejarahSingkat from '@/pages/profil/sejarahSingkat.vue';
import VisiMisiSasaran from '@/pages/profil/visiMisiSasaran.vue';
import StrukturOrganisasi from '@/pages/profil/strukturOrganisasi.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
    // ... rute lainnya ...
  ],
});
