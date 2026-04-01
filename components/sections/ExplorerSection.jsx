'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ExplorerCard from './ExplorerCard';

const MAX_ROWS = 4;

const makeAddress = () => {
  const chars = 'abcdef0123456789';
  const pick = () => chars[Math.floor(Math.random() * chars.length)];
  const first = Array.from({ length: 4 }, pick).join('');
  const last = Array.from({ length: 4 }, pick).join('');
  return `0x${first}...${last}`;
};

const makeValue = () => `${(Math.random() * 29 + 1).toFixed(1)} MST`;

const createRandomTransaction = () => ({
  uid: `t-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  address: makeAddress(),
  value: makeValue()
});

export default function ExplorerSection() {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isLoadingNext, setIsLoadingNext] = useState(false);

  const fetchExplorerData = async () => {
    const response = await fetch('/api/explorer', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch explorer data');
    }

    const data = await response.json();
    return {
      blocks: Array.isArray(data.blocks) ? data.blocks.slice(0, MAX_ROWS) : []
    };
  };

  useEffect(() => {
    let timeoutId;
    let isMounted = true;

    const updateRows = async () => {
      try {
        setIsLoadingNext(true);
        const payload = await fetchExplorerData();

        if (!isMounted) return;

        setBlocks(payload.blocks);
        setTransactions((prev) => {
          if (prev.length === 0) {
            return Array.from({ length: MAX_ROWS }, createRandomTransaction);
          }

          return [createRandomTransaction(), ...prev].slice(0, MAX_ROWS);
        });
      } catch {
        // keep previous rows if API is temporarily unavailable
      } finally {
        if (isMounted) {
          setIsLoadingNext(false);
        }
      }
    };

    updateRows();

    const intervalId = setInterval(() => {
      timeoutId = setTimeout(updateRows, 360);
    }, 2600);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f8]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(15,23,42,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.24)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_14%,rgba(255,255,255,0.78),rgba(255,255,255,0)_53%),linear-gradient(135deg,rgba(255,45,45,0.05)_0%,rgba(255,255,255,0.55)_42%,rgba(232,235,240,0.52)_100%)]" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[7%] top-[16%] h-[260px] w-[260px] rounded-full bg-[#ff2d2d]/[0.1] blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[16%] top-[44%] h-[240px] w-[240px] rounded-full bg-[#60a5fa]/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-4xl md:text-5xl">
            MST NETWORK{' '}
            <span className="inline-block bg-[#FF2D2D] px-2.5 py-1 text-white">EXPLORER</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ExplorerCard title="LATEST BLOCKS" rows={blocks} type="blocks" isUpdating={isLoadingNext} />
          <ExplorerCard title="LATEST TRANSACTIONS" rows={transactions} type="tx" isUpdating={isLoadingNext} />
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            className="group relative overflow-hidden border border-black px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black hover:border-[#EA3446]"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#EA3446] transition-transform duration-300 group-hover:scale-x-100" />
            <span className="transition-colors duration-300 group-hover:text-white">VISIT OUR EXPLORER</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
