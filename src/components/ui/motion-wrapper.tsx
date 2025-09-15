import * as React from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "scale" | "float" | "none";
  delay?: number;
  duration?: number;
  stagger?: boolean;
}

const animationPresets = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  "slide-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  "slide-left": {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  },
  float: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    },
    exit: { opacity: 0, y: 20 }
  },
  none: {
    initial: {},
    animate: {},
    exit: {}
  }
};

const MotionWrapper = React.forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ 
    className, 
    children, 
    animation = "fade", 
    delay = 0, 
    duration = 0.4,
    stagger = false,
    ...props 
  }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    
    if (shouldReduceMotion) {
      return <div ref={ref} className={className}>{children}</div>;
    }

    const preset = animationPresets[animation];
    
    return (
      <motion.div
        ref={ref}
        initial={preset.initial}
        animate={preset.animate}
        exit={preset.exit}
        transition={{ 
          duration,
          delay: stagger ? delay : delay,
          ease: [0.4, 0, 0.2, 1]
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };