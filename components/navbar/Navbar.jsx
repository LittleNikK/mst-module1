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
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-black/5 bg-white/65 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between px-4 sm:px-5 lg:px-6">
        <Link href="#" className="-ml-2 inline-flex items-center gap-2.5 font-[var(--font-space-grotesk)] text-sm font-bold tracking-[0.18em] text-black sm:text-base">
          <Image src="/assets/hero/mst-dark-logo.svg" alt="MST logo" width={50} height={45} className="h-[50px] w-[45px]" priority />
          <span>MST BLOCKCHAIN</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="group relative text-sm font-medium tracking-tight text-black/78 transition-colors hover:text-black">
                <span>{item.label}</span>
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-accent transition-all duration-300 ${
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:scale-[1.02] hover:bg-[#e82727]"
          >
            Join Our Ecosystem 
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black lg:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${
              isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span
            className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${
              isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-black/5 bg-white/90 px-4 pb-6 pt-4 backdrop-blur-xl sm:px-5 lg:hidden"
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-2 py-1.5 text-sm font-medium text-black/85" onClick={() => setIsOpen(false)}>
                    <span className={`h-1.5 w-1.5 rounded-full ${item.active ? 'bg-accent' : 'bg-black/20'}`} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Join Our Ecosystem
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}