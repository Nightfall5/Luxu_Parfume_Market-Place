# LUXU — Perfume Marketplace

Repositori ini berisi pengembangan aplikasi web katalog dan marketplace parfum dengan brand konsep **LUXU**. Fokus proyek ada pada antarmuka katalog produk, penelusuran kategori, dan komponen pengalaman belanja.

## Teknologi

- **React 18** dan **TypeScript**
- **Vite** untuk development server dan build
- **Tailwind CSS** untuk styling
- **React Router** untuk navigasi halaman
- **Supabase JavaScript Client** untuk akses data
- **React Hook Form** dan **Zod** untuk pengelolaan serta validasi form
- **Framer Motion** untuk animasi antarmuka
- **Lucide React** untuk ikon

## Modul aplikasi

Halaman yang saat ini terdaftar di routing:

- **Home** — halaman utama.
- **Products** — halaman katalog produk.
- **Categories** — penelusuran berdasarkan kategori.
- **About** — informasi mengenai proyek/brand.

Komponen dan layer pendukung yang tersedia di source code meliputi:

- Kartu produk, grid, dan filter produk.
- Cart drawer dengan pengelolaan jumlah dan penghapusan item.
- Kontrol wishlist dan perbandingan produk.
- Context untuk state pengguna dan notifikasi.
- Service untuk operasi data produk, pesanan, dan ulasan melalui Supabase.

## Menjalankan secara lokal

### 1. Clone repository

```bash
git clone https://github.com/Nightfall5/Luxu_Parfume_Market-Place.git
cd Luxu_Parfume_Market-Place
```

### 2. Instal dependency

```bash
npm install
```

### 3. Konfigurasi Supabase

Buat file `.env.local` di root proyek dan isi dengan kredensial project Supabase:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Gunakan anon/public key dengan kebijakan Row Level Security (RLS) yang tepat. Jangan pernah memasukkan Supabase service-role key ke dalam aplikasi frontend atau repository publik.

### 4. Jalankan development server

```bash
npm run dev
```

Vite akan menampilkan alamat lokal di terminal.

## Perintah yang tersedia

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Menjalankan pemeriksaan TypeScript dan membuat production build |
| `npm run lint` | Menjalankan ESLint |
| `npm run preview` | Meninjau hasil production build secara lokal |

## Struktur source code

```text
src/
├── components/   # Komponen antarmuka
├── contexts/     # Context aplikasi
├── data/         # Data pendukung
├── hooks/        # Custom React hooks
├── lib/          # Supabase client dan tipe database
├── pages/        # Home, Products, Categories, About
├── services/     # Akses data produk, pesanan, dan ulasan
├── styles/       # Styling
└── types/        # Definisi tipe TypeScript

supabase/
└── migrations/   # SQL migration
```

## Catatan implementasi

- Aplikasi membutuhkan konfigurasi Supabase sebelum modul yang mengakses database dapat digunakan.
- Cart saat ini dikelola oleh React state di sisi client dan belum dipersistenkan oleh hook cart.
- Context pengguna saat ini menyimpan state di browser `localStorage`; ini bukan pengganti autentikasi server-side yang aman untuk aplikasi production.
- Repository ini belum mendokumentasikan integrasi payment gateway. Jangan menganggap proses pembayaran atau seluruh alur transaksi sudah siap untuk penggunaan production hanya dari keberadaan service pesanan.

Proyek ini merupakan karya pengembangan aplikasi web dan dapat digunakan sebagai bahan evaluasi struktur frontend, integrasi data, serta pengembangan fitur e-commerce.
