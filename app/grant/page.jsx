import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import Grant from '@/app/grant/Grant';

export default function GrantPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-20">
        <Grant />
      </div>
      <Footer />
    </main>
  );
}
