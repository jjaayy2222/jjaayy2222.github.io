import Link from 'next/link'
import { notFound } from 'next/navigation'
import { insights } from '@/data/insights'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function generateMetadata({ params }) {
  const { id } = await params
  const insight = insights.find(i => i.id === id)
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    }
  }

  return {
    title: `${insight.title} - Jay's Homepage`,
    description: insight.excerpt,
  }
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    id: insight.id,
  }))
}

async function getMarkdownContent(filename) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'posts', filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Remove frontmatter and return
    return fileContent.replace(/^---[\s\S]*?---\n/, '')
  } catch (error) {
    console.error('Error reading markdown file:', error)
    return null
  }
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

  // Read markdown file if it exists
  let markdownContent = null
  if (insight.markdownFile) {
    markdownContent = await getMarkdownContent(insight.markdownFile)
  }

  return (
    <div className="max-w-5xl mx-auto pt-10 md:pt-20 pb-20 px-4">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to homepage
      </Link>

      <article className="max-w-4xl">
        <header className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-mono mb-6">
            <Link href="/insights" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              ← Insights
            </Link>
            <span>•</span>
            <time>{formattedDate}</time>
            <span>•</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{insight.category}</span>
            <span>•</span>
            <span>{insight.readTime} read</span>
            {insight.series && (
              <>
                <span>•</span>
                <span className="text-purple-600 dark:text-purple-400 font-medium">📚 {insight.series}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {insight.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {insight.excerpt}
          </p>

          {/* Tags */}
          {insight.tags && insight.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 text-sm">
              {insight.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-6
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-800
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/20 prose-blockquote:py-2 prose-blockquote:px-4
          prose-ul:list-disc prose-ol:list-decimal
          prose-li:text-gray-700 dark:prose-li:text-gray-300
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-3 prose-th:text-left
          prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-700 prose-td:p-3
        ">
          {markdownContent ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          ) : insight.content ? (
            <div 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: insight.content.replace(/\n/g, '<br>') }}
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-400">콘텐츠가 없습니다.</p>
          )}
        </div>
      </article>
    </div>
  )
}
