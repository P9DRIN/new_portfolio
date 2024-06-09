/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  trailingSlash: true,
  images: {
    loader: 'default',
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
