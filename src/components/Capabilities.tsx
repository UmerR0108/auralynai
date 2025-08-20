import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import aiReceptionistIcon from "@/assets/ai-receptionist-icon.jpg";
import FloatingElements from "./FloatingElements";

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
    <section id="capabilities" className="py-24 relative overflow-hidden">
      <FloatingElements variant="neural" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6">
            CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete reception, one assistant
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Your AI receptionist follows strict, one‑question‑at‑a‑time dialog. It verifies identity, 
            captures reason, checks real‑time availability, proposes 3 slots, collects insurance (optional), 
            and confirms — all while respecting provider rules and blackout dates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 group animate-fade-in hover:translate-x-1 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-all duration-300" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl">
              <p className="text-muted-foreground">
                Need a web widget? Paste your agentId and the voice button will appear on your site instantly.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="group p-8 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={aiReceptionistIcon} 
                    alt="AI Receptionist Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">AI Receptionist Interface</h3>
                <p className="text-muted-foreground mb-6">
                  Natural conversations that feel human while maintaining perfect consistency and availability 24/7.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Consistent</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;