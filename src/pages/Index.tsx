import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import Results from "@/components/Results";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <InteractiveDemo />
      <Capabilities />
      <CaseStudies />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
