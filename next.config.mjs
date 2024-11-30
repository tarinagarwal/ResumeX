/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
