/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },

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
