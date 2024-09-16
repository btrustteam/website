/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lhxkhtemz6sjrgyy.public.blob.vercel-storage.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

export default nextConfig;
