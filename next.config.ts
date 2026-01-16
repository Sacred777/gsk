import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ← генерирует статический HTML в /out
  trailingSlash: true, // чтобы URL были /page/, а не /page (лучше для GH Pages)
  images: {
    unoptimized: true, // GitHub Pages не поддерживает Next Image optimization
  },
};

export default nextConfig;
