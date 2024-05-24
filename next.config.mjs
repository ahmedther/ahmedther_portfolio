/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/guest",
        destination: "/",
        permanent: false, // Set to true for permanent redirects
      },
    ];
  },
};

export default nextConfig;
