'use client';

import { motion } from 'framer-motion';
import { Blocks, Cpu, Orbit } from 'lucide-react';
import MSTCard from './MSTCard';

const cards = [
  {
    title: 'Protocol',
    description:
      'MST Protocol is a deterministic ledger architecture built for high-assurance execution, transparent state transitions, and institutional-grade settlement reliability.',
    ctaText: 'View Specs',
    href: '#',
    icon: Blocks
  },
  {
    title: 'P1',
    description:
      'P1 is the core execution lane for low-latency transaction ordering, enabling globally distributed participants to coordinate with consistency and speed.',
    ctaText: 'Explore P1',
    href: '#',
    icon: Orbit,
    isActive: true
  },
  {
    title: 'P2',
    description:
      'P2 delivers developer infrastructure and modular SDK paths for building secure financial apps, chain-native products, and enterprise automation layers.',
    ctaText: 'Get the SDK',
    href: '#',
    icon: Cpu
  }
];

export default function WhatIsMST() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-[90rem] px-4 py-12 sm:px-5 lg:px-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">01 / Foundation</p>

      <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-extrabold tracking-[-0.03em] text-black sm:text-5xl md:text-6xl">
        What is MST?
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
        MST Protocol is a decentralized ledger built on the principles of <span className="font-semibold text-accent">mechanical precision</span>, predictable execution, and verifiable trust.
        It is designed as a resilient foundation for modern financial systems, institution-ready applications, and large-scale digital coordination.
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.14
            }
          }
        }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card) => (
          <MSTCard
            key={card.title}
            title={card.title}
            description={card.description}
            ctaText={card.ctaText}
            href={card.href}
            icon={card.icon}
            isActive={card.isActive}
          />
        ))}
      </motion.div>

      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent" />
    </motion.section>
  );
}
