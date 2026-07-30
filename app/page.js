import AnimatedSection from "./components/AnimatedSection";
import Link from "next/link";

// Mock data (later replace with real MDX loader)
const posts = [
  {
    slug: "react-fiber",
    title: "React Fiber Deep Dive",
    description: "How scheduling transformed UI rendering",
  },
  {
    slug: "angular-future",
    title: "Future of Angular",
    description: "Signals, hydration, and standalone components",
  },
  {
    slug: "scaling-frontend-systems",
    title: "Scaling Frontends with Nx",
    description: "Managing large teams with modular architecture",
  },
];

const domains = [
  { name: "Micro Frontends", slug: "micro-frontends", id:1 },
  { name: "SSR / Streaming", slug: "ssr-streaming", id: 2 },
  { name: "Design Systems", slug: "design-systems", id: 3 },
  { name: "Performance Optimization", slug: "performance", id:4 },
  { name: "Edge + CDN Strategy", slug: "edge-cdn", id:5 },
  { name: "Frontend Observability", slug: "observability", id:6 },
];

export default function Home() {
  return (
    <div className="space-y-24">
      
      {/* HERO */}
      <AnimatedSection>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

          <div className="relative border border-white/10 rounded-3xl p-10 md:p-14 bg-white/5 backdrop-blur">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Principal Engineer
            </h1>

            <p className="text-gray-400 max-w-2xl mb-6">
              I design scalable systems, micro-frontends, and
              performance-driven UI platforms.
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Read Blogs
              </Link>

              <Link
                href="/about"
                className="px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* BLOG SECTION (MOST IMPORTANT) */}
      <AnimatedSection>
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Latest Insights</h2>

            <Link
              href="/blog"
              className="text-sm text-blue-400 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition cursor-pointer">
                  <h3 className="text-lg font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* EXPERTISE */}
      <AnimatedSection>
        <section id="architecture">
          <h2 className="text-2xl font-semibold mb-6">
            Architecture Domains
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((item) => (
              <Link href={`architecture/${item.slug}`} key={item.id}>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
                {item.name}
              </div>
            </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ABOUT / PROFILE */}
      <AnimatedSection>
        <section className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-400 max-w-3xl">
            Principal Engineer with experience in scaling systems for large
            teams. Focused on performance, modular architecture, and
            developer experience.
          </p>
        </section>
      </AnimatedSection>
    </div>
  );
}