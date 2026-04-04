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
import AboutUs from '@/components/about/AboutUs';
import Contacts from '@/components/contact/Contacts';
import Grant from '@/components/grant/Grant'; 

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
      <AboutUs />
      <Contacts />
      <Grant />
      <Footer />
    </main>
  );
}
