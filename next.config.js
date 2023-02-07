/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "avatars.githubusercontent.com", "drive.google.com", "s3.us-east-2.amazonaws.com"]
  },
}

module.exports = nextConfig;
