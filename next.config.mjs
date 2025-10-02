// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      // Add your specific Supabase URL as well
      {
        protocol: 'https',
        hostname: 'ipybvyrlkposhcxbbhtw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      }
    ],
    // Alternative: Use domains (older method, still works)
    domains: [
      'ipybvyrlkposhcxbbhtw.supabase.co',
      'via.placeholder.com',
    ]
  },
}

export default nextConfig