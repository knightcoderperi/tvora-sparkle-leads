import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import OnboardingWizard from '@/components/OnboardingWizard';
import LeadDashboard from '@/components/LeadDashboard';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <OnboardingWizard />
        <LeadDashboard />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
