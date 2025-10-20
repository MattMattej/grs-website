import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import CTA from '@/components/CTA';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
