'use client'
import Link from 'next/link'

export default function LearningDetail() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <svg 
              className="w-16 h-16 text-blue-500 dark:text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          마이그레이션 준비 중입니다
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          현재 Learning 섹션의 콘텐츠를 새로운 시스템으로 이전하고 있습니다.<br/>
          더 나은 학습 경험을 위해 열심히 공사 중이니 조금만 기다려주세요! 🚧
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            홈으로 가기
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
