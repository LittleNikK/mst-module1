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
    image: '/assets/hero/img1.webp'
  },
  {
    title: 'MST DATA LAYER',
    description: 'Modular data availability layer ensuring security, scalability, and fast validation.',
    image: '/assets/hero/img2.jpg'
  },
  {
    title: 'MST SDK TOOLKIT',
    description: 'Developer-first toolkit for building high-performance decentralized applications.',
    image: '/assets/hero/img3.jpeg'
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

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const nextIndex = Math.min(products.length - 1, Math.floor(value * products.length));

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  });

  const activeProduct = products[activeIndex];

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto hidden w-full max-w-[90rem] md:block">
        <div ref={sectionRef} className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center px-4 sm:px-5 lg:px-6">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <motion.div style={{ y: imageParallaxY }} className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.title}
                    initial={{ opacity: 0.9, rotateY: -28, scale: 0.96 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: 28, scale: 0.97 }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/10 bg-[#eff0f2] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />

                    <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] border border-black/15 bg-[#17191d] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [perspective:1600px]">
                      <div className="pointer-events-none absolute left-1/2 top-1.5 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/40" />

                      <div className="relative h-full w-full overflow-hidden rounded-[1rem] border border-white/10 bg-black">
                        <Image
                          src={activeProduct.image}
                          alt={activeProduct.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />

                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]" />
                      </div>
                    </div>

                    <div className="absolute bottom-7 right-7 flex items-center gap-2.5 rounded-full border border-black/10 bg-white/85 px-3 py-2 backdrop-blur">
                      {products.map((product, index) => (
                        <span
                          key={product.title}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-6 bg-black' : 'bg-black/25'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <AnimatePresence mode="wait">
                <ProductSlide key={activeProduct.title} product={activeProduct} variant="text" index={activeIndex + 1} total={products.length} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-5 md:hidden">
        <div className="space-y-6">
          {products.map((product, index) => (
            <ProductSlide key={product.title} product={product} variant="card" index={index + 1} total={products.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
