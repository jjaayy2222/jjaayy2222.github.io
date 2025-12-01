'use client'
import { useRef } from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export default function HomeProjectsSection({ projects }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -400 : 400
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="mb-40 relative group/section">
      <div className="flex justify-between items-end mb-10 px-4 md:px-0">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Latest Works</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            I present my top-tier projects, meticulously crafted with unwavering passion.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[85vw] md:min-w-[400px] snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
        
        {/* 'View All' Card at the end */}
        <div className="min-w-[200px] md:min-w-[250px] snap-center flex items-center justify-center">
          <Link 
            href="/projects"
            className="flex flex-col items-center gap-4 text-gray-500 hover:text-blue-600 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="font-medium text-lg">View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
