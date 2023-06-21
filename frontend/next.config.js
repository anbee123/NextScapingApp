/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true
    }
  }
}

module.exports = nextConfig
