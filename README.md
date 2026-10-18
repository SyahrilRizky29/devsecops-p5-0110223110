# DevSecOps P5 - CI/CD Pipeline & SAST Integration

**Nama:** Muhammad Syahril Rizky Fauzan  
**NIM:** 0110223110  
**Mata Kuliah:** DevSecOps  

---

## 1. Nama Aplikasi & Fungsi
Aplikasi ini bernama **DevSecOps Demo App P5**, yaitu layanan RESTful API berbasis Node.js yang menyediakan endpoint otentikasi sederhana dan pemeriksaan kesehatan sistem (*health check*).

## 2. Bahasa & Framework
- **Bahasa Pemrograman:** JavaScript (Node.js v18+)
- **Framework Web:** Express.js
- **Testing Framework:** Jest & Supertest

## 3. Cara Menjalankan Aplikasi
### Lintas Lokal

1. **Install Dependensi:**
   ```bash
   npm install

2. Jalankan Unit Test:
   ```bash
   npm test
3. Jalankan Server Aplikasi:
   ```bash
   npm start
- Server akan berjalan di http://localhost:3000.

### 4. Overview Pipeline CI/CD & SAST
Pipeline CI/CD dikonfigurasi menggunakan GitHub Actions melalui file .github/workflows/devsecops.yml. Pipeline ini menerapkan prinsip Shift-Left Security dengan mengintegrasikan pengujian keamanan otomatis pada setiap siklus integrasi kode.

A. Pemicu Workflow (Triggers)
Workflow berjalan secara otomatis ketika terjadi:
- Push ke branch main
- Pull Request yang mengarah ke branch main

B. Arsitektur Job
Pipeline terdiri dari dua job terpisah yang dieksekusi pada runner ubuntu-latest:

1. Job build (Build & Test Application):
   - Checkout: Mengunduh kode sumber menggunakan actions/checkout@v4.
   - Setup Runtime: Mengonfigurasi lingkungan Node.js v18 dan caching npm via actions/setup-node@v4.
   - Install: Menginstal dependensi secara bersih dengan npm ci.
   - Test: Mengeksekusi unit test fungsional menggunakan npm test (Jest).

2. Job sast-scan (SAST Security Scan):
   - Quality Gate (needs: build): Job ini hanya akan berjalan jika job build berhasil (Passed).
   - Semgrep SAST: Menjalankan pemindaian keamanan statis menggunakan semgrep/semgrep-action@v1 dengan aturan standar config: p/default.
   - Fokus Pemindaian: Mengidentifikasi celah keamanan OWASP Top 10 (seperti Injection, Broken Access Control, dan Hardcoded Secrets).