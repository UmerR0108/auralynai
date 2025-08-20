import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-drift"></div>
      </div>
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-hero border-0 hover:scale-[1.01] transition-transform duration-300 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to transform your reception?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of clinics and service businesses using Auralyn AI to never miss another call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 hover:scale-105 transition-all duration-300">
                Book Consultation
              </Button>
              <Button variant="ghost" size="lg" className="px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300">
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;