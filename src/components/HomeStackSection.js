'use client'
import Link from 'next/link'

const stackCategories = [
  { 
    id: 'ai',
    name: "AI & LLM", 
    icon: "🤖", 
    desc: "OpenAI, LangChain, RAG, HuggingFace", 
    color: "blue",
    link: "/stack#ai" 
  },
  { 
    id: 'backend',
    name: "Backend", 
    icon: "⚙️", 
    desc: "Python, FastAPI, Go, Node.js", 
    color: "indigo",
    link: "/stack#backend" 
  },
  { 
    id: 'frontend',
    name: "Frontend", 
    icon: "🎨", 
    desc: "React, Next.js, Tailwind CSS", 
    color: "pink",
    link: "/stack#frontend" 
  },
  { 
    id: 'data',
    name: "Data & ML", 
    icon: "📊", 
    desc: "Pandas, Scikit-learn, Azure ML", 
    color: "green",
    link: "/stack#data" 
  },
  { 
    id: 'devops',
    name: "DevOps", 
    icon: "🚀", 
    desc: "Docker, Azure, GitHub Actions", 
    color: "orange",
    link: "/stack#devops" 
  },
]

export default function HomeStackSection() {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-end mb-12 px-4 md:px-0">
         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stack</h2>
         <Link href="/stack" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          View All →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stackCategories.map((cat) => (
          <Link 
            key={cat.id} 
            href={cat.link}
            className="group block p-6 bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-${cat.color}-100 dark:bg-${cat.color}-900/30`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {cat.name}
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 pl-14">
              {cat.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
