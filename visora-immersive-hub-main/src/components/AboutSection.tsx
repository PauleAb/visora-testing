
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { value: "35%", label: "Increase in customer confidence" },
    { value: "42%", label: "Reduction in return rates" },
    { value: "58%", label: "Deeper brand engagement" }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-visora-dark to-transparent opacity-50"></div>
      <div className="pink-blob left-0 top-1/4 w-80 h-80 opacity-60"></div>
      <div className="pink-blob right-1/4 bottom-1/4 w-64 h-64 bg-visora-pink-deep/30 animate-delay-300"></div>
      
      {/* New blob shapes */}
      <div className="blob-1 -left-40 top-20"></div>
      <div className="blob-2 right-10 bottom-40"></div>
      
      <div className="visora-container relative z-10">
        <motion.div 
          className="glass-morph p-12 rounded-3xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading mb-6 text-center">ELEVATE YOUR <span className="text-visora-accent">DIGITAL</span> STORE</h2>
          <p className="text-lg text-visora-light/70 mb-8 leading-relaxed font-courier">
            Visora bridges the gap between physical retail and e-commerce, creating an 
            immersive shopping experience that increases customer confidence, reduces return 
            rates, and drives deeper brand engagement.
          </p>
          <p className="text-lg text-visora-light/70 mb-12 leading-relaxed font-courier">
            Our platform is designed for tech-forward fashion businesses, from luxury houses 
            to emerging brands, helping you elevate your digital presence with minimal 
            technical overhead.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass-panel p-6 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-fashion-heavy text-visora-accent mb-2">{stat.value}</h3>
                <p className="text-sm text-visora-light/60 font-courier">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
