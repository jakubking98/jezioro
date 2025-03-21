import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xx.bstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "r-xx.bstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
