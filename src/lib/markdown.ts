import { unified } from "unified";
import parse from "remark-parse";
import rehype from "remark-rehype";
import shiki from "@shikijs/rehype";
import stringify from "rehype-stringify";

export async function render(markdown: string): Promise<string> {
  const content = await unified()
    .use(parse)
    .use(rehype)
    .use(shiki, {
      themes: {
        dark: "dark-plus",
        light: "light-plus",
      },
    })
    .use(stringify)
    .process(markdown);

  return content.toString();
}
