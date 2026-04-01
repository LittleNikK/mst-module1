'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Finality', value: '400ms', active: true },
  { label: 'Active Nodes', value: '12,400+', active: false },
  { label: 'Total Value', value: '$4.2B+', active: false }
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
      className="mt-6 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(255,45,45,0.12)' }}
          className="relative overflow-hidden rounded-[14px] border border-black/10 bg-white/80 p-3 backdrop-blur transition-all duration-300 hover:border-accent/40 group"
        >
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-black/50">
            {stat.active && <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>}
            {stat.label}
          </p>
          <p className="mt-1 font-[var(--font-space-grotesk)] text-xl sm:text-2xl font-bold tracking-tight text-black drop-shadow-sm group-hover:text-accent transition-colors">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
