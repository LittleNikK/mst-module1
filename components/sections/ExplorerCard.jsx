'use client';

import { AnimatePresence, motion } from 'framer-motion';
import ExplorerRow from './ExplorerRow';

const cardIcons = {
  blocks: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-black/55" aria-hidden>
      <path d="M12 3 20 7.5 12 12 4 7.5 12 3Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 12 12 16.5 4 12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 16.5 12 21 4 16.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  tx: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-black/55" aria-hidden>
      <path d="M4 7h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="m11 4 3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 17H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="m13 14-3 3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function ExplorerCard({ title, rows, type, isUpdating }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-sm border border-black/15 bg-white/85 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold uppercase tracking-[0.08em] text-black">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff2d2d]/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff2d2d]" />
          </span>
          {cardIcons[type]}
        </div>
      </div>

      <div className="mt-4 h-px w-full bg-black/10" />

      {isUpdating && (
        <div className="mt-5 h-9 overflow-hidden rounded-md border border-black/10 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      )}

      <ul className="mt-5 space-y-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {rows.map((row) => (
            <ExplorerRow key={row.uid} item={row} type={type === 'blocks' ? 'blocks' : 'tx'} />
          ))}
        </AnimatePresence>
      </ul>
    </motion.article>
  );
}
