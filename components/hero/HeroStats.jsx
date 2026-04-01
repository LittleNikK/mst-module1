'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Finality', value: '400ms' },
  { label: 'Nodes', value: '12,400+' },
  { label: 'Ecosystem', value: '450+' }
];

export default function HeroStats() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.45
          }
        }
      }}
      className="mt-12 grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">{stat.label}</p>
          <p className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-black">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
