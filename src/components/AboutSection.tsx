import { motion } from 'framer-motion';
import { Heart, Camera, Sparkles, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import catAbout from '@/assets/cat-about.jpg';

const features = [
  {
    icon: Camera,
    title: 'Cat Photography',
    description: 'Capturing the cutest moments of my fur babies in aesthetic setups.',
  },
  {
    icon: Heart,
    title: 'Cat Care Tips',
    description: 'Sharing everything I learn about keeping kitties happy and healthy.',
  },
  {
    icon: Sparkles,
    title: 'Cozy Vibes',
    description: 'Creating a warm, wholesome space for cat lovers to connect.',
  },
  {
    icon: Star,
    title: 'Daily Cuteness',
    description: 'Because the world needs more adorable cat content every day!',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <ScrollReveal className="flex-1" direction="left">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-lavender/40 rounded-3xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <img
                src={catAbout}
                alt="Cute cat with bow tie"
                className="relative rounded-3xl shadow-card w-full max-w-md mx-auto"
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 text-5xl"
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🐾
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-soft"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎀</span>
                  <span className="font-semibold text-foreground">Fancy Cat</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <ScrollReveal direction="right">
              <span className="text-primary font-medium">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
                A Cat Dad's{' '}
                <span className="font-script text-gradient">Love Story</span> 💕
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey there, lovely! I'm a devoted cat dad and content creator on a mission 
                to fill your feed with the most adorable, heartwarming cat moments , 
                where cats will explain you the mysteris of life
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's capturing their silly antics, sharing cozy moments, or giving tips 
                on cat care, I'm here to celebrate the pure joy that our feline friends bring 
                into our lives. 🌸
              </p>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={0.4 + index * 0.1}>
                  <motion.div
                    className="p-4 rounded-2xl bg-card border border-border hover-lift cursor-pointer"
                    whileHover={{ borderColor: 'hsl(var(--primary))' }}
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
