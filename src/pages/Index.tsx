
import MatrixRain from '@/components/MatrixRain';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ChallengesSection from '@/components/ChallengesSection';
import ScheduleSection from '@/components/ScheduleSection';
import PrizesSection from '@/components/PrizesSection';
import RegistrationSection from '@/components/RegistrationSection';
import FAQsSection from '@/components/FAQsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-black text-matrix-green relative overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ChallengesSection />
        <ScheduleSection />
        <PrizesSection />
        <RegistrationSection />
        <FAQsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
