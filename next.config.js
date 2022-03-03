/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RCP: process.env.RCP,
  },
};

module.exports = nextConfig;
