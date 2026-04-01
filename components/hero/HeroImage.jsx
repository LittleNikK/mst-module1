'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/assets/hero/img1.webp',
    alt: 'Institutional Web3 data visualization',
    width: 1200,
    height: 900
  },
  {
    src: '/assets/hero/img3.jpeg',
    alt: 'Web3 data visualization',
    width: 1200,
    height: 900
  },
  {
    src: '/assets/hero/img2.jpg',
    alt: 'Decentralized infrastructure abstract network',
    width: 1200,
    height: 900
  }
];

export default function HeroImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl lg:mx-0">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative [perspective:1200px]"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-white via-white to-zinc-100/90 p-3 shadow-glow [transform:rotateX(13deg)_rotateY(-16deg)] transition-transform duration-700 ease-in-out hover:[transform:rotateX(0deg)_rotateY(0deg)]" style={{ boxShadow: '0 0 90px rgba(255, 45, 45, 0.75), 0 34px 76px rgba(0, 0, 0, 0.35)' }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[activeIndex].src}
                initial={{ opacity: 0.65, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.65, scale: 0.99 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].alt}
                  fill
                  className="object-cover"
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-8 h-32 w-32 rounded-full bg-black/10 blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
}
