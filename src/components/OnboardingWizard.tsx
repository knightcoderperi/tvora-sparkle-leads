import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Building, Users, Target } from 'lucide-react';

const OnboardingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    targetTitles: '',
    companySize: '',
    intentSignals: '',
    techStack: ''
  });

  const steps = [
    {
      title: 'Company Details',
      icon: Building,
      fields: [
        { key: 'companyName', label: 'Company Name', placeholder: 'Enter your company name' },
        { key: 'industry', label: 'Industry', placeholder: 'e.g., SaaS, E-commerce, Healthcare' }
      ]
    },
    {
      title: 'Target Audience',
      icon: Users,
      fields: [
        { key: 'targetTitles', label: 'Target Job Titles', placeholder: 'e.g., CTO, VP Sales, Marketing Director' },
        { key: 'companySize', label: 'Target Company Size', placeholder: 'e.g., 100-500 employees' }
      ]
    },
    {
      title: 'Lead Preferences',
      icon: Target,
      fields: [
        { key: 'intentSignals', label: 'Intent Signals', placeholder: 'e.g., Website visits, Content downloads' },
        { key: 'techStack', label: 'Technology Stack', placeholder: 'e.g., Salesforce, HubSpot, Slack' }
      ]
    }
  ];

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      setTimeout(() => setIsCompleted(false), 5000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8">
      {isCompleted && <Confetti />}
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Set Up Your Lead Discovery
          </h2>
          <p className="text-text-secondary text-lg">
            Configure your ideal customer profile to get the most relevant leads
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-normal ${
                    index <= currentStep 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-glass border border-glass-border text-text-secondary'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    React.createElement(step.icon, { className: "w-5 h-5" })
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all duration-normal ${
                      index < currentStep ? 'bg-gradient-primary' : 'bg-glass-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                {React.createElement(steps[currentStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {steps[currentStep].title}
              </h3>
            </div>

            <div className="space-y-6">
              {steps[currentStep].fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-foreground font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="bg-glass border-glass-border"
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                className="bg-gradient-primary hover:shadow-premium transition-all duration-normal group"
              >
                {currentStep === steps.length - 1 ? 'Complete Setup' : 'Continue'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 text-center bg-success/10 border border-success/20 rounded-xl p-6"
          >
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-bold text-success mb-2">Setup Complete!</h3>
            <p className="text-success-foreground">
              Your lead discovery is now configured and ready to find your best customers.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OnboardingWizard;