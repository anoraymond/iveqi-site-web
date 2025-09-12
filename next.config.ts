import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Désactiver ESLint pendant le build pour Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Désactiver les vérifications TypeScript pendant le build
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
