'use client'
import Link from 'next/link'

export default function InsightCard({ insight }) {
  // 날짜 포맷팅
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  const href = insight.url || `/insights/${insight.id}`
  const isExternal = !!insight.url
  const target = isExternal ? '_blank' : undefined

  return (
    <article className="group border-b border-gray-100 dark:border-gray-800 py-6 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors -mx-4 px-4 rounded-lg">
      <Link href={href} target={target} className="block">
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div className="flex-shrink-0 w-32 pt-1">
            <time className="text-sm font-mono text-gray-400">{formattedDate}</time>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {insight.title}
              </h3>
              {insight.type === 'app' && (
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
                  APP
                </span>
              )}
              {insight.type === 'pdf' && (
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-full">
                  PDF
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2">
              {insight.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {insight.category}
              </span>
              {insight.readTime && (
                <>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">
                    {insight.readTime} read
                  </span>
                </>
              )}
              {insight.series && (
                <>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    📚 {insight.series}
                  </span>
                </>
              )}
            </div>

            {/* Tags as hashtags at bottom */}
            {insight.tags && insight.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-500">
                {insight.tags.map(tag => (
                  <span key={tag} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
