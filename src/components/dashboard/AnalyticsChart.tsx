import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface AnalyticsChartProps {
  type: 'area' | 'bar' | 'pie' | 'line';
  title: string;
  description?: string;
}

const leadTrendData = [
  { name: 'Jan', leads: 65, highIntent: 25, contacted: 45 },
  { name: 'Feb', leads: 78, highIntent: 35, contacted: 52 },
  { name: 'Mar', leads: 90, highIntent: 45, contacted: 68 },
  { name: 'Apr', leads: 95, highIntent: 52, contacted: 75 },
  { name: 'May', leads: 110, highIntent: 68, contacted: 88 },
  { name: 'Jun', leads: 125, highIntent: 75, contacted: 95 }
];

const industryData = [
  { name: 'SaaS', value: 35, color: '#8B5CF6' },
  { name: 'E-commerce', value: 25, color: '#06B6D4' },
  { name: 'Healthcare', value: 20, color: '#10B981' },
  { name: 'Fintech', value: 12, color: '#F59E0B' },
  { name: 'Other', value: 8, color: '#EF4444' }
];

const conversionData = [
  { stage: 'Discovered', count: 1247, rate: 100 },
  { stage: 'Qualified', count: 624, rate: 50 },
  { stage: 'Contacted', count: 312, rate: 25 },
  { stage: 'Responded', count: 156, rate: 12.5 },
  { stage: 'Converted', count: 62, rate: 5 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-3 shadow-glass">
        <p className="text-foreground font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  type,
  title,
  description
}) => {
  const renderChart = () => {
    switch (type) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={leadTrendData}>
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorHighIntent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--glass-border))" />
              <XAxis dataKey="name" stroke="hsl(var(--text-secondary))" />
              <YAxis stroke="hsl(var(--text-secondary))" />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorLeads)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="highIntent"
                stroke="#06B6D4"
                fillOpacity={1}
                fill="url(#colorHighIntent)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--glass-border))" />
              <XAxis dataKey="stage" stroke="hsl(var(--text-secondary))" />
              <YAxis stroke="hsl(var(--text-secondary))" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={industryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {industryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={leadTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--glass-border))" />
              <XAxis dataKey="name" stroke="hsl(var(--text-secondary))" />
              <YAxis stroke="hsl(var(--text-secondary))" />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="contacted"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#10B981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-glass transition-all duration-normal"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-text-secondary text-sm">{description}</p>
        )}
      </div>
      
      <div className="w-full">
        {renderChart()}
      </div>

      {/* Legend for pie chart */}
      {type === 'pie' && (
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          {industryData.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-text-secondary">
                {entry.name} ({entry.value}%)
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};