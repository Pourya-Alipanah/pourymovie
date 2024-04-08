/** @type {import('next').NextConfig} */
const nextConfig = {
        compiler:{
            removeConsole:{
                exclude: ['error', 'info', 'log'],
            }
        }
};

export default nextConfig;
