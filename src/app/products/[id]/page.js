import Link from 'next/link'
import { notFound } from 'next/navigation'

// Product data (matching the products page)
const products = [
  {
    id: '1',
    name: 'FlowNote',
    description: 'AI-powered document classification and management system.',
    fullDescription: 'FlowNote is a comprehensive AI-powered document classification and management system built with cutting-edge technologies. It leverages LangChain for intelligent document processing, FastAPI for high-performance backend services, and provides an intuitive Streamlit interface for seamless user interaction.',
    image: 'Product Image',
    link: '#',
    technologies: ['Python', 'LangChain', 'FastAPI', 'Streamlit', 'AI/ML'],
    year: '2024'
  },
  {
    id: '2',
    name: 'Biobricks UI',
    description: 'A premium React component library for modern web applications.',
    fullDescription: 'Biobricks UI is a meticulously crafted React component library designed for building modern, accessible, and performant web applications. It features a comprehensive set of customizable components, built-in dark mode support, and follows best practices for accessibility and performance.',
    image: 'Product Image',
    link: '#',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    year: '2024'
  }
]

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Biobricks`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params
  const product = products.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto pt-10 md:pt-20 pb-20">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to homepage
      </Link>

      <article className="max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/products" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              ← Products
            </Link>
            <span>•</span>
            <span>{product.year}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {product.description}
          </p>
        </header>

        {/* Product Image */}
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl mb-12 flex items-center justify-center text-gray-400">
          {product.image}
        </div>

        {/* Full Description */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12">
          <p className="leading-relaxed">
            {product.fullDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {product.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back to Products */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:gap-3 transition-all"
          >
            ← Back to all products
          </Link>
        </div>
      </article>
    </div>
  )
}
