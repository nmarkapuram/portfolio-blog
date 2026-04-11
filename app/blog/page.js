import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Insights</h1>
        <p className="text-gray-400 max-w-2xl">
          Deep dives into frontend architecture, performance, and system design.
        </p>
      </div>

      {/* Featured Post */}
      {posts[0] && (
        <Link href={`/blog/${posts[0].slug}`}>
          <div className="group border border-white/10 rounded-2xl p-8 mb-4 bg-gradient-to-br from-white/5 to-white/0 hover:border-blue-500/40 transition">
            <p className="text-sm text-blue-400 mb-2">Featured</p>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
              {posts[0].title}
            </h2>
            <p className="text-gray-400">{posts[0].description}</p>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {posts.slice(1).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group h-full border border-white/10 rounded-xl p-6 bg-white/5 hover:border-blue-500/40 hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}