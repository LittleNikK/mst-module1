'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Handshake, Rocket } from 'lucide-react';
import EcosystemCard from './EcosystemCard';

const ecosystemCards = [
  {
    icon: BadgeCheck,
    title: 'VALIDATOR',
    description: 'Run reliable node infrastructure, secure consensus, and earn rewards by participating at protocol level.'
  },
  {
    icon: Handshake,
    title: 'AMBASSADOR',
    description: 'Represent MST across communities, onboard builders, and expand ecosystem reach with strategic advocacy.'
  },
  {
    icon: Rocket,
    title: 'GRANTS',
    description: 'Access funding and technical support to build high-impact applications on top of MST network primitives.'
  }
];

export default function EcosystemSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f8]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(15,23,42,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.24)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.82),rgba(255,255,255,0)_56%),linear-gradient(135deg,rgba(255,45,45,0.05)_0%,rgba(255,255,255,0.58)_44%,rgba(232,235,240,0.5)_100%)]" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[10%] top-[12%] h-[220px] w-[220px] rounded-full bg-[#ff2d2d]/[0.1] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-4xl md:text-5xl">
            JOIN OUR ECOSYSTEM
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ecosystemCards.map((card, index) => (
            <EcosystemCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-sm bg-black px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#FF2D2D] hover:shadow-[0_14px_32px_rgba(255,45,45,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF2D2D]/30"
          >
            Become a Partner
          </motion.button>

        </div>
      </div>
    </section>
  );
}
