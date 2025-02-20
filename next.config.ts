import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during production builds
  eslint: {
    // Skip ESLint during builds
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript type checking during production builds
  typescript: {
    // Skip type checking during builds
    ignoreBuildErrors: true,
  },

  // Optional: You might also want to disable other checks
  // Disable React strict mode if needed
  // reactStrictMode: false,

  // Disable source maps in production if needed
  // productionBrowserSourceMaps: false,

  // Enable faster builds by reducing the amount of information collected
  // swcMinify: true,
};

export default nextConfig;