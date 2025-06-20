import withMDX from '@next/mdx'

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDXConfig({
  pageExtensions: ['ts', 'tsx', 'mdx'],
})

export default nextConfig
