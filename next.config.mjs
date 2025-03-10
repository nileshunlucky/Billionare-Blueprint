/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "ia600601.us.archive.org", // Add this domain
            "m.media-amazon.com"       // Keep this if using Amazon images
        ],
    },
};

export default nextConfig;
