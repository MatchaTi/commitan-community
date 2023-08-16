/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  }),
  env: {
    API_URL: process.env.API_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ['ui-avatars.com', 'avatars.githubusercontent.com', 'localhost'],
  },
};

module.exports = nextConfig;
