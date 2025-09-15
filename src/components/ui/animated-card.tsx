import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "premium" | "apollo" | "heizen";
  hover?: boolean;
  delay?: number;
}

const cardVariants = {
  default: "bg-card border border-border shadow-soft rounded-2xl",
  glass: "glass shadow-medium rounded-2xl",
  premium: "bg-card border border-border shadow-medium rounded-2xl bg-gradient-soft",
  apollo: "bg-card border border-apollo/20 shadow-primary rounded-2xl",
  heizen: "bg-card border border-heizen-teal/20 shadow-glow rounded-2xl",
};

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, variant = "default", hover = true, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay,
          ease: [0.4, 0, 0.2, 1]
        }}
        whileHover={hover ? { 
          y: -4, 
          boxShadow: variant === "apollo" ? "var(--shadow-large)" : 
                     variant === "heizen" ? "var(--shadow-glow)" : "var(--shadow-medium)",
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        } : undefined}
        className={cn(
          "p-6 transition-all duration-300 ease-out",
          cardVariants[variant],
          hover && "cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };