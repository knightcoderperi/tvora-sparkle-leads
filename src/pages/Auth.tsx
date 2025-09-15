import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Lock, User, Building, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    company: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        toast({
          title: "Welcome back!",
          description: "Successfully signed in to your account.",
        });
        
        navigate('/dashboard');
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              full_name: formData.fullName,
              company: formData.company,
            }
          }
        });

        if (error) throw error;

        toast({
          title: "Account created!",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Authentication Error",
        description: error.message || "An error occurred during authentication.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary to-primary rounded-full opacity-15 blur-2xl animate-float-delayed" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Tvara AI
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {isLogin ? 'Welcome back' : 'Get started'}
            </h1>
            <p className="text-text-secondary">
              {isLogin 
                ? 'Sign in to your account to continue lead discovery'
                : 'Create your account and start finding high-intent leads'
              }
            </p>
          </motion.div>

          {/* Auth Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8"
          >
            <form onSubmit={handleAuth} className="space-y-6">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
                        required={!isLogin}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-primary hover:shadow-premium transition-all duration-normal group"
              >
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary-light transition-colors duration-normal"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;