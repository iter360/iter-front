/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://iter360.com/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
