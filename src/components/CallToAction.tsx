import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const CallToAction = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ParticleField className="opacity-40" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
          <Card className="relative overflow-hidden bg-gradient-hero border-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
            <div className="relative z-10 p-12 md:p-16 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to transform your reception?
              </motion.h2>
              <motion.p 
                className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Join hundreds of clinics and service businesses using Auralyn AI to never miss another call.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-all duration-300">
                    Book Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="ghost" size="lg" className="px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                    Contact Sales
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;