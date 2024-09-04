import z from "zod";

const cfg = z
  .object({
    BASE: z.string().default(""),
    OWNER: z.string(),
  })
  .parse(process.env);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: cfg.BASE.replace(cfg.OWNER, ""),
};

export default nextConfig;
