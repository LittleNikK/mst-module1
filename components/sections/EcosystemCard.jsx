'use client';

import { motion } from 'framer-motion';

export default function EcosystemCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="group relative cursor-pointer overflow-hidden border border-black/15 bg-white p-8 text-center transition-all duration-300 ease-out hover:border-[#FF2D2D] hover:bg-[#FF2D2D] hover:shadow-[0_18px_40px_rgba(255,45,45,0.28)] sm:p-10"
      tabIndex={0}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(160deg,rgba(255,255,255,0.18),transparent_55%)]" />

      <motion.div
        whileHover={{ rotate: 4, scale: 1.08 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#FF2D2D]/20 bg-[#FF2D2D]/10 text-[#FF2D2D] transition-colors duration-300 group-hover:border-white/35 group-hover:bg-white/15 group-hover:text-white"
      >
        <Icon className="h-7 w-7" strokeWidth={2.2} />
      </motion.div>

      <h3 className="relative mt-6 font-[var(--font-space-grotesk)] text-2xl font-extrabold uppercase tracking-[0.06em] text-black transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>

      <p className="relative mx-auto mt-4 max-w-xs text-sm leading-relaxed text-black/60 transition-colors duration-300 group-hover:text-white/90">
        {description}
      </p>

      <div className="pointer-events-none absolute inset-0 ring-0 ring-[#FF2D2D]/40 transition-all duration-300 group-focus-within:ring-4" />
    </motion.article>
  );
}
