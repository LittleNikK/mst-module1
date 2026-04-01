import HeroImage from './HeroImage';
import HeroText from './HeroText';

export default function HeroSection() {
  return (
    <section className="bg-noise relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-14 px-4 pb-14 pt-0 sm:px-5 md:pb-20 md:pt-4 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-6 lg:pt-8">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
