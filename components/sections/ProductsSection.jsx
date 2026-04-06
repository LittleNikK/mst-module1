'use client';

import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion';
import { useRef, useState } from 'react';
import ProductSlide from './ProductSlide';

const products = [
  {
    title: 'MST CORE ENGINE',
    description:
      'The primary execution environment for structural purity. Designed to handle extreme throughput without state bloat.',
    image: '/assets/hero/img1.webp',
    notes: [
      'Parallel execution lanes',
      'Deterministic settlement',
      'Low-latency finality path'
    ]
  },
  {
    title: 'MST DATA LAYER',
    description:
      'Modular data availability layer ensuring security, scalability, and fast validation.',
    image: '/assets/hero/img2.jpg',
    notes: [
      'High-throughput block ingestion',
      'Compact proof surfaces',
      'Resilient availability model'
    ]
  },
  {
    title: 'MST SDK TOOLKIT',
    description:
      'Developer-first toolkit for building high-performance decentralized applications.',
    image: '/assets/hero/img3.jpeg',
    notes: [
      'Composable SDK modules',
      'Typed client primitives',
      'Fast integration workflow'
    ]
  }
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // smooth parallax
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -10]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.4, 1, 1]);

  // safe update
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const nextIndex = Math.min(
      products.length - 1,
      Math.floor(value * products.length)
    );

    setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
  });

  const activeProduct = products[activeIndex];

  return (
    <section className="w-full py-16 md:py-24">
      <div ref={sectionRef} className="relative h-[300vh]">

        <div className="sticky top-0 flex h-screen items-center px-6">

          {/* 🔥 BALANCED GRID */}
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            {/* IMAGE SIDE */}
            <motion.div style={{ y: imageParallaxY }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.title}
                  initial={{ opacity: 0, rotateY: -20, scale: 0.96 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 20, scale: 0.96 }}
                  transition={{ duration: 0.6 }}

                  className="relative aspect-[4/3] max-w-[520px] mx-auto lg:mx-0 overflow-hidden rounded-[2rem] border border-black/10 bg-[#eff0f2] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                >
                  {/* grid overlay */}
                  <div className="absolute inset-0 opacity-[0.06] 
                    [background-image:linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)]
                    [background-size:28px_28px]"
                  />

                  <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-black/15 bg-[#17191d] p-2">
                    <div className="relative h-full w-full overflow-hidden rounded-[1rem] border border-white/10 bg-black">

                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.title}
                        fill
                        className="object-cover"
                        priority
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent_30%,transparent_70%,rgba(255,255,255,0.08))]" />
                    </div>
                  </div>

                  {/* indicators */}
                  <div className="absolute bottom-6 right-6 flex gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 backdrop-blur">
                    {products.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-2 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-black' : 'bg-black/30'
                          }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* TEXT SIDE */}
            <motion.div
              style={{ y: contentY, opacity: contentOpacity }}
              className="max-w-[640px]"
            >
              <AnimatePresence mode="wait">
                <ProductSlide
                  key={activeProduct.title}
                  product={activeProduct}
                  variant="text"
                  index={activeIndex + 1}
                  total={products.length}
                />
              </AnimatePresence>

              {/* NOTES */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.title + '-notes'}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 rounded-xl border border-black/10 bg-white/70 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Highlights
                  </p>

                  <ul className="mt-4 space-y-2">
                    {activeProduct.notes.map((note) => (
                      <li key={note} className="flex gap-2 text-sm text-black/70">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}