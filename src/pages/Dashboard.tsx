import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Leads', value: '1,247', change: '+12%', icon: Target, trend: 'up' },
    { title: 'High Intent', value: '324', change: '+8%', icon: TrendingUp, trend: 'up' },
    { title: 'Contacted', value: '892', change: '+15%', icon: Users, trend: 'up' },
    { title: 'Conversion Rate', value: '24%', change: '+3%', icon: Zap, trend: 'up' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-text-secondary text-lg">
          Welcome back! Here's your lead discovery overview.
        </p>
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