import Navbar from '@/components/navbar/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import WhatIsMST from '@/components/sections/WhatIsMST';
import ProductsSection from '@/components/sections/ProductsSection';
import ValidatorCTA from '@/components/sections/ValidatorCTA';
import ExplorerSection from '@/components/sections/ExplorerSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import BlogsSection from '@/components/sections/BlogsSection';
import StructuralPurity from '@/components/sections/StructuralPurity';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <WhatIsMST />
      <ProductsSection />
      <ValidatorCTA />
      <ExplorerSection />
      <EcosystemSection />
      <BlogsSection />
      <StructuralPurity />
      <Footer />
    </main>
  );
}
