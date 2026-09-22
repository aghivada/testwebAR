import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Menonaktifkan pengecekan ESLint saat proses build di Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;