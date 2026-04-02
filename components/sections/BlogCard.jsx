'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ category, date, title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group h-full transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden border border-black bg-neutral-100 h-[240px] w-full mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Meta Text */}
        <div className="mb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF2D2D]">
            {category} / {date}
          </p>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-[var(--font-space-grotesk)] text-base font-bold uppercase tracking-[-0.02em] text-black line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-grow text-xs text-neutral-600 line-clamp-2">
          {description}
        </p>

        {/* CTA */}
        <div className="pt-3 border-t border-neutral-200">
          <motion.button
            type="button"
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-colors duration-300 group-hover:text-[#FF2D2D]"
          >
            <span className="underline">READ MORE</span>
            <ArrowRight size={12} className="transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
