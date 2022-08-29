/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  scrollRestoration: true,
  experimental: { images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig
