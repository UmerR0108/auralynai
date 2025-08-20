import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import NeuralNetwork from "./NeuralNetwork";

const CaseStudies = () => {
  const cases = [
    {
      company: "Bright Smile Dental",
      industry: "Dental Clinic",
      location: "Seattle, WA",
      challenge: "Missing 40% of calls during peak hours, leading to lost appointments and frustrated patients.",
      solution: "Implemented Auralyn AI to handle all incoming calls, schedule appointments, and send SMS reminders.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "156%",
        staffTimeFreed: "15 hours/week",
        patientSatisfaction: "94%"
      },
      testimonial: "Auralyn AI completely transformed our practice. We went from missing calls constantly to never missing a potential patient again. Our staff can now focus on patient care instead of phone management.",
      contactName: "Dr. Sarah Chen",
      role: "Practice Owner"
    },
    {
      company: "Premier Auto Body",
      industry: "Auto Body Shop",
      location: "Denver, CO",
      challenge: "Technicians constantly interrupted by phone calls, reducing productivity and delaying repairs.",
      solution: "Deployed Auralyn AI to handle estimate requests, schedule drop-offs, and manage customer communications.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "89%",
        staffTimeFreed: "20 hours/week",
        customerSatisfaction: "91%"
      },
      testimonial: "Our technicians can finally focus on what they do best - fixing cars. Auralyn handles all the scheduling and customer questions perfectly. It's like having a dedicated receptionist that never takes a break.",
      contactName: "Mike Rodriguez",
      role: "Shop Manager"
    },
    {
      company: "Wellness Med Spa",
      industry: "Medical Spa",
      location: "Miami, FL",
      challenge: "Complex service menu and booking requirements overwhelming front desk staff during busy periods.",
      solution: "Integrated Auralyn AI to explain services, check availability, and book consultations with proper screening.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "203%",
        staffTimeFreed: "25 hours/week",
        conversionRate: "67%"
      },
      testimonial: "Auralyn perfectly explains our services and books qualified consultations. It's actually better than our human staff at following our protocols consistently. Our conversion rate has never been higher.",
      contactName: "Dr. Maria Santos",
      role: "Medical Director"
    }
  ];

  return (
    <motion.section 
      id="case-studies" 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <NeuralNetwork className="opacity-30" />
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
            SUCCESS STORIES
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Real results from real businesses
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            See how Auralyn AI helped dental clinics, auto body shops, and medical spas transform their customer experience.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="group p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="mb-6">
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{caseStudy.company}</h3>
                      <p className="text-sm text-muted-foreground">{caseStudy.industry} • {caseStudy.location}</p>
                    </div>
                    <motion.div 
                      className="text-primary/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    >
                      <Quote className="w-8 h-8" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { value: caseStudy.results.callsAnswered, label: "Calls Answered" },
                      { value: `+${caseStudy.results.bookingIncrease}`, label: "Booking Increase" },
                      { value: caseStudy.results.staffTimeFreed, label: "Time Freed Up" },
                      { 
                        value: caseStudy.results.patientSatisfaction || caseStudy.results.customerSatisfaction || caseStudy.results.conversionRate,
                        label: caseStudy.results.patientSatisfaction ? 'Satisfaction' : 
                               caseStudy.results.customerSatisfaction ? 'Satisfaction' : 'Conversion'
                      }
                    ].map((stat, statIndex) => (
                      <motion.div 
                        key={statIndex}
                        className="text-center p-3 bg-primary/5 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.6 + statIndex * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.blockquote 
                    className="text-sm text-foreground italic mb-4 border-l-2 border-primary/30 pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    "{caseStudy.testimonial}"
                  </motion.blockquote>

                  <motion.div 
                    className="text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
                    viewport={{ once: true }}
                  >
                    <div className="font-semibold text-foreground">{caseStudy.contactName}</div>
                    <div className="text-muted-foreground">{caseStudy.role}</div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Ready to see similar results for your business?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View More Case Studies
            </motion.button>
            <motion.button 
              className="px-6 py-3 border border-border/40 text-foreground rounded-lg hover:bg-background/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Book Your Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;