
import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Large, slow-moving blobs with sharp outlines */}
      <motion.div 
        className="sharp-blob-1 opacity-30"
        animate={{ 
          x: ["-20vw", "10vw", "-15vw"],
          y: ["5vh", "25vh", "10vh"]
        }}
        transition={{ 
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      <motion.div 
        className="sharp-blob-2 opacity-20"
        animate={{ 
          x: ["10vw", "-15vw", "5vw"],
          y: ["15vh", "-5vh", "20vh"]
        }}
        transition={{ 
          duration: 70,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '40%', right: '5%' }}
      />
      
      <motion.div 
        className="sharp-blob-3 opacity-25"
        animate={{ 
          x: ["5vw", "-10vw", "15vw"],
          y: ["-10vh", "15vh", "-5vh"]
        }}
        transition={{ 
          duration: 80,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: '10%', left: '20%' }}
      />
      
      {/* Additional smaller sharp blobs */}
      <motion.div 
        className="sharp-blob-2 w-48 h-48 opacity-40"
        animate={{ 
          x: ["-10vw", "5vw", "-5vw"],
          y: ["5vh", "-10vh", "8vh"]
        }}
        transition={{ 
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '20%', right: '25%' }}
      />
      
      <motion.div 
        className="sharp-blob-1 w-56 h-56 opacity-30"
        animate={{ 
          x: ["8vw", "-12vw", "10vw"],
          y: ["-8vh", "12vh", "-5vh"]
        }}
        transition={{ 
          duration: 50,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: '25%', right: '15%' }}
      />
    </div>
  );
};

export default BackgroundBlobs;
