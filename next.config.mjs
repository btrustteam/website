/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lhxkhtemz6sjrgyy.public.blob.vercel-storage.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "8aqkfzpsopxwkjhh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
