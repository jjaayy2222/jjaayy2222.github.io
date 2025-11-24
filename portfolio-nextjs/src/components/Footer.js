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
            <Link href="/projects" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Project</Link>
            <Link href="/products" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Product</Link>
            <Link href="/insights" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
            <Link href="/stacks" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Stack</Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Contact</h3>
            <a href="mailto:hello@example.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Email</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Discord</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Calendly</a>
          </div>

          {/* Portfolio Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Portfolio</h3>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Medium</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Behance</a>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Biobricks. All rights reserved.
          </p>
          <div className="flex gap-6">
             {/* Optional social icons or extra links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
