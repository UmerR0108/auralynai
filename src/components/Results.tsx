import { Card } from "@/components/ui/card";

const Results = () => {
  const partners = [
    "NVIDIA", "AWS", "Google Cloud", "Microsoft", "OpenAI", "Anthropic",
    "Databricks", "Snowflake", "Twilio", "RingCentral", "Five9", "Zoom",
    "Epic", "Oracle Health", "athenahealth", "Zocdoc", "Doximity", "Salesforce"
  ];

  return (
    <section id="results" className="py-24 relative">
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group p-8 text-center bg-card/20 backdrop-blur-sm border-border/40 cosmic-glow hover-scale transition-all duration-500 animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">49%</div>
            <div className="text-muted-foreground mb-2">Call desk</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </Card>
          
          <Card className="group p-8 text-center bg-card/20 backdrop-blur-sm border-border/40 cosmic-glow hover-scale transition-all duration-500 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-accent mb-2 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">52%</div>
            <div className="text-muted-foreground mb-2">Website</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </Card>
          
          <Card className="group p-8 text-center bg-primary/10 backdrop-blur-sm border-primary/20 cosmic-glow hover-scale transition-all duration-500 animate-fade-in relative overflow-hidden" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">73%</div>
            <div className="text-foreground mb-2 font-semibold">Auralyn</div>
            <div className="text-sm text-muted-foreground">Booking Success Rate</div>
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow"></div>
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
                className="flex items-center justify-center p-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover-scale animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="hover:text-gradient transition-all duration-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;