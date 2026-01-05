# Inspirasi Foundation

Website ini adalah aplikasi front-end untuk menampilkan profil, program, cerita inspiratif, dan daftar mitra dari INSPIRASI Foundation.

## Dokumentasi Umum

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

```text
src/
  main.tsx                          # entry + routing
  index.css                         # styling global + theme tokens

  components/
    Navbar.tsx
    Footer.tsx
    ui/                             # komponen UI (shadcn/ui)

  pages/
    layout/
      Layout.tsx                    # layout global (Navbar + Outlet + Footer)
    home/
      Home.tsx
      components/                   # section beranda (Hero, WhatWeDo, dst.)
      data/
        mitra.json                  # sumber data mitra
    profil/
      Profil.tsx
    program/
      Program.tsx
    cerita-inspirasi/
      CeritaInspirasi.tsx
    mitra/
      Mitra.tsx
    development/
      Development.tsx               # placeholder halaman pengembangan
    not-found/
      NotFound.tsx                  # halaman 404

public/                              # aset statis (activities, school, teacher, mitra, logo)
```

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
