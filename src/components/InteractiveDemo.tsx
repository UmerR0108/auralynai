import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  type: 'caller' | 'auralyn';
  text: string;
}

interface Industry {
  id: string;
  name: string;
  conversation: Message[];
}

const industries: Industry[] = [
  {
    id: "cleaning",
    name: "Cleaning",
    conversation: [
      { type: 'caller', text: "I need a quote for weekly house cleaning service." },
      { type: 'auralyn', text: "I'd be happy to provide a quote! How many bedrooms and bathrooms does your home have?" },
      { type: 'caller', text: "It's 3 bedrooms and 2 bathrooms, about 1,800 square feet." },
      { type: 'auralyn', text: "For a 3-bedroom, 2-bathroom home, our weekly service starts at $120. Would you like to schedule a free assessment to get an exact quote?" },
      { type: 'caller', text: "Yes, that would be great. When can someone come out?" },
      { type: 'auralyn', text: "I can schedule an assessment for this Friday at 2 PM or Saturday at 10 AM. Which works better for you?" }
    ]
  },
  {
    id: "dental",
    name: "Dental",
    conversation: [
      { type: 'caller', text: "Hi, I need to schedule a cleaning appointment." },
      { type: 'auralyn', text: "Hello! I'd be happy to help you schedule a cleaning appointment. What's your preferred day of the week?" },
      { type: 'caller', text: "Maybe next Tuesday or Wednesday morning?" },
      { type: 'auralyn', text: "Perfect! I have Tuesday at 9:30 AM or Wednesday at 10:15 AM available. Which works better for you?" },
      { type: 'caller', text: "Tuesday at 9:30 sounds great." },
      { type: 'auralyn', text: "Excellent! You're all set for Tuesday, March 12th at 9:30 AM. You'll receive a confirmation text shortly. Is there anything else I can help you with today?" }
    ]
  },
  {
    id: "hvac",
    name: "HVAC",
    conversation: [
      { type: 'caller', text: "My air conditioner stopped working and it's really hot today." },
      { type: 'auralyn', text: "I understand how uncomfortable that must be. Is your system not turning on at all, or is it running but not cooling?" },
      { type: 'caller', text: "It's running but just blowing warm air." },
      { type: 'auralyn', text: "That sounds like it could be a refrigerant issue or a problem with the compressor. I can get a technician out today - we have availability at 2 PM or 4 PM." },
      { type: 'caller', text: "2 PM would be perfect, thank you!" },
      { type: 'auralyn', text: "Perfect! I've scheduled a technician for 2 PM today. The service call fee is $89, which is applied toward any repairs needed. You'll receive a confirmation text with the technician's details." }
    ]
  },
  {
    id: "medspa",
    name: "Med Spa",
    conversation: [
      { type: 'caller', text: "I'm interested in Botox treatment. What's the process like?" },
      { type: 'auralyn', text: "Great question! Botox is one of our most popular treatments. Have you had Botox before, or would this be your first time?" },
      { type: 'caller', text: "This would be my first time. I'm a bit nervous about it." },
      { type: 'auralyn', text: "That's completely normal! We offer complimentary consultations where our practitioner explains the entire process and answers all your questions. Would you like to schedule one?" },
      { type: 'caller', text: "Yes, that sounds good. When are you available?" },
      { type: 'auralyn', text: "I have openings this Thursday at 3 PM or Friday at 11 AM for your consultation. The consultation is about 30 minutes and completely free with no pressure." }
    ]
  },
  {
    id: "auto",
    name: "Auto Repair",
    conversation: [
      { type: 'caller', text: "My car is making a strange noise when I brake." },
      { type: 'auralyn', text: "That definitely needs to be checked right away for safety. Can you describe the noise - is it a grinding, squealing, or squeaking sound?" },
      { type: 'caller', text: "It's more like a grinding noise, especially when I stop." },
      { type: 'auralyn', text: "That sounds like your brake pads may need replacement. For safety, I'd recommend getting this looked at today. We have an opening at 1 PM - would that work?" },
      { type: 'caller', text: "Yes, I can come in at 1 PM today." },
      { type: 'auralyn', text: "Perfect! I have you scheduled for 1 PM today for a brake inspection. Please drive carefully and avoid heavy braking if possible. See you soon!" }
    ]
  }
];

const InteractiveDemo = () => {
  const [activeIndustry, setActiveIndustry] = useState("cleaning");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const currentIndustry = industries.find(industry => industry.id === activeIndustry);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
    setTimer(0);
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(false);
    setTimer(0);
  };

  // Timer effect - counts up every second when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Message sequence effect - adds message every 2.5 seconds
  useEffect(() => {
    if (!isPlaying || !currentIndustry || currentMessageIndex >= currentIndustry.conversation.length) {
      if (currentMessageIndex >= (currentIndustry?.conversation.length || 0)) {
        setIsPlaying(false);
      }
      return;
    }

    const delay = currentMessageIndex === 0 ? 0 : 2500; // First message immediate, others 2.5s apart

    const messageTimer = setTimeout(() => {
      setMessages(prev => [...prev, currentIndustry.conversation[currentMessageIndex]]);
      setCurrentMessageIndex(prev => prev + 1);
    }, delay);

    return () => clearTimeout(messageTimer);
  }, [isPlaying, currentMessageIndex, currentIndustry]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  // Reset when industry changes
  useEffect(() => {
    resetDemo();
    setHasAutoStarted(false);
  }, [activeIndustry]);

  // Auto-start demo when component loads
  useEffect(() => {
    if (!hasAutoStarted && !isPlaying) {
      const startTimer = setTimeout(() => {
        setHasAutoStarted(true);
        startDemo();
      }, 1000);
      return () => clearTimeout(startTimer);
    }
  }, [hasAutoStarted, isPlaying]);

  return (
    <motion.section 
      id="live-demo" 
      className="py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See AuralynAI in Action
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Watch how our AI receptionist handles real customer conversations across different industries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced container with frosted glass effect */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden relative">
            {/* Gradient accent border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] rounded-2xl">
              <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl h-full"></div>
            </div>
            
            <div className="relative p-6">
              {/* Enhanced header with gradient accents */}
              <div className="flex items-center justify-between mb-6 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="bg-emerald-400 w-3 h-3 rounded-full shadow-lg shadow-emerald-400/50"
                    animate={{ 
                      boxShadow: [
                        "0 0 8px rgba(52, 211, 153, 0.5)",
                        "0 0 16px rgba(52, 211, 153, 0.8)",
                        "0 0 8px rgba(52, 211, 153, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Auralyn Ai — Live call
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400 text-sm font-mono font-semibold tracking-wider shadow-lg">
                    {formatTime(timer)}
                  </span>
                  <motion.button
                    onClick={resetDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm px-4 py-2 bg-transparent border border-purple-400/60 text-purple-300 rounded-lg hover:bg-purple-500/20 hover:border-purple-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Replay Conversation
                  </motion.button>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6 text-center">Static preview</p>

              {/* Enhanced tabs */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                      activeIndustry === industry.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 border border-purple-400/50'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-white border border-slate-600/30 hover:border-slate-500/50'
                    }`}
                  >
                    {industry.name}
                  </motion.button>
                ))}
              </div>

              {/* Enhanced chat window */}
              <div 
                ref={chatContainerRef}
                className="bg-slate-950/40 backdrop-blur-sm rounded-xl p-6 min-h-[400px] max-h-[500px] overflow-y-auto border border-slate-700/30 shadow-inner shadow-purple-500/10"
                style={{ scrollBehavior: 'smooth' }}
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ 
                        opacity: 0, 
                        y: 20, 
                        scale: 0.85
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.4
                      }}
                      className={`mb-6 flex ${message.type === 'auralyn' ? 'justify-end' : 'justify-start'}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ boxShadow: "0 0 0px rgba(168, 85, 247, 0)" }}
                        animate={{ 
                          boxShadow: index === messages.length - 1 
                            ? [
                                "0 0 0px rgba(168, 85, 247, 0)",
                                "0 0 20px rgba(168, 85, 247, 0.3)",
                                "0 0 0px rgba(168, 85, 247, 0)"
                              ]
                            : "0 0 0px rgba(168, 85, 247, 0)"
                        }}
                        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
                        className={`inline-block px-4 py-3 max-w-[75%] rounded-xl text-sm shadow-lg transition-all duration-300 ${
                          message.type === 'caller' 
                            ? 'bg-purple-500/70 backdrop-blur-sm text-white shadow-purple-500/30 border border-purple-400/30' 
                            : 'bg-slate-700/70 backdrop-blur-sm text-white shadow-slate-700/30 border border-slate-600/30'
                        }`}
                      >
                        {message.text}
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteractiveDemo;