/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
