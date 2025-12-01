'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-32 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Index Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Index</h3>
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Main Home</Link>
            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Resources</h3>
            <Link href="/projects" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/education" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Education</Link>
            <Link href="/learning" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Learning</Link>
            <Link href="/insights" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Insights</Link>
            <Link href="/stack" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Stack</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Contact</h3>
            <a href="https://github.com/jjaayy2222" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.instagram.com/livemylife_jay" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Instagram</a>
            <a href="https://discord.com/users/1299364142863486997" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Discord</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); alert('곧 연결 예정입니다.');}} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:qkgkadmlEkf@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Gmail</a>
          </div>

          {/* Portfolio Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Projects</h3>
            <a href="https://github.com/jjaayy2222/flownote-mvp" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">FlowNote</a>
            <a href="https://github.com/MS-AI-SCHOOL-5th-team6/InspirAItion" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">InspirAItion</a>
            <a href="https://github.com/Microsoft-IMS" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">IMS</a>
            <a href="https://github.com/DongukKang2/MS_AI_School_5_1th_Project_11team" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">AI 식단 추천</a>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Jay. All rights reserved.
          </p>
          <div className="flex gap-6">
             {/* Optional social icons or extra links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
