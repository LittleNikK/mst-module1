'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroStats from './HeroStats';
import PartnersStrip from './PartnersStrip';

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function HeroText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
          }
        }
      }}
      className="flex flex-col items-center text-center lg:ml-5 lg:items-start lg:text-left"
    >
      {/* <motion.div
        variants={textVariant}
        className="relative inline-flex items-center overflow-hidden rounded-full border border-black/15 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] px-3 py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-black"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_rgba(255,45,45,0.8)]"></span>
          </span>
          Protocol Node: Online
        </span>
      </motion.div> */}

      <motion.h1
        variants={textVariant}
        className="mt-4 max-w-2xl font-[var(--font-space-grotesk)] text-4xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-black sm:text-5xl md:text-[3.5rem] lg:text-[4rem] drop-shadow-sm"
      >
        <span className="block mb-1">Architecting</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-600 to-rose-500 animate-gradient-x drop-shadow-[0_4px_24px_rgba(255,45,45,0.3)] pb-1 relative">
          The Web3
          <span className="absolute -top-1 -right-4 text-[10px] tracking-widest text-accent/50 font-normal blur-[0.5px]">v2.0</span>
        </span>
        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-1 text-black/90">Settlement Layer.</span>
      </motion.h1>

      <motion.p variants={textVariant} className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 md:text-base font-medium border-l-2 border-accent/40 pl-3 bg-gradient-to-r from-accent/5 to-transparent py-1">
        A performance-first blockchain stack engineered for institutional trust and global finality. Ship decentralized applications with deterministic speed, zero downtime, and resilient security.
      </motion.p>

      <motion.div variants={textVariant} className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-black px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.13em] text-white shadow-xl shadow-black/20 transition-all hover:bg-neutral-800"
          >
            Products
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-black/20 bg-white/70 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.13em] text-black transition-all hover:border-black/35 hover:bg-white"
          >
            Docs
          </Link>
        </motion.div>
      </motion.div>

      <HeroStats />

      <motion.div variants={textVariant} className="w-full">
        <PartnersStrip />
      </motion.div>
    </motion.div>
  );
}
