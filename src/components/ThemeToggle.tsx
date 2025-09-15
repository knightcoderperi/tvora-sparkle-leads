import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="bg-glass border-glass-border hover:bg-glass/80 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 180, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          {theme === 'light' ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-blue-400" />
          )}
          <span className="hidden sm:inline">
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 rounded"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Button>
  );
}