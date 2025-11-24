import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects - Biobricks',
  description: 'A collection of projects I&apos;ve worked on.',
}

export default function Projects() {
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

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          A collection of projects I&apos;ve worked on, ranging from web applications to design systems. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
