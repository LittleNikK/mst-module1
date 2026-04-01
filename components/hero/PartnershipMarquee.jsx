'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const partnerTags = ['CORE_SYS', 'N_NODES', 'QUANT_LAYER', 'HEX_DATA', 'STRUC_X'];

const tagWidth = 192;
const tagHeight = 50;
const tagGap = 16;
const rowStartY = 62;
const sequenceWidth = partnerTags.length * (tagWidth + tagGap);

export default function PartnershipMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(media.matches);
    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="mt-10 w-full max-w-2xl">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">PARTNERSHIPS</p>

      <div className="relative h-28 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white via-white/70 to-transparent" />

        <svg viewBox="0 0 1400 190" className="h-full w-full" aria-label="Partnership tags marquee">
          <defs>
            <clipPath id="partnerships-mask-hero">
              <text
                x="12"
                y="145"
                textAnchor="start"
                fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
                fontSize="142"
                fontWeight="700"
                letterSpacing="3"
              >
                PARTNERSHIPS
              </text>
            </clipPath>
          </defs>

          <text
            x="12"
            y="145"
            textAnchor="start"
            fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
            fontSize="142"
            fontWeight="700"
            letterSpacing="3"
            fill="rgba(0,0,0,0.1)"
            stroke="rgba(0,0,0,0.24)"
            strokeWidth="1.3"
          >
            PARTNERSHIPS
          </text>

          <g clipPath="url(#partnerships-mask-hero)">
            <motion.g
              animate={{ x: [-sequenceWidth, 0] }}
              transition={{
                duration: isMobile ? 20 : 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[0, sequenceWidth].map((offset) =>
                partnerTags.map((tag, index) => {
                  const x = index * (tagWidth + tagGap) + offset;

                  return (
                    <g key={`${offset}-${tag}`} transform={`translate(${x}, ${rowStartY})`} className="group cursor-default">
                      <rect
                        width={tagWidth}
                        height={tagHeight}
                        rx="999"
                        fill="rgba(255,255,255,0.92)"
                        stroke="rgba(0,0,0,0.27)"
                        strokeWidth="1"
                        className="transition-all duration-300 group-hover:stroke-[#ff2d2d]"
                      />
                      <text
                        x={tagWidth / 2}
                        y="31"
                        textAnchor="middle"
                        fontFamily="var(--font-inter), system-ui, sans-serif"
                        fontSize="12"
                        fontWeight="700"
                        letterSpacing="1.6"
                        fill="rgba(0,0,0,0.82)"
                        className="transition-colors duration-300 group-hover:fill-[#ff2d2d]"
                      >
                        {tag}
                      </text>
                    </g>
                  );
                })
              )}
            </motion.g>
          </g>
        </svg>
      </div>
    </section>
  );
}
