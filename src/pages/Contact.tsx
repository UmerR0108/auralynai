import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    'General Inquiry',
    'Product Demo',
    'Technical Support',
    'Partnership',
    'Pricing Information',
    'Integration Help'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      inquiryType: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@auralynai.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9 AM - 6 PM PST'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      subtitle: 'United States'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 hours',
      subtitle: 'Average email response'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <ParticleField className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GET IN TOUCH
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's build the future of{" "}
              <span className="text-gradient">AI reception</span> together
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ready to transform your business with AI? Have questions about our platform? 
              We're here to help you every step of the way.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/30">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`mt-1 ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && (
                        <motion.p 
                          className="text-destructive text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <motion.p 
                          className="text-destructive text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`mt-1 ${errors.subject ? 'border-destructive' : ''}`}
                    />
                    {errors.subject && (
                      <motion.p 
                        className="text-destructive text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type (Optional)</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger className="mt-1 bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card/95 backdrop-blur-md border-border/50 z-50">
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type} className="hover:bg-primary/10">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`mt-1 resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <motion.p 
                        className="text-destructive text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full py-6 text-lg" 
                      variant="hero"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/30">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about Auralyn AI? We're here to help. Reach out through any of the channels below 
                  and our team will get back to you promptly.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Additional CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card className="p-6 bg-gradient-hero border-0 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                  <p className="mb-4 opacity-90">
                    Book a personalized demo and see how Auralyn AI can transform your business operations.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="w-full bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                      Schedule Demo
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;