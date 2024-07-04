/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        ppr: true,
        after: true
    },
};

export default nextConfig;
