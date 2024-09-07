/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'place-hold.it',
            domains: ['place-hold.it'],
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
