import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search, User } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export function TopNav() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-16 border-b border-glass-border bg-glass/30 backdrop-blur-md flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
          <input
            type="text"
            placeholder="Search leads, companies..."
            className="w-80 pl-10 pr-4 py-2 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <Button variant="outline" size="sm" className="bg-glass border-glass-border relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>

        {/* User Menu */}
        <Button variant="outline" size="sm" className="bg-glass border-glass-border">
          <User className="w-4 h-4 mr-2" />
          Account
        </Button>
      </div>
    </motion.header>
  );
}