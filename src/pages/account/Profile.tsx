import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronLeft, Camera, Mail, Phone, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.user_metadata?.full_name || '',
    email: user?.email || '',
    phone: '',
    dateOfBirth: '',
  });

  const handleSave = () => {
    toast.success('Profile updated successfully');
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold">My Profile</h1>
          </div>

          <div className="bg-card rounded-xl border p-6">
            {/* Avatar */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {formData.fullName?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-bold">{formData.fullName || 'User'}</h2>
                <p className="text-muted-foreground">{formData.email}</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="pl-10"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      className="pl-10"
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+234 800 000 0000"
                      className="pl-10"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="pl-10"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">Cancel</Button>
                    <Button onClick={handleSave} className="flex-1">Save Changes</Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)} className="w-full">Edit Profile</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
