'use client';

import Link from 'next/link';

// 블로그 더미 데이터 (나중에 실제 데이터로 교체 가능)
const blogPosts = [
  {
    id: '1',
    title: 'The Art of Minimalist Design',
    excerpt: 'Exploring the principles of minimalism in digital product design and how less can be more.',
    date: 'Nov 24, 2024',
    readTime: '5 min read',
    slug: 'minimalist-design'
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications',
    excerpt: 'A deep dive into architecture patterns for modern web apps using Next.js and React.',
    date: 'Nov 10, 2024',
    readTime: '8 min read',
    slug: 'scalable-web-apps'
  },
  {
    id: '3',
    title: 'Why User Experience Matters',
    excerpt: 'Understanding the impact of good UX on business metrics and customer satisfaction.',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
    slug: 'ux-matters'
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, insights, and stories about design and technology.
        </p>
      </div>

      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="group border-b border-gray-100 dark:border-gray-800 pb-10 last:border-0">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-sm font-medium text-gray-900 dark:text-white underline decoration-gray-300 underline-offset-4 group-hover:decoration-blue-500 transition-all">
                Read more
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
