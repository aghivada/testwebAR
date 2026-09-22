import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mengizinkan custom elements dari Google model-viewer
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;