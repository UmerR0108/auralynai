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
          className="absolute top-10 right-10 w-48 h-36 animate-float opacity-60 max-w-none"
          style={{transform: 'translateX(-20px)'}}
        />
        <img 
          src={floatingTechElements} 
          alt="" 
          className="absolute bottom-20 left-16 w-40 h-30 animate-float opacity-40 max-w-none" 
          style={{animationDelay: '2s', transform: 'scale(-1, 1) translateX(20px)'}}
        />
      </div>
    );
  }

  if (variant === 'neural') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img 
          src={neuralNetworkBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover animate-drift opacity-50"
          style={{transform: 'scale(1.1)'}}
        />
      </div>
    );
  }

  // Minimal variant with simple geometric shapes
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-secondary/8 rounded-full blur-2xl animate-drift"></div>
    </div>
  );
};

export default FloatingElements;