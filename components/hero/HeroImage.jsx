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
  const [slideCount, setSlideCount] = useState(0);
  const activeIndex = slideCount % slides.length;

  useEffect(() => {
    let intervalId;

    const initialDelayId = setTimeout(() => {
      intervalId = setInterval(() => {
        setSlideCount((prev) => prev + 1);
      }, 4500);
    }, 5000);

    return () => {
      clearTimeout(initialDelayId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl lg:mx-0 relative">
      {/* Orbit 1: Inner Solid Ring */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-accent/20 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
        
        {/* Orbital Text Node */}
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[10%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span></span>
          <span className="text-[9px] font-black tracking-[0.2em] text-black/50 whitespace-nowrap">Use Cases</span>
        </motion.div>
      </motion.div>

      {/* Orbit 2: Middle Dashed Ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
        
        {/* Orbital Text Node */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-accent" />
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
          <span className="text-[10px] font-black tracking-[0.2em] text-black/70 whitespace-nowrap">9+ Active Nodes</span>
        </motion.div>
      </motion.div>

      {/* Orbit 3: Outer Faint Ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        {/* Orbital Text Node */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
        >
          <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-black/60 whitespace-nowrap">POSA Consensus</span>
        </motion.div>
      </motion.div>

      {/* Small floating local elements */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-4 -right-8 w-32 h-32 border border-black/10 rounded-full border-dashed flex items-center justify-center opacity-50 z-0"
      >
        <div className="absolute w-2 h-2 bg-black rounded-full bottom-2 right-4" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 [perspective:1200px]"
      >
        <motion.div
          animate={{ rotateY: slideCount * -360 }}
          transition={{ duration: 12, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full origin-center"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/10 bg-gradient-to-br from-white/90 via-white to-zinc-100/90 p-3 shadow-glow [transform:rotateX(13deg)_rotateY(-16deg)] transition-transform duration-700 ease-in-out hover:[transform:rotateX(0deg)_rotateY(0deg)] hover:shadow-[0_0_120px_rgba(255,45,45,0.25)]" style={{ boxShadow: '0 0 90px rgba(255, 45, 45, 0.15), 0 34px 76px rgba(0, 0, 0, 0.25)' }}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent pointer-events-none" />

            {/* Loop Progress Indicators */}
            <div className="absolute bottom-5 left-6 flex items-center gap-2 z-20">
              {slides.map((_, index) => (
                <div key={index} className="relative h-1 w-8 overflow-hidden rounded-full bg-white/30 backdrop-blur-sm">
                  {activeIndex === index && (
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.5, ease: 'linear' }}
                      className="absolute left-0 top-0 h-full bg-white shadow-[0_0_8px_white]"
                    />
                  )}
                  {activeIndex > index && (
                    <div className="absolute left-0 top-0 h-full w-full bg-white/60" />
                  )}
                </div>
              ))}
              <div className="ml-2 text-[9px] font-bold tracking-widest text-white/90">
                0{activeIndex + 1} / 0{slides.length}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-12 left-8 h-32 w-32 rounded-full bg-black/15 blur-[50px]" />
        </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
