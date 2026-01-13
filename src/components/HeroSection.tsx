import { motion } from 'framer-motion';
import { Instagram, Heart, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingElement, PawPrint, HeartFloat } from '@/components/ScrollReveal';
import heroCat from '@/assets/hero-cat.jpg';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating decorations */}
      <FloatingElement className="absolute top-20 left-10 text-4xl opacity-70" duration={5}>
        <PawPrint />
      </FloatingElement>
      <FloatingElement className="absolute top-40 right-20 text-3xl opacity-60" duration={7} delay={1}>
        <HeartFloat />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-20 text-2xl opacity-50" duration={6} delay={2}>
        ✨
      </FloatingElement>
      <FloatingElement className="absolute top-60 left-1/4 text-3xl opacity-60" duration={8} delay={0.5}>
        🐾
      </FloatingElement>
      <FloatingElement className="absolute bottom-60 right-1/4 text-2xl opacity-50" duration={5} delay={1.5}>
        💖
      </FloatingElement>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Cat Content Creator</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="font-script text-gradient">Kitty</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Welcome to my cozy corner of the internet where I share the adorable adventures of my fluffy furbabies! 
              <span className="inline-block animate-heart ml-1">💕</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" onClick={scrollToAbout}>
                <Heart className="w-5 h-5" />
                Meet My Cats
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.instagram.com/kittyexplain" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { number: '150K+', label: 'Cat Lovers' },
                { number: '500+', label: 'Posts' },
                { number: '3', label: 'Fluffy Babies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-coral/30 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src={heroCat}
                alt="Adorable orange cat surrounded by hearts"
                className="relative rounded-3xl shadow-card w-full max-w-lg mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-soft"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl">😻</span>
                  <div>
                    <div className="font-bold text-foreground">Cuteness</div>
                    <div className="text-sm text-muted-foreground">Overload!</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
