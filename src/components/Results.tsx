import { Card } from "@/components/ui/card";
import FloatingElements from "./FloatingElements";

const Results = () => {
  const partners = [
    "NVIDIA", "AWS", "Google Cloud", "Microsoft", "OpenAI", "Anthropic",
    "Databricks", "Snowflake", "Twilio", "RingCentral", "Five9", "Zoom",
    "Epic", "Oracle Health", "athenahealth", "Zocdoc", "Doximity", "Salesforce"
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <FloatingElements variant="tech" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6">
            RESULTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Proven performance gains
          </h2>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
          <Card className="group p-8 text-center bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">49%</div>
            <div className="text-muted-foreground mb-2">Call desk</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
          </Card>
          
          <Card className="group p-8 text-center bg-card/30 backdrop-blur-sm border-border/30 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">52%</div>
            <div className="text-muted-foreground mb-2">Website</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
          </Card>
          
          <Card className="group p-8 text-center bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in relative overflow-hidden" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">73%</div>
            <div className="text-foreground mb-2 font-semibold">Auralyn</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
          </Card>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground">30-day sample across channels</p>
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground animate-fade-in">AI Agents Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-6 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <span className="hover:text-primary transition-colors duration-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;