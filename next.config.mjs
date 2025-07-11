import path from "path";
import { fileURLToPath } from "url";


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
    const dir = path.dirname(fileURLToPath(import.meta.url));
     // Map "@" to the project root so imports like "@/lib" resolve correctly
    config.resolve.alias["@"] = dir;
    // Map components alias explicitl
    config.resolve.alias["@/components"] = path.resolve(dir, "app/components");
    return config;
  },
};

export default nextConfig;