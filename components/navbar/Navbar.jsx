'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef } from 'react';

const navItems = [
  { label: 'Build', href: '#', active: true },
  { label: 'Learn', href: '#', active: false },
  { label: 'Products', href: '#', active: false },
  { label: 'Use Cases', href: '#', active: false }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-[90rem] px-4 sm:px-5 lg:px-6"
    >
      {/* Outer Border Glow Container - Cyber Teal Glow */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl bg-gradient-to-r from-[#EA2828]/25 via-[#EA2828] to-[#EA2828]/25 p-[1px] shadow-[0_8px_32px_rgba(234,40,40,0.18)] transition-all duration-300"
      >
        <div className="relative overflow-hidden rounded-2xl bg-black/90 backdrop-blur-[12px] group/nav">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,40,40,0.18),transparent_55%),linear-gradient(135deg,rgba(234,40,40,0.12)_0%,rgba(0,0,0,0.08)_50%,rgba(234,40,40,0.08)_100%)] opacity-80" />
          
          {/* Continuous Ambient Loop - Always Active */}
          <motion.div
            animate={{ left: ['-20%', '120%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-y-0 w-[300px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#EA2828]/20 to-transparent mix-blend-screen opacity-50"
          />

          {/* Rose Red Ripple Wave Effect - High Intensity Scanline */}
          <AnimatePresence>
            {isHovered && (
              <>
                {/* Expanding Core Pulse */}
                <motion.div
                  key="ripple-core"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 15 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    background: 'radial-gradient(circle, rgba(234, 40, 40, 0.72) 0%, transparent 70%)',
                  }}
                  className="pointer-events-none absolute h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
                />
                
                {/* Horizontal Energy Sweep (Scanline) */}
                <motion.div
                  key="ripple-sweep"
                  initial={{ left: '-20%', opacity: 0 }}
                  animate={{ left: '120%', opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-y-0 w-[400px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#EA2828]/40 to-transparent mix-blend-screen"
                />
              </>
            )}
          </AnimatePresence>

          <nav className="relative z-10 flex h-16 w-full items-center justify-between px-4 lg:px-8">
            {/* Left: Logo */}
            <Link href="#" className="-ml-1 flex items-center gap-2 group">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                 <Image 
                  src="/assets/hero/mst-dark-logo.svg" 
                  alt="MST logo" 
                  width={40} 
                  height={36} 
                  className="h-[36px] w-[40px] drop-shadow-sm transition-all invert brightness-0 invert-[1]" 
                  priority 
                />
              </motion.div>
              <span className="font-[var(--font-space-grotesk)] text-sm font-extrabold tracking-[0.05em] text-white">MST<span className="text-[#ff2d2d]">Blockchain</span></span>
            </Link>

            {/* Center: Nav links - Lowercase styling */}
            <ul className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={`group relative text-sm font-medium lowercase tracking-tight transition-colors ${item.active ? 'text-white' : 'text-white/50 hover:text-white'}`}>
                    <span>{item.label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#ff2d2d] transition-all duration-300 ${
                        item.active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: Action Button - Cyber Red Gradient */}
            <div className="hidden lg:block relative group">
              <div className="absolute inset-0 rounded-full bg-[#ff2d2d] opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-40" />
              <Link
                href="#"
                className="relative inline-flex items-center space-x-2 rounded-full bg-[#ff2d2d] px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all ease-out hover:bg-[#ff4d4d] shadow-[0_4px_14px_0_rgba(255,45,45,0.3)] hover:scale-[1.02] active:scale-95"
              >
                <span>explore ecosystem</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((previous) => !previous)}
              className="group relative inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 origin-center ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 origin-center ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-[12px] lg:hidden text-white"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase transition-all ${item.active ? 'bg-teal-500/10 text-[#2DD4BF]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`} 
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full shadow-sm ${item.active ? 'bg-[#2DD4BF]' : 'bg-white/20'}`} />
                      {item.label}
                    </span>
                    <svg className="w-4 h-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2DD4BF] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_4px_14px_0_rgba(45,212,191,0.2)] transition-all hover:bg-teal-300 active:scale-95"
              >
                <span>explore ecosystem</span>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}