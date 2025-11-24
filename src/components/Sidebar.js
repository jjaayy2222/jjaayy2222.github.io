'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profileConfig } from '@/data/profile';

const navItems = [
  { name: 'Home', path: '/', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  )},
  { name: 'About', path: '/about', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  )},
  { name: 'Projects', path: '/projects', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  )},
  { name: 'Products', path: '/products', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  )},
  { name: 'Insights', path: '/insights', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
  )},
  { name: 'Stacks', path: '/stack', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  )},
];

const socialLinks = [
  { name: 'Facebook', icon: 'FB', href: '#' },
  { name: 'Twitter', icon: 'TW', href: '#' },
  { name: 'Dribbble', icon: 'DB', href: '#' },
  { name: 'Behance', icon: 'BE', href: '#' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] sticky top-0 z-50 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
             <Image 
               src={profileConfig.profileImage}
               alt="Jay's profile"
               fill
               className="object-cover"
             />
          </div>
          <span className="font-bold text-sm text-gray-900 dark:text-white">Jay</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 dark:text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40 pt-20 px-6 transition-colors">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside 
        className={`hidden md:flex flex-col h-screen sticky top-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] overflow-y-auto transition-all duration-300 relative ${
          isCollapsed ? 'w-[80px] p-4' : 'w-[280px] p-8'
        }`}
      >
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-8 -right-3 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white z-10 shadow-sm"
        >
           <svg className={`w-3 h-3 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Profile Section */}
        <div className={`mb-10 transition-all duration-300 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          <div className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden relative transition-all duration-300`}>
             <Image 
               src={profileConfig.profileImage}
               alt="Jay's profile"
               fill
               className="object-cover"
             />
          </div>
          <div className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <h2 className="font-bold text-gray-900 dark:text-white whitespace-nowrap">Jay</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Product Designer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-1 mb-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.name : ''}
              >
                {item.icon}
                <span className={`transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>
                  {item.name}
                </span>
                {!isCollapsed && isActive && (
                  <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Online Status / Socials */}
        <div className="mb-auto">
          <h3 className={`text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            Online
          </h3>
          <div className={`px-3 mb-6 ${isCollapsed ? 'flex justify-center' : ''}`}>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {/* Time display removed */}
            </div>
          </div>
          <div className="space-y-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-colors ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? link.name : ''}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-600 dark:text-gray-300 flex-shrink-0">
                  {link.icon}
                </span>
                <span className={`transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>
                  {link.name}
                </span>
                {!isCollapsed && (
                  <svg className="w-3 h-3 ml-auto text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className={`mt-8 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 placeholder-gray-400 dark:placeholder-gray-600 transition-colors"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
