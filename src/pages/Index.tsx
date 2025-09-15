import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import OnboardingWizard from '@/components/OnboardingWizard';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden theme-transition">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex justify-between items-center p-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Tvara AI
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/auth">
            <Button variant="outline" className="bg-glass border-glass-border">
              Sign In
            </Button>
          </Link>
          <Link to="/auth">
            <Button className="bg-gradient-primary hover:shadow-premium transition-all duration-normal">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.nav>
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <OnboardingWizard />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
