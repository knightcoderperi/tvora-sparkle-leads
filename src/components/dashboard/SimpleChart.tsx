import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';

interface SimpleChartProps {
  type: 'area' | 'bar' | 'pie' | 'line';
  title: string;
  description?: string;
}

const mockData = {
  area: [65, 78, 90, 95, 110, 125],
  bar: [1247, 624, 312, 156, 62],
  pie: [35, 25, 20, 12, 8],
  line: [45, 52, 68, 75, 88, 95]
};

export const SimpleChart: React.FC<SimpleChartProps> = ({
  type,
  title,
  description
}) => {
  const getIcon = () => {
    switch (type) {
      case 'area': return TrendingUp;
      case 'bar': return BarChart3;
      case 'pie': return PieChart;
      case 'line': return LineChart;
      default: return BarChart3;
    }
  };

  const Icon = getIcon();
  const data = mockData[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-glass transition-all duration-normal"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-primary rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {description && (
            <p className="text-text-secondary text-sm">{description}</p>
          )}
        </div>
      </div>
      
      {/* Simple Chart Visualization */}
      <div className="h-48 bg-background/30 rounded-lg flex items-end justify-center gap-2 p-4">
        {type === 'pie' ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-32 h-32 rounded-full bg-gradient-primary opacity-80 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background"></div>
            </div>
          </div>
        ) : (
          data.map((value, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${(value / Math.max(...data)) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-primary rounded-t min-h-2 flex-1 max-w-8 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))
        )}
      </div>

      {/* Sample Metrics */}
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-foreground">{data[0]}</div>
          <div className="text-xs text-text-secondary">Current</div>
        </div>
        <div>
          <div className="text-lg font-bold text-success">+12%</div>
          <div className="text-xs text-text-secondary">Growth</div>
        </div>
        <div>
          <div className="text-lg font-bold text-foreground">{Math.max(...data)}</div>
          <div className="text-xs text-text-secondary">Peak</div>
        </div>
      </div>
    </motion.div>
  );
};