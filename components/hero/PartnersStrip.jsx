'use client';

const partners = [
  {
    id: 'poly',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15L20 5L30 15L20 25L10 15Z" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="20" cy="15" r="3" fill="currentColor" />
        <text x="38" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="16" fill="currentColor" letterSpacing="0.05em">POLYMARKET</text>
      </svg>
    )
  },
  {
    id: 'courtyard',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="34" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="currentColor" letterSpacing="0.05em">COURTYARD</text>
      </svg>
    )
  },
  {
    id: 'gokite',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2L28 15L15 28L2 15L15 2Z" fill="currentColor" />
        <circle cx="15" cy="15" r="4" fill="white" />
        <text x="34" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="16" fill="currentColor" letterSpacing="0.05em">GOKITE</text>
      </svg>
    )
  },
  {
    id: 'coresys',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 125 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="15" cy="15" r="5" fill="currentColor" />
        <text x="34" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="currentColor" letterSpacing="0.1em">CORE_SYS</text>
      </svg>
    )
  },
  {
    id: 'n_nodes',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 115 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8H25M5 15H20M5 22H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
        <circle cx="25" cy="8" r="2.5" fill="currentColor" />
        <circle cx="20" cy="15" r="2.5" fill="currentColor" />
        <circle cx="25" cy="22" r="2.5" fill="currentColor" />
        <text x="35" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="16" fill="currentColor" letterSpacing="0.05em">N_NODES</text>
      </svg>
    )
  }
];

export default function PartnersStrip() {
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="mt-10 w-full max-w-3xl border-t border-black/10 pt-6">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-14" />

        <div className="partners-marquee-track flex w-max items-center gap-14 whitespace-nowrap pl-36 sm:pl-44">
          {loopedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="text-black/40 transition-all duration-300 hover:text-black hover:scale-105"
            >
              {partner.svg}
            </div>
          ))}
        </div>
                                                    
        <div className="pointer-events-none absolute inset-y-0 left-0 z-40 flex items-center bg-white pr-5 sm:pr-6">
          <span className="font-[var(--font-space-grotesk)] text-2xl font-bold uppercase tracking-[0.08em] text-black sm:text-3xl">
            PARTNERS
          </span>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-[8.6rem] z-30 w-14 bg-gradient-to-r from-white via-white/85 to-transparent sm:left-[10.9rem] sm:w-20" />
      </div>
    </section>
  );
}
