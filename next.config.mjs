/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No ESLint config exists in this project; don't fail the build on lint.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // The site uses plain <img> / ImageWithFallback for remote (Unsplash, Google) images.
    // Allow them in case any are migrated to next/image later.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
