import { motion } from 'framer-motion';
import { Heart, Instagram, Youtube, Twitter, Music2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">🐱</span>
            <span className="font-script text-2xl text-gradient">Whiskers & Love</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, url: 'https://instagram.com' },
              { icon: Youtube, url: 'https://youtube.com' },
              { icon: Music2, url: 'https://tiktok.com' },
              { icon: Twitter, url: 'https://twitter.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            <span>© {currentYear} Whiskers & Love</span>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-8 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>Thank you for visiting! May your day be filled with purrs and cuddles 🐾💕</p>
        </motion.div>
      </div>
    </footer>
  );
};
