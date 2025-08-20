import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const Results = () => {
  const partners = [
    "NVIDIA", "AWS", "Google Cloud", "Microsoft", "OpenAI", "Anthropic",
    "Databricks", "Snowflake", "Twilio", "RingCentral", "Five9", "Zoom",
    "Epic", "Oracle Health", "athenahealth", "Zocdoc", "Doximity", "Salesforce"
  ];

  return (
    <motion.section 
      id="results" 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Removed FloatingElements for cleaner design */}
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
            RESULTS
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Proven performance gains
          </motion.h2>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="group p-8 text-center bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300">
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                49%
              </motion.div>
              <div className="text-muted-foreground mb-2">Call desk</div>
              <div className="text-sm text-muted-foreground">Booking Success Rate</div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="group p-8 text-center bg-card/30 backdrop-blur-sm border-border/30 hover:border-accent/30 transition-all duration-300">
              <motion.div 
                className="text-4xl font-bold text-accent mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                52%
              </motion.div>
              <div className="text-muted-foreground mb-2">Website</div>
              <div className="text-sm text-muted-foreground">Booking Success Rate</div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="group p-8 text-center bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                initial={false}
              />
              <motion.div 
                className="text-4xl font-bold text-primary mb-2 relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                73%
              </motion.div>
              <div className="text-foreground mb-2 font-semibold relative z-10">Auralyn</div>
              <div className="text-sm text-muted-foreground relative z-10">Booking Success Rate</div>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">30-day sample across channels</p>
        </motion.div>

        {/* Partner Logos */}
        <div className="text-center mb-12">
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            AI Agents Featured In
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-6 opacity-60">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center p-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.7 + (index * 0.03),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  color: "hsl(var(--primary))",
                  transition: { duration: 0.2 }
                }}
              >
                <span>{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Results;