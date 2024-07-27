/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.HOSTING === "Firebase") {
  nextConfig.output = "export";
  nextConfig.images = {
    unoptimized: true,
  };
} else {
  nextConfig.redirects = async () => {
    return [
      {
        source: "/guest",
        destination: "/",
        permanent: false, // Set to true for permanent redirects
      },
    ];
  };
}

// if(process.env.HOSTING === 'production') {}

// const nextConfig = {

//   // output: "export",
//   // images: {
//   //   unoptimized: true,
//   // },

//   async redirects() {
//     return [
//       {
//         source: "/guest",
//         destination: "/",
//         permanent: false, // Set to true for permanent redirects
//       },
//     ];
//   },
// };

export default nextConfig;
