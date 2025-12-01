'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profileConfig } from '@/data/profile';

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 md:py-20">
      {/* Back Link */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to homepage
        </Link>
      </div>

      {/* Profile Section */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 shadow-sm">
              <Image 
                src={profileConfig.profileImage}
                alt="Jay"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Jay</h1>
            <div className="flex flex-col gap-2 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              <span>• AI Developer</span>
              <span>• Self-Taught LangChain Expert</span>
              <span>• INFJ Problem Solver</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">기술이 아닌, 문제 해결을 하는 개발자</h2>
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            저는 교육 현장에서 학생들의 진로를 설계하며 하나의 질문을 품었습니다.
            <span className="block mt-4 font-medium text-gray-900 dark:text-white italic">
              &quot;어떻게 개인의 특성을 더 정확하게 이해하고, 데이터를 기반으로 그들의 미래를 설계할 수 있을까?&quot;
            </span>
          </p>
          <p>
            이 질문이 저를 AI와 데이터 분석의 세계로 이끌었습니다. 2024년 9월, Microsoft AI School에서 960시간의 집중 교육을 시작으로 단순히 기술을 배우는 것이 아니라, 문제를 인식하고 해결하는 과정 자체를 배웠습니다.
          </p>
          <p>
            비전공자로서의 배경은 오히려 저에게 큰 강점이 되었습니다. 기술적인 구현에만 매몰되지 않고, 사용자의 관점에서 &apos;왜&apos; 이 기술이 필요한지를 끊임없이 고민하게 만들었기 때문입니다.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-20"></div>

      {/* My Strengths (INFJ Developer) */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">My Strengths (INFJ Developer)</h2>
        <div className="grid grid-cols-1 gap-8">
          <StrengthItem 
            icon="🧠"
            title="Emotional Intelligence (감정 지능)"
            description="코드 이면의 '사람'을 먼저 생각합니다. 팀원들의 어려움을 감지하고 함께 해결하며, 사용자의 불편함을 깊이 있게 공감합니다."
          />
          <StrengthItem 
            icon="🎯"
            title="Deep Analysis (깊이 있는 분석)"
            description="단편적인 결과가 아닌 '왜 이런 결과가 나왔는가?'를 파고듭니다. AI 모델의 통계적 검증과 문맥적 의미를 함께 고려합니다."
          />
          <StrengthItem 
            icon="🤝"
            title="Responsibility & Completeness (책임감과 완성도)"
            description="FlowNote 프로젝트에서 보여주었듯, 설계부터 배포까지 전체 워크플로우를 완성하는 책임감을 가지고 있습니다."
          />
        </div>
      </section>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-20"></div>

      {/* Growth Journey */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">Growth Journey</h2>
        <div className="flex flex-col gap-10 border-l-2 border-gray-100 dark:border-gray-800 pl-8 ml-4">
          <TimelineItem 
            date="2025.11.12 ~ 11.30" 
            title="FlowNote v4 리팩토링" 
            description="멘토링 피드백을 반영하여 v1→v2→v3→v4로 지속적인 버전업. 코드 품질 개선 및 기능 고도화."
          />
          <TimelineItem 
            date="2025.11.12" 
            title="생성형 AI 부트캠프 수료" 
            description="ICT 충청권 부트캠프 생성형 AI 과정 완료. LangChain, RAG 실전 활용 능력 습득."
          />
          <TimelineItem 
            date="2025.10.17 ~ 11.12" 
            title="FlowNote MVP 완성 (개인 프로젝트)" 
            description="LangChain + GPT-4o 기반 자동 파일 분류 시스템. 멘토링을 통해 사업성 검증 및 확장 가능성 인정."
          />
          <TimelineItem 
            date="2025.10.17" 
            title="구글 스터디잼 완료" 
            description="Google Cloud AI/ML 자기주도 학습. Generative AI 배지 4개 취득."
          />
          <TimelineItem 
            date="2025.08.22" 
            title="생성형 AI 활용 강의" 
            description="대한상공회의소 대상 강의. '교육자의 생성형 AI를 활용한 업무 효율성 높이기' 주제로 지식 공유."
          />
          <TimelineItem 
            date="2025.08.01" 
            title="구글 스터디잼 시작" 
            description="Google Cloud AI/ML 학습 프로그램 시작. Introduction to Generative AI 과정 수강."
          />
          <TimelineItem 
            date="2025.07.30" 
            title="생성형 AI 심화 과정 시작" 
            description="ICT 부트캠프 생성형 AI 활용 단계 진입. LangChain, LangGraph, RAG 구현 학습."
          />
          <TimelineItem 
            date="2025.05.19" 
            title="ICT 충청권 부트캠프 시작" 
            description="인공지능(AI) 및 생성형 AI 활용 전문 과정 시작. 6개월간의 집중 학습 여정 시작."
          />
          <TimelineItem 
            date="2025.05.13 & 05.20" 
            title="AI for Impact 보조강사" 
            description="AI 교육 프로그램 보조강사로 활동. 교육 경험과 AI 지식을 결합한 첫 시도."
          />
          <TimelineItem 
            date="2025.02" 
            title="InspirAltion PM & Frontend" 
            description="8명 팀의 PM이자 Frontend & 프롬프트 엔지니어링 역할 수행. Django 풀스택 개발 및 Azure AI Agent 기반 미술 큐레이터 구현."
          />
          <TimelineItem 
            date="2024.12" 
            title="IMS 프로젝트 우승 🏆" 
            description="여행 사진 기반 AI 스토리 생성 서비스. RAG & 프롬프트 엔지니어링의 가능성 확인."
          />
          <TimelineItem 
            date="2024.09" 
            title="MS AI School 시작" 
            description="960시간 집중 교육 시작. AI 개발자로서의 첫걸음."
          />
        </div>
      </section>

      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-20"></div>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">Tech Stack</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          2024년 9월, Python을 처음 배운 이후 14개월간 습득한 기술들입니다.
        </p>
        <div className="grid grid-cols-1 gap-6">
          {/* LLM & Generative AI */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🤖</span> LLM & Generative AI
            </h3>
            <div className="flex flex-wrap gap-2">
              {['OpenAI GPT-4o', 'GPT-4o-mini', 'Google Gemini', 'Grok', 'DALL-E 3', 'Stable Diffusion', 'Azure OpenAI', 'TTS/STT'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* LangChain Ecosystem */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔗</span> LangChain Ecosystem
            </h3>
            <div className="flex flex-wrap gap-2">
              {['LangChain', 'LangGraph', 'LangSmith', 'LCEL', 'Chains', 'Document Loaders', 'Text Splitter', 'OutputParser', 'Memory'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium border border-violet-100 dark:border-violet-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RAG & Embeddings */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔍</span> RAG & Embeddings
            </h3>
            <div className="flex flex-wrap gap-2">
              {['RAG', 'Vector Store', 'Retriever', 'FAISS', 'HuggingFace', 'Sentence Transformers', 'BGE Models', 'KoSimCSE', 'Reranker', 'Prompt Engineering'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-100 dark:border-emerald-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ML & Computer Vision */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🧠</span> ML & Computer Vision
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Azure AI Services', 'Azure Computer Vision', 'Google Cloud Vision', 'Azure Maps', 'Stable Diffusion', 'CNN', 'ResNet', 'KNN', 'Ensemble Clustering', 'SMOTE'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & API */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">⚙️</span> Backend & API
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'FastAPI', 'Flask', 'Streamlit', 'Gradio'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-100 dark:border-green-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Storage */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">💾</span> Database & Storage
            </h3>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'SQLite', 'Azure SQL Server', 'Azure Blob Storage', 'Vector DB (FAISS)'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-100 dark:border-purple-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">☁️</span> Cloud & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Azure Cloud', 'Azure App Service', 'Azure VM', 'Azure ML', 'Azure DevOps', 'GitHub Actions (CI/CD)'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-100 dark:border-cyan-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🎨</span> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'Django Template', 'Vite'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium border border-pink-100 dark:border-pink-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Data & Analysis */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">📊</span> Data & Analysis
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Pandas', 'NumPy', 'Scikit-learn', 'Orange3', 'Data Visualization', 'Heatmap', 'Pairplot', 'Violin Plot', 'Statistical Analysis', 'ML Pipeline'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-100 dark:border-orange-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Collaboration */}
          <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🛠️</span> Tools & Collaboration
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Antigravity','Windsurf', 'VS Code', 'Cursor', 'GitHub', 'Notion', 'FigJam', 'Google Workspace', 'Google Classroom', 'Google Meet', 'Google Drive', 'MS Teams', 'SharePoint', 'OneDrive', 'Adalo', 'Zoom', 'Miro'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function StrengthItem({ icon, title, description }) {
  return (
    <div className="flex gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800">
      <div className="text-4xl shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TimelineItem({ date, title, description }) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-[#0a0a0a]"></div>
      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 block">{date}</span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
