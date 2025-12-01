'use client'
import { useRef } from 'react'
import Link from 'next/link'

const educationData = [
  {
    id: 1,
    title: "Microsoft AI School 5기",
    subtitle: "생성형 AI 및 Azure 클라우드 전문가 양성 과정",
    period: "2024.09.02 ~ 2025.02.27",
    status: "Graduated",
    desc: "AI 기초, Python 심화, Azure 클라우드, 머신러닝 & 딥러닝, Azure OpenAI 활용 프로젝트 수행.",
    color: "blue"
  },
  {
    id: 2,
    title: "ICT 충청권 부트캠프",
    subtitle: "생성형 AI 활용 및 심화 개발 과정",
    period: "2025.05.19 ~ 2025.11.12",
    status: "Completed",
    desc: "생성형 AI 개론, LangChain & RAG 구현, LLM Fine-tuning, 데이터 분석 및 노코드 개발.",
    color: "purple"
  },
  {
    id: 3,
    title: "Google Cloud Study Jam",
    subtitle: "Google Cloud AI/ML 자기주도 학습",
    period: "2025.08.01 ~ 2025.10.17",
    status: "Completed",
    desc: "Generative AI, LLM, Responsible AI 학습 및 Gemini 실습 진행 (Badges 취득).",
    color: "green"
  },
]

export default function HomeEducationSection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -400 : 400
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="mb-40">
      <div className="flex justify-between items-end mb-10 px-4 md:px-0">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            My academic journey and intensive bootcamps.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {educationData.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[85vw] md:min-w-[400px] snap-center bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-${item.color}-100 dark:bg-${item.color}-900/30`}>
                🎓
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-700 dark:text-${item.color}-300`}>
                {item.status}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-medium">{item.subtitle}</p>
            <p className="text-gray-500 dark:text-gray-500 mb-6 text-sm">{item.period}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

        {/* View All Card */}
        <div className="min-w-[200px] md:min-w-[250px] snap-center flex items-center justify-center">
          <Link 
            href="/education"
            className="flex flex-col items-center gap-4 text-gray-500 hover:text-blue-600 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="font-medium text-lg">View Education</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
