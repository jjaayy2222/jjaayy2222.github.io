import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import InsightCard from '@/components/InsightCard'
import LocalTime from '@/components/LocalTime'
import { projects } from '@/data/projects'
import { insights } from '@/data/insights'
import { profileConfig } from '@/data/profile'
import HomeProjectsSection from '@/components/HomeProjectsSection'
import HomeEducationSection from '@/components/HomeEducationSection'
import HomeStackSection from '@/components/HomeStackSection'

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20 md:pt-32 pb-20 px-4 md:px-10">
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

        <h1 className="mb-8 leading-[1.1] tracking-tighter">
          {/* First Line */}
          <span className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">기술</span>
          <span className="text-4xl md:text-6xl font-medium text-gray-400 dark:text-gray-300 align-baseline">이</span>
          <span className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white ml-2">아닌</span>
          <span className="text-4xl md:text-6xl font-medium text-gray-400 dark:text-gray-300 align-baseline">,</span>
          
          <br className="hidden md:block" />
          
          {/* Second Line */}
          <span className="text-5xl md:text-7xl font-bold text-gray-500 dark:text-gray-400">문제 해결</span>
          <span className="text-4xl md:text-6xl font-medium text-gray-600 dark:text-gray-600 align-baseline mx-2">을 하는</span>
          <span className="text-5xl md:text-7xl font-bold text-gray-500 dark:text-gray-400">개발자</span>
        </h1>
        
        <p className="w-full text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-none leading-relaxed mb-12">
          <span className="font-bold text-gray-900 dark:text-white">Welcome to Jay`s Space</span><br />
          <span className="font-bold text-gray-900 dark:text-white">Self-Taught LangChain Expert</span>로서 <span className="font-bold text-gray-900 dark:text-white">빠른 학습과 실행</span>을 지향합니다.<br />
          사용자의 숨겨진 니즈를 찾아내고 실질적인 <span className="font-bold text-gray-900 dark:text-white">문제를 해결하는 AI Developer</span>입니다.
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

      {/* GitHub Contributions */}
      <section className="mb-40">
        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">GitHub Contributions</h2>
              <p className="text-gray-500 dark:text-gray-400">
                My coding activity over the last year.
              </p>
            </div>
            <Link 
              href="https://github.com/jjaayy2222" 
              target="_blank"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              View GitHub Profile →
            </Link>
          </div>
          
          <div className="w-full overflow-x-auto flex justify-center">
            {/* GitHub Chart Widget */}
            <Image 
              src="https://ghchart.rshah.org/219138/jjaayy2222" 
              alt="Jay's GitHub Contribution Graph" 
              width={800}
              height={120}
              className="w-full min-w-[700px] dark:opacity-90"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-40">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: AI Solution */}
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-2xl">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI 솔루션 설계</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              GPT-4o, LangChain, RAG를 활용하여 지능형 서비스를 설계하고 구현합니다. 프롬프트 엔지니어링을 통해 사용자 의도를 정확히 파악합니다.
            </p>
          </div>
          {/* Card 2: Fast Learning */}
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-2xl">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">빠른 학습과 실행</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              비전공자의 한계를 자기주도 학습으로 극복했습니다. 새로운 기술을 빠르게 습득하고, 피드백을 즉시 반영하여 실질적인 결과물을 만들어냅니다.
            </p>
          </div>
          {/* Card 3: Empathy */}
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-2xl">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">공감 기반 소통</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              INFJ의 감정 지능을 활용해 팀원과 사용자의 어려움을 깊이 있게 이해합니다. 기술적 구현을 넘어 &apos;사람을 위한&apos; 솔루션을 지향합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Works (Projects) - New Component */}
      <HomeProjectsSection projects={projects} />

      {/* Education - New Component */}
      <HomeEducationSection />

      {/* Learning */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-16 px-4 md:px-0">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Learning</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Continuous learning and growth journey.
            </p>
          </div>
          <Link href="/learning" className="hidden md:inline-flex items-center text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            View Learning →
          </Link>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 rounded-3xl p-12 text-center mx-4 md:mx-0">
          <div className="text-4xl mb-6">🚀</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Migration in Progress</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I am currently migrating my learning notes and resources to this new portfolio. 
            Stay tuned for updates!
          </p>
          <Link href="/learning" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
            Check Status
          </Link>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-16 px-4 md:px-0">
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
        
        <div className="flex flex-col gap-8 px-4 md:px-0">
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

      {/* Stack - New Component */}
      <HomeStackSection />


      {/* Local Time */}
      <section className="mb-20 border-t border-gray-200 dark:border-gray-800 pt-12">
        <LocalTime />
      </section>
    </div>
  )
}
