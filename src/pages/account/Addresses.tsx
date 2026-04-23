import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronLeft, Plus, Pencil, Trash2, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const initialAddresses = [
  { id: '1', name: 'John Doe', phone: '+234 800 123 4567', address: '123 Victoria Island', city: 'Lagos', state: 'Lagos', isDefault: true },
  { id: '2', name: 'John Doe', phone: '+234 800 987 6543', address: '45 Wuse Zone 5', city: 'Abuja', state: 'FCT', isDefault: false },
];

const Addresses = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);

  const setDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
    toast.success('Default address updated');
  };

  const deleteAddress = (id: string) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    toast.success('Address deleted');
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              My Addresses
            </h1>
          </div>

          <div className="space-y-4">
            {addresses.map((addr) => (
              <div key={addr.id} className={`bg-card rounded-xl border p-6 ${addr.isDefault ? 'border-primary' : ''}`}>
                <div className="flex items-start justify-between">
                  <div>
                    {addr.isDefault && (
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">Default</span>
                    )}
                    <p className="font-bold">{addr.name}</p>
                    <p className="text-muted-foreground">{addr.phone}</p>
                    <p className="text-muted-foreground">{addr.address}</p>
                    <p className="text-muted-foreground">{addr.city}, {addr.state}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteAddress(addr.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {!addr.isDefault && (
                  <Button variant="outline" size="sm" className="mt-4" onClick={() => setDefault(addr.id)}>
                    <Check className="w-4 h-4 mr-2" /> Set as Default
                  </Button>
                )}
              </div>
            ))}

            <Button onClick={() => setShowForm(!showForm)} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add New Address
            </Button>

            {showForm && (
              <div className="bg-card rounded-xl border p-6 space-y-4">
                <h3 className="font-bold">New Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input className="mt-1" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input className="mt-1" placeholder="+234 800 000 0000" />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Street Address</Label>
                    <Input className="mt-1" placeholder="123 Main Street" />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input className="mt-1" placeholder="Lagos" />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input className="mt-1" placeholder="Lagos" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setShowForm(false)} className="flex-1">Cancel</Button>
                  <Button className="flex-1" onClick={() => { setShowForm(false); toast.success('Address added'); }}>Save Address</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Addresses;
