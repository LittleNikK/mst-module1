'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from './BlogCard';

const BLOG_DATA = [
  {
    id: 1,
    category: 'TECH UPDATES',
    date: 'OCT 24',
    title: 'SCALING STRUCTURAL PURITY',
    description: 'Discover how MST Network achieves unprecedented scalability while maintaining blockchain integrity. Learn about our innovative consensus mechanism.',
    image: '/assets/hero/img1.webp'
  },
  {
    id: 2,
    category: 'VALIDATOR NEWS',
    date: 'OCT 23',
    title: 'INSTITUTIONAL VALIDATOR PROGRAM LAUNCHES',
    description: 'Join our new institutional validator program with premium rewards and infrastructure support. Limited seats available for early adopters.',
    image: '/assets/hero/img2.jpg'
  },
  {
    id: 3,
    category: 'ECOSYSTEM',
    date: 'OCT 22',
    title: 'PARTNERSHIPS EXPAND ACROSS WEB3',
    description: 'MST announces strategic partnerships with leading protocols and infrastructure providers. Expanding our ecosystem to drive adoption.',
    image: '/assets/hero/img3.jpeg'
  },
  {
    id: 4,
    category: 'DEVELOPMENT',
    date: 'OCT 21',
    title: 'MAINNET 2.0 BETA NOW AVAILABLE',
    description: 'Test the latest network upgrades on our public beta. Better performance, lower fees, and enhanced security features.',
    image: '/assets/hero/img1.webp'
  },
  {
    id: 5,
    category: 'COMMUNITY',
    date: 'OCT 20',
    title: 'GRANTS PROGRAM OPENS FOR BUILDERS',
    description: 'Apply now for MST Foundation grants up to $100K. Supporting innovative projects building on MST Network.',
    image: '/assets/hero/img2.jpg'
  }
];

export default function BlogsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewport, setViewport] = useState('desktop');
  const containerRef = useRef(null);

  const cardsPerView = viewport === 'desktop' ? 3 : viewport === 'tablet' ? 2 : 1;
  const maxIndex = Math.max(0, BLOG_DATA.length - cardsPerView);

  const getStep = () => {
    const track = containerRef.current;
    const firstCard = track?.children?.[0];
    const secondCard = track?.children?.[1];

    if (!firstCard) {
      return 0;
    }

    const firstWidth = firstCard.getBoundingClientRect().width;
    const gap = secondCard ? secondCard.offsetLeft - firstCard.offsetLeft - firstWidth : 24;

    return firstWidth + gap;
  };

  const scrollToCard = (index) => {
    const track = containerRef.current;

    if (!track) {
      return;
    }

    const step = getStep();
    track.scrollTo({
      left: step * index,
      behavior: 'smooth'
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const nextIndex = Math.max(0, prev - 1);
      scrollToCard(nextIndex);
      return nextIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = Math.min(maxIndex, prev + 1);
      scrollToCard(nextIndex);
      return nextIndex;
    });
  };

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
    setCurrentIndex(0);
    requestAnimationFrame(() => scrollToCard(0));
  };

  // Handle responsive viewport updates
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          handleViewportChange('mobile');
        } else if (window.innerWidth < 1024) {
          handleViewportChange('tablet');
        } else {
          handleViewportChange('desktop');
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f8]">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(15,23,42,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.24)_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.82),rgba(255,255,255,0)_56%),linear-gradient(135deg,rgba(255,45,45,0.05)_0%,rgba(255,255,255,0.58)_44%,rgba(232,235,240,0.5)_100%)]" />

      {/* Floating Orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-[10%] top-1/3 h-[280px] w-[280px] rounded-full bg-[#ff2d2d]/[0.08] blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-[5%] bottom-1/4 h-[250px] w-[250px] rounded-full bg-[#60a5fa]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-4xl md:text-5xl">
            LATEST BLOGS
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <motion.button
              type="button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex h-12 w-12 items-center justify-center border border-black transition-all duration-300 enabled:hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="text-black transition-colors duration-300 group-enabled:group-hover:text-white" />
            </motion.button>

            <motion.button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex h-12 w-12 items-center justify-center border border-black transition-all duration-300 enabled:hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} className="text-black transition-colors duration-300 group-enabled:group-hover:text-white" />
            </motion.button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {BLOG_DATA.map((blog) => (
              <div
                key={blog.id}
                className={
                  viewport === 'desktop'
                    ? 'flex-[0_0_33.333%] shrink-0 snap-start'
                    : viewport === 'tablet'
                      ? 'flex-[0_0_50%] shrink-0 snap-start'
                      : 'flex-[0_0_100%] shrink-0 snap-start'
                }
              >
                <BlogCard
                  category={blog.category}
                  date={blog.date}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Indicator */}
        {/* <div className="mt-12 flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
            {currentIndex + 1} - {Math.min(currentIndex + cardsPerView, BLOG_DATA.length)} OF {BLOG_DATA.length}
          </div>

         
          <div className="flex-grow mx-6 h-1 bg-neutral-200 overflow-hidden">
            <motion.div
              animate={{ width: `${((currentIndex + cardsPerView) / BLOG_DATA.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#FF2D2D]"
            />
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
            {cardsPerView} PER VIEW
          </div>
        </div> */}
      </div>
    </section>
  );
}
