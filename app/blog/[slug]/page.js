import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/posts";
import Image from "next/image";

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="bg-slate-950 text-white">
  {/* PAGE CONTAINER */}
  <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">

    {/* HERO (reduced height) */}
    <div className="relative h-[220px] md:h-[260px] rounded-2xl overflow-hidden mb-8">

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />

      {/* Subtle glow (reduced) */}
      <div className="absolute -left-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-pink-400/20 rounded-full blur-2xl" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end p-5 md:p-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
            {post.title}
          </h1>
          <p className="text-gray-200 text-sm md:text-base">
            {post.description}
          </p>
        </div>
      </div>
    </div>

    {/* CONTENT AREA */}
    <div className="flex justify-center">
      <article
        className="
          prose prose-invert max-w-3xl w-full
          prose-headings:scroll-mt-24
          prose-a:text-blue-400 hover:prose-a:text-blue-300
          prose-pre:bg-slate-900
          prose-pre:border prose-pre:border-white/10
          prose-pre:rounded-lg
          prose-code:text-blue-300
          prose-p:text-gray-300
        "
      >
        <MDXRemote source={post.content} />
      </article>
    </div>

  </div>
</div>
  );
}
