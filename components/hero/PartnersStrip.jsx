'use client';

const partners = ['POLYMARKET', 'COURTYARD', 'GOKITE', 'CORE_SYS', 'N_NODES', 'QUANT_LAYER'];

export default function PartnersStrip() {
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="mt-10 w-full max-w-3xl border-t border-black/10 pt-6">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-14" />

        <div className="partners-marquee-track flex w-max items-center gap-12 whitespace-nowrap pl-36 sm:pl-44">
          {loopedPartners.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="text-sm font-semibold uppercase tracking-[0.16em] text-black/70 transition-opacity duration-300 hover:text-black"
            >
              {partner}
            </span>
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
