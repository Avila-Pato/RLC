import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        // domains: ['images.unsplash.com', 'www.over40datingsite.co.uk'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ],
    },
}

export default nextConfig
