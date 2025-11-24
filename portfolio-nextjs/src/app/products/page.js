import Link from 'next/link'

export const metadata = {
  title: 'Products - Biobricks',
  description: 'Digital products designed to solve real-world problems.',
}

export default function ProductsPage() {
  const products = [
    {
      id: '1',
      name: 'FlowNote',
      description: 'AI-powered document classification and management system.',
      image: 'Product Image',
      link: '/products/1'
    },
    {
      id: '2',
      name: 'Biobricks UI',
      description: 'A premium React component library for modern web applications.',
      image: 'Product Image',
      link: '/products/2'
    }
  ]

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

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Products
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          Digital products designed to solve real-world problems. Meticulously crafted for performance and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {product.image}
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{product.description}</p>
              <Link href={product.link} className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:decoration-gray-900 dark:hover:decoration-white transition-all">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
