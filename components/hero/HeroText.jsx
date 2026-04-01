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
      className="flex flex-col items-center text-center lg:-ml-6 lg:items-start lg:text-left"
    >
      <motion.div
        variants={textVariant}
        className="inline-flex items-center rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur"
      >
        Use Case: Institutional Grade
      </motion.div>

      <motion.h1
        variants={textVariant}
        className="mt-6 max-w-2xl font-[var(--font-space-grotesk)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl"
      >
        <span className="block">Engineering the</span>
        <span className="block text-accent">NEW INTERNET.</span>
      </motion.h1>

      <motion.p variants={textVariant} className="mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
        A performance-first blockchain stack engineered for institutional trust, global settlement, and modern developer velocity. Execute high-value workloads with deterministic speed and resilient security.
      </motion.p>

      <motion.div variants={textVariant} className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#"
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white shadow-xl shadow-black/20 transition-all hover:bg-black/90"
          >
            Products
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-black/20 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-black transition-all hover:border-black/35 hover:bg-white"
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
