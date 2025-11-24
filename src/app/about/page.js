'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { profileConfig } from '@/data/profile';

export default function AboutPage() {
  // 최신 프로젝트 3개만 표시
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      {/* Header Section */}
      <div className="mb-20">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-10 leading-tight tracking-tight">
          Transforming Ideas into<br />
          Stunning Digital Experiences
        </h1>

        <div className="flex items-center gap-5 mb-10">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-800 shadow-sm">
            <Image 
              src={profileConfig.profileImage}
              alt="Jay"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Jay</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Product Designer</p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed">
          Welcome to my portfolio! I am Jay, a passionate Product Designer, Web Designer, and Solopreneur
          with a keen eye for detail and a commitment to creating exceptional user experiences. Dive in to
          explore my work and discover how I can help bring your vision to life.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="/about" 
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            More about me 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Latest Works Section */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Latest Works</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl text-lg">
          I present my top-tier projects, meticulously crafted with unwavering passion,
          simplicity, boundless creativity, and unparalleled attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-5 overflow-hidden relative border border-gray-100 dark:border-gray-800">
                {/* 실제 이미지가 있다면 Image 컴포넌트 사용 */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-900">
                    <span className="text-sm font-medium">Project Image</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          All projects 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </div>
  );
}
