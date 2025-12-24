import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE the i18n config - it conflicts with next-intl
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
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
