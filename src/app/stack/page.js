'use client';

import Link from 'next/link';

const stackCategories = [
  {
    title: 'LLM & Generative AI',
    items: [
      { name: 'OpenAI GPT-4o', subtitle: 'Advanced LLM', icon: '🤖' },
      { name: 'GPT-4o-mini', subtitle: 'Efficient LLM', icon: '⚡' },
      { name: 'Google Gemini', subtitle: 'Multimodal LLM', icon: '✨' },
      { name: 'Claude', subtitle: 'Anthropic LLM, 4.5-sonnet & 3.5-haiku', icon: '🤖' },
      { name: 'Grok', subtitle: 'AI by xAI', icon: '🚀' },
      { name: 'DALL-E 3', subtitle: 'Image Generation', icon: '🎨' },
      { name: 'Stable Diffusion', subtitle: 'Open Source Image Gen', icon: '🖼️' },
      { name: 'Azure OpenAI', subtitle: 'Enterprise AI Service', icon: '☁️' },
      { name: 'TTS/STT', subtitle: 'Voice AI', icon: '🗣️' },
    ]
  },
  {
    title: 'LangChain Ecosystem',
    items: [
      { name: 'LangChain', subtitle: 'LLM Framework', icon: '🦜' },
      { name: 'LangGraph', subtitle: 'Agent Orchestration', icon: '🕸️' },
      { name: 'LangSmith', subtitle: 'LLM Ops & Monitoring', icon: '🛠️' },
      { name: 'LCEL', subtitle: 'LangChain Expression Language', icon: '🔗' },
      { name: 'Chains', subtitle: 'Workflow Construction', icon: '⛓️' },
      { name: 'Document Loaders', subtitle: 'Data Ingestion', icon: '📄' },
      { name: 'Text Splitter', subtitle: 'Chunking Strategy', icon: '✂️' },
      { name: 'OutputParser', subtitle: 'Structured Output', icon: '🌿' },
      { name: 'Memory', subtitle: 'Context Management', icon: '🧠' },
    ]
  },
  {
    title: 'RAG & Embeddings',
    items: [
      { name: 'RAG', subtitle: 'Retrieval Augmented Gen', icon: '🔍' },
      { name: 'Vector Store', subtitle: 'Vector Database', icon: '🗄️' },
      { name: 'Retriever', subtitle: 'Search Optimization', icon: '🎣' },
      { name: 'FAISS', subtitle: 'Vector Search Engine', icon: '⚡' },
      { name: 'HuggingFace', subtitle: 'Model Hub & Embeddings', icon: '🤗' },
      { name: 'Sentence Transformers', subtitle: 'Text Embeddings', icon: '📝' },
      { name: 'BGE Models', subtitle: 'High Performance Embeddings', icon: '🚀' },
      { name: 'KoSimCSE', subtitle: 'Korean Embeddings', icon: '🇰🇷' },
      { name: 'Reranker', subtitle: 'Search Refinement', icon: '🎯' },
      { name: 'Prompt Engineering', subtitle: 'Prompt Optimization', icon: '✍️' },
    ]
  },
  {
    title: 'ML & Computer Vision',
    items: [
      { name: 'Azure AI Services', subtitle: 'Cloud AI Platform', icon: '🧠' },
      { name: 'Azure Computer Vision', subtitle: 'Vision API', icon: '👁️' },
      { name: 'Google Cloud Vision', subtitle: 'Image Analysis', icon: '🔎' },
      { name: 'Azure Maps', subtitle: 'Geospatial Services', icon: '🗺️' },
      { name: 'Stable Diffusion', subtitle: 'Image Generation Model', icon: '🎨' },
      { name: 'CNN / ResNet', subtitle: 'Deep Learning Models', icon: '🕸️' },
      { name: 'KNN', subtitle: 'Classification Algorithm', icon: '📏' },
      { name: 'Ensemble Clustering', subtitle: 'Clustering Algorithm', icon: '🧩' },
      { name: 'SMOTE', subtitle: 'Data Balancing', icon: '⚖️' },
    ]
  },
  {
    title: 'Backend & API',
    items: [
      { name: 'Python', subtitle: 'Primary Language', icon: '🐍' },
      { name: 'Django', subtitle: 'Web Framework', icon: '🌐' },
      { name: 'FastAPI', subtitle: 'High-performance API', icon: '⚡' },
      { name: 'Flask', subtitle: 'Microframework', icon: '🧪' },
      { name: 'Streamlit', subtitle: 'Data Apps', icon: '📊' },
      { name: 'Gradio', subtitle: 'ML Demos', icon: '🎛️' },
    ]
  },
  {
    title: 'Database & Storage',
    items: [
      { name: 'PostgreSQL', subtitle: 'Relational Database', icon: '🐘' },
      { name: 'SQLite', subtitle: 'Embedded Database', icon: '🗃️' },
      { name: 'Azure SQL Server', subtitle: 'Cloud Database', icon: '☁️' },
      { name: 'Azure Blob Storage', subtitle: 'Cloud Storage', icon: '📦' },
      { name: 'Vector DB (FAISS)', subtitle: 'Vector Storage', icon: '🎯' },
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'Azure Cloud', subtitle: 'Cloud Platform', icon: '☁️' },
      { name: 'Azure App Service', subtitle: 'Web Hosting', icon: '🚀' },
      { name: 'Azure VM', subtitle: 'Virtual Machines', icon: '💻' },
      { name: 'Azure DevOps', subtitle: 'Development Operations', icon: '♾️' },
      { name: 'GitHub Actions (CI/CD)', subtitle: 'CI/CD Pipelines', icon: '▶️' },
      { name: 'Azure ML', subtitle: 'Machine Learning Ops', icon: '🔬' },
    ]
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', subtitle: 'UI Library', icon: '⚛️' },
      { name: 'Next.js', subtitle: 'React Framework', icon: '▲' },
      { name: 'HTML', subtitle: 'Web Fundamentals-Structure', icon: '🧱' },
      { name: 'CSS', subtitle: 'Web Fundamentals-Style', icon: '🎨' },
      { name: 'JavaScript', subtitle: 'Scripting Language-Function', icon: '⚙️' },
      { name: 'Vite', subtitle: 'Build Tool', icon: '⚡' },
      { name: 'Bootstrap 5', subtitle: 'CSS Framework', icon: '🎨' },
      { name: 'Django Template', subtitle: 'Server-side Rendering', icon: '🐍' },
      { name: 'Tailwind CSS', subtitle: 'CSS Framework-for this site', icon: '✨' },
    ]
  },
  {
    title: 'Data & Analysis',
    items: [
      { name: 'Pandas', subtitle: 'Data Manipulation', icon: '🐼' },
      { name: 'NumPy', subtitle: 'Numerical Computing', icon: '🔢' },
      { name: 'Scikit-learn', subtitle: 'Machine Learning Lib', icon: '🤖' },
      { name: 'Orange3', subtitle: 'Data Mining Tool', icon: '🍊' },
      { name: 'Data Visualization', subtitle: 'Charts & Graphs', icon: '📊' },
      { name: 'Heatmap', subtitle: 'Data Intensity Viz', icon: '🔥' },
      { name: 'Pairplot', subtitle: 'Relationship Viz', icon: '📈' },
      { name: 'Violin Plot', subtitle: 'Distribution Viz', icon: '🎻' },
      { name: 'Statistical Analysis', subtitle: 'Data Insights', icon: '📉' },
      { name: 'ML Pipeline', subtitle: 'Workflow Automation', icon: '🏗️' },
    ]
  },
  {
    title: 'Tools & Collaboration',
    items: [
      { name: 'Antigravity', subtitle: 'AI Code Editor', icon: '🚀' },
      { name: 'Windsurf', subtitle: 'AI Code Editor', icon: '🏄' },
      { name: 'Cursor', subtitle: 'AI Code Editor', icon: '🖱️' },
      { name: 'VS Code', subtitle: 'Code Editor', icon: '📝' },
      { name: 'GitHub', subtitle: 'Version Control', icon: '🐱' },
      { name: 'Notion', subtitle: 'Knowledge Base', icon: '📓' },
      { name: 'FigJam', subtitle: 'Online Whiteboard', icon: '🎨' },
      { name: 'Google Workspace', subtitle: 'Collaboration Suite', icon: '📁' },
      { name: 'Google Classroom', subtitle: 'Google Workspace for education', icon: '🎓' },
      { name: 'Google Meet', subtitle: 'Google Video Conferencing', icon: '📹' },
      { name: 'Google Drive', subtitle: 'Cloud Storage', icon: '💾' },
      { name: 'Zoom', subtitle: 'Video Conferencing', icon: '📽️' },
      { name: 'MS Teams', subtitle: 'Team Communication', icon: '💬' },
      { name: 'SharePoint', subtitle: 'Document Management', icon: '📂' },
      { name: 'OneDrive', subtitle: 'Cloud Storage', icon: '☁️' },
      { name: 'Adalo', subtitle: 'No-Code Platform', icon: '📱' },
      { name: 'Miro', subtitle: 'Online Whiteboard', icon: '📋' },
    ]
  }
];

export default function StackPage() {
  return (
    <div className="max-w-[750px] mx-auto px-6 py-12 md:py-20">
      {/* Back Link */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to homepage
        </Link>
      </div>

      {/* Header Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Stack</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Software & services I use in my workflow.
        </p>
      </div>

      {/* Stack Categories */}
      <div className="flex flex-col gap-16">
        {stackCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div 
                  key={item.name} 
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-sm group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-800 mt-20"></div>
    </div>
  );
}
