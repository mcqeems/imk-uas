# Inspirasi Foundation

Website ini adalah aplikasi front-end untuk menampilkan profil, program, cerita inspiratif, dan daftar mitra dari INSPIRASI Foundation.

## Dokumentasi Umum (Non-Teknis)

### Gambaran Singkat

INSPIRASI Foundation adalah lembaga non-profit dan independen yang berfokus pada peningkatan kualitas pembelajaran siswa melalui dukungan penguatan kepemimpinan kepala sekolah.

Website ini dibuat sebagai media informasi yang merangkum:

- Profil organisasi (latar belakang, visi/misi/nilai, penghargaan)
- Program-program yang dijalankan
- Cerita/berita/artikel inspiratif
- Jejaring kolaborasi (mitra)

### Navigasi dan Halaman

- Beranda (`/`): ringkasan organisasi, highlight program, cerita, testimonial, dan mitra.
- Profil (`/profil`): penjelasan organisasi + alasan fokus pada kepala sekolah + visi/misi/nilai + penghargaan.
- Program (`/program`): daftar dan penjelasan ringkas program utama.
- Cerita Inspiratif (`/cerita-inspirasi`): daftar kartu cerita/artikel.
- Mitra (`/mitra`): daftar mitra dikelompokkan berdasarkan kategori.

Catatan: beberapa interaksi “detail cerita” saat ini masih diarahkan ke halaman pengembangan (`/development`).

### Konten Footer

Footer menampilkan kontak (telepon, email, alamat) serta tombol kembali ke atas (scroll to top). Tautan social media/karir saat ini masih placeholder.

---

## Dokumentasi Teknis

### Tech Stack

- Vite (dev server dan build)
- React 19 + TypeScript
- React Router (SPA routing)
- Tailwind CSS v4 + tw-animate-css
- shadcn/ui (komponen UI) + Base UI
- GSAP + ScrollTrigger (animasi)
- Embla Carousel (carousel) + autoplay
- lucide-react (icon)
- vite-plugin-svgr (import SVG jadi komponen React lewat `?react`)

### Script NPM

Script tersedia di [package.json](package.json):

- `npm run dev`: jalankan development server
- `npm run build`: build production (`tsc -b` lalu `vite build`)
- `npm run preview`: preview hasil build
- `npm run lint`: jalankan ESLint

### Cara Menjalankan

Prasyarat: Node.js versi LTS (disarankan 18+).

1. Install dependency: `npm install`
2. Jalankan dev server: `npm run dev`

### Struktur Folder Penting

- Entry dan routing: [src/main.tsx](src/main.tsx)
- Layout global (Navbar, konten, Footer): [src/pages/layout/Layout.tsx](src/pages/layout/Layout.tsx)
- Halaman:
  - Beranda: [src/pages/home/Home.tsx](src/pages/home/Home.tsx) (section ada di [src/pages/home/components/](src/pages/home/components/))
  - Profil: [src/pages/profil/Profil.tsx](src/pages/profil/Profil.tsx)
  - Program: [src/pages/program/Program.tsx](src/pages/program/Program.tsx)
  - Cerita: [src/pages/cerita-inspirasi/CeritaInspirasi.tsx](src/pages/cerita-inspirasi/CeritaInspirasi.tsx)
  - Mitra: [src/pages/mitra/Mitra.tsx](src/pages/mitra/Mitra.tsx)
  - Halaman pengembangan: [src/pages/development/Development.tsx](src/pages/development/Development.tsx)
  - 404: [src/pages/not-found/NotFound.tsx](src/pages/not-found/NotFound.tsx)
- Data mitra: [src/pages/home/data/mitra.json](src/pages/home/data/mitra.json)
- Komponen umum: [src/components/Navbar.tsx](src/components/Navbar.tsx) dan [src/components/Footer.tsx](src/components/Footer.tsx)
- UI components (shadcn/ui): [src/components/ui/](src/components/ui/)
- Styling global dan token tema: [src/index.css](src/index.css)

### Routing (SPA)

Routing dibuat dengan `createBrowserRouter`.

Rute utama:

- `/` (Beranda)
- `/profil`
- `/program`
- `/cerita-inspirasi`
- `/mitra`
- `/development`

Catatan: root route memakai `errorElement` untuk menampilkan halaman 404 saat rute tidak ditemukan atau error.

### Alias Import

Alias `@` mengarah ke folder `src/` (lihat [vite.config.ts](vite.config.ts) dan [tsconfig.json](tsconfig.json)).

### Asset Statis

Asset gambar disimpan di folder [public/](public/) dan diakses dengan path absolut, contoh:

- `/activities/...`
- `/school/...`
- `/teacher/...`
- `/mitra/...`
