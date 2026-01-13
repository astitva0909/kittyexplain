import { motion } from 'framer-motion';
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import catReel1 from '@/assets/cat-reel-1.jpeg';
import catReel2 from '@/assets/cat-reel-2.jpeg';
import catReel3 from '@/assets/cat-reel-3.jpeg';
import catReel4 from '@/assets/cat-reel-4.jpeg';

const reels = [
  {
    image: catReel1,
    title: 'How to loose belly Fat 🐱',
    likes: '127K',
    comments: '59',
  },
  {
    image: catReel2,
    title: 'Things Boys Love',
    likes: '601K',
    comments: '164',
  },
  {
    image: catReel3,
    title: 'Aftercare Explained by Cats',
    likes: '1.2M',
    comments: '291',
  },
  {
    image: catReel4,
    title: 'Lamborghini Urus Explained by Cats',
    likes: '16.8K',
    comments: '7',
  },
];

export const ReelsSection = () => {
  return (
    <section id="reels" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🎬</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-20">✨</div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium">Featured Content</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Latest <span className="font-script text-gradient">Reels</span> 🎥
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Catch up on the cutest moments from my fluffy babies! Each reel is a little burst of joy 
            guaranteed to make you smile. 💖
          </p>
        </ScrollReveal>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>

                  {/* Reel indicator */}
                  <div className="absolute top-3 right-3 bg-foreground/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-primary-foreground text-xs font-medium">Reel</span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-sm mb-2">{reel.title}</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" fill="currentColor" />
                      {reel.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {reel.comments}
                    </span>
                    <Share2 className="w-3 h-3 ml-auto" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12" delay={0.5}>
          <motion.a
            href="https://www.instagram.com/kittyexplain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            whileHover={{ x: 5 }}
          >
            See more on Instagram
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};
