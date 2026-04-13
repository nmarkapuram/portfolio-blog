import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Mermaid from "@/app/components/Mermaid";

export default async function Page({ params }) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/architecture",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-400 mb-8">{data.description}</p>

      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={{ Mermaid }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "content/architecture");
    const files = fs.readdirSync(dir);
  
    return files.map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
  }