import type { DisclosureItem, InfoItem, ListCategory } from '@/interfaces/data';

export const listCategory: ListCategory[] = [
  { value: 'general', label: 'Pilih Kategori' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'fullstack', label: 'Full Stack Developer' },
  { value: 'mobile', label: 'Mobile Developer' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'meme', label: 'Meme' },
];

export const infoItems: InfoItem[] = [
  {
    href: 'tentang-kami',
    label: 'Tentang Kami',
  },
  {
    href: 'peraturan',
    label: 'Peraturan',
  },
  {
    href: 'kebijakan-privasi',
    label: 'Kebijakan Privasi',
  },
];

export const pilKategori = [
  'frontend',
  'backend',
  'ui/ux',
  'web',
  'mobile',
  'game',
  'datascience',
  'machinelearning',
  'network',
  'blockchain',
  'operatingsystem',
];

export const disclosureItems: DisclosureItem[] = [
  {
    title: 'Berbicara dengan Baik',
    desc: 'Silakan berkomunikasi dengan sopan dan menghargai pendapat orang lain. Jangan menyebarkan konten yang bisa menyakiti perasaan atau menimbulkan konflik.',
  },
  {
    title: 'Jagalah Data Pribadi Anda',
    desc: 'Pastikan Anda menjaga privasi pribadi dan tidak membagikan informasi sensitif kepada siapa pun. Gunakan juga sandi yang kuat untuk melindungi akun Anda.',
  },
  {
    title: 'Hanya Bagikan Konten yang Sah',
    desc: 'Mohon pastikan konten yang Anda bagikan adalah milik Anda atau Anda memiliki izin untuk membagikannya. Mari hormati hak cipta dan kekayaan intelektual orang lain.',
  },
  {
    title: 'Berbagi Source Code',
    desc: 'Berikan penjelasan singkat atau komentar yang jelas pada kode yang Anda bagikan, agar pengguna lain dapat memahami fungsionalitas dan tujuan dari kode tersebut.',
  },
  {
    title: 'Source Code Aman',
    desc: 'Pastikan kode yang Anda bagikan tidak mengandung kerentanan keamanan atau bug yang dapat menyebabkan masalah di aplikasi pengguna lain.',
  },
  {
    title: 'Tidak Diperbolehkan Konten Tidak Pantas',
    desc: 'Kami tidak mengizinkan konten yang mengandung kekerasan, pornografi, atau ilegal. Konten semacam itu tidak diperbolehkan dan akan dihapus.',
  },
  {
    title: 'Aman bagi Anak-Anak',
    desc: 'Jika Anda di bawah usia tertentu, harap gunakan aplikasi ini di bawah pengawasan orang tua atau wali.',
  },
  {
    title: 'Jauhi Spam dan Penipuan',
    desc: 'Tolong jangan sebarkan spam atau mencoba mengakses data pribadi orang lain dengan cara curang.',
  },
  {
    title: 'Lapor Konten atau Akun Melanggar',
    desc: 'Jika Anda menemukan konten atau akun yang melanggar peraturan, harap segera laporkan kepada kami.',
  },
  {
    title: 'Tidak boleh ada promosi',
    desc: 'Postingan yang mengandung unsur promosi produk/jasa diluar Commitan berhak untuk dihapus oleh pihak kami, kecuali sudah berizin',
  },
  {
    title: 'Bersama Menciptakan Lingkungan yang Aman',
    desc: 'Kami ingin menciptakan lingkungan sosial media yang aman dan menyenangkan bagi semua pengguna. Mari bersama-sama menjaga kebersamaan dan saling menghormati.',
  },
];
