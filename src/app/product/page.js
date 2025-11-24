'use client';

import Link from 'next/link';

const products = [
  {
    id: '1',
    title: 'Design System Kit',
    description: 'A comprehensive UI kit for Figma to speed up your workflow.',
    price: '$29',
    link: '#'
  },
  {
    id: '2',
    title: 'Icon Pack Vol. 1',
    description: '200+ minimal icons for your next project.',
    price: '$15',
    link: '#'
  }
];

export default function ProductPage() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Digital assets and tools to help you build better.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
               <span className="text-4xl">📦</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {product.title}
              </h3>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-bold rounded text-gray-900 dark:text-white">
                {product.price}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              {product.description}
            </p>
            <Link 
              href={product.link}
              className="block w-full py-2.5 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
