import Link from 'next/link'

export const metadata = {
  title: 'Stacks - Biobricks',
  description: 'The tools and technologies I use.',
}

export default function Stacks() {
  const stacks = [
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "TypeScript", icon: "📘" },
        { name: "Framer Motion", icon: "✨" }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Supabase", icon: "⚡" },
        { name: "Firebase", icon: "🔥" }
      ] 
    },
    { 
      category: "Design", 
      items: [
        { name: "Figma", icon: "🎨" },
        { name: "Adobe XD", icon: "🖌️" },
        { name: "Sketch", icon: "💎" },
        { name: "Blender", icon: "🧊" }
      ] 
    },
    { 
      category: "Tools", 
      items: [
        { name: "VS Code", icon: "📝" },
        { name: "Git", icon: "📦" },
        { name: "Docker", icon: "🐳" },
        { name: "Vercel", icon: "▲" }
      ] 
    },
  ]

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
          Stacks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          The curated list of tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="space-y-20">
        {stacks.map((stack) => (
          <div key={stack.category}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
              {stack.category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stack.items.map((item) => (
                <div 
                  key={item.name}
                  className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all flex flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
