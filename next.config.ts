import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Jika ingin mengabaikan eslint saat build di versi terbaru, posisikan dengan benar atau hapus jika sudah menggunakan versi Next.js aman
};

export default nextConfig;