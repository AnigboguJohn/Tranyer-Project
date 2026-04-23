import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Newspaper, Download, Mail } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: 'Tranyer Reaches 5 Million Customers Milestone',
    date: '2024-01-15',
    excerpt: 'Leading e-commerce platform celebrates serving over 5 million customers across Nigeria.',
  },
  {
    id: 2,
    title: 'Tranyer Expands to Ghana and Kenya',
    date: '2024-01-10',
    excerpt: 'Continuing our mission to make online shopping accessible across Africa.',
  },
  {
    id: 3,
    title: 'New Partnership with Major Payment Providers',
    date: '2024-01-05',
    excerpt: 'Enhanced payment options now available including Paystack and Stripe integration.',
  },
];

const Press = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-xl text-muted-foreground">
            Get the latest news, press releases, and media resources from Tranyer.
          </p>
        </div>

        {/* Press Contact */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">Press Inquiries</h2>
              <p className="text-muted-foreground">
                For media inquiries, interviews, or press materials, please contact our press team.
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              press@tranyer.com
            </Button>
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6">Recent Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.id} className="p-6 bg-card rounded-xl border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                    <h3 className="font-display text-lg font-bold mt-1">{release.title}</h3>
                    <p className="text-muted-foreground mt-2">{release.excerpt}</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 gap-2">
                    <Download className="w-4 h-4" />
                    PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Assets */}
        <div className="bg-muted rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="font-display text-2xl font-bold">Brand Assets</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Download official Tranyer logos, brand guidelines, and media assets.
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Media Kit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Press;
