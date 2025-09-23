import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Add hosts here if you ever load remote images, e.g. { protocol: 'https', hostname: 'images.example.com' }
    ],
  },
};

export default nextConfig;
