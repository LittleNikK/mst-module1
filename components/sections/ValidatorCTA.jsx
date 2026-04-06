'use client';

import { motion } from 'framer-motion';

export default function ValidatorCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-noise relative w-full overflow-hidden bg-[#fafafa]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,45,45,0.15),rgba(255,100,50,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_40%,rgba(255,45,45,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_60%,rgba(0,0,0,0.03),transparent_70%)]" />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_80%,transparent_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(255,45,45,0.6)]" />

      <motion.div
        aria-hidden
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[8%] top-[16%] h-[240px] w-[240px] rounded-full bg-[#ff2d2d]/[0.12] blur-[105px]"
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[22%] top-[44%] h-[220px] w-[220px] rounded-full bg-[#60a5fa]/[0.08] blur-[110px]"
      />

      <motion.div
        aria-hidden
        animate={{ rotate: [0, 360], y: [-8, 8, -8] }}
        transition={{ rotate: { duration: 120, repeat: Infinity, ease: 'linear' }, y: { duration: 14, repeat: Infinity, ease: 'easeInOut' } }}
        className="pointer-events-none absolute left-0 top-1/2 h-[360px] w-[360px] -translate-x-[64%] -translate-y-1/2 rounded-full border border-slate-900/10 sm:h-[430px] sm:w-[430px] md:h-[520px] md:w-[520px]"
      >
        <div className="absolute inset-[16%] rounded-full border border-slate-900/5" />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ rotate: [360, 0], y: [8, -8, 8] }}
        transition={{ rotate: { duration: 130, repeat: Infinity, ease: 'linear' }, y: { duration: 15, repeat: Infinity, ease: 'easeInOut' } }}
        className="pointer-events-none absolute right-0 top-1/2 h-[360px] w-[360px] translate-x-[64%] -translate-y-1/2 rounded-full border border-slate-900/10 sm:h-[430px] sm:w-[430px] md:h-[520px] md:w-[520px]"
      >
        <div className="absolute inset-[16%] rounded-full border border-slate-900/5" />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-28 lg:py-32">
        <div className="relative border rounded-[18px] border-black/80 bg-white px-6 py-14 text-center shadow-[0_18px_60px_rgba(0,0,0,0.07)] sm:px-10 sm:py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.08),transparent_58%)]" />

          <p className="mx-auto mb-5 max-w-max border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45 sm:mb-6">
            Institutional Infrastructure Access
          </p>

          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-black sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            JOIN OUR VALIDATOR PROGRAM
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg md:mt-8 md:text-[1.08rem]">
            Help secure the most performant network in existence. Stake MST and run professional-grade infrastructure.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="mt-10 inline-flex items-center rounded-[14px] justify-center bg-black px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-[#EA3446] hover:shadow-[0_16px_32px_rgba(0,0,0,0.28)] md:mt-12"
          >
            JOIN THE SYSTEM
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
