
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@/components"] = path.join(
      __dirname,
      "app/components"
    );
    return config;
  },
};

export default nextConfig;