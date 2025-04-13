import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
