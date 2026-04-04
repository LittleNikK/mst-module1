'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductMobileCanvas({ products = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance through products every 2s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [products.length]);

  const activeProduct = products[activeIndex];

  return (
    <div className="flex flex-col items-center gap-10 py-10">

      {/* 3D Phone */}
      <div style={{ perspective: '1000px' }}>
        <div
          style={{
            width: 160,
            height: 300,
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: 'phoneFlip 2s ease-in-out infinite',
            transform: 'rotateX(8deg)',
          }}
        >
          {/* ── Edges (thickness) ── */}
          <PhoneEdge side="top" />
          <PhoneEdge side="bottom" />
          <PhoneEdge side="left" />
          <PhoneEdge side="right" />

          {/* ── Side buttons ── */}
          <div style={{
            position: 'absolute', width: 4, height: 48,
            background: '#3a3c44', borderRadius: 2,
            right: -2, top: 90, zIndex: 10,
          }} />
          <div style={{
            position: 'absolute', width: 4, height: 34,
            background: '#3a3c44', borderRadius: 2,
            left: -2, top: 80, zIndex: 10,
          }} />
          <div style={{
            position: 'absolute', width: 4, height: 34,
            background: '#3a3c44', borderRadius: 2,
            left: -2, top: 124, zIndex: 10,
          }} />

          {/* ── Front face ── */}
          <div style={{
            ...faceBase,
            background: '#101114',
            transform: 'translateZ(6px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* Glass shine */}
            <div style={{
              position: 'absolute', top: 0, left: 12,
              width: 18, height: '100%',
              background: 'linear-gradient(to right, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              pointerEvents: 'none',
            }} />
            {/* Notch */}
            <div style={{
              width: 58, height: 12,
              background: '#0b0c0f',
              borderRadius: '0 0 8px 8px',
              flexShrink: 0,
            }} />
            {/* Screen */}
            <div style={{
              flex: 1,
              width: 138,
              margin: '6px 0 8px',
              borderRadius: 14,
              background: '#0d0f1a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              border: '1px solid rgba(255,255,255,0.07)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow */}
              <div style={{
                position: 'absolute', top: -30, left: '50%',
                transform: 'translateX(-50%)',
                width: 100, height: 100, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(80,110,255,0.18) 0%, transparent 70%)',
              }} />
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#5068ff', zIndex: 1 }} />
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeProduct?.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.88)',
                    letterSpacing: '-0.01em', zIndex: 1, margin: 0,
                    textAlign: 'center', padding: '0 10px',
                  }}
                >
                  {activeProduct?.title}
                </motion.p>
              </AnimatePresence>
              <p style={{
                fontSize: 9, color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                zIndex: 1, margin: 0,
              }}>
                front
              </p>
              {/* Decorative bars */}
              <div style={{ display: 'flex', gap: 5, zIndex: 1 }}>
                {[28, 16, 22].map((w, i) => (
                  <div key={i} style={{
                    width: w, height: 3, borderRadius: 2,
                    background: 'rgba(80,110,255,0.5)',
                    opacity: i === 0 ? 1 : i === 1 ? 0.5 : 0.3,
                  }} />
                ))}
              </div>
            </div>
            {/* Home bar */}
            <div style={{
              width: 52, height: 4,
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 4, marginBottom: 10, flexShrink: 0,
            }} />
          </div>

          {/* ── Back face ── */}
          <div style={{
            ...faceBase,
            background: '#16181d',
            transform: 'rotateY(180deg) translateZ(6px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
            {/* Camera module */}
            <div style={{
              width: 64, height: 64,
              background: '#0e0f13',
              borderRadius: 16,
              border: '1.5px solid rgba(255,255,255,0.08)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              placeItems: 'center',
              padding: 8,
              gap: 6,
            }}>
              <Lens size={20} />
              <Lens size={12} />
              <Lens size={12} />
              <Lens size={12} style={{ opacity: 0.5 }} />
            </div>
            <p style={{
              fontSize: 15, fontWeight: 500,
              color: 'rgba(255,255,255,0.1)',
              letterSpacing: '0.1em', margin: 0,
            }}>
              MST
            </p>
            <p style={{
              fontSize: 9, color: 'rgba(255,255,255,0.22)',
              letterSpacing: '0.16em', textTransform: 'uppercase', margin: 0,
            }}>
              back
            </p>
          </div>
        </div>
      </div>

      {/* Product info below */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct?.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-4"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
            {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </p>
          <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-black mb-2">
            {activeProduct?.title}
          </h3>
          <p className="text-sm leading-relaxed text-black/60 max-w-xs mx-auto">
            {activeProduct?.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              clearInterval(intervalRef.current);
              intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % products.length);
              }, 2000);
            }}
            style={{
              height: 8, borderRadius: 4,
              width: i === activeIndex ? 24 : 8,
              background: i === activeIndex ? '#000' : 'rgba(0,0,0,0.2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes phoneFlip {
          0%   { transform: rotateX(8deg) rotateY(0deg); }
          45%  { transform: rotateX(8deg) rotateY(180deg); }
          55%  { transform: rotateX(8deg) rotateY(180deg); }
          100% { transform: rotateX(8deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────

const faceBase = {
  position: 'absolute',
  width: 160,
  height: 300,
  borderRadius: 22,
  backfaceVisibility: 'hidden',
  overflow: 'hidden',
};

function PhoneEdge({ side }) {
  const styles = {
    top: {
      position: 'absolute', width: 160, height: 12,
      background: 'linear-gradient(to bottom, #2a2c32, #18191e)',
      transform: 'rotateX(90deg) translateZ(-6px) translateY(-6px)',
      backfaceVisibility: 'hidden',
    },
    bottom: {
      position: 'absolute', width: 160, height: 12, bottom: 0,
      background: 'linear-gradient(to bottom, #18191e, #2a2c32)',
      transform: 'rotateX(-90deg) translateZ(-6px) translateY(6px)',
      backfaceVisibility: 'hidden',
    },
    left: {
      position: 'absolute', width: 12, height: 300,
      background: 'linear-gradient(to right, #1e2026, #2e3038)',
      transform: 'rotateY(-90deg) translateX(-6px) translateZ(6px)',
      backfaceVisibility: 'hidden',
    },
    right: {
      position: 'absolute', width: 12, height: 300, right: 0,
      background: 'linear-gradient(to left, #1e2026, #2e3038)',
      transform: 'rotateY(90deg) translateX(6px) translateZ(154px)',
      backfaceVisibility: 'hidden',
    },
  };
  return <div style={styles[side]} />;
}

function Lens({ size, style = {} }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 35%, #22243a, #0a0b10)',
      border: '1.5px solid rgba(255,255,255,0.12)',
      ...style,
    }} />
  );
}
