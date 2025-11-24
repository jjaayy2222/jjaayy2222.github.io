import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import InsightCard from '@/components/InsightCard'
import { projects } from '@/data/projects'
import { insights } from '@/data/insights'

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto pt-10 md:pt-20 pb-20">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative">
            {/* Profile Image Placeholder */}
            <div className="absolute inset-0 bg-gray-300" />
          </div>
          <h2 className="text-xl font-medium text-gray-900">Javier Martinez</h2>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          Transforming Ideas into <br />
          Stunning Digital Experiences
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
          Welcome to my portfolio! I am Javier Martinez, a passionate Product Designer, Web Designer, and Solopreneur with a keen eye for detail and a commitment to creating exceptional user experiences. Dive in to explore my work and discover how I can help bring your vision to life.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            More about me
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Work with me */}
      <section className="mb-32">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work with me</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Have a project in mind? Let&apos;s collaborate to create something exceptional.
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Start a project
          </Link>
        </div>
      </section>

      {/* Latest Works */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Latest Works</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
            I present my top-tier projects, meticulously crafted with unwavering passion, simplicity, boundless creativity, and unparalleled attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Products Spotlight */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Products Spotlight</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
            Digital products designed to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Product Cards */}
          {[1, 2].map((item) => (
            <div key={item} className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Product Image
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Product Name</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Short description of the product and its key features.</p>
                <span className="text-sm font-medium text-gray-900 dark:text-white underline">Learn more</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by professionals */}
      <section className="mb-32">
        <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-12">Trusted by professionals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {/* Placeholder Logos */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-12 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
              Logo {item}
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stack</h2>
           <Link href="/stacks" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Figma"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
              Thoughts, tutorials, and notes on development.
            </p>
          </div>
          <Link href="/insights" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        
        <div className="flex flex-col">
          {insights.slice(0, 3).map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-20">
        <div className="bg-gray-900 dark:bg-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 dark:text-gray-600 mb-8 max-w-lg mx-auto">
            Get the latest insights, tutorials, and updates directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-100 border border-white/20 dark:border-gray-200 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-900"
            />
            <button 
              type="button"
              className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Floating Badge (Optional) */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-900">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
          </svg>
          Made in Next.js
        </a>
      </div>
    </div>
  )
}
