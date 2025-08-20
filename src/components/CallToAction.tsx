import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const CallToAction = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ParticleField className="opacity-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.005 }}
        >
          <Card className="relative overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <div className="relative z-10 p-16 md:p-20 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-semibold text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to transform your reception?
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Join hundreds of clinics and service businesses using Auralyn AI to never miss another call.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="hero" size="lg" className="px-10 py-6 text-base">
                    Book Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="outline" size="lg" className="px-10 py-6 text-base">
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