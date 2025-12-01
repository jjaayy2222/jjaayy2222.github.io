'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link href={project.link} className="group block">
      <div className="relative aspect-[4/3] mb-4 rounded-2xl overflow-hidden bg-gray-100">
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
        
        {/* Actual Image (Uncomment when images are available) */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{project.category || 'Web Design'}</span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
      </div>
    </Link>
  )
}
