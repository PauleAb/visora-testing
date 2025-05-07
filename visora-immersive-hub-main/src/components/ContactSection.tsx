
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted",
        description: "Thank you for your interest in Visora. Our team will contact you shortly.",
        duration: 5000,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  const benefits = [
    "Seamless platform integration",
    "Dedicated implementation support",
    "Customized to your brand identity",
    "Ongoing technical assistance",
    "Regular feature updates"
  ];

  return (
    <section id="demo" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-visora-dark to-transparent opacity-50"></div>
      <div className="pink-blob bottom-0 right-0 w-96 h-96 opacity-50"></div>
      <div className="pink-blob left-1/3 top-1/3 w-72 h-72 bg-visora-pink-deep/20 animate-delay-200"></div>
      
      <div className="visora-container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">EXPERIENCE <span className="text-visora-accent">VISORA</span></h2>
          <p className="section-subheading">
            Ready to transform your digital shopping experience? Request a personalized demo 
            and discover how Visora can elevate your brand.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form side */}
          <motion.div 
            className="glass-morph p-8 rounded-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl mb-6 font-fashion-heavy uppercase tracking-wide">Request Your Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-visora-light/70 mb-2 font-courier">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-visora-dark border border-white/10 focus:border-visora-accent focus:outline-none transition-colors font-courier"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-visora-light/70 mb-2 font-courier">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-visora-dark border border-white/10 focus:border-visora-accent focus:outline-none transition-colors font-courier"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm text-visora-light/70 mb-2 font-courier">Company</label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-visora-dark border border-white/10 focus:border-visora-accent focus:outline-none transition-colors font-courier"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-visora-light/70 mb-2 font-courier">Tell us about your needs</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-visora-dark border border-white/10 focus:border-visora-accent focus:outline-none transition-colors font-courier"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="visora-btn-accent w-full flex items-center justify-center font-fashion-heavy uppercase tracking-wide"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-visora-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Request Demo <ChevronRight size={18} className="ml-1" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Benefits side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl mb-8 font-fashion-heavy uppercase tracking-wide">What You'll Get</h3>
            
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-visora-pink-medium/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check size={14} className="text-visora-accent" />
                  </div>
                  <p className="text-visora-light/80 font-courier">{benefit}</p>
                </motion.li>
              ))}
            </ul>
            
            {/* Testimonial */}
            <motion.div 
              className="mt-12 glass-morph p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-visora-light/70 italic mb-4 font-courier">
                "Implementing Visora has transformed our digital presence and significantly improved our customer engagement metrics. Our return rates dropped by 42% within just three months."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-visora-pink-light/40 flex items-center justify-center mr-3">
                  <span className="text-visora-accent font-fashion-heavy">JD</span>
                </div>
                <div>
                  <p className="text-visora-light font-fashion-heavy">JANE DOE</p>
                  <p className="text-sm text-visora-light/50 font-courier">Digital Director, Fashion Brand</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
