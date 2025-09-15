import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bell, Mail, MessageSquare, Smartphone, Settings } from 'lucide-react';

const Notifications: React.FC = () => {
  const [settings, setSettings] = useState({
    email: true,
    slack: false,
    push: true,
    sms: false,
    highIntent: true,
    dailySummary: true,
    weeklyReport: false
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const notificationChannels = [
    { 
      key: 'email', 
      title: 'Email Notifications', 
      description: 'Receive alerts via email',
      icon: Mail 
    },
    { 
      key: 'slack', 
      title: 'Slack Integration', 
      description: 'Get notified in your Slack workspace',
      icon: MessageSquare 
    },
    { 
      key: 'push', 
      title: 'Browser Push', 
      description: 'Real-time browser notifications',
      icon: Bell 
    },
    { 
      key: 'sms', 
      title: 'SMS Alerts', 
      description: 'Text message notifications for critical leads',
      icon: Smartphone 
    }
  ];

  const alertTypes = [
    { 
      key: 'highIntent', 
      title: 'High-Intent Leads', 
      description: 'Notify when leads score above 85'
    },
    { 
      key: 'dailySummary', 
      title: 'Daily Summary', 
      description: 'Daily recap of new leads and activity'
    },
    { 
      key: 'weeklyReport', 
      title: 'Weekly Report', 
      description: 'Comprehensive weekly performance report'
    }
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
          Notifications
        </h1>
        <p className="text-text-secondary text-lg">
          Configure how and when you want to be notified about new leads and insights.
        </p>
      </motion.div>

      {/* Notification Channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Notification Channels</h2>
        </div>
        
        <div className="space-y-4">
          {notificationChannels.map((channel) => (
            <div key={channel.key} className="flex items-center justify-between p-4 bg-background/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <channel.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{channel.title}</h3>
                  <p className="text-text-secondary text-sm">{channel.description}</p>
                </div>
              </div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[channel.key as keyof typeof settings] as boolean}
                  onChange={() => toggleSetting(channel.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Alert Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Alert Types</h2>
        </div>
        
        <div className="space-y-4">
          {alertTypes.map((alert) => (
            <div key={alert.key} className="flex items-center justify-between p-4 bg-background/30 rounded-lg">
              <div>
                <h3 className="font-semibold text-foreground">{alert.title}</h3>
                <p className="text-text-secondary text-sm">{alert.description}</p>
              </div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[alert.key as keyof typeof settings] as boolean}
                  onChange={() => toggleSetting(alert.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Test Notification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-8 text-center"
      >
        <h3 className="text-xl font-bold text-foreground mb-4">Test Your Setup</h3>
        <p className="text-text-secondary mb-6">
          Send a test notification to verify your configuration is working properly.
        </p>
        <Button className="bg-gradient-primary hover:shadow-premium transition-all duration-normal">
          Send Test Notification
        </Button>
      </motion.div>
    </div>
  );
};

export default Notifications;