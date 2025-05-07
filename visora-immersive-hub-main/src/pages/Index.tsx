
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const Index = () => {
  // Smooth scrolling effect for anchor links
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL without causing page jump
          window.history.pushState(null, '', target.getAttribute('href'));
        }
      }
    };
    
    document.body.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.body.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-visora-dark min-h-screen">
        <BackgroundBlobs />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <PricingSection />
          <ContactSection />
        </motion.main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
