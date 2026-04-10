import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <AnimatedSection>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

          <div className="relative border border-white/10 rounded-3xl p-12 bg-white/5 backdrop-blur">
            <h1 className="text-5xl font-bold mb-4">Frontend Architect</h1>
            <p className="text-gray-400 max-w-2xl">
              I design scalable frontend systems, micro-frontends, and
              high-performance UI platforms.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            System Design Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Micro Frontends",
              "SSR / Streaming",
              "Design Systems",
              "Performance Optimization",
              "Edge + CDN Strategy",
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
      </AnimatedSection>
    </div>
  );
}