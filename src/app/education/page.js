import Link from 'next/link'

export const metadata = {
  title: 'Education',
  description: 'Formal education and training programs including MS AI School and other courses.',
}

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto pt-10 md:pt-20 pb-20 px-6">
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
          지속적인 학습으로<br />성장하는 AI 개발자
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          비전공자에서 14개월간 AI 개발자로 성장하기까지,<br className="hidden md:block" />
          이론과 실무를 겸비한 집중 성장 과정을 거쳤습니다.
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. Microsoft AI School */}
        <EducationCard 
          title="Microsoft AI School 5기"
          period="2024.09.02 ~ 2025.02.27 (6개월, 960시간)"
          subtitle="생성형 AI 및 Azure 클라우드 전문가 양성 과정"
          tags={['Azure Cloud', 'OpenAI', 'Deep Learning', 'Computer Vision']}
        >
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">주요 학습 내용</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>AI 기초 및 개발자 마인드셋 함양</li>
                <li>Python 프로그래밍 심화 및 웹 개발 (HTML/CSS/JS)</li>
                <li>Azure 클라우드 컴퓨팅 및 데이터 과학 실습</li>
                <li>머신러닝 & 딥러닝 (CNN, ResNet, Stable Diffusion)</li>
                <li>Azure OpenAI & AI Services 활용 프로젝트</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">핵심 성과</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-semibold text-blue-600 dark:text-blue-400">IMS 프로젝트 우승 🏆</span>: 여행 스토리 생성 AI 서비스 개발</li>
                <li>Azure 머신러닝 프로젝트: 식단 추천 알고리즘 개발 (R² 0.7384)</li>
                <li>InspirAltion: AI 이미지 생성 플랫폼 PM 및 프론트엔드 개발</li>
                <li>MS AI-900 (Azure AI Fundamentals) 자격증 취득</li>
              </ul>
            </div>
          </div>
        </EducationCard>

        {/* 2. ICT Bootcamp */}
        <EducationCard 
          title="ICT 충청권 부트캠프"
          period="2025.05.19 ~ 2025.11.12 (6개월, 960시간)"
          subtitle="생성형 AI 활용 및 심화 개발 과정"
          tags={['Generative AI', 'RAG', 'LangChain', 'FastAPI']}
        >
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">주요 학습 내용</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>생성형 AI 개론 및 프롬프트 엔지니어링</li>
                <li>LangChain & LangGraph 실습 및 RAG 구현</li>
                <li>LLM Fine-tuning 및 웹 애플리케이션 개발</li>
                <li>데이터 분석 (Orange3) 및 노코드 개발</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">핵심 성과</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-semibold text-blue-600 dark:text-blue-400">FlowNote 완성</span>: AI 기반 자동 파일 분류 시스템 (개인 프로젝트)</li>
                <li>사업성 인정: 전문가 멘토링을 통해 확장 가능성 검증</li>
                <li>LangChain 1.0.2 실전 활용 능력 습득</li>
              </ul>
            </div>
          </div>
        </EducationCard>

        {/* 3. Google Cloud Study Jam */}
        <EducationCard 
          title="Google Cloud Study Jam"
          period="2025.08.01 ~ 2025.10.17"
          subtitle="Google Cloud AI/ML 자기주도 학습"
          tags={['Google Cloud', 'Gemini', 'Generative AI', 'Self-Learning']}
        >
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">학습 경로 및 성과</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Introduction to Generative AI (Badge 취득)</li>
                <li>Introduction to Large Language Models (Badge 취득)</li>
                <li>Introduction to Responsible AI (Badge 취득)</li>
                <li>Generative AI Labs with Gemini (실습 진행)</li>
              </ul>
            </div>
          </div>
        </EducationCard>
      </div>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-20"></div>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificationItem 
            title="Microsoft Certified: Azure AI Fundamentals (AI-900)"
            issuer="Microsoft"
            date="2025.01"
          />
          <CertificationItem 
            title="인공지능(AI) 온라인 부트캠프 수료"
            issuer="한국표준협회"
            date="2025.11"
          />
          <CertificationItem 
            title="Google Cloud AI Badges (4개)"
            issuer="Google"
            date="2025.10"
          />
          <CertificationItem 
            title="Google Certified Educator Level 1 & 2"
            issuer="Google"
            date="2021.06"
          />
        </div>
      </section>
    </div>
  )
}

function EducationCard({ title, period, subtitle, tags, children }) {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{subtitle}</p>
        </div>
        <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
          {period}
        </span>
      </div>
      
      <div className="mb-8">
        {children}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function CertificationItem({ title, issuer, date }) {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
      <div>
        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{issuer}</p>
      </div>
      <span className="text-sm font-medium text-gray-400 dark:text-gray-500">{date}</span>
    </div>
  )
}
