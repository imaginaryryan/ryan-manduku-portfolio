/** @type {import('next').NextConfig} */
const nextConfig = {

  // Add performance optimizations:
  compress: true,

  images: {
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  },
  
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig