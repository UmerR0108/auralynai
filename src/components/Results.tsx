import { Card } from "@/components/ui/card";

const Results = () => {
  const performanceMetrics = [
    { label: "Call desk", value: "12%", description: "After-hours capture rate" },
    { label: "Website", value: "18%", description: "After-hours capture rate" },
    { label: "Auralyn", value: "64%", description: "After-hours capture rate", highlight: true }
  ];

  const keyMetrics = [
    { value: "62%", label: "First-call resolution (FCR)", highlight: true },
    { value: "-27%", label: "No-shows after 60 days", highlight: true },
    { value: "≤5m", label: "Median time-to-booking", highlight: true }
  ];

  const costComparison = [
    { label: "Call desk", value: "$18", description: "Cost per booking" },
    { label: "Website", value: "$12", description: "Cost per booking" },
    { label: "Auralyn", value: "$6", description: "Cost per booking", highlight: true }
  ];

  const industryFindings = [
    { value: "30-35%", label: "Calls missed without AI", color: "text-red-400" },
    { value: "75%", label: "Don't leave voicemail", color: "text-orange-400" },
    { value: "10-15x", label: "ROI in first year", color: "text-green-400" },
    { value: "90 days", label: "To see significant returns", color: "text-blue-400" }
  ];

  const partners = [
    "NVIDIA", "AWS", "Google Cloud", "Microsoft", "OpenAI", "Anthropic",
    "Databricks", "Snowflake", "Twilio", "RingCentral", "Five9", "Zoom",
    "Epic", "Oracle Health", "athenahealth", "Zocdoc", "Doximity", "Salesforce"
  ];

  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6">
            PERFORMANCE DATA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Proven performance gains
          </h2>
        </div>

        {/* After-Hours Performance Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2">After-Hours Capture Rate</h3>
          <p className="text-muted-foreground text-center mb-8">7pm–7am performance comparison</p>
          <div className="grid md:grid-cols-3 gap-8">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className={`p-8 text-center backdrop-blur-sm border-border/40 cosmic-glow ${
                metric.highlight ? 'bg-primary/10 border-primary/20' : 'bg-card/20'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${metric.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                  {metric.value}
                </div>
                <div className="text-foreground font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="p-8 text-center bg-card/20 backdrop-blur-sm border-border/40 cosmic-glow">
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-2">Cost Per Booking</h3>
          <p className="text-muted-foreground text-center mb-8">Lower is better • Includes labor + overhead</p>
          <div className="grid md:grid-cols-3 gap-8">
            {costComparison.map((cost, index) => (
              <Card key={index} className={`p-8 text-center backdrop-blur-sm border-border/40 cosmic-glow ${
                cost.highlight ? 'bg-primary/10 border-primary/20' : 'bg-card/20'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${cost.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                  {cost.value}
                </div>
                <div className="text-foreground font-medium mb-2">{cost.label}</div>
                <div className="text-sm text-muted-foreground">{cost.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Findings */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-card/20 backdrop-blur-sm border-border/40">
            <h3 className="text-xl font-bold mb-6">ROI Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">ROI in first year:</span>
                <span className="text-2xl font-bold text-green-400">10-15x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">To see significant returns:</span>
                <span className="text-2xl font-bold text-blue-400">90 days</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Typical investment of $200-800 monthly delivers 10-15x ROI within first year. 
              Most practices see $8,000-$12,000 additional monthly revenue within 90 days 
              of implementation, primarily from recovered missed calls and reduced no-shows.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/20 backdrop-blur-sm border-border/40">
            <h3 className="text-xl font-bold mb-6">Key Industry Findings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Calls missed without AI:</span>
                <span className="text-2xl font-bold text-red-400">30-35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Don't leave voicemail:</span>
                <span className="text-2xl font-bold text-orange-400">75%</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Healthcare practices without AI miss 30-35% of calls, and 75% of callers don't leave voicemail. 
              Industry projections show AI will save healthcare $3.6 billion globally by 2025 through 
              improved efficiency and patient capture.
            </p>
          </Card>
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">AI Agents Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-6 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;