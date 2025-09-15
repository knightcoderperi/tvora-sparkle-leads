import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Users, Zap, Shield, Globe, Sparkles, Play, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our AI-powered analytics engine that processes data in real-time.",
      highlight: "Real-time processing",
      color: "apollo"
    },
    {
      icon: Users,
      title: "Team Collaboration", 
      description: "Work seamlessly with real-time collaboration tools designed for modern teams.",
      highlight: "Instant sync",
      color: "heizen"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with military-grade encryption and compliance standards.",
      highlight: "SOC 2 Compliant",
      color: "apollo"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Scale operations worldwide with our robust, distributed infrastructure.",
      highlight: "99.9% Uptime",
      color: "heizen"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get results instantly with our optimized performance and smart caching.",
      highlight: "Sub-100ms response",
      color: "apollo"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Leverage machine learning to uncover patterns and predict future trends.",
      highlight: "Predictive analytics",
      color: "heizen"
    }
  ];

  const steps = [
    { title: "Connect Data", description: "Link your data sources instantly" },
    { title: "AI Analysis", description: "Our AI processes and analyzes patterns" },
    { title: "Get Insights", description: "Receive actionable business insights" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-glass-border glass sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 bg-gradient-apollo rounded-xl flex items-center justify-center shadow-primary">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Tvara</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-text-secondary hover:text-foreground transition-colors duration-200 hover-lift">Platform</a>
              <a href="#how-it-works" className="text-text-secondary hover:text-foreground transition-colors duration-200 hover-lift">Solutions</a>
              <a href="#pricing" className="text-text-secondary hover:text-foreground transition-colors duration-200 hover-lift">Pricing</a>
              <ThemeToggle />
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="hover-lift">Log in</Button>
              </Link>
              <Link to="/auth">
                <Button variant="apollo" size="sm">Get a demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionWrapper animation="slide-up" delay={0.1}>
                <Badge variant="secondary" className="mb-6 glass text-sm font-medium px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Meet your AI outbound engine
                </Badge>
              </MotionWrapper>
              
              <MotionWrapper animation="slide-up" delay={0.2}>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
                  Meet your AI 
                  <span className="block text-gradient-apollo">outbound engine</span>
                </h1>
              </MotionWrapper>
              
              <MotionWrapper animation="slide-up" delay={0.3}>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-lg">
                  Find and research leads, personalize messaging, and launch campaigns 
                  in minutes — not hours. All in Apollo.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="slide-up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="apollo" size="lg" className="font-semibold">
                    Sign up for free
                  </Button>
                  <Button variant="ghost" size="lg" className="group">
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </div>
              </MotionWrapper>

              <MotionWrapper animation="fade" delay={0.5}>
                <div className="flex items-center gap-6 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-apollo" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-apollo" />
                    Free 14-day trial
                  </div>
                </div>
              </MotionWrapper>
            </div>
            
            <MotionWrapper animation="slide-left" delay={0.2}>
              <div className="relative">
                {/* Main Cards - Apollo.io style */}
                <div className="relative space-y-6">
                  {/* Enrollment Criteria Card */}
                  <AnimatedCard 
                    variant="apollo" 
                    delay={0.6}
                    className="p-6 max-w-md ml-auto"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-apollo rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">ENROLLMENT CRITERIA</h3>
                        <p className="text-sm text-text-secondary mb-3">Marketing leaders • Recently funded</p>
                        <p className="text-sm text-text-secondary">North America</p>
                      </div>
                    </div>
                  </AnimatedCard>

                  {/* Research Card */}
                  <AnimatedCard 
                    variant="heizen" 
                    delay={0.8}
                    className="p-6 max-w-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-heizen rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">RESEARCH WITH AI</h3>
                        <p className="text-sm text-text-secondary mb-3">Confirm decision maker</p>
                        <p className="text-sm text-text-secondary">Research & qualify company</p>
                      </div>
                    </div>
                  </AnimatedCard>

                  {/* Enrichment Card */}
                  <AnimatedCard 
                    variant="glass" 
                    delay={1.0}
                    className="p-6 max-w-md ml-auto"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">ENRICH DATA</h3>
                        <p className="text-sm text-text-secondary mb-3">Enrich • Email</p>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">Funding rounds</Badge>
                          <Badge variant="secondary" className="text-xs">Company pain points</Badge>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>

                  {/* Contact Sequence Card */}
                  <AnimatedCard 
                    variant="premium" 
                    delay={1.2}
                    className="p-6 max-w-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">ADD CONTACTS TO SEQUENCE</h3>
                        <p className="text-sm text-text-secondary">Generate AI emails with signals</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="absolute -top-4 -right-4 bg-apollo text-white px-4 py-2 rounded-full text-sm font-semibold shadow-primary"
                >
                  TRUE
                </motion.div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <MotionWrapper animation="slide-up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to supercharge your outbound sales and marketing efforts.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                variant={feature.color as any}
                delay={index * 0.1}
                className="group"
              >
                <feature.icon className="w-12 h-12 text-apollo mb-6" />
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-3 opacity-75">
                    {feature.highlight}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-apollo transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <MotionWrapper animation="slide-up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Get started in three simple steps and see results immediately.
            </p>
          </MotionWrapper>

          <div className="grid lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <MotionWrapper key={index} animation="slide-up" delay={index * 0.2}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-apollo rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-12 h-0.5 bg-gradient-to-r from-apollo to-transparent transform translate-x-4"></div>
                  )}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionWrapper animation="scale">
            <div className="bg-gradient-apollo rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-large">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                  Ready to 10x Your Pipeline?
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Join 1M+ sales professionals using Apollo to accelerate their pipeline 
                  and close more deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white text-apollo border-white hover:bg-white/90 font-semibold"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      delay: i * 0.5,
                      repeat: Infinity 
                    }}
                  />
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border glass">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-apollo rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">Tvara</span>
              </div>
              <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
                The leading AI-powered outbound engine trusted by 1M+ sales professionals 
                to accelerate pipeline growth and close more deals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-6">Platform</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-3 text-text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors hover-lift">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              &copy; 2024 Tvara. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
