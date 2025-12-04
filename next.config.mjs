import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    serverActions: {
      allowedOrigins: process.env.NODE_ENV === 'development' ? 
        ['localhost:3000', '127.0.0.1:3000', '127.0.0.1:64464', 'localhost', '127.0.0.1'] : 
        ['localhost:3000'],
    },
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
