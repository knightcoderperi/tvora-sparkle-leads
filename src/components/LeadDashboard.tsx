import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Star, 
  Building, 
  Mail, 
  Phone, 
  ExternalLink, 
  Filter,
  Search,
  TrendingUp
} from 'lucide-react';

interface Lead {
  id: number;
  company: string;
  contact: string;
  title: string;
  email: string;
  intent: 'High' | 'Medium' | 'Low';
  score: number;
  triggers: string[];
  lastActivity: string;
  website: string;
}

const mockLeads: Lead[] = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    contact: 'Sarah Chen',
    title: 'VP of Marketing',
    email: 'sarah.chen@techcorp.com',
    intent: 'High',
    score: 95,
    triggers: ['Website Visit', 'Pricing Page', 'Demo Request'],
    lastActivity: '2 hours ago',
    website: 'techcorp.com'
  },
  {
    id: 2,
    company: 'Innovation Labs',
    contact: 'Michael Rodriguez',
    title: 'CTO',
    email: 'michael@innovlabs.com',
    intent: 'High',
    score: 88,
    triggers: ['Content Download', 'LinkedIn View'],
    lastActivity: '5 hours ago',
    website: 'innovationlabs.com'
  },
  {
    id: 3,
    company: 'Global Enterprises',
    contact: 'Jennifer Park',
    title: 'Director of Sales',
    email: 'j.park@globalent.com',
    intent: 'Medium',
    score: 72,
    triggers: ['Email Open', 'Social Media'],
    lastActivity: '1 day ago',
    website: 'globalenterprises.com'
  },
  {
    id: 4,
    company: 'StartupX',
    contact: 'David Kim',
    title: 'Founder',
    email: 'david@startupx.io',
    intent: 'Low',
    score: 45,
    triggers: ['Blog Read'],
    lastActivity: '3 days ago',
    website: 'startupx.io'
  }
];

const LeadDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>(mockLeads);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleExport = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleFilter = (filter: 'All' | 'High' | 'Medium' | 'Low') => {
    setSelectedFilter(filter);
    const filtered = filter === 'All' 
      ? leads 
      : leads.filter(lead => lead.intent === filter);
    setFilteredLeads(filtered);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = leads.filter(lead => 
      lead.company.toLowerCase().includes(term.toLowerCase()) ||
      lead.contact.toLowerCase().includes(term.toLowerCase()) ||
      lead.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredLeads(selectedFilter === 'All' ? filtered : filtered.filter(lead => lead.intent === selectedFilter));
  };

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case 'High': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-text-secondary';
      default: return 'text-text-secondary';
    }
  };

  const getIntentBg = (intent: string) => {
    switch (intent) {
      case 'High': return 'bg-success/10 border-success/20';
      case 'Medium': return 'bg-warning/10 border-warning/20';
      case 'Low': return 'bg-muted/10 border-muted/20';
      default: return 'bg-muted/10 border-muted/20';
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8">
      {showConfetti && <Confetti />}
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Lead Dashboard
              </h2>
              <p className="text-text-secondary text-lg">
                Discover and engage with your highest-intent prospects
              </p>
            </div>
            
            <Button
              onClick={handleExport}
              className="bg-gradient-primary hover:shadow-premium transition-all duration-normal group"
            >
              <Download className="mr-2 w-4 h-4" />
              Export Leads
            </Button>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background/50 border border-glass-border rounded-lg text-foreground placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-normal"
              />
            </div>

            {/* Intent Filters */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-text-secondary mr-2" />
              {(['All', 'High', 'Medium', 'Low'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilter(filter)}
                  className={selectedFilter === filter 
                    ? 'bg-gradient-primary' 
                    : 'bg-glass border-glass-border hover:bg-glass/80'
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Total Leads', value: leads.length.toString(), icon: Building },
            { label: 'High Intent', value: leads.filter(l => l.intent === 'High').length.toString(), icon: TrendingUp },
            { label: 'Avg Score', value: Math.round(leads.reduce((acc, lead) => acc + lead.score, 0) / leads.length).toString(), icon: Star },
            { label: 'Active Today', value: leads.filter(l => l.lastActivity.includes('hour')).length.toString(), icon: Mail }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Leads Grid */}
        <div className="grid gap-6">
          {filteredLeads.map((lead, index) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-md border border-glass-border rounded-xl p-6 hover:shadow-glass transition-all duration-normal"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">{lead.company}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getIntentBg(lead.intent)} ${getIntentColor(lead.intent)}`}>
                          {lead.intent} Intent
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-text-secondary text-sm">
                        <span>{lead.contact} • {lead.title}</span>
                        <span>Score: {lead.score}</span>
                        <span>Last active: {lead.lastActivity}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(lead.score / 20) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-muted'
                      }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {lead.triggers.map((trigger, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="bg-glass border-glass-border">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="bg-glass border-glass-border">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="bg-glass border-glass-border">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-foreground mb-2">No leads found</h3>
            <p className="text-text-secondary">Try adjusting your filters or search terms</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LeadDashboard;