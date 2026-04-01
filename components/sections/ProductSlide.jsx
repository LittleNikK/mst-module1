'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const highlightsByTitle = {
  'MST CORE ENGINE': ['Deterministic execution', 'Throughput optimized'],
  'MST DATA LAYER': ['Fast validation', 'Secure availability'],
  'MST SDK TOOLKIT': ['Dev-first primitives', 'Modular integrations']
};

export default function ProductSlide({ product, variant = 'text', index = 1, total = 3 }) {
  const highlights = highlightsByTitle[product.title] ?? [];

  if (variant === 'card') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f6]">
          <Image src={product.image} alt={product.title} fill className="object-cover" sizes="100vw" />
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">Scroll to explore variations</p>
            <span className="rounded-full border border-black/15 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-black/55">
              {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.02em] text-black">{product.title}</h3>
          <div className="h-px w-full bg-black/10" />

          <p className="text-sm leading-relaxed text-black/65">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-black/15 bg-[#f8f8f8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-xl rounded-[1.4rem] border border-black/10 bg-white/70 p-7 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45">Scroll to explore variations</p>
        <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-black/55">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-extrabold tracking-[-0.03em] text-black xl:text-5xl">{product.title}</h3>
      <div className="mt-5 h-px w-full bg-black/10" />

      <p className="mt-5 text-base leading-relaxed text-black/65 xl:text-lg">{product.description}</p>

    </motion.div>
  );
}
