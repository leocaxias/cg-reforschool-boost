
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection'; 
import TestimonialsSection from '@/components/TestimonialsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set meta for SEO
    document.title = "Reforço Escolar em Campo Grande MS | Aulas em Domicílio";
    
    // Try to update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Impulsione o desempenho escolar do seu filho com aulas de reforço em domicílio. 97% dos pais notam diferença em 3 semanas. Agende avaliação gratuita!");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
