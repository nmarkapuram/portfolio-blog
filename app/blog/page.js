import Link from 'next/link';

const posts = [
  {
    slug: 'architecting-portfolio',
    title: 'Architecting Portfolio',
    description: 'Lessons learned from scaling a frontend architecture to support 50+ developers.',
    image: '/images/portfolio.jpg',
  },
  {
    slug: 'scaling-frontend-systems',
    title: 'Scaling Angular Frontends: From Monoliths to Modular Systems with Nx',
    description: 'Lessons learned from scaling a frontend architecture to support 50+ developers.',
    image: '/images/portfolio.jpg',
  },
  {
    slug: 'react-fiber',
    title: 'React Fiber: The Heart of React Performance',
    description: 'A deep dive into how React Fiber works and how it impacts performance.',
    image: '/images/react.jpg',
  },
  {
    slug: "angular-future",
    title: "Future of Angular",
    description: "Signals, hydration, and standalone components",
    image: "/images/angular.jpg",
  },
  {
    slug: 'react-performance',
    title: 'React Performance in 2026: Fiber, Virtual DOM, and Server-First Rendering',
    description: 'Optimizing React apps for performance',
    image: '/images/react.jpg',
  },
  {
    slug: 'case-study',
    title: "Case Study: Scaling Frontend from Monolith to Nx Monorepo",
    description: "How we transformed a monolithic Angular application into a scalable monorepo with 20+ applications.",
    image: "/images/angular.jpg",
  }

];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-400">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
