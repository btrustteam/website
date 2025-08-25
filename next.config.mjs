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
};

export default nextConfig;
