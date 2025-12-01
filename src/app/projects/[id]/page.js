import Image from 'next/image'
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

          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            )}

            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.demoUrl2 ? 'Watch Demo 1' : 'Watch Demo'}
              </a>
            )}

            {project.demoUrl2 && (
              <a 
                href={project.demoUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo 2
              </a>
            )}
          </div>
        </header>

        {/* Project Media (Video or Image) */}
        <div className="rounded-2xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-lg">
          {project.video ? (
            <video 
              src={project.video} 
              controls 
              className="w-full h-auto"
              poster={project.image}
            >
              Your browser does not support the video tag.
            </video>
          ) : project.image ? (
            <div className="relative w-full aspect-video">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="aspect-video relative flex items-center justify-center text-gray-400">
              Project Image
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Period</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.period || project.date}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Category</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.category || 'Web Development'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.tech || project.tags?.join(', ')}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Key Features</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.features}</p>
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
