import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ContactFormModal from "./ContactFormModal";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md border-b border-border/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleLogoClick}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img 
            src="/lovable-uploads/bc80b8cc-d9da-4ea3-9803-f356f17cd733.png" 
            alt="Auralyn AI Logo" 
            className="w-8 h-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <span className="text-xl font-bold text-foreground">Auralyn AI</span>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            onClick={() => handleNavClick('product')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Product
          </motion.button>
          <motion.button 
            onClick={() => handleNavClick('capabilities')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Capabilities
          </motion.button>
          <motion.button 
            onClick={() => handleNavClick('results')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Results
          </motion.button>
          <motion.a 
            href="/contact" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Contact
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" className="hidden md:inline-flex" onClick={() => navigate('/contact')}>
              Contact Sales
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              variant="hero"
              onClick={() => navigate('/contact')}
            >
              Book Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Book Your Demo"
      />
    </motion.nav>
  );
};

export default Navigation;