import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/36c969d9-2d19-4347-ac2d-236764962c0e.png" 
            alt="Auralyn AI Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-foreground">Auralyn AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
            Capabilities
          </a>
          <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
            Results
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Contact Sales
          </Button>
          <Button variant="hero">
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;