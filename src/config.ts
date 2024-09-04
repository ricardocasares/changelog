import z from "zod";

const config = z.object({
  TITLE: z.string(),
  DESCRIPTION: z.string(),
  GITHUB_URL: z.string().url(),
  GITHUB_TOKEN: z.string(),
  GITHUB_REPOSITORY: z.string(),
});

export default config.parse(process.env);
