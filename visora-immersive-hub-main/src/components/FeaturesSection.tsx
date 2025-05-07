
import { motion } from 'framer-motion';
import { Smartphone, Eye, ShoppingBag, BarChart4, Layers, Lock } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="glass-morph p-6 h-full rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className="w-12 h-12 bg-visora-accent/20 rounded-full flex items-center justify-center mb-4 text-visora-accent"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(236, 186, 200, 0.3)" }}
      >
        {icon}
      </motion.div>
      <h3 className="feature-heading">{title}</h3>
      <p className="feature-text">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: "AR RUNWAY EXPERIENCES",
      description: "Bring fashion shows directly to customers with immersive augmented reality runway experiences that showcase collections in stunning detail."
    },
    {
      icon: <Eye size={24} />,
      title: "360° PRODUCT VIEWS",
      description: "Allow customers to examine products from every angle with interactive 360-degree product views that highlight every detail."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "VIRTUAL TRY-ONS",
      description: "Enable customers to virtually try products before purchasing, increasing confidence and reducing return rates."
    },
    {
      icon: <BarChart4 size={24} />,
      title: "CONSUMER ANALYTICS",
      description: "Gain valuable insights into customer behavior and preferences through comprehensive analytics dashboards."
    },
    {
      icon: <Layers size={24} />,
      title: "PLATFORM INTEGRATION",
      description: "Seamlessly integrate with your existing e-commerce platform with minimal development resources required."
    },
    {
      icon: <Lock size={24} />,
      title: "SECURE & SCALABLE",
      description: "Enterprise-grade security and scalability to support businesses of all sizes from emerging brands to luxury houses."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div className="pink-blob right-0 bottom-0 w-96 h-96"></div>
      <div className="pink-blob left-1/4 top-1/3 w-80 h-80 bg-visora-pink-medium/30 animate-delay-400"></div>
      
      {/* New blob shapes */}
      <div className="blob-3 -right-40 top-20"></div>
      <div className="blob-1 left-10 bottom-20"></div>
      
      <div className="visora-container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">TRANSFORMING DIGITAL <span className="text-visora-accent">FASHION</span></h2>
          <p className="section-subheading">
            Our innovative features bridge the gap between physical retail and e-commerce,
            creating deeper engagement and boosting sales.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
