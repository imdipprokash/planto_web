/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static marketing site — emit a static export to `out/`.
  output: "export",
  // No ESLint config exists in this project; don't fail the build on lint.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Static export has no Image Optimization server; serve images as-is.
    unoptimized: true,
    // The site uses plain <img> / ImageWithFallback for remote (Unsplash, Google) images.
    // Allow them in case any are migrated to next/image later.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
