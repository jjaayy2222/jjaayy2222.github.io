'use client'
import Link from 'next/link'

export default function Learning() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-full">
            <svg 
              className="w-16 h-16 text-purple-500 dark:text-purple-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Learning Center
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          체계적인 학습 로드맵과 자료실을 준비하고 있습니다.<br/>
          곧 새로운 모습으로 찾아뵙겠습니다! 📚
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
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
