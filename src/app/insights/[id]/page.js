import Link from 'next/link'
import { notFound } from 'next/navigation'
import { insights } from '@/data/insights'

export async function generateMetadata({ params }) {
  const { id } = await params
  const insight = insights.find(i => i.id === id)
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    }
  }

  return {
    title: `${insight.title} - Biobricks`,
    description: insight.content.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    id: insight.id,
  }))
}

export default async function InsightDetailPage({ params }) {
  const { id } = await params
  const insight = insights.find(i => i.id === id)

  if (!insight) {
    notFound()
  }

  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="max-w-5xl mx-auto pt-10 md:pt-20 pb-20">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to homepage
      </Link>

      <article className="max-w-3xl">
        <header className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono mb-6">
            <Link href="/insights" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              ← Insights
            </Link>
            <span>•</span>
            <time>{formattedDate}</time>
            <span>•</span>
            <span>{insight.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {insight.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <div 
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: insight.content.replace(/\n/g, '<br>') }}
          />
        </div>
      </article>
    </div>
  )
}
