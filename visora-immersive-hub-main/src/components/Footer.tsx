
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  const footerSections = [
    {
      title: 'PRODUCT',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Use Cases', href: '#' },
        { name: 'Integration', href: '#' },
        { name: 'Pricing', href: '#' }
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Support', href: '#' }
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy Policy', href: '#' }
      ]
    }
  ];

  return (
    <footer className="glass-morph border-t border-white/5 mt-12">
      <div className="visora-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Logo and contact */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-fashion-heavy text-visora-light tracking-widest">VISORA</h2>
            </div>
            
            <p className="text-visora-light/70 mb-6 max-w-xs font-courier">
              Elevating fashion e-commerce through immersive AR experiences and virtual try-ons.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail size={18} className="text-visora-accent mr-3 mt-1" />
                <p className="text-visora-light/70 font-courier">contact@visora.com</p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-visora-accent mr-3 mt-1" />
                <p className="text-visora-light/70 font-courier">123 Fashion Avenue, New York, NY 10001</p>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="text-visora-accent mr-3 mt-1" />
                <p className="text-visora-light/70 font-courier">+1 (888) 555-0123</p>
              </div>
            </div>
          </motion.div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title} 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
            >
              <h4 className="text-lg mb-6 font-fashion-heavy tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-visora-light/60 hover:text-visora-accent transition-colors font-courier"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Newsletter */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-lg mb-6 font-fashion-heavy tracking-wide">STAY UPDATED</h4>
            <p className="text-visora-light/70 mb-4 font-courier">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-l-lg bg-visora-dark border border-white/10 focus:border-visora-accent focus:outline-none transition-colors flex-1 font-courier"
                />
                <button 
                  type="submit" 
                  className="bg-visora-accent text-visora-dark px-4 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors font-fashion-heavy"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
            
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-visora-light/70 hover:text-visora-accent hover:border-visora-accent transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.7 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-visora-light/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="font-courier">© {currentYear} Visora. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-visora-accent transition-colors font-courier">Terms</a>
            <a href="#" className="hover:text-visora-accent transition-colors font-courier">Privacy</a>
            <a href="#" className="hover:text-visora-accent transition-colors font-courier">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
