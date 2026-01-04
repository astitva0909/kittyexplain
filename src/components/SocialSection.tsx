import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const socials = [
  {
    name: 'Instagram',
    icon: Instagram,
    followers: '150K',
    color: 'from-pink-500 to-purple-500',
    url: 'https://instagram.com',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    followers: '45K',
    color: 'from-red-500 to-red-600',
    url: 'https://youtube.com',
  },
  {
    name: 'TikTok',
    icon: Music2,
    followers: '89K',
    color: 'from-gray-800 to-gray-900',
    url: 'https://tiktok.com',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    followers: '23K',
    color: 'from-blue-400 to-blue-500',
    url: 'https://twitter.com',
  },
];

export const SocialSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blush rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-lavender rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium">Connect With Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Let's Be <span className="font-script text-gradient">Friends</span> 💫
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join our community of cat lovers across all platforms! I share exclusive content, 
            behind-the-scenes moments, and lots of cat cuddles everywhere I go.
          </p>
        </ScrollReveal>

        {/* Social Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <ScrollReveal key={social.name} delay={index * 0.1}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ y: -8 }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary transition-all duration-300 text-center group">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1">{social.name}</h3>
                  <p className="text-2xl font-bold text-gradient">{social.followers}</p>
                  <p className="text-sm text-muted-foreground">followers</p>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action */}
        <ScrollReveal className="text-center mt-12" delay={0.5}>
          <p className="text-muted-foreground mb-4">
            Want to stay updated with all the cuteness? 🐱
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Follow the Journey
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
