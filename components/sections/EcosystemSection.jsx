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
    <section className="bg-noise relative w-full overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,45,45,0.15),rgba(255,100,50,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_40%,rgba(255,45,45,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_60%,rgba(0,0,0,0.03),transparent_70%)]" />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_80%,transparent_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(255,45,45,0.6)]" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[10%] top-[12%] h-[220px] w-[220px] rounded-full bg-[#ff2d2d]/[0.1] blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
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
