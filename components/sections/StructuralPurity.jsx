'use client';

import { motion } from 'framer-motion';

export default function StructuralPurity() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f8]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(15,23,42,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.22)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,45,45,0.08),rgba(255,45,45,0)_34%),linear-gradient(135deg,rgba(255,255,255,0.75)_0%,rgba(247,247,248,0.98)_55%,rgba(232,235,240,0.9)_100%)]" />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[-8%] top-[-6%] h-[220px] w-[220px] rounded-full bg-[#ff2d2d]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-black bg-white p-8 text-center sm:p-12 lg:p-16"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:gap-7">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-space-grotesk)] text-3xl font-extrabold uppercase tracking-[-0.04em] text-black sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="block">SECURED BY</span>
              <span className="block text-[#FF2D2D]">STRUCTURAL PURITY.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg"
            >
              Our consensus mechanism is mathematically proven to withstand adversarial conditions while maintaining zero-lag performance.
            </motion.p>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 3, opacity: 0.85 }}
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:text-[#FF2D2D]"
            >
              <span className="underline decoration-1 underline-offset-4 transition-all duration-300 group-hover:decoration-[#FF2D2D] group-hover:underline-offset-8">
                READ THE WHITEPAPER
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
