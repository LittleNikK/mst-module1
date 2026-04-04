'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import ProductSlide from './ProductSlide';

const products = [
  {
    title: 'MST CORE ENGINE',
    description:
      'The primary execution environment for structural purity. Designed to handle extreme throughput without state bloat.',
    image: '/assets/hero/img1.webp',
    notes: ['Parallel execution lanes', 'Deterministic settlement', 'Low-latency finality path']
  },
  {
    title: 'MST DATA LAYER',
    description: 'Modular data availability layer ensuring security, scalability, and fast validation.',
    image: '/assets/hero/img2.jpg',
    notes: ['High-throughput block ingestion', 'Compact proof surfaces', 'Resilient availability model']
  },
  {
    title: 'MST SDK TOOLKIT',
    description: 'Developer-first toolkit for building high-performance decentralized applications.',
    image: '/assets/hero/img3.jpeg',
    notes: ['Composable SDK modules', 'Typed client primitives', 'Fast integration workflow']
  }
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rightContentY = useTransform(scrollYProgress, [0, 1], [72, -6]);
  const rightContentOpacity = useTransform(scrollYProgress, [0, 0.12, 0.22, 1], [0.35, 0.75, 1, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const nextIndex = Math.min(products.length - 1, Math.floor(value * products.length));

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  });

  const activeProduct = products[activeIndex];

  const PhoneFlipCard = () => (
    <motion.div
      style={{ y: imageParallaxY, rotateY: phoneRotateY, transformOrigin: 'center center' }}
      className="relative mx-auto w-[min(88vw,380px)] [perspective:1600px]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeProduct.title}
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[10/19.5] h-[min(62vh,560px)] overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#eff0f2] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-black/15 bg-[#17191d] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [perspective:1600px]">
            <div className="pointer-events-none absolute left-1/2 top-1.5 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/40" />

            <div className="relative h-full w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-black">
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 84vw, 50vw"
                priority
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="w-full py-12 md:py-20">
      <div ref={sectionRef} className="relative h-[300vh]">
        <div className="sticky top-24 flex h-[calc(100vh-6rem)] items-center px-4 sm:px-5 lg:px-6">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <PhoneFlipCard />

            <motion.div style={{ y: rightContentY, opacity: rightContentOpacity }} className="space-y-5">
              <AnimatePresence mode="wait">
                <ProductSlide key={activeProduct.title} product={activeProduct} variant="text" index={activeIndex + 1} total={products.length} />
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={`${activeProduct.title}-notes`}
                  initial={{ opacity: 0, y: 42 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1.3rem] border border-black/10 bg-white/65 p-6 backdrop-blur"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/45">Additional module highlights</p>

                  <ul className="mt-4 space-y-3">
                    {activeProduct.notes.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-black/70 xl:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EA3446]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
