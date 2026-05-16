# Cara Menambahkan Produk Baru ke Website SYAM

## 2 Langkah Sederhana

### Langkah 1: Tambahkan Foto Produk

Taruh file gambar produk ke folder ini:
```
src/assets/products/
```

> [!TIP]
> **Format penamaan file yang disarankan:**
> - Mykonos → `mykonos-namaproduk.webp`
> - Velixir → `velixir-namaproduk.webp`
> - Afnan → `afnan-namaproduk.webp`
> - Other → `namabrand-namaproduk.webp`
>
> Format file yang didukung: `.webp`, `.jpg`, `.jfif`, `.png`

---

### Langkah 2: Edit file `src/data/products.js`

Tambahkan **2 baris** ke file ini:

#### A. Tambahkan import di bagian atas file (baris 1-40)

```javascript
import namaVariabel from '../assets/products/nama-file-gambar.webp';
```

**Contoh:**
```javascript
import inception from '../assets/products/mykonos-inception.webp';
```

#### B. Tambahkan entry produk di dalam array `products`

```javascript
{ id: NOMOR, name: "BRAND NamaProduk", category: "decant", sizes: ["2ml", "5ml", "10ml"], pricePerMl: HARGA, image: namaVariabel, isBestSeller: false },
```

**Contoh:**
```javascript
{ id: 40, name: "Mykonos Inception", category: "decant", sizes: ["2ml", "5ml", "10ml"], pricePerMl: 10000, image: inception, isBestSeller: false },
```

---

## Aturan Penting

### Penamaan Produk (menentukan Tab/Section)

Nama produk **harus dimulai** dengan nama brand agar muncul di tab yang benar:

| Awalan Nama | Muncul di Tab |
|-------------|---------------|
| `"Mykonos ..."` | Mykonos |
| `"Velixir ..."` | Velixir |
| `"Afnan ..."` | Afnan |
| `"Other ..."` | Other |

> [!IMPORTANT]
> Produk di tab **Other** akan otomatis menghilangkan prefix "Other " saat ditampilkan di website.
> Contoh: `"Other Fordive Atlantis"` → ditampilkan sebagai **"Fordive Atlantis"**

### Harga (pricePerMl)

| Harga | Keterangan |
|-------|-----------|
| `8000` | Harga standar (Rp 8.000/ml) |
| `10000` | Harga premium (Rp 10.000/ml) — untuk Extrait de Parfum, produk premium |

> [!NOTE]
> Ukuran **2ml** selalu diharga flat **Rp 20.000** regardless of pricePerMl.
> Ukuran 5ml = 5 × pricePerMl, 10ml = 10 × pricePerMl.

### ID Produk

- Harus **unik** dan berurutan
- Cek ID terakhir di array, lalu tambahkan +1

### Best Seller

- Set `isBestSeller: true` untuk menampilkan badge "Best Seller" di produk

---

## Contoh Lengkap: Menambahkan "Velixir Zeus"

**1. Taruh gambar** `velixir-zeus.webp` ke `src/assets/products/`

**2. Edit `src/data/products.js`:**

```diff
  // Di bagian import (atas file):
+ import zeus from '../assets/products/velixir-zeus.webp';

  // Di dalam array products (sebelum ];):
+ { id: 41, name: "Velixir Zeus", category: "decant", sizes: ["2ml", "5ml", "10ml"], pricePerMl: 8000, image: zeus, isBestSeller: false },
```

**Selesai!** Website akan otomatis update karena `npm run dev` sedang berjalan. ✨
