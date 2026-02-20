/** @type {import('next').NextConfig} */
const nextConfig = {
  // Preserve external image URLs exactly the same
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
