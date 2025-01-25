/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Ensure that the base path matches your GitHub repository name
  basePath: "/adshield",
}

module.exports = nextConfig

