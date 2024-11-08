/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gentle-pond-0aa028e00.5.azurestaticapps.net",
        pathname: "/**",
      },
    ],
    formats: ["image/webp"],
  },
  experimental: {
    outputFileTracingRoot: "../../", // Add this for monorepo
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu",
        "node_modules/@swc/core-linux-x64-musl",
        "node_modules/@esbuild/linux-x64",
      ],
    },
  },
};

export default nextConfig;
