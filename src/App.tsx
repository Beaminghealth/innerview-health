import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LiveBloodCellAnalysis from '@/components/LiveBloodCellAnalysis';
import { useRoute } from '@/components/Router';

export default function App() {
  const route = useRoute();

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        {route === '/live-blood-cell-analysis' ? (
          <LiveBloodCellAnalysis />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Process />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
