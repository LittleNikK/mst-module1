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
      className="bg-noise relative w-full overflow-hidden bg-[#fafafa]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,45,45,0.15),rgba(255,100,50,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_40%,rgba(255,45,45,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_60%,rgba(0,0,0,0.03),transparent_70%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_80%,transparent_100%)] z-0" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(255,45,45,0.6)] relative z-10" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-12 sm:px-5 lg:px-6">
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
      </div>
    </motion.section>
  );
}
