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
import UseCases from '@/components/UseCases/UseCase';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Subtle Premium Gradient Mesh Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,45,45,0.15),rgba(255,100,50,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_40%,rgba(255,45,45,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_60%,rgba(0,0,0,0.03),transparent_70%)]" />

      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_80%,transparent_100%)] z-0" />

      <Navbar />
      <HeroSection />
      <WhatIsMST />
      <ProductsSection />
      <UseCases />
      <ValidatorCTA />
      <ExplorerSection />
      <EcosystemSection />
      <BlogsSection />
      <StructuralPurity />
      <AboutUs />
      <Contacts />
      <Footer />
    </main>
  );
}
