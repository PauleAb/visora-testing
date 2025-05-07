
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  variant?: 'outlined' | 'filled';
  animate?: boolean;
}

const AnimatedLogo = ({ className = "", variant = 'filled', animate = true }: AnimatedLogoProps) => {
  const logoPath = variant === 'filled' 
    ? "/lovable-uploads/80ac33f4-0335-4809-a88f-e35973fe2e07.png" 
    : "/lovable-uploads/bba08660-20ab-49ac-8efc-aa1fed0c76e7.png";

  if (!animate) {
    return <img src={logoPath} alt="Visora Logo" className={className} />;
  }

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1.2,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img 
        src={logoPath} 
        alt="Visora Logo"
        className="w-full h-full object-contain"
        initial={{ filter: "blur(5px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
