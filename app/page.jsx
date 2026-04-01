import Navbar from '@/components/navbar/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import WhatIsMST from '@/components/sections/WhatIsMST';
import ProductsSection from '@/components/sections/ProductsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <WhatIsMST />
      <ProductsSection />
    </main>
  );
}
