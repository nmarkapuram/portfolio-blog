import Link from 'next/link';

const posts = [
  {
    slug: "angular-future",
    title: "Future of Angular",
    description: "Signals, hydration, and standalone components",
    image: "/images/angular.jpg",
  },
  {
    slug: 'react-performance',
    title: 'React Performance Deep Dive',
    description: 'Optimizing React apps for performance',
    image: '/images/react.jpg',
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
