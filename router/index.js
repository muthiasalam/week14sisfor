import Vue from 'vue';
import Router from 'vue-router';

//profil
import SejarahSingkat from '@/pages/profil/sejarah-singkat.vue';
import VisiMisiSasaran from '@/pages/profil/visi-misi-dan-sasaran.vue';
import StrukturOrganisasi from '@/pages/profil/struktur-organisasi.vue';
import MasterPlan from '@/pages/profil/master-plan.vue';
import PetaKampus from '@/pages/profil/peta-kampus.vue';
import Mediatek from '@/pages/profil/mediatek.vue';
import Manajemen from '@/pages/profil/manajemen.vue';

//akademik
import Akreditasi from '@/pages/akademik/akreditasi.vue';
import Departemen from '@/pages/akademik/departemen.vue';
import Magister from '@/pages/akademik/program-magister.vue';
import Doktor from '@/pages/akademik/program-doktor.vue';
import Profesi from '@/pages/akademik/program-profesi.vue';
import KalendarAkademik from '@/pages/akademik/kalender-akademik.vue';

//sumber daya
import GuruBesar from '@/pages/sumber-daya/guru-besar.vue';
import TenagaKependidikan from '@/pages/sumber-daya/tenaga-kependidikan.vue';
import SaranaPrasarana from '@/pages/sumber-daya/sarana-dan-prasarana.vue';
import Perpustakaan from '@/pages/sumber-daya/perpustakaan.vue';

//k3
import ProfilK3 from '@/pages/k3/profil-k3.vue';
import StrukturOrganisasik3 from '@/pages/k3/struktur-organisasi-k3.vue';
import TentangK3 from '@/pages/k3/tentang-k3-ft-uh.vue';
import FilePendukung from '@/pages/k3/file-pendukung.vue';

//kemahasiswaan
import Ramtek from '@/pages/kemahasiswaan/upt-asrama-ramtek.vue';
import PengembanganKarakter from '@/pages/kemahasiswaan/pengembangan-karakter-mahasiswa.vue';
import PeningkatanPrestasi from '@/pages/kemahasiswaan/peningkatan-prestasi-mahasiswa.vue';
import MahasiswaInOutbound from '@/pages/kemahasiswaan/mahasiswa-inbound-dan-outbound.vue';
import Alumni from '@/pages/kemahasiswaan/alumni.vue';
import AturanKemahasiswaan from '@/pages/kemahasiswaan/aturan-kemahasiswaan.vue';
import Pengumuman from '@/pages/kemahasiswaan/pengumuman.vue';

//riset dan inovasi
import Haki from '@/pages/riset-dan-inovasi/hak-kekayaan-intelektual.vue'
import Inovasi from '@/pages/riset-dan-inovasi/hasil-inovasi.vue'
import Penelitian from '@/pages/riset-dan-inovasi/daftar-penelitian-lbe-tahun-2020.vue'

//kemitraan
import LuarNegeri from '@/pages/kemitraan/kemitraan-luar-negeri.vue'
import DalamNegeri from '@/pages/kemitraan/kemitraan-dalam-negeri.vue'

//gpm-pr
import ProfilGPMPR from '@/pages/gpm-pr/profil-gpm-pr.vue';
import DokumenMutu from '@/pages/gpm-pr/dokumen-mutu.vue';
import AuditMutu from '@/pages/gpm-pr/audit-mutu-akademik-internal.vue';
import LAMteknik from '@/pages/gpm-pr/lam-teknik.vue';
import LaporanKepuasan from '@/pages/gpm-pr/laporan-kepuasan-pengguna.vue';
import SurveiKepuasan from '@/pages/gpm-pr/survei-kepuasan-layanan-mahasiswa.vue';
import GaleriGPMPR from '@/pages/gpm-pr/galeri.vue';

//cot
import Website from '@/pages/cot/website.vue';
import Jurnal from '@/pages/cot/jurnal.vue';
import Newsletter from '@/pages/cot/newsletter.vue';
import UIGcolab from '@/pages/cot/uigcolab.vue';

//dharmawanita
import HalamanUtama from '@/pages/dharma_wanita/halamanUtama.vue';
import strukturOrganisasiDharma from '@/pages/dharma_wanita/strukturOrganisasi.vue';



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
        path: '/profil/sejarah-singkat',
        name: 'SejarahSingkat',
        component: SejarahSingkat,
      },
      {
        path: '/profil/visi-misi-dan-sasaran',
        name: 'VisiMisiSasaran',
        component: VisiMisiSasaran,
      },
      {
        path: '/profil/struktur-organisasi',
        name: 'StrukturOrganisasi',
        component: StrukturOrganisasi,
      },
      {
        path: '/profil/master-plan',
        name: 'MasterPlan',
        component: MasterPlan,
      },
      {
        path: '/profil/peta-kampus',
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
        path: '/akademik/program-magister',
        name: 'Magister',
        component: Magister,
      },
      {
        path: '/akademik/program-doktor',
        name: 'Doktor',
        component: Doktor,
      },
      {
        path: '/akademik/program-profesi',
        name: 'Profesi',
        component: Profesi,
      },
      {
        path: '/akademik/kalendar-akademik',
        name: 'KalendarAkademik',
        component: KalendarAkademik,
      },
      {
        path: '/sumber-daya/guru-besar',
        name: 'GuruBesar',
        component: GuruBesar,
      },
      {
        path: '/sumber-daya/tenaga-kependidikan',
        name: 'TenagaKependidikan',
        component: TenagaKependidikan,
      },
      {
        path: '/sumber-daya/sarana-prasarana',
        name: 'SaranaPrasarana',
        component: SaranaPrasarana,
      },
      {
        path: '/sumber-daya/perpustakaan',
        name: 'Perpustakaan',
        component: Perpustakaan,
      },
      {
        path: '/profil/manajemen',
        name: 'Manajemen',
        component: Manajemen,
      },
      { //k3
        path: '/k3/profile-k3',
        name: 'ProfilK3',
        component: ProfilK3,
      },
      {
        path: '/k3/struktur-organisasi-k3',
        name: 'StrukturOrganisasik3',
        component: StrukturOrganisasik3,
      },
      {
        path: '/k3/tentang-k3-ft-uh',
        name: 'TentangK3',
        component: TentangK3,
      },
      {
        path: '/k3/file-pendukung',
        name: 'FilePendukung',
        component: FilePendukung,
      },
      { //kemahasiswaan
        path: '/kemahasiswaan/upt-asrama-ramtek',
        name: 'Ramtek',
        component: Ramtek,
      },
      { 
        path: '/kemahasiswaan/pengembangan-karakter-mahasiswa',
        name: 'PengembanganKarakter',
        component: PengembanganKarakter,
      },
      { 
        path: '/kemahasiswaan/peningkatan-prestasi-mahasiswa',
        name: 'PeningkatanPrestasi',
        component: PeningkatanPrestasi,
      },
      { 
        path: '/kemahasiswaan/mahasiswa-inbound-dan-outbound',
        name: 'MahasiswaInOutbound',
        component: MahasiswaInOutbound,
      },
      { 
        path: '/kemahasiswaan/alumni',
        name: 'Alumni',
        component: Alumni,
      },
      { 
        path: '/kemahasiswaan/aturan-kemahasiswaan',
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
        path: '/gpm-pr/dokumen-mutu',
        name: 'DokumenMutu',
        component: DokumenMutu,
      },
      { 
        path: '/gpm-pr/audit-mutu-akademik-internal',
        name: 'AuditMutu',
        component: AuditMutu,
      },
      { 
        path: '/gpm-pr/lam-teknik',
        name: 'LAMteknik',
        component: LAMteknik,
      },
      { 
        path: '/gpm-pr/laporan-kepuasan-pengguna',
        name: 'LaporanKepuasan',
        component: LaporanKepuasan,
      },
      { 
        path: '/gpm-pr/survei-kepuasan-layanan-mahasiswa',
        name: 'SurveiKepuasan',
        component: SurveiKepuasan,
      },
      { 
        path: '/gpm-pr/galeri',
        name: 'GaleriGPMPR',
        component: GaleriGPMPR,
      },
      { //cot
        path: '/cot/cot-website',
        name: 'Website',
        component: Website,
      },
      {
        path: '/cot/jurnal-cot',
        name: 'Jurnal',
        component: Jurnal,
      },
      {
        path: '/cot/cot-newsletter',
        name: 'Newsletter',
        component: Newsletter,
      },
      {
        path: '/cot/u-i-g-collaboration',
        name: 'UIGcolab',
        component: UIGcolab,
      },
      { //dharma
        path: '/dharma_wanita/halaman-utama',
        name: 'HalamanUtama',
        component: HalamanUtama,
      },
      {
        path: '/dharma_wanita/struktur-organisasi-dharmawanita',
        name: 'strukturOrganisasiDharma',
        component: strukturOrganisasiDharma,
      },
  
      {
        path: '/kemitraan/kemitraan-luar-negeri',
        name: 'LuarNegeri',
        component: LuarNegeri,
      },
      {
        path: '/kemitraan/kemitraan-dalam-negeri',
        name: 'DalamNegeri',
        component: DalamNegeri,
      },
      {
        path: '/riset-dan-inovasi/hak-kekayaan-intelektual',
        name: 'Haki',
        component: Haki,
      },
      {
        path: '/riset_dan_inovasi/hak-inovasi',
        name: 'Inovasi',
        component: Inovasi,
      },
      {
        path: '/riset_dan_inovasi/daftar-penelitian-lbe-tahun-2020',
        name: 'Penelitian',
        component: Penelitian,
      },
      
    // ... rute lainnya ...
  ],
});
