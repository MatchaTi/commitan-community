/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ['ui-avatars.com', 'avatars.githubusercontent.com', 'localhost'],
  },
};

module.exports = nextConfig;
