import React from 'react';
import { Brain, Search, MessageSquare, BarChart3, Shield, Rocket } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms analyze billions of data points to identify prospects with the highest conversion potential.',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Search,
      title: 'Real-Time Discovery',
      description: 'Monitor the web 24/7 for buying signals, intent data, and behavioral triggers that indicate ready-to-buy prospects.',
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: MessageSquare,
      title: 'Automated Engagement',
      description: 'Personalized outreach campaigns that adapt to each prospect\'s preferences, timing, and communication style.',
      color: 'from-success to-success-light'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast lead quality, conversion probability, and optimal engagement timing with 95% accuracy.',
      color: 'from-warning to-primary'
    },
    {
      icon: Shield,
      title: 'Compliance First',
      description: 'Built-in GDPR, CCPA, and industry compliance ensuring your lead generation is always ethical and legal.',
      color: 'from-destructive to-primary'
    },
    {
      icon: Rocket,
      title: 'Scale Instantly',
      description: 'From startup to enterprise - our platform scales seamlessly to handle millions of leads and interactions.',
      color: 'from-primary to-secondary'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass backdrop-blur-md">
            <span className="text-sm font-medium text-primary">Platform Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            <span className="text-foreground">Lead Discovery</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the next generation of lead generation with AI that learns, adapts, and delivers results beyond human capability.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-scale-in hover:shadow-hover transition-all duration-normal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glass card */}
              <div className="relative h-full p-8 rounded-xl border border-glass-border bg-glass backdrop-blur-md hover:bg-glass/80 transition-all duration-normal">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:shadow-glow transition-all duration-normal`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-normal">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover gradient border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-normal`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;