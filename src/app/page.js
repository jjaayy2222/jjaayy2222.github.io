import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import InsightCard from '@/components/InsightCard'
import { projects } from '@/data/projects'
import { insights } from '@/data/insights'
import { profileConfig } from '@/data/profile'

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto pt-20 md:pt-32 pb-20 px-4 md:px-0">
      {/* Hero Section */}
      <section className="mb-40">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative border border-gray-100">
            <Image 
              src={profileConfig.profileImage}
              alt="Jay's profile"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-xl font-medium text-gray-900 dark:text-white">Jay</h2>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white mb-10 leading-[1.05]">
          Transforming Ideas into <br className="hidden md:block" />
          <span className="text-gray-400 dark:text-gray-600">Digital Experiences</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12">
          Welcome to my portfolio! I am Jay, a passionate Product Designer and Solopreneur with a keen eye for detail. I create exceptional user experiences that blend aesthetics with functionality.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
          >
            More about me
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Work with me */}
      <section className="mb-40">
        <div className="bg-[#f9f9f9] dark:bg-[#111] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work with me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Have a project in mind? Let&apos;s collaborate to create something exceptional together.
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg hover:opacity-90 transition-opacity whitespace-nowrap hover:scale-105 active:scale-95 shadow-lg"
          >
            Start a project
          </Link>
        </div>
      </section>

      {/* Latest Works */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Latest Works</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              I present my top-tier projects, meticulously crafted with unwavering passion, simplicity, and unparalleled attention to detail.
            </p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link href="/projects" className="inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Products Spotlight */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Products Spotlight</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Digital products designed to solve real-world problems.
            </p>
          </div>
          <Link href="/products" className="hidden md:inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All Products →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Product Cards - 나중에 실제 데이터로 교체 가능 */}
          {[1, 2].map((item) => (
            <div key={item} className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gray-50 dark:bg-gray-900 relative flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                 <span className="text-6xl">📦</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Product Name {item}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">Short description of the product and its key features.</p>
                <span className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white underline decoration-gray-300 underline-offset-4 group-hover:decoration-gray-900 transition-all">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by professionals */}
      <section className="mb-40">
        <h2 className="text-xl font-semibold text-center text-gray-400 dark:text-gray-600 mb-16 uppercase tracking-widest">Trusted by professionals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <span className="font-bold text-gray-400">LOGO {item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stack</h2>
           <Link href="/stacks" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Figma", "Framer Motion"].map((tech) => (
            <span key={tech} className="px-5 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-base font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Thoughts, tutorials, and notes on development.
            </p>
          </div>
          <Link href="/insights" className="hidden md:inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All Insights →
          </Link>
        </div>
        
        <div className="flex flex-col gap-8">
          {insights.slice(0, 3).map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link href="/insights" className="inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View All Insights →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-20">
        <div className="bg-gray-900 dark:bg-white rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-10">
              Get the latest insights, tutorials, and updates directly to your inbox. No spam, just quality content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white/10 dark:bg-gray-100 border border-white/20 dark:border-gray-200 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-900 transition-all"
              />
              <button 
                type="button"
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tl from-pink-500 to-orange-500 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
