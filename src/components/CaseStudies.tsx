import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "Multi-Location Dental Group",
      industry: "Dental Practice",
      location: "15 locations across three states",
      patients: "45,000+ patients",
      status: "Verified Client",
      challenge: "This growing dental group was losing significant revenue from missed calls. With front desk staff overwhelmed by phone volume, they were missing 35% of incoming calls across all locations. Each missed call represented potential revenue loss, and patients were frustrated by busy signals and long hold times. The group estimated they were losing $150,000+ annually from missed opportunities alone.",
      solution: "They implemented an AI receptionist system across all 15 locations, integrated with their existing practice management software. The AI was trained on their specific scheduling rules, insurance policies, and common patient questions. It handled appointment scheduling, insurance verification, and basic inquiries 24/7, while seamlessly transferring complex cases to human staff.",
      results: {
        newBookings: "$56,000",
        missedCallReduction: "80%",
        revenueIncrease: "12%",
        staffTimeSaved: "2 hrs",
        timeFrame: "first month"
      },
      testimonial: "Within the first month, we booked over $56,000 worth of new patient appointments that would have been missed calls. Missed calls dropped by 80%, and our front desk staff saved 2 hours daily per location. The group saw a 12% increase in overall revenue and reduced front desk staffing needs by 17% while improving patient satisfaction scores.",
      contactName: "Dr. Jennifer Martinez",
      role: "Practice Owner"
    },
    {
      company: "Family Medicine Practice",
      industry: "Medical Practice",
      location: "Single location",
      patients: "8,000 patients",
      status: "Verified Client",
      challenge: "This family practice was struggling with high no-show rates (28%) and missed after-hours calls. Patients frequently called outside business hours for urgent concerns and appointment requests, but could only reach voicemail. The practice was losing potential patients to competitors with better availability, and no-shows were costing them approximately $4,200 monthly in unused appointment slots.",
      solution: "They deployed an AI receptionist with 24/7 availability and intelligent appointment reminder system. The AI handled after-hours scheduling, sent personalized SMS reminders with easy reschedule options, and answered common patient questions about services, directions, and insurance. It also prioritized urgent calls and facilitated same-day appointments for pressing medical needs.",
      results: {
        newBookings: "15%",
        noShowReduction: "20%",
        additionalRevenue: "$8,500",
        availability: "24/7",
        timeFrame: "three months"
      },
      testimonial: "Within three months, new patient bookings increased by 15%, with most new appointments coming from after-hours calls that previously went to voicemail. No-show rates dropped from 28% to 8% due to automated reminders and easy rescheduling. The practice recovered $3,400 monthly from reduced no-shows and gained $8,500 in additional monthly revenue from new bookings.",
      contactName: "Dr. Michael Chen",
      role: "Family Physician"
    },
    {
      company: "Premier Auto Body Shop",
      industry: "Auto Body & Collision",
      location: "Denver, CO",
      patients: "Commercial & retail clients",
      status: "Verified Client", 
      challenge: "Technicians were constantly interrupted by phone calls for estimates and scheduling, reducing productivity and delaying repairs. The shop was missing 30% of incoming calls during peak hours, losing potential customers to competitors. Each missed call represented lost revenue, and customers were frustrated by having to call multiple times to reach someone.",
      solution: "Deployed Auralyn AI to handle estimate requests, schedule drop-offs, and manage customer communications. The AI was trained on their specific services, pricing structure, and scheduling availability. It could provide initial estimates, schedule appointments, and answer common questions about insurance claims and repair timelines.",
      results: {
        callsAnswered: "100%",
        bookingIncrease: "89%",
        staffTimeFreed: "20 hours/week",
        customerSatisfaction: "91%",
        timeFrame: "first quarter"
      },
      testimonial: "Our technicians can finally focus on what they do best - fixing cars. Auralyn handles all the scheduling and customer questions perfectly. It's like having a dedicated receptionist that never takes a break. We've seen an 89% increase in bookings and our customer satisfaction scores hit 91%.",
      contactName: "Mike Rodriguez",
      role: "Shop Manager"
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
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{caseStudy.company}</h3>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        {caseStudy.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{caseStudy.industry} • {caseStudy.location}</p>
                    <p className="text-xs text-muted-foreground">{caseStudy.patients}</p>
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
                  {caseStudy.company === "Multi-Location Dental Group" && (
                    <>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.newBookings}</div>
                        <div className="text-xs text-muted-foreground">New bookings {caseStudy.results.timeFrame}</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.missedCallReduction}</div>
                        <div className="text-xs text-muted-foreground">Reduction in missed calls</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.revenueIncrease}</div>
                        <div className="text-xs text-muted-foreground">Increase in revenue</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.staffTimeSaved}</div>
                        <div className="text-xs text-muted-foreground">Staff time saved daily</div>
                      </div>
                    </>
                  )}
                  {caseStudy.company === "Family Medicine Practice" && (
                    <>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.newBookings}</div>
                        <div className="text-xs text-muted-foreground">Increase in new bookings</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.noShowReduction}</div>
                        <div className="text-xs text-muted-foreground">Reduction in no-shows</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.additionalRevenue}</div>
                        <div className="text-xs text-muted-foreground">Additional monthly revenue</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{caseStudy.results.availability}</div>
                        <div className="text-xs text-muted-foreground">Patient accessibility</div>
                      </div>
                    </>
                  )}
                  {caseStudy.company === "Premier Auto Body Shop" && (
                    <>
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
                        <div className="text-lg font-bold text-primary">{caseStudy.results.customerSatisfaction}</div>
                        <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
                      </div>
                    </>
                  )}
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