import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StrengthsSection from '@/components/home/StrengthsSection';
import WorksHighlightSection from '@/components/home/WorksHighlightSection';
import FlowSection from '@/components/home/FlowSection';
import CompanySummarySection from '@/components/home/CompanySummarySection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StrengthsSection />
      <WorksHighlightSection />
      <FlowSection />
      <CompanySummarySection />
      <CTASection />
    </div>
  );
}
