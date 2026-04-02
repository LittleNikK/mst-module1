'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Share2, Search, ExternalLink, Globe } from 'lucide-react';

const ecosystemLinks = ['Build', 'Validators', 'Governance', 'Grants', 'Events', 'Openings'];
const resourceLinks = ['Whitepaper', 'Docs', 'GitHub', 'Support', 'Careers', 'Sitemap'];

const socialItems = [
  { icon: Share2, label: 'Share' },
  { icon: Search, label: 'Search' },
  { icon: ExternalLink, label: 'External link' },
  { icon: Globe, label: 'Globe' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t-4 border-black bg-[#f7f7f8]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(15,23,42,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.24)_1px,transparent_1px)] [background-size:30px_30px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative mx-auto max-w-7xl px-6 py-20"
      >
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <motion.div variants={itemVariants} className="space-y-6">
            <a href="#" className="inline-flex items-center justify-center lg:justify-start">
              <Image
                src="/assets/hero/mst-dark-logo.svg"
                alt="MST Protocol"
                width={170}
                height={44}
                className="h-10 w-auto"
                priority
              />
            </a>
            <p className="mx-auto max-w-sm text-xs font-medium uppercase leading-6 tracking-[0.08em] text-neutral-600 lg:mx-0">
              STRUCTURAL PURITY IN DECENTRALIZED ARCHITECTURE. BUILT FOR THE HIGH-PERFORMANCE INTERNET.
            </p>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              {socialItems.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex h-10 w-10 items-center justify-center border border-black transition-all duration-300 hover:border-[#EA3446] hover:bg-[#EA3446] hover:shadow-[0_8px_20px_rgba(234,52,70,0.35)]"
                >
                  <Icon size={16} className="text-black transition-colors duration-300 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF2D2D]">ECOSYSTEM</h3>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block text-sm text-black transition-all duration-300 hover:translate-x-1 hover:text-[#FF2D2D] hover:drop-shadow-[0_0_6px_rgba(255,45,45,0.2)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF2D2D]">RESOURCES</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block text-sm text-black transition-all duration-300 hover:translate-x-1 hover:text-[#FF2D2D] hover:drop-shadow-[0_0_6px_rgba(255,45,45,0.2)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF2D2D]">CONTACT</h3>
              <a href="mailto:support@mstblockcha.in" className="inline-block text-sm text-black transition-colors duration-300 hover:text-[#FF2D2D]">
                support@mstblockchain.in
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF2D2D]">NEWSLETTER</h3>
              <form className="mx-auto flex w-full max-w-sm items-stretch gap-2 lg:mx-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full border border-black bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-black placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-[#FF2D2D] focus:shadow-[0_0_0_3px_rgba(255,45,45,0.12)]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
                >
                  SUBMIT
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-black/20 pt-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-neutral-500">
            © 2024 MST PROTOCOL. ALL RIGHTS RESERVED. STRUCTURAL PURITY IS THE STANDARD.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
