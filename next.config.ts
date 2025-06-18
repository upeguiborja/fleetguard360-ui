import type { NextConfig } from "next";

const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://fleetguard360-api.onrender.com/" : "http://localhost:8080/";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_BASE_URL}/api/:path*`
      }
    ]
  }
};

export default nextConfig;
