import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-12 border-t border-border/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.img 
                src="/lovable-uploads/36c969d9-2d19-4347-ac2d-236764962c0e.png" 
                alt="Auralyn AI Logo" 
                className="w-8 h-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <span className="text-xl font-bold text-foreground">Auralyn AI</span>
            </div>
            <p className="text-muted-foreground">
              The natural AI receptionist for dental clinics, body shops, and service businesses.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Features</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Integrations</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Pricing</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Demo</motion.a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Dental Clinics</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Auto Body Shops</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Medical Spa</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Service Business</motion.a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>About</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Case Studies</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Contact</motion.a></li>
              <li><motion.a href="#" className="hover:text-foreground transition-colors" whileHover={{ x: 5 }}>Support</motion.a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Auralyn AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <motion.a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" whileHover={{ scale: 1.05 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm" whileHover={{ scale: 1.05 }}>
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;