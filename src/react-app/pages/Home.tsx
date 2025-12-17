import { useEffect } from 'react';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Services from '@/react-app/components/Services';
import PracticeAreas from '@/react-app/components/PracticeAreas';
import Locations from '@/react-app/components/Locations';
import Contact from '@/react-app/components/Contact';
import Navigation from '@/react-app/components/Navigation';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <Hero />
      <About />
      <PracticeAreas />
      <Services />
      <Locations />
      <Contact />
    </div>
  );
}
