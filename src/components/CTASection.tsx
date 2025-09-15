import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    'Setup in under 5 minutes',
    'No technical expertise required',
    '14-day free trial',
    'Cancel anytime, no commitments'
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA content */}
        <div className="relative">
          {/* Glass card container */}
          <div className="relative p-12 md:p-16 rounded-2xl border border-glass-border bg-glass backdrop-blur-md shadow-premium overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-hero opacity-5" />
            
            {/* Content */}
            <div className="relative z-10 space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-foreground">Ready to </span>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span>
                  <br />
                  <span className="text-foreground">Your Lead Generation?</span>
                </h2>
                
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  Join thousands of businesses already using Tvara AI to discover high-quality leads 
                  and accelerate their growth with intelligent automation.
                </p>
              </div>
              
              {/* Benefits list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-premium transition-all duration-normal group px-10 py-4 text-lg font-semibold animate-glow-pulse"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-normal" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-glass-border bg-glass/50 backdrop-blur-md hover:bg-glass hover:shadow-glass px-10 py-4 text-lg"
                >
                  Schedule Demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-8 border-t border-glass-border">
                <p className="text-sm text-text-tertiary mb-4">Trusted by industry leaders</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  {['Enterprise', 'Startup', 'Agency', 'SaaS'].map((type, index) => (
                    <div key={index} className="text-sm font-medium text-text-secondary">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;