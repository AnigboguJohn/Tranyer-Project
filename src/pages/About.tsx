import Layout from '@/components/layout/Layout';
import { Building, Users, Target, Award, Rocket, Globe } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Tranyer
          </h1>
          <p className="text-xl text-muted-foreground">
            Nigeria's leading online marketplace, connecting millions of buyers and sellers across Africa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Products', value: '10M+' },
            { label: 'Customers', value: '5M+' },
            { label: 'Sellers', value: '50K+' },
            { label: 'Cities', value: '100+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl border">
              <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize commerce in Africa by providing the most convenient, safe, and enjoyable online shopping experience. We believe everyone deserves access to quality products at fair prices.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="font-display text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become Africa's most trusted e-commerce platform, empowering both buyers and sellers to thrive in the digital economy while creating millions of jobs across the continent.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Customer First', description: 'Every decision we make starts with our customers in mind.' },
              { icon: Award, title: 'Quality', description: 'We partner with trusted sellers to ensure product quality.' },
              { icon: Globe, title: 'Accessibility', description: 'Making online shopping accessible to everyone, everywhere.' },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-card rounded-xl border">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-muted rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-8 h-8 text-primary" />
            <h2 className="font-display text-2xl font-bold">Company Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <p><strong>Founded:</strong> 2024</p>
              <p><strong>Headquarters:</strong> Lagos, Nigeria</p>
              <p><strong>Employees:</strong> 1,000+</p>
            </div>
            <div>
              <p><strong>Operating Countries:</strong> Nigeria, Ghana, Kenya</p>
              <p><strong>Delivery Partners:</strong> 500+</p>
              <p><strong>Customer Support:</strong> 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
