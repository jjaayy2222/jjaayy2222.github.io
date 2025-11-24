'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
              MyPortfolio
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Products
            </Link>
            <Link 
              href="/insights" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Insights
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 p-2"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/insights" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
