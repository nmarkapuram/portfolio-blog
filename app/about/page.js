import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      
      {/* HERO */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold">
          Nagaraja Markapuram
        </h1>

        <p className="text-blue-400 mt-2 text-lg">
          Principal Engineer | Performance Enthusiast
        </p>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Designing scalable platforms, micro-frontends, and developer
          ecosystems for enterprise-scale applications.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="/resume.pdf"
            className="px-4 py-2 bg-blue-500 rounded-lg text-white"
          >
            Download Resume
          </a>
          <a
            href="mailto:nmarkapuram@gmail.com"
            className="px-4 py-2 border border-white/20 rounded-lg"
          >
            Contact
          </a>
        </div>
      </section>

      {/* IMPACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Impact at Scale</h2>

        <ul className="space-y-3 text-gray-300">
          <li>Enabled 500+ engineers through shared frontend platform</li>
          <li>Led Clarity Design System adopted across enterprise products</li>
          <li>Architected Angular + React interoperability</li>
          <li>Improved platform performance and load times</li>
          <li>Mentored 25+ engineers globally</li>
        </ul>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Architecture Domains
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Frontend Platforms & Micro-Frontends",
            "Design Systems & Web Components",
            "Performance Engineering",
            "Developer Experience & Tooling",
            "Frontend Observability",
          ].map((item) => (
            <div
              key={item}
              className="p-6 border border-white/10 rounded-xl bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Case Study: Frontend Platform @ VMware
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>
            <strong>Problem:</strong> Multiple teams using Angular, jQuery & React with
            no shared standards.
          </p>

          <p>
            <strong>Solution:</strong> Introduced micro-frontends, built web components and designed a shared developer experience.
          </p>

          <p>
            <strong>Impact:</strong> Improved consistency, reduced duplication,
            and enabled large-scale development.
          </p>
        </div>
      </section>

      {/* BLOG LINK */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Thought Leadership
        </h2>

        <Link href="/blog" className="text-blue-400 hover:underline">
          Explore Blogs →
        </Link>
      </section>

      {/* FOOTER CTA */}
      <section className="border border-white/10 rounded-xl p-6 text-center">
        <p className="text-gray-300">
          Let’s build scalable frontend systems together.
        </p>
      </section>
    </div>
  );
}