import { insights } from '@/data/insights'
import InsightCard from '@/components/InsightCard'
import Link from 'next/link'

export const metadata = {
  title: 'Insights - Biobricks',
  description: 'Thoughts on development and design',
}

export default function Insights() {
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

      <div className="mb-16 border-b border-gray-100 pb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Insights</h1>
        <p className="text-xl text-gray-500">
          Thoughts, tutorials, and notes on development.
        </p>
      </div>

      <div className="flex flex-col">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}
