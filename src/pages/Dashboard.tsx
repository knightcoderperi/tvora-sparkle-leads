import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Zap, Filter } from 'lucide-react';
import { SimpleChart } from '@/components/dashboard/SimpleChart';
import { FilterSidebar, FilterState } from '@/components/dashboard/FilterSidebar';

const Dashboard: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    intentScore: [],
    industries: [],
    companySizes: [],
    locations: [],
    dateRange: 'This Month',
    technologies: []
  });

  const stats = [
    { title: 'Total Leads', value: '1,247', change: '+12%', icon: Target, trend: 'up' },
    { title: 'High Intent', value: '324', change: '+8%', icon: TrendingUp, trend: 'up' },
    { title: 'Contacted', value: '892', change: '+15%', icon: Users, trend: 'up' },
    { title: 'Conversion Rate', value: '24%', change: '+3%', icon: Zap, trend: 'up' }
  ];

  return (
    <div className="space-y-8 relative">
      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={showFilters}
        onToggle={() => setShowFilters(!showFilters)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-text-secondary text-lg">
            Welcome back! Here's your lead discovery overview.
          </p>
        </div>

        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="bg-glass border-glass-border"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {Object.values(filters).some(f => Array.isArray(f) ? f.length > 0 : f !== 'All Time') && (
            <span className="ml-2 w-2 h-2 bg-primary rounded-full"></span>
          )}
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-glass transition-all duration-normal"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-success' : 'text-destructive'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-text-secondary text-sm">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SimpleChart
          type="area"
          title="Lead Discovery Trends"
          description="Monthly lead generation and high-intent prospect tracking"
        />
        <SimpleChart
          type="pie"
          title="Industry Distribution"
          description="Breakdown of leads by industry vertical"
        />
        <SimpleChart
          type="bar"
          title="Conversion Funnel"
          description="Lead progression through each stage of your sales process"
        />
        <SimpleChart
          type="line"
          title="Contact Success Rate"
          description="Outreach performance and response rates over time"
        />
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/10 transition-all duration-normal">
            <h3 className="font-semibold text-foreground mb-2">Discover New Leads</h3>
            <p className="text-text-secondary text-sm">Find high-intent prospects in your target market</p>
          </div>
          <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-lg cursor-pointer hover:bg-secondary/10 transition-all duration-normal">
            <h3 className="font-semibold text-foreground mb-2">Export Report</h3>
            <p className="text-text-secondary text-sm">Download your latest lead discovery insights</p>
          </div>
          <div className="p-6 bg-success/5 border border-success/20 rounded-lg cursor-pointer hover:bg-success/10 transition-all duration-normal">
            <h3 className="font-semibold text-foreground mb-2">Setup Notifications</h3>
            <p className="text-text-secondary text-sm">Configure alerts for new high-intent leads</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;