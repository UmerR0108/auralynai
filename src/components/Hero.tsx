import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary-glow rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary/60 rounded-full animate-float"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-8">
            Trusted by busy clinics & service teams
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Answer every call with a natural{" "}
          <span className="text-gradient">AI receptionist</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          We greet, verify, schedule, remind, and reschedule across voice + SMS. 
          Your staff get their time back; your calendar fills itself.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            Book Consultation
          </Button>
          <Button variant="cosmic" size="lg" className="px-8 py-6 text-lg">
            Play Live Demo
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <span className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-md">
            Powered by AI
          </span>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15"></div>
    </section>
  );
};

export default Hero;