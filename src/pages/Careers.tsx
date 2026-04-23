import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, Users, Heart, Zap } from 'lucide-react';

const jobOpenings = [
  { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Lagos', type: 'Full-time' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'Lagos', type: 'Full-time' },
  { id: 3, title: 'UX Designer', department: 'Design', location: 'Remote', type: 'Full-time' },
  { id: 4, title: 'Customer Support Lead', department: 'Operations', location: 'Lagos', type: 'Full-time' },
  { id: 5, title: 'Data Analyst', department: 'Analytics', location: 'Lagos', type: 'Full-time' },
  { id: 6, title: 'Marketing Manager', department: 'Marketing', location: 'Lagos', type: 'Full-time' },
];

const benefits = [
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family' },
  { icon: Zap, title: 'Learning Budget', description: 'Annual budget for courses, conferences, and books' },
  { icon: Clock, title: 'Flexible Hours', description: 'Work when you\'re most productive' },
  { icon: Users, title: 'Great Team', description: 'Work with talented people from diverse backgrounds' },
];

const Careers = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us build the future of e-commerce in Africa. We're looking for passionate people to join our mission.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-card rounded-xl border text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card rounded-xl border hover:border-primary transition-colors"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
