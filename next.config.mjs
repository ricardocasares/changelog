/** @type {import('next').NextConfig} */

const owner = process.env.OWNER;
const [, basePath = ""] = process.env.BASE_PATH.replace(owner, "");

const nextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
