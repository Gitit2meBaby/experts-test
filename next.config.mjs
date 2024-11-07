/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gentle-pond-0aa028e00.5.azurestaticapps.net",
      },
    ],
    formats: ["image/webp"],
  },
  assetPrefix: "https://gentle-pond-0aa028e00.5.azurestaticapps.net",
};

export default nextConfig;
