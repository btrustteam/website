/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "8aqkfzpsopxwkjhh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "8aqkfzpsopxwkjhh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/builders-headshots/*",
      },
      {
        protocol: "https",
        hostname: "8aqkfzpsopxwkjhh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/dev-day/*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/wFt6puhmwk',
        permanent: true,
      },
      {
        source: '/bitcoin-projects',
        destination: 'https://bitcoindevs.xyz/',
        permanent: true,
      },
      {
        source: '/good-first-issues',
        destination: 'https://bitcoindevs.xyz/good-first-issues',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
