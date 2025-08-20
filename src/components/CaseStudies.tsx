import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "Bright Smile Dental",
      industry: "Dental Clinic",
      location: "Seattle, WA",
      challenge: "Missing 40% of calls during peak hours, leading to lost appointments and frustrated patients.",
      solution: "Implemented Auralyn AI to handle all incoming calls, schedule appointments, and send SMS reminders.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "156%",
        staffTimeFreed: "15 hours/week",
        patientSatisfaction: "94%"
      },
      testimonial: "Auralyn AI completely transformed our practice. We went from missing calls constantly to never missing a potential patient again. Our staff can now focus on patient care instead of phone management.",
      contactName: "Dr. Sarah Chen",
      role: "Practice Owner"
    },
    {
      company: "Premier Auto Body",
      industry: "Auto Body Shop",
      location: "Denver, CO",
      challenge: "Technicians constantly interrupted by phone calls, reducing productivity and delaying repairs.",
      solution: "Deployed Auralyn AI to handle estimate requests, schedule drop-offs, and manage customer communications.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "89%",
        staffTimeFreed: "20 hours/week",
        customerSatisfaction: "91%"
      },
      testimonial: "Our technicians can finally focus on what they do best - fixing cars. Auralyn handles all the scheduling and customer questions perfectly. It's like having a dedicated receptionist that never takes a break.",
      contactName: "Mike Rodriguez",
      role: "Shop Manager"
    },
    {
      company: "Wellness Med Spa",
      industry: "Medical Spa",
      location: "Miami, FL",
      challenge: "Complex service menu and booking requirements overwhelming front desk staff during busy periods.",
      solution: "Integrated Auralyn AI to explain services, check availability, and book consultations with proper screening.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "203%",
        staffTimeFreed: "25 hours/week",
        conversionRate: "67%"
      },
      testimonial: "Auralyn perfectly explains our services and books qualified consultations. It's actually better than our human staff at following our protocols consistently. Our conversion rate has never been higher.",
      contactName: "Dr. Maria Santos",
      role: "Medical Director"
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real results from real businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Auralyn AI helped dental clinics, auto body shops, and medical spas transform their customer experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-8 bg-card/20 backdrop-blur-sm border-border/40 cosmic-glow hover:border-primary/40 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{caseStudy.company}</h3>
                    <p className="text-sm text-muted-foreground">{caseStudy.industry} • {caseStudy.location}</p>
                  </div>
                  <div className="text-primary/20">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">{caseStudy.results.callsAnswered}</div>
                    <div className="text-xs text-muted-foreground">Calls Answered</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">+{caseStudy.results.bookingIncrease}</div>
                    <div className="text-xs text-muted-foreground">Booking Increase</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">{caseStudy.results.staffTimeFreed}</div>
                    <div className="text-xs text-muted-foreground">Time Freed Up</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-lg font-bold text-primary">{caseStudy.results.patientSatisfaction || caseStudy.results.customerSatisfaction || caseStudy.results.conversionRate}</div>
                    <div className="text-xs text-muted-foreground">
                      {caseStudy.results.patientSatisfaction ? 'Satisfaction' : 
                       caseStudy.results.customerSatisfaction ? 'Satisfaction' : 'Conversion'}
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm text-foreground italic mb-4 border-l-2 border-primary/30 pl-4">
                  "{caseStudy.testimonial}"
                </blockquote>

                <div className="text-sm">
                  <div className="font-semibold text-foreground">{caseStudy.contactName}</div>
                  <div className="text-muted-foreground">{caseStudy.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Ready to see similar results for your business?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              View More Case Studies
            </button>
            <button className="px-6 py-3 border border-border/40 text-foreground rounded-lg hover:bg-background/20 transition-colors">
              Book Your Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;