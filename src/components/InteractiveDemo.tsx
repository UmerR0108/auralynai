import React, { useState, useEffect, useRef } from "react";

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
    <section id="live-demo" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Auralyn Ai — Live call</h2>
          <div className="text-green-400 font-mono text-sm">{formatTime(timer)}</div>
        </div>
        <p className="text-sm text-gray-400 mb-6">Static preview</p>

        <div className="flex space-x-2 mb-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`px-3 py-1 rounded text-sm transition ${
                activeIndustry === industry.id
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div 
          ref={chatContainerRef}
          className="bg-gray-800 p-4 rounded-lg h-96 overflow-y-auto space-y-2"
        >
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'auralyn' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`inline-block px-4 py-2 max-w-[70%] rounded-lg text-sm message-bubble ${
                  message.type === 'caller' 
                    ? 'bg-purple-500 text-white caller' 
                    : 'bg-gray-700 text-white auralyn'
                }`}
                style={{
                  animation: 'popIn 0.4s ease-out forwards'
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={resetDemo}
          className="mt-4 text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Replay Conversation
        </button>
      </div>

    </section>
  );
};

export default InteractiveDemo;