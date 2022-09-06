/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
    scrollRestoration: true,
  },
}

module.exports = nextConfig
