'use client';

import { motion } from 'framer-motion';

export default function ExplorerRow({ item, type }) {
  const leftText = type === 'blocks' ? `#${item.id.toLocaleString()}` : item.address;
  const rightText = type === 'blocks' ? item.time : item.value;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -20, backgroundColor: 'rgba(255,45,45,0.14)' }}
      animate={{ opacity: 1, y: 0, backgroundColor: 'rgba(255,255,255,1)' }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between rounded-md border border-black/10 px-6 py-4 text-sm transition-colors duration-200 hover:border-black/40"
    >
      <span className="font-semibold tracking-[0.01em] text-black/85">{leftText}</span>
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-black/50">{rightText}</span>
    </motion.li>
  );
}
