import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ReelsSection } from '@/components/ReelsSection';
import { SocialSection } from '@/components/SocialSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ReelsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
