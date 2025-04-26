import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vkuserphoto.ru',
            },
            {
                protocol: 'https',
                hostname: "images.techinsider.ru",
            },
        ],
    },
};

export default nextConfig;
