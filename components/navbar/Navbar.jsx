'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Build', href: '#', active: true },
  { label: 'Learn', href: '#', active: false },
  { label: 'Products', href: '#', active: false },
  { label: 'Use Cases', href: '#', active: false }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-[90rem] px-4 sm:px-5 lg:px-6"
    >
      <div className="relative rounded-2xl border border-white/60 bg-white/40 shadow-[0_8px_32px_rgba(255,45,45,0.08)] backdrop-blur-md transition-all duration-300 overflow-hidden group/nav">
        {/* Animated Glass Gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover/nav:opacity-80">
          <div className="absolute -top-10 -left-10 h-32 w-48 rounded-full bg-gradient-to-r from-accent/40 to-pink-500/40 blur-[30px]" />
          <div className="absolute -bottom-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400/30 to-accent/30 blur-[40px]" />
          <div className="absolute -top-10 -right-10 h-32 w-48 rounded-full bg-gradient-to-l from-red-500/40 to-purple-500/30 blur-[30px]" />
        </div>
        
        <nav className="relative z-10 flex h-16 w-full items-center justify-between px-4 lg:px-6">
          <Link href="#" className="-ml-1 flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
               <Image src="/assets/hero/mst-dark-logo.svg" alt="MST logo" width={40} height={36} className="h-[36px] w-[40px] drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,45,45,0.5)] transition-all" priority />
            </motion.div>
            <span className="font-[var(--font-space-grotesk)] text-sm font-extrabold tracking-[0.2em] text-black">MST<span className="text-accent">NET</span></span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={`group relative text-xs font-bold uppercase tracking-[0.1em] transition-colors ${item.active ? 'text-black' : 'text-black/50 hover:text-black'}`}>
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 bg-black transition-all duration-300 ${
                      item.active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 rounded-full bg-accent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
            <Link
              href="#"
              className="relative inline-flex items-center space-x-2 rounded-full border border-black bg-black px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all ease-out hover:bg-[#EA3446] hover:border-[#EA3446] shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
              <span>Explore Ecosystem</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="group relative inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white/50 text-black lg:hidden hover:bg-black/5 transition-colors"
          >
            <span className={`h-0.5 w-4 bg-black transition-all duration-300 origin-center ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-4 bg-black transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-4 bg-black transition-all duration-300 origin-center ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/60 bg-gradient-to-b from-white/95 to-red-50/95 p-4 shadow-[0_16px_40px_rgba(255,45,45,0.2)] backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-black/80 hover:bg-black/5 hover:text-black transition-colors" 
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full shadow-sm ${item.active ? 'bg-black' : 'bg-black/20'}`} />
                      {item.label}
                    </span>
                    <svg className="w-4 h-4 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 px-2">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] transition-all hover:bg-[#EA3446] hover:translate-y-[-2px]"
              >
                <span>Explore Ecosystem</span>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}