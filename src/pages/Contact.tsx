import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => (
  <Layout>
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <Phone className="w-6 h-6 text-primary" />
              <div><p className="font-medium">Phone</p><p className="text-muted-foreground">+234 800 123 4567</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <Mail className="w-6 h-6 text-primary" />
              <div><p className="font-medium">Email</p><p className="text-muted-foreground">support@tranyer.com</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
              <MapPin className="w-6 h-6 text-primary" />
              <div><p className="font-medium">Address</p><p className="text-muted-foreground">Lagos, Nigeria</p></div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-6">
          <h2 className="font-display text-xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button className="w-full gap-2"><Send className="w-4 h-4" />Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);
export default Contact;
