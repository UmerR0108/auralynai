import { Button } from "@/components/ui/button";
import AnimatedCosmicBackground from "@/components/AnimatedCosmicBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Cosmic Background */}
      <AnimatedCosmicBackground />
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] z-10"></div>
      
      {/* Enhanced Floating Elements with more movement */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary-glow rounded-full animate-drift"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent rounded-full animate-stars-twinkle"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary/60 rounded-full animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary-glow rounded-full animate-stars-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-drift" style={{animationDelay: '3s'}}></div>
        
        {/* Galaxy spiral elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-radial from-primary/20 to-transparent animate-galaxy-rotation"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-radial from-accent/15 to-transparent animate-galaxy-rotation" style={{animationDirection: 'reverse', animationDuration: '80s'}}></div>
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