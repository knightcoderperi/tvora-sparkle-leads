import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Target, Users, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Revolutionary Lead Discovery Platform</span>
          </div>
          
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Discover Leads
              </span>
              <br />
              <span className="text-foreground">Before They Know</span>
              <br />
              <span className="text-text-secondary">They Need You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Tvara AI revolutionizes lead generation with cutting-edge artificial intelligence, 
              identifying high-intent prospects and automating engagement at the perfect moment.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-primary hover:shadow-premium transition-all duration-normal group px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-normal" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-glass-border bg-glass backdrop-blur-md hover:bg-glass hover:shadow-glass px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { icon: Target, value: '10x', label: 'Lead Quality Increase' },
              { icon: Users, value: '500K+', label: 'Leads Discovered Daily' },
              { icon: Zap, value: '95%', label: 'Accuracy Rate' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:shadow-glow transition-all duration-normal">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Tvara AI Lead Discovery Platform" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </section>
  );
};

export default HeroSection;