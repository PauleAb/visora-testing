
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient circles/blobs */}
      <div className="pink-blob -top-40 -right-40 w-96 h-96 bg-visora-pink-medium"></div>
      <div className="pink-blob top-1/3 -left-40 w-80 h-80 bg-visora-pink-light"></div>
      <div className="pink-blob bottom-20 right-20 w-64 h-64 bg-visora-pink-deep animate-delay-200"></div>
      <div className="pink-blob bottom-40 left-1/4 w-72 h-72 bg-visora-accent/30 animate-delay-300"></div>
      
      <div className="visora-container relative z-10">
        <div className="flex flex-col items-start justify-center">
          {/* Text Content */}
          <motion.div 
            className="text-left max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 rounded-full glass-morph text-visora-accent text-sm mb-6 font-fashion-heavy tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              REIMAGINING FASHION E-COMMERCE
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-fashion-heavy leading-tight mb-6 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              The Future of <br/>
              <span className="text-visora-accent">Fashion</span> Shopping
            </motion.h1>
            
            <motion.p 
              className="text-visora-light/70 text-lg md:text-xl max-w-2xl mb-8 font-courier"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Immersive AR runways, 360° product views, and virtual try-ons 
              seamlessly integrated into your existing platforms.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <motion.a 
                href="#demo" 
                className="visora-btn-primary w-full sm:w-auto text-center uppercase font-fashion-heavy tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.a>
              <motion.a 
                href="#features" 
                className="visora-btn-outline w-full sm:w-auto text-center uppercase font-fashion-heavy tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Features
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator - moved to right side to avoid overlap */}
        <motion.div 
          className="absolute bottom-10 right-0 flex flex-col items-end mr-4 md:mr-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-visora-light/50 text-sm mb-2 font-courier">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-visora-light/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
