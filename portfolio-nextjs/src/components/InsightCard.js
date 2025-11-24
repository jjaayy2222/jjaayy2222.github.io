'use client'
import Link from 'next/link'

export default function InsightCard({ insight }) {
  // 날짜 포맷팅
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <article className="group border-b border-gray-100 py-8 last:border-0 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-lg">
      <Link href={`/insights/${insight.id}`} className="block">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
          <div className="flex-shrink-0 w-32">
            <time className="text-sm font-mono text-gray-400">{formattedDate}</time>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black">
              {insight.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3 line-clamp-2">
              {insight.excerpt}
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {insight.category}
              </span>
              <span className="text-xs text-gray-400">
                {insight.readTime} read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
