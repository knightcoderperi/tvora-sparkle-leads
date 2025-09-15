import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Filter, 
  X, 
  Calendar, 
  Building, 
  Target, 
  TrendingUp,
  MapPin,
  Users
} from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export interface FilterState {
  intentScore: string[];
  industries: string[];
  companySizes: string[];
  locations: string[];
  dateRange: string;
  technologies: string[];
}

const filterOptions = {
  intentScore: ['High (80-100)', 'Medium (50-79)', 'Low (0-49)'],
  industries: ['SaaS', 'E-commerce', 'Healthcare', 'Fintech', 'Education', 'Manufacturing'],
  companySizes: ['1-10', '11-50', '51-200', '201-500', '500+'],
  locations: ['North America', 'Europe', 'Asia Pacific', 'South America', 'Africa'],
  dateRange: ['Today', 'This Week', 'This Month', 'Last 3 Months', 'All Time'],
  technologies: ['Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'Zoom', 'AWS']
};

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onToggle,
  filters,
  onFiltersChange
}) => {
  const updateFilter = (category: keyof FilterState, value: string) => {
    if (category === 'dateRange') {
      onFiltersChange({ ...filters, [category]: value });
    } else {
      const currentValues = filters[category] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      onFiltersChange({ ...filters, [category]: newValues });
    }
  };

  const clearAllFilters = () => {
    onFiltersChange({
      intentScore: [],
      industries: [],
      companySizes: [],
      locations: [],
      dateRange: 'All Time',
      technologies: []
    });
  };

  const filterSections = [
    { key: 'intentScore', title: 'Intent Score', icon: Target, options: filterOptions.intentScore },
    { key: 'industries', title: 'Industries', icon: Building, options: filterOptions.industries },
    { key: 'companySizes', title: 'Company Size', icon: Users, options: filterOptions.companySizes },
    { key: 'locations', title: 'Location', icon: MapPin, options: filterOptions.locations },
    { key: 'technologies', title: 'Technologies', icon: TrendingUp, options: filterOptions.technologies }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Filter Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : -320,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-80 bg-glass/95 backdrop-blur-md border-r border-glass-border z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-glass-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onToggle}
              className="bg-glass border-glass-border"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Clear All */}
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="mt-4 w-full bg-glass border-glass-border text-xs"
          >
            Clear All Filters
          </Button>
        </div>

        {/* Date Range Filter */}
        <div className="p-6 border-b border-glass-border">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="font-medium text-foreground">Date Range</h3>
          </div>
          <div className="space-y-2">
            {filterOptions.dateRange.map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="dateRange"
                  checked={filters.dateRange === option}
                  onChange={() => updateFilter('dateRange', option)}
                  className="w-4 h-4 text-primary focus:ring-primary/20"
                />
                <span className="text-sm text-foreground">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Filters */}
        {filterSections.map((section) => (
          <div key={section.key} className="p-6 border-b border-glass-border">
            <div className="flex items-center gap-2 mb-4">
              <section.icon className="w-4 h-4 text-primary" />
              <h3 className="font-medium text-foreground">{section.title}</h3>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {section.options.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={(filters[section.key as keyof FilterState] as string[])?.includes(option)}
                    onChange={() => updateFilter(section.key as keyof FilterState, option)}
                    className="w-4 h-4 text-primary focus:ring-primary/20 rounded"
                  />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
