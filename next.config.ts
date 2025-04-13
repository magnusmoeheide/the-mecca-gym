import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  basePath: "/the-mecca-gym", // <-- use your repo name here
};

export default nextConfig;
