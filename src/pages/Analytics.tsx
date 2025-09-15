import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="text-text-secondary text-lg">
          Deep insights into your lead discovery performance and trends.
        </p>
      </motion.div>

      {/* Analytics Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { title: 'Lead Conversion Funnel', icon: TrendingUp, description: 'Track your lead progression through each stage' },
          { title: 'Industry Distribution', icon: PieChart, description: 'See which industries generate the most leads' },
          { title: 'Intent Score Trends', icon: LineChart, description: 'Monitor how lead quality changes over time' },
          { title: 'Performance Metrics', icon: BarChart3, description: 'Compare your metrics against industry benchmarks' }
        ].map((chart, index) => (
          <motion.div
            key={chart.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8 hover:shadow-glass transition-all duration-normal"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <chart.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{chart.title}</h3>
                <p className="text-text-secondary text-sm">{chart.description}</p>
              </div>
            </div>
            
            {/* Placeholder Chart Area */}
            <div className="h-48 bg-background/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <chart.icon className="w-12 h-12 text-text-tertiary mx-auto mb-2" />
                <p className="text-text-secondary">Chart coming soon</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;