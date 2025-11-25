import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StrengthsSection from '@/components/home/StrengthsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StrengthsSection />
      <CTASection />
    </div>
  );
}
