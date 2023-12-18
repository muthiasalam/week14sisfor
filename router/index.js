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

//dharmawanita
import HalamanUtama from '@/pages/dharma_wanita/halamanUtama.vue';
import strukturOrganisasiDharma from '@/pages/dharma_wanita/strukturOrganisasi.vue';

//gpm-pr
import ProfilGPMPR from '@/pages/gpm-pr/profil.vue';
import DokumenMutu from '@/pages/gpm-pr/dokumenMutu.vue';
import AuditMutu from '@/pages/gpm-pr/auditMutu.vue';
import LAMteknik from '@/pages/gpm-pr/lamTeknik.vue';
import LaporanKepuasan from '@/pages/gpm-pr/laporanKepuasan.vue';
import SurveiKepuasan from '@/pages/gpm-pr/surveiKepuasan.vue';
import GaleriGPMPR from '@/pages/gpm-pr/galeri.vue';



import SejarahSingkat from '@/pages/profil/sejarahSingkat.vue';
import VisiMisiSasaran from '@/pages/profil/visiMisiSasaran.vue';
import StrukturOrganisasi from '@/pages/profil/strukturOrganisasi.vue';
import MasterPlan from '@/pages/profil/masterPlan.vue';
import PetaKampus from '@/pages/profil/petaKampus.vue';
import Mediatek from '@/pages/profil/mediatek.vue';
import Manajemen from '@/pages/profil/manajemen.vue';

//k3
import ProfilK3 from '@/pages/k3/profile.vue';
import StrukturOrganisasik3 from '@/pages/k3/strukturOrganisasi.vue';
import TentangK3 from '@/pages/k3/tentang.vue';
import FilePendukung from '@/pages/k3/file.vue';

import LuarNegeri from '@/pages/kemitraan/luarNegeri.vue'
import DalamNegeri from '@/pages/kemitraan/dalamNegeri.vue'
import Haki from '@/pages/riset_dan_inovasi/haki.vue'
import Inovasi from '@/pages/riset_dan_inovasi/inovasi.vue'
import Penelitian from '@/pages/riset_dan_inovasi/penelitian.vue'



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
      { 
        path: '/gpm-pr/profil',
        name: 'ProfilGPMPR',
        component: ProfilGPMPR,
      },
      { 
        path: '/gpm-pr/dokumenMutu',
        name: 'DokumenMutu',
        component: DokumenMutu,
      },
      { 
        path: '/gpm-pr/auditMutu',
        name: 'AuditMutu',
        component: AuditMutu,
      },
      { 
        path: '/gpm-pr/lamTeknik',
        name: 'LAMteknik',
        component: LAMteknik,
      },
      { 
        path: '/gpm-pr/laporanKepuasan',
        name: 'LaporanKepuasan',
        component: LaporanKepuasan,
      },
      { 
        path: '/gpm-pr/surveiKepuasan',
        name: 'SurveiKepuasan',
        component: SurveiKepuasan,
      },
      { 
        path: '/gpm-pr/galeri',
        name: 'GaleriGPMPR',
        component: GaleriGPMPR,
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
      { //dharma
        path: '/dharma_wanita/halamanUtama',
        name: 'HalamanUtama',
        component: HalamanUtama,
      },
      {
        path: '/dharma_wanita/strukturOrganisasi',
        name: 'strukturOrganisasiDharma',
        component: strukturOrganisasiDharma,
      },
  
      {
        path: '/kemitraan/luarNegeri',
        name: 'LuarNegeri',
        component: LuarNegeri,
      },
      {
        path: '/kemitraan/dalamNegeri',
        name: 'DalamNegeri',
        component: DalamNegeri,
      },
      {
        path: '/riset_dan_inovasi/haki',
        name: 'Haki',
        component: Haki,
      },
      {
        path: '/riset_dan_inovasi/inovasi',
        name: 'Inovasi',
        component: Inovasi,
      },
      {
        path: '/riset_dan_inovasi/penelitian',
        name: 'Penelitian',
        component: Penelitian,
      },
      
    // ... rute lainnya ...
  ],
});
