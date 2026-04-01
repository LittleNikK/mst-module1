import HeroImage from './HeroImage';
import HeroText from './HeroText';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-noise relative overflow-hidden bg-[#fafafa]">
      {/* Subtle Premium Gradient Mesh Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,45,45,0.15),rgba(255,100,50,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_40%,rgba(255,45,45,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_60%,rgba(0,0,0,0.03),transparent_70%)]" />

      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_80%,transparent_100%)] z-0" />
      
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(255,45,45,0.6)] relative z-10" />
      <div className="mx-auto grid w-full max-w-[90rem] min-h-[100dvh] grid-cols-1 gap-10 px-4 pt-28 pb-8 sm:px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:px-6 lg:pt-24 lg:pb-12 relative z-10">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
