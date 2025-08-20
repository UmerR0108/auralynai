import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Results from "@/components/Results";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Capabilities />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
