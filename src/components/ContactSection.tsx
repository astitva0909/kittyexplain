import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, FloatingElement } from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! 💌",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Floating decorations */}
      <FloatingElement className="absolute top-20 right-20 text-4xl opacity-50" duration={5}>
        💌
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-10 text-3xl opacity-40" duration={6} delay={1}>
        🐾
      </FloatingElement>
      <FloatingElement className="absolute top-40 left-1/4 text-2xl opacity-30" duration={7} delay={2}>
        ✨
      </FloatingElement>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-12">
            <span className="text-primary font-medium">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
              Let's <span className="font-script text-gradient">Chat</span>! 💬
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a question, collaboration idea, or just want to say hi? I'd love to hear from you! 
              Fill out the form below and let's connect. 🌸
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <ScrollReveal className="md:col-span-2 space-y-6" direction="left">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border">
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email Me</h3>
                      <p className="text-muted-foreground text-sm">hello@whiskersandlove.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Location</h3>
                      <p className="text-muted-foreground text-sm">Cozy Corner, Cat Town 🏠</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Collabs</h3>
                      <p className="text-muted-foreground text-sm">Open to brand partnerships!</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Fun card */}
              <motion.div
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border text-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-4xl block mb-3">😺</span>
                <p className="text-foreground font-medium">
                  "Every message brings a smile to my whiskers!"
                </p>
                <p className="text-sm text-muted-foreground mt-2">- The Cats</p>
              </motion.div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal className="md:col-span-3" direction="right">
              <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-card border border-border">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name 💕
                    </label>
                    <motion.input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="What should I call you?"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address 📧
                    </label>
                    <motion.input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message 💬
                    </label>
                    <motion.textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell me about yourself, your cats, or your collaboration ideas..."
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <Heart className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
