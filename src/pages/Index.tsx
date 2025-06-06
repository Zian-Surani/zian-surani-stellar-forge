
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Startup from '@/components/Startup';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CursorTrail from '@/components/CursorTrail';
import LoadingScreen from '@/components/LoadingScreen';
import AIChat from '@/components/AIChat';
import SpaceBackground from '@/components/SpaceBackground';
import { FloatingVectors } from '@/components/AnimatedVectors';
import Certifications from '@/components/Certifications';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <SpaceBackground />
      <FloatingVectors />
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Research />
      <Startup />
      <Achievements />
      <Projects />
      <Certifications />
      <Contact />
      <AIChat />
      
      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-cyan-500/20 bg-black/60 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 md:mb-6">
            <div className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              ZRS
            </div>
            <p className="text-gray-400 text-sm">
              AI & ML Student • Research Scholar • Entrepreneur
            </p>
          </div>
          <div className="border-t border-gray-800 pt-4 md:pt-6">
            <p className="text-gray-500 text-xs md:text-sm px-4">
              © 2024 Zian Rajeshkumar Surani. Built with passion for AI and innovation. React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
