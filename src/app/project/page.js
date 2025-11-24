'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A collection of my work in product design and development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="group block">
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-5 overflow-hidden relative border border-gray-100 dark:border-gray-800">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-900">
                  <span className="text-sm font-medium">Project Image</span>
               </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
