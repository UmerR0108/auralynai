import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-hero border-0 cosmic-glow">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to transform your reception?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of clinics and service businesses using Auralyn AI to never miss another call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Book Consultation
              </Button>
              <Button variant="ghost" size="lg" className="px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground/10">
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