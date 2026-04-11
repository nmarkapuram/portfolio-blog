import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Mermaid from "@/app/components/Mermaid";

export default async function Post({ params }) {
  // ✅ IMPORTANT FIX
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  // ❌ If file not found → 404
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">

        {/* HERO */}
        <div className="relative h-[220px] md:h-[260px] rounded-2xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-pink-400/20 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-end p-5 md:p-8">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {data.title}
              </h1>
              <p className="text-gray-200 text-sm md:text-base">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <article
          className="
            prose prose-invert max-w-none
            prose-headings:scroll-mt-24
            prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-pre:bg-slate-900
            prose-pre:border prose-pre:border-white/10
            prose-pre:rounded-lg
            prose-code:text-blue-300
            prose-p:text-gray-300
          "
        >
          <MDXRemote
            source={content}
            components={{
              Mermaid,
            }}
          />
        </article>
      </div>
    </div>
  );
}