import floatingTechElements from "@/assets/floating-tech-elements.png";
import neuralNetworkBg from "@/assets/neural-network-bg.png";

interface FloatingElementsProps {
  variant?: 'tech' | 'neural' | 'minimal';
}

const FloatingElements = ({ variant = 'minimal' }: FloatingElementsProps) => {
  if (variant === 'tech') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img 
          src={floatingTechElements} 
          alt="" 
          className="absolute top-10 right-10 w-64 h-48 animate-float opacity-60"
        />
        <img 
          src={floatingTechElements} 
          alt="" 
          className="absolute bottom-20 left-16 w-48 h-36 animate-float opacity-40" 
          style={{animationDelay: '2s', transform: 'scale(-1, 1)'}}
        />
      </div>
    );
  }

  if (variant === 'neural') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <img 
          src={neuralNetworkBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover animate-drift"
        />
      </div>
    );
  }

  // Minimal variant with simple geometric shapes
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-drift"></div>
    </div>
  );
};

export default FloatingElements;