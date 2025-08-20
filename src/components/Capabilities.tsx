import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import aiReceptionistIcon from "@/assets/ai-receptionist-icon.jpg";
import { motion } from "framer-motion";
import GeometricBackground from "./GeometricBackground";

const Capabilities = () => {
  const features = [
    "One‑question dialog (no rambling)",
    "Calendar rules & buffers", 
    "SMS reminders & reschedules",
    "Human handoff on request",
    "Bilingual support",
    "Audit trail & consent line"
  ];

  return (
    <motion.section 
      id="capabilities" 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <GeometricBackground className="opacity-25" />
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CAPABILITIES
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Complete reception, one assistant
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your AI receptionist follows strict, one‑question‑at‑a‑time dialog. It verifies identity, 
            captures reason, checks real‑time availability, proposes 3 slots, collects insurance (optional), 
            and confirms — all while respecting provider rules and blackout dates.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-8 p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-muted-foreground">
                Need a web widget? Paste your agentId and the voice button will appear on your site instantly.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300">
                <div className="text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <img 
                      src={aiReceptionistIcon} 
                      alt="AI Receptionist Interface" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    AI Receptionist Interface
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Natural conversations that feel human while maintaining perfect consistency and availability 24/7.
                  </motion.p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <motion.div 
                      className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Availability</div>
                    </motion.div>
                    <motion.div 
                      className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Consistent</div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Capabilities;