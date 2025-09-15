import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {/* Large floating orb */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        
        {/* Medium floating orb */}
        <div 
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary to-primary rounded-full opacity-15 blur-2xl animate-float-delayed"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Small particles */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-particle-float" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-particle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 right-1/2 w-16 h-16 bg-success/20 rounded-full blur-md animate-particle-float" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;