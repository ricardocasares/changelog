/** @type {import('next').NextConfig} */

const [, basePath = ""] = process.env.BASE_PATH.split("/");

const nextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
