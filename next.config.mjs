/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  
  // Image optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
  },
  
  // Bundle optimizations
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
