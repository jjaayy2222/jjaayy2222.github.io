import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export async function generateMetadata({ params }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Biobricks`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

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

      <article className="max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              ← Projects
            </Link>
            <span>•</span>
            <span>{project.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Project Image */}
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl mb-12 flex items-center justify-center text-gray-400">
          Project Image
        </div>

        {/* Project Description */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Category</h3>
            <p className="text-gray-900 dark:text-white">{project.category || 'Web Development'}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Year</h3>
            <p className="text-gray-900 dark:text-white">{project.date}</p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:gap-3 transition-all"
          >
            ← Back to all projects
          </Link>
        </div>
      </article>
    </div>
  )
}
