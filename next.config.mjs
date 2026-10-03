import { createMDX } from 'fumadocs-mdx/next';
import { redirects } from './lib/redirects.mjs';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.openagentai.org',
      },
    ],
  },
  async redirects() {
    return redirects;
  },
};

export default withMDX(config);
