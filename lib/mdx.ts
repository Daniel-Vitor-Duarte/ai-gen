// lib/mdx.ts
import { serialize } from "next-mdx-remote/serialize"
import matter from "gray-matter"

export async function getMdxSource(filePath: string) {
  const fs = await import("fs/promises")
  const source = await fs.readFile(filePath, "utf8")
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return { mdxSource, frontMatter: data }
}
