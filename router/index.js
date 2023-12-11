import Vue from 'vue';
import Router from 'vue-router';
import Akreditasi from '@/pages/akademik/akreditasi.vue';
import SejarahSingkat from '@/pages/profil/sejarahSingkat.vue';
import VisiMisiSasaran from '@/pages/profil/visiMisiSasaran.vue';
import StrukturOrganisasi from '@/pages/profil/strukturOrganisasi.vue';
import KerjaSamaDalamNegeri from '@/pages/kemitraan/dalamNegeri.vue';
import KerjaSamaLuarNegeri from '@/pages/kemitraan/luarNegeri.vue';
import HakKekayaanIntelektual from '@/pages/riset_dan_inovasi/haki.vue';
import HasilInovasi from '@/pages/riset_dan_inovasi/inovasi.vue';
import DaftarPenelitianLBETahun2020 from '@/pages/riset_dan_inovasi/penelitian.vue';
import ProfilGPM_PR from '@/pages/gpm-pr/profil.vue';
import Akreditasi from '@/pages/gpm-pr/akreditasi.vue';
import AuditMutuAkademikInternal from '@/pages/gpm-pr/auditMutu.vue';
import DokumenMutu from '@/pages/gpm-pr/dokumenMutu.vue';
import Galeri from '@/pages/gpm-pr/galeri.vue';
import LamTeknik from '@/pages/gpm-pr/lamTeknik.vue';
import LaporanKepuasanPengguna from '@/pages/gpm-pr/laporanKepuasan.vue';
import SurveiKepuasanLayananMahasiswa from '@/pages/gpm-pr/surveiKepuasan.vue';

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
      {
        path: '/riset_dan_inovasi/haki',
        name: 'HakKekayaanIntelektual',
        component: HakKekayaanIntelektual,
      },
      {
        path: '/riset_dan_inovasi/inovasi',
        name: 'HasilInovasi',
        component: HasilInovasi,
      },
      {
        path: '/riset_dan_inovasi/penelitian',
        name: ' DaftarPenelitianLBETahun2020',
        component:  DaftarPenelitianLBETahun2020,
      },
      {
        path: '/kemitraan/dalamNegeri',
        name: 'KerjaSamaDalamNegeri',
        component: KerjaSamaDalamNegeri,
      },
      {
        path: '/kemitraan/luarNegeri',
        name: 'KerjaSamaLuarNegeri',
        component: KerjaSamaLuarNegeri,
      },
      {
        path: '/gpm-pr/profil',
        name: 'ProfilGPM_PR',
        component: ProfilGPM_PR,
      },
      {
        path: '/gpm-pr/akreditasi',
        name: 'Akreditasi',
        component: Akreditasi,
      },
      {
        path: '/gpm-pr/auditMutu',
        name: 'AuditMutuAkademikInternal',
        component: AuditMutuAkademikInternal,
      },
      {
        path: '/gpm-pr/dokumenMutu',
        name: 'DokumenMutu',
        component: DokumenMutu,
      },
      {
        path: '/gpm-pr/galeri.vue',
        name: 'Galeri',
        component: Galeri,
      },
      {
        path: '/gpm-pr/lamTeknik.vue',
        name: 'LamTeknik',
        component: LamTeknik,
      },
      {
        path: '/gpm-pr/laporanKepuasan.vue',
        name: 'LaporanKepuasanPengguna',
        component: LaporanKepuasanPengguna,
      },
      {
        path: '/gpm-pr/surveiKepuasan.vue',
        name: 'SurveiKepuasanLayananMahasiswa',
        component: SurveiKepuasanLayananMahasiswa,
      },
    // ... rute lainnya ...
  ],
});
