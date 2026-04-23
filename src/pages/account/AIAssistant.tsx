import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ChevronLeft, MessageSquare, Users, TrendingUp, Zap, Settings, Play, Pause, BarChart3, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const automations = [
  { id: '1', name: 'Welcome New Customers', description: 'Send a personalized welcome message', enabled: true, triggered: 245 },
  { id: '2', name: 'Abandoned Cart Recovery', description: 'Remind customers about items left in cart', enabled: true, triggered: 89 },
  { id: '3', name: 'Order Follow-up', description: 'Request reviews after delivery', enabled: false, triggered: 156 },
  { id: '4', name: 'Flash Sale Alerts', description: 'Notify customers about deals', enabled: true, triggered: 412 },
];

const leads = [
  { id: '1', name: 'John Doe', email: 'john@example.com', interest: 'Electronics', score: 85, lastActive: '2 hours ago' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', interest: 'Fashion', score: 72, lastActive: '5 hours ago' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', interest: 'Home & Office', score: 68, lastActive: '1 day ago' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', interest: 'Beauty', score: 91, lastActive: '30 mins ago' },
];

const conversations = [
  { id: '1', customer: 'Alice Brown', lastMessage: 'Thanks for the quick response!', time: '5 mins ago', unread: 0 },
  { id: '2', customer: 'Bob Davis', lastMessage: 'Is this item available?', time: '20 mins ago', unread: 2 },
  { id: '3', customer: 'Carol White', lastMessage: 'When will my order arrive?', time: '1 hour ago', unread: 1 },
];

const AIAssistant = () => {
  const [automationStates, setAutomationStates] = useState<Record<string, boolean>>(
    automations.reduce((acc, a) => ({ ...acc, [a.id]: a.enabled }), {})
  );

  const toggleAutomation = (id: string) => {
    setAutomationStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-display text-3xl font-bold flex items-center gap-2">
                <Bot className="w-8 h-8 text-purple-600" />
                AI Sales Assistant
              </h1>
              <p className="text-muted-foreground">Automate customer engagement and boost sales</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-xl p-4 border">
              <MessageSquare className="w-6 h-6 text-purple-600 mb-2" />
              <p className="text-2xl font-bold">1,247</p>
              <p className="text-sm text-muted-foreground">Messages Sent</p>
            </div>
            <div className="bg-card rounded-xl p-4 border">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-2xl font-bold">892</p>
              <p className="text-sm text-muted-foreground">Leads Captured</p>
            </div>
            <div className="bg-card rounded-xl p-4 border">
              <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
              <p className="text-2xl font-bold">23%</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
            <div className="bg-card rounded-xl p-4 border">
              <Zap className="w-6 h-6 text-yellow-600 mb-2" />
              <p className="text-2xl font-bold">4.8s</p>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="automations" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="automations">Automations</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
            </TabsList>

            {/* Automations Tab */}
            <TabsContent value="automations">
              <div className="bg-card rounded-xl border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-bold">Sales Automations</h2>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Zap className="w-4 h-4 mr-2" /> Create New
                  </Button>
                </div>
                <div className="space-y-4">
                  {automations.map((auto) => (
                    <div key={auto.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${automationStates[auto.id] ? 'bg-purple-100 text-purple-600' : 'bg-muted text-muted-foreground'}`}>
                          {automationStates[auto.id] ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-medium">{auto.name}</p>
                          <p className="text-sm text-muted-foreground">{auto.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{auto.triggered}</p>
                          <p className="text-xs text-muted-foreground">triggers</p>
                        </div>
                        <Switch
                          checked={automationStates[auto.id]}
                          onCheckedChange={() => toggleAutomation(auto.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Leads Tab */}
            <TabsContent value="leads">
              <div className="bg-card rounded-xl border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-bold">Lead Insights</h2>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" /> Export
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Customer</th>
                        <th className="text-left py-3 px-2 font-medium">Interest</th>
                        <th className="text-left py-3 px-2 font-medium">Score</th>
                        <th className="text-left py-3 px-2 font-medium">Last Active</th>
                        <th className="text-right py-3 px-2 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b last:border-0">
                          <td className="py-3 px-2">
                            <p className="font-medium">{lead.name}</p>
                            <p className="text-sm text-muted-foreground">{lead.email}</p>
                          </td>
                          <td className="py-3 px-2">{lead.interest}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              lead.score >= 80 ? 'bg-green-100 text-green-700' :
                              lead.score >= 60 ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {lead.score}%
                            </span>
                          </td>
                          <td className="py-3 px-2 text-muted-foreground">{lead.lastActive}</td>
                          <td className="py-3 px-2 text-right">
                            <Button size="sm" variant="ghost">
                              <Send className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Conversations Tab */}
            <TabsContent value="conversations">
              <div className="bg-card rounded-xl border p-6">
                <h2 className="font-display text-lg font-bold mb-6">Recent Conversations</h2>
                <div className="space-y-3">
                  {conversations.map((conv) => (
                    <div key={conv.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-300 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                          {conv.customer.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{conv.customer}</p>
                          <p className="text-sm text-muted-foreground line-clamp-1">{conv.lastMessage}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                        {conv.unread > 0 && (
                          <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AIAssistant;
