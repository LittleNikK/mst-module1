"use client";
import { motion } from "framer-motion";

const useCases = [
  { id: "01", title: "Supply Chain Logistics", desc: "Track goods across global networks with immutable on-chain records.", size: "tall", icon: "chain" },
  { id: "02", title: "Real Estate Tokenization", desc: "Fractional ownership of property assets via blockchain tokens.", size: "medium", icon: "building" },
  { id: "03", title: "DeFi Liquidity", desc: "Automated market-making and decentralized liquidity pools.", size: "small", icon: "droplet" },
  { id: "04", title: "Secure Healthcare", desc: "Patient data privacy with encrypted, permissioned access.", size: "medium", icon: "shield" },
  { id: "05", title: "Metaverse Gaming", desc: "True digital ownership of in-game assets and economies.", size: "tall", icon: "gamepad" },
  { id: "06", title: "Digital Identity", desc: "Self-sovereign identity verification without intermediaries.", size: "small", icon: "fingerprint" },
  { id: "07", title: "Yield Aggregators", desc: "Optimize returns across DeFi protocols automatically.", size: "medium", icon: "layers" },
  { id: "08", title: "Carbon Credits", desc: "Transparent carbon offset trading and verification.", size: "tall", icon: "leaf" },
  { id: "09", title: "Cross-border Pay", desc: "Instant, low-cost international settlements.", size: "small", icon: "globe" },
  { id: "10", title: "Asset Management", desc: "On-chain portfolio tracking and rebalancing tools.", size: "medium", icon: "briefcase" },
  { id: "11", title: "Oracle Networks", desc: "Reliable off-chain data feeds for smart contracts.", size: "small", icon: "signal" },
  { id: "12", title: "DAO Governance", desc: "Decentralized voting and treasury management.", size: "tall", icon: "vote" },
  { id: "13", title: "Privacy Layers", desc: "Zero-knowledge solutions for confidential transactions.", size: "medium", icon: "lock" },
  { id: "14", title: "Escrow Services", desc: "Trustless, automated escrow via smart contracts.", size: "small", icon: "handshake" },
  { id: "15", title: "Insurance Claims", desc: "Parametric insurance with automatic claim payouts.", size: "medium", icon: "umbrella" },
  { id: "16", title: "NFT Marketplace", desc: "Create, trade, and curate digital collectibles.", size: "tall", icon: "diamond" },
  { id: "17", title: "Staking Protocols", desc: "Earn rewards by securing proof-of-stake networks.", size: "small", icon: "coins" },
  { id: "18", title: "Token Vesting", desc: "Programmable unlock schedules for team and investor tokens.", size: "medium", icon: "clock" },
  { id: "19", title: "ZK Proofs", desc: "Scalable, private computation verification on-chain.", size: "tall", icon: "eye" },
  { id: "20", title: "Lending Pools", desc: "Peer-to-peer lending with algorithmic interest rates.", size: "medium", icon: "percent" },
];

const icons = {
  chain: <path d="M10 6H6a4 4 0 0 0 0 8h4M14 6h4a4 4 0 0 1 0 8h-4M8 12h8" />,
  building: <><path d="M3 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M15 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12" /><path d="M7 7h2M7 11h2M7 15h2" /></>,
  droplet: <path d="M12 2c0 0-7 7.5-7 12a7 7 0 0 0 14 0C19 9.5 12 2 12 2z" />,
  shield: <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />,
  gamepad: <><path d="M6 11h4M8 9v4" /><circle cx="15" cy="10" r="0.5" fill="currentColor" /><circle cx="17" cy="12" r="0.5" fill="currentColor" /><path d="M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /></>,
  fingerprint: <><path d="M12 2a10 10 0 0 1 7 17" /><path d="M12 6a6 6 0 0 1 4.5 10" /><path d="M12 10a2 2 0 0 1 1.5 3.3" /><path d="M5 19a10 10 0 0 1-1-4" /><path d="M7.5 15A6 6 0 0 1 6 12" /></>,
  layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></>,
  leaf: <path d="M17 8C8 10 5.9 16.17 3.82 21.34M17 8A5 5 0 0 0 12 3c-5 0-8 4-8 8" />,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 12h20" /></>,
  signal: <><path d="M5 18v-4" /><path d="M9 18v-8" /><path d="M13 18V6" /><path d="M17 18v-10" /><path d="M21 18v-6" /></>,
  vote: <><path d="M20 6L9 17l-5-5" /><rect x="2" y="2" width="20" height="20" rx="2" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  handshake: <><path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3 0L4 16" /><path d="M20 8l-3-3-5.5 5.5" /><path d="M4 8l3-3 5.5 5.5" /><path d="M13 17l1.5 1.5a2.12 2.12 0 0 0 3 0L20 16" /></>,
  umbrella: <path d="M12 2v20M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12h20z" />,
  diamond: <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />,
  coins: <><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  percent: <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
};

const sizeMap = { small: "h-32", medium: "h-40", tall: "h-48" };

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const UseCases = () => (
  <section className="w-full bg-background py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6">
      <motion.h2
        className="font-extrabold uppercase leading-none tracking-tight  mb-12"
        style={{ fontSize: "clamp(48px, 8vw, 96px)", letterSpacing: "-0.02em" }}
      >
        USE <span className=" text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-600 to-rose-500 animate-gradient-x "> CASES</span>
      </motion.h2>

      <div className="uc-grid gap-2" style={{ columns: 5, columnGap: "8px" }}>
        <style>{`
          @media (max-width: 1024px) { .uc-grid { columns: 3 !important; } }
          @media (max-width: 640px) { .uc-grid { columns: 2 !important; } }
          @media (max-width: 400px) { .uc-grid { columns: 1 !important; } }
          .uc-card:hover .uc-desc { opacity: 0.85; max-height: 60px; }
          .uc-card:hover { background: #FF2D2D !important; }
          .uc-card:hover .uc-number,
          .uc-card:hover .uc-title { color: white !important; }
          .uc-card:hover .uc-icon { opacity: 0 !important; transform: translate(-50%, -50%) scale(0.8) !important; }
        `}</style>

        {useCases.map((item, i) => (
          <motion.div
            key={item.id}
            className={`uc-card flex flex-col  justify-end border-[0.1px] border-zinc-700  p-4 mb-4 ml-4 cursor-pointer overflow-hidden relative ${sizeMap[item.size]}`}
            style={{
              // background: "#f5f5f5",
              breakInside: "avoid",
              transition: "0.3s",
            }}
            whileHover={{ y: -4 }}
          >
            <svg
              className="uc-icon absolute top-1/2 left-1/2 w-7 h-7"
              style={{ transform: "translate(-50%, -50%)", opacity: 0.2 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {icons[item.icon]}
            </svg>

            <p className="uc-desc text-[11px] text-white  opacity-0 max-h-0 overflow-hidden transition-all">
              {item.desc}
            </p>

            <div>
              <span className="uc-number text-[10px] font-medium text-red-500 block mb-1">
                {item.id}
              </span>
              <span className="uc-title text-[13px] font-bold text-black block leading-tight">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;