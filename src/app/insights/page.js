'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { insights } from '@/data/insights'
import InsightCard from '@/components/InsightCard'

function CategorySection({ title, items, isOpen: initialIsOpen = true }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  if (items.length === 0) return null

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden mb-6 bg-white dark:bg-gray-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
            {items.length}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4 divide-y divide-gray-100 dark:divide-gray-800">
          {items.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set(insights.map(i => i.category))
    return ['All', ...Array.from(cats).sort()]
  }, [])

  const tags = useMemo(() => {
    const allTags = new Set()
    insights.forEach(i => i.tags?.forEach(tag => allTags.add(tag)))
    return ['All', ...Array.from(allTags).sort()]
  }, [])

  // Filter insights
  const filteredInsights = useMemo(() => {
    return insights
      .filter(insight => {
        const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory
        const matchesTag = selectedTag === 'All' || insight.tags?.includes(selectedTag)
        const matchesSearch = searchQuery === '' || 
          insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        
        return matchesCategory && matchesTag && matchesSearch
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
  }, [selectedCategory, selectedTag, searchQuery])

  // Group insights by category
  const insightsByCategory = useMemo(() => {
    const grouped = {}
    // Initialize with known categories to ensure order
    const order = ['Research', 'Apps', 'Docs']
    order.forEach(cat => grouped[cat] = [])
    
    filteredInsights.forEach(insight => {
      const category = insight.category || 'Other'
      if (!grouped[category]) {
        grouped[category] = []
      }
      grouped[category].push(insight)
    })
    return grouped
  }, [filteredInsights])

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

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">Insights</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
          Research, tutorials, and notes on AI and development.
        </p>

        {/* Search & Filters Container */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-shadow"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-green-600 text-white shadow-md shadow-green-500/20'
                        : 'bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex justify-end">
          Showing {filteredInsights.length} of {insights.length} insights
        </div>
      </div>

      {/* Insights grouped by category (Accordion) */}
      <div className="space-y-4">
        {Object.entries(insightsByCategory).map(([category, categoryInsights]) => (
          <CategorySection 
            key={category} 
            title={category} 
            items={categoryInsights}
            isOpen={true}
          />
        ))}
        
        {filteredInsights.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">No insights found matching your criteria.</p>
            <button 
              onClick={() => {
                setSelectedCategory('All')
                setSelectedTag('All')
                setSearchQuery('')
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
