import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Phone, Play, RotateCcw } from "lucide-react";

interface Message {
  type: 'caller' | 'ai';
  text: string;
  delay: number;
}

interface Industry {
  id: string;
  name: string;
  conversation: Message[];
}

const industries: Industry[] = [
  {
    id: "dental",
    name: "Dental",
    conversation: [
      { type: 'caller', text: "Hi, I need to schedule a cleaning appointment.", delay: 0 },
      { type: 'ai', text: "Hello! I'd be happy to help you schedule a cleaning appointment. What's your preferred day of the week?", delay: 600 },
      { type: 'caller', text: "Maybe next Tuesday or Wednesday morning?", delay: 1200 },
      { type: 'ai', text: "Perfect! I have Tuesday at 9:30 AM or Wednesday at 10:15 AM available. Which works better for you?", delay: 1800 },
      { type: 'caller', text: "Tuesday at 9:30 sounds great.", delay: 2400 },
      { type: 'ai', text: "Excellent! You're all set for Tuesday, March 12th at 9:30 AM. You'll receive a confirmation text shortly. Is there anything else I can help you with today?", delay: 3000 }
    ]
  },
  {
    id: "cleaning",
    name: "Cleaning",
    conversation: [
      { type: 'caller', text: "I need a quote for weekly house cleaning service.", delay: 0 },
      { type: 'ai', text: "I'd be happy to provide a quote! How many bedrooms and bathrooms does your home have?", delay: 600 },
      { type: 'caller', text: "It's 3 bedrooms and 2 bathrooms, about 1,800 square feet.", delay: 1200 },
      { type: 'ai', text: "For a 3-bedroom, 2-bathroom home, our weekly service starts at $120. Would you like to schedule a free assessment to get an exact quote?", delay: 1800 },
      { type: 'caller', text: "Yes, that would be great. When can someone come out?", delay: 2400 },
      { type: 'ai', text: "I can schedule an assessment for this Friday at 2 PM or Saturday at 10 AM. Which works better for you?", delay: 3000 }
    ]
  },
  {
    id: "hvac",
    name: "HVAC",
    conversation: [
      { type: 'caller', text: "My air conditioner stopped working and it's really hot today.", delay: 0 },
      { type: 'ai', text: "I understand how uncomfortable that must be. Is your system not turning on at all, or is it running but not cooling?", delay: 600 },
      { type: 'caller', text: "It's running but just blowing warm air.", delay: 1200 },
      { type: 'ai', text: "That sounds like it could be a refrigerant issue or a problem with the compressor. I can get a technician out today - we have availability at 2 PM or 4 PM.", delay: 1800 },
      { type: 'caller', text: "2 PM would be perfect, thank you!", delay: 2400 },
      { type: 'ai', text: "Perfect! I've scheduled a technician for 2 PM today. The service call fee is $89, which is applied toward any repairs needed. You'll receive a confirmation text with the technician's details.", delay: 3000 }
    ]
  },
  {
    id: "medspa",
    name: "Med Spa",
    conversation: [
      { type: 'caller', text: "I'm interested in Botox treatment. What's the process like?", delay: 0 },
      { type: 'ai', text: "Great question! Botox is one of our most popular treatments. Have you had Botox before, or would this be your first time?", delay: 600 },
      { type: 'caller', text: "This would be my first time. I'm a bit nervous about it.", delay: 1200 },
      { type: 'ai', text: "That's completely normal! We offer complimentary consultations where our practitioner explains the entire process and answers all your questions. Would you like to schedule one?", delay: 1800 },
      { type: 'caller', text: "Yes, that sounds good. When are you available?", delay: 2400 },
      { type: 'ai', text: "I have openings this Thursday at 3 PM or Friday at 11 AM for your consultation. The consultation is about 30 minutes and completely free with no pressure.", delay: 3000 }
    ]
  },
  {
    id: "auto",
    name: "Auto Repair",
    conversation: [
      { type: 'caller', text: "My car is making a strange noise when I brake.", delay: 0 },
      { type: 'ai', text: "That definitely needs to be checked right away for safety. Can you describe the noise - is it a grinding, squealing, or squeaking sound?", delay: 600 },
      { type: 'caller', text: "It's more like a grinding noise, especially when I stop.", delay: 1200 },
      { type: 'ai', text: "That sounds like your brake pads may need replacement. For safety, I'd recommend getting this looked at today. We have an opening at 1 PM - would that work?", delay: 1800 },
      { type: 'caller', text: "Yes, I can come in at 1 PM today.", delay: 2400 },
      { type: 'ai', text: "Perfect! I have you scheduled for 1 PM today for a brake inspection. Please drive carefully and avoid heavy braking if possible. See you soon!", delay: 3000 }
    ]
  }
];

const InteractiveDemo = () => {
  const [activeIndustry, setActiveIndustry] = useState("dental");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  const currentIndustry = industries.find(industry => industry.id === activeIndustry);

  const startDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
    setTypingText("");
    setIsTyping(false);
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(false);
    setTypingText("");
    setIsTyping(false);
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isPlaying || !currentIndustry || currentMessageIndex >= currentIndustry.conversation.length) {
      if (currentMessageIndex >= currentIndustry?.conversation.length!) {
        setIsPlaying(false);
      }
      return;
    }

    const currentMessage = currentIndustry.conversation[currentMessageIndex];
    
    const timer = setTimeout(() => {
      if (currentMessage.type === 'ai') {
        setIsTyping(true);
        let charIndex = 0;
        setTypingText("");
        
        const typeInterval = setInterval(() => {
            if (charIndex < currentMessage.text.length) {
              setTypingText(currentMessage.text.substring(0, charIndex + 1));
              charIndex++;
            } else {
              clearInterval(typeInterval);
              setIsTyping(false);
              setMessages(prev => [...prev, currentMessage]);
              setTypingText("");
              setCurrentMessageIndex(prev => prev + 1);
            }
          }, 20);
      } else {
        setMessages(prev => [...prev, currentMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }
    }, currentMessage.delay);

    return () => clearTimeout(timer);
  }, [isPlaying, currentMessageIndex, currentIndustry]);

  useEffect(() => {
    resetDemo();
    setHasAutoStarted(false);
  }, [activeIndustry]);

  // Auto-start demo when component comes into view
  useEffect(() => {
    if (!hasAutoStarted && !isPlaying) {
      const timer = setTimeout(() => {
        setHasAutoStarted(true);
        startDemo();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoStarted, isPlaying]);

  return (
    <motion.section
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            See AuralynAI in Action
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Watch how our AI receptionist handles real customer conversations across different industries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 shadow-2xl overflow-hidden">
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse shadow-lg"></div>
                  <Phone className="w-5 h-5 text-slate-300" />
                  <span className="text-white font-medium">Live Call Simulation</span>
                </div>
                <div className="flex gap-2">
                  {!isPlaying ? (
                    <Button
                      onClick={startDemo}
                      variant="outline"
                      size="sm"
                      className="bg-slate-700/50 border-slate-500 text-white hover:bg-slate-600/80"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Demo
                    </Button>
                  ) : (
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      size="sm"
                      className="bg-slate-700/50 border-slate-500 text-white hover:bg-slate-600/80"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  )}
                </div>
              </div>

              <Tabs value={activeIndustry} onValueChange={setActiveIndustry} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 bg-slate-700/50 mb-4 md:mb-6 h-auto p-1">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry.id}
                      value={industry.id}
                      className="text-slate-300 data-[state=active]:bg-slate-600 data-[state=active]:text-white data-[state=active]:shadow-sm px-2 py-2 text-sm"
                    >
                      {industry.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {industries.map((industry) => (
                <TabsContent key={industry.id} value={industry.id} className="mt-0">
                    <div 
                      ref={chatContainerRef}
                      className="bg-slate-950/70 rounded-xl p-4 md:p-6 min-h-[350px] md:min-h-[400px] max-h-[500px] overflow-y-auto border border-slate-600/30 scroll-smooth"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      <AnimatePresence>
                        {messages.map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ 
                              opacity: 0, 
                              y: 30, 
                              scale: 0.3,
                              transformOrigin: message.type === 'caller' ? 'bottom left' : 'bottom right'
                            }}
                            animate={{ 
                              opacity: 1, 
                              y: 0, 
                              scale: 1
                            }}
                            transition={{ 
                              duration: 0.6, 
                              type: "spring", 
                              stiffness: 260,
                              damping: 20
                            }}
                            className={`mb-4 flex ${message.type === 'caller' ? 'justify-start' : 'justify-end'}`}
                          >
                            <div
                              className={`max-w-[70%] sm:max-w-[75%] p-3 md:p-4 rounded-lg shadow-lg ${
                                message.type === 'caller'
                                  ? 'bg-[#B388FF] text-white rounded-bl-sm'
                                  : 'bg-[#1F1F1F] text-white rounded-br-sm'
                              }`}
                            >
                              <div className="text-xs opacity-80 mb-1 font-medium">
                                {message.type === 'caller' ? 'Customer' : 'AuralynAI'}
                              </div>
                              <div className="leading-relaxed">{message.text}</div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                      
                      {isTyping && (
                        <motion.div
                          initial={{ 
                            opacity: 0, 
                            y: 30, 
                            scale: 0.3,
                            transformOrigin: 'bottom right'
                          }}
                          animate={{ 
                            opacity: 1, 
                            y: 0, 
                            scale: 1
                          }}
                          transition={{ 
                            duration: 0.6, 
                            type: "spring", 
                            stiffness: 260,
                            damping: 20
                          }}
                          className="mb-4 flex justify-end"
                        >
                          <div className="max-w-[70%] sm:max-w-[75%] p-3 md:p-4 rounded-lg bg-[#1F1F1F] text-white rounded-br-sm shadow-lg">
                            <div className="text-xs opacity-80 mb-1 font-medium">AuralynAI</div>
                            <div className="leading-relaxed">{typingText}<span className="animate-pulse">|</span></div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveDemo;