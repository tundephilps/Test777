/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/affiliateslots/frontend-cdn/main/**",
        search: "",
      },
    ],
    unoptimized: true, // Add this to avoid timeout errors
  },
};

export default nextConfig;
