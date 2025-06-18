import type { NextConfig } from "next";

const API_BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "https://fleetguard360-api.onrender.com/";


const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/fg-api/:path*",
        destination: `${API_BASE_URL}/api/:path*`
      }
    ]
  }
};

export default nextConfig;
