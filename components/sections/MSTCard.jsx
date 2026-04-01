'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MSTCard({ icon: Icon, title, description, ctaText, href = '#', isActive = false }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`group flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
        isActive
          ? 'border-accent bg-white shadow-[0_16px_40px_rgba(255,45,45,0.12)]'
          : 'border-black/12 bg-[#f5f5f6] hover:border-accent hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]'
      }`}
    >
      <motion.div whileHover={{ rotate: 6, scale: 1.08 }} transition={{ duration: 0.25 }} className="mb-7 w-fit rounded-xl border border-accent/20 bg-accent/5 p-3">
        <Icon className="h-5 w-5 text-accent" strokeWidth={1.9} />
      </motion.div>

      <h3 className="font-[var(--font-space-grotesk)] text-xl font-bold uppercase tracking-[-0.01em] text-black">{title}</h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-black/68">{description}</p>

      <div className="mt-8 border-t border-black/10 pt-4">
        <Link href={href} className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.13em] text-black/85 transition-colors group-hover:text-accent">
          {ctaText}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
