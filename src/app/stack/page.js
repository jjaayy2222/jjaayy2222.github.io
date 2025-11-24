'use client';

const stackCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Framer Motion', icon: '✨' },
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Firebase', icon: '🔥' },
    ]
  },
  {
    title: 'Design',
    items: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Adobe XD', icon: '🖌️' },
      { name: 'Sketch', icon: '💎' },
      { name: 'Blender', icon: '🧊' },
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'VS Code', icon: '📝' },
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Vercel', icon: '▲' },
    ]
  }
];

export default function StackPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {stackCategories.map((category) => (
        <div key={category.title} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-8 bg-gray-200 dark:bg-gray-700"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {category.items.map((item) => (
              <div key={item.name} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-colors group aspect-square">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="border-t border-gray-200 dark:border-gray-800 mt-20"></div>
    </div>
  );
}
