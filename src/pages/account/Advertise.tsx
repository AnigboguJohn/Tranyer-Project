import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Megaphone, ChevronLeft, Image as ImageIcon, Target, Calendar, DollarSign, BarChart3, Eye, MousePointerClick } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

const adPlacements = [
  { id: 'hero', name: 'Hero Banner', description: 'Premium placement on homepage hero carousel', price: 50000, impressions: '100K+' },
  { id: 'internal', name: 'Internal Billboard', description: 'Between category sections on homepage', price: 30000, impressions: '75K+' },
  { id: 'external', name: 'External Billboard', description: 'Sponsored section on homepage', price: 25000, impressions: '50K+' },
  { id: 'category', name: 'Category Page', description: 'Top of category listing pages', price: 15000, impressions: '25K+' },
  { id: 'sidebar', name: 'Sidebar Ad', description: 'Side placement on product pages', price: 10000, impressions: '15K+' },
];

const Advertise = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    brandName: '',
    campaignName: '',
    description: '',
    targetUrl: '',
    placement: '',
    budget: 50000,
    duration: 7,
    adImage: '',
  });

  const selectedPlacement = adPlacements.find(p => p.id === formData.placement);
  const totalCost = selectedPlacement ? selectedPlacement.price * formData.duration : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Ad campaign created successfully!');
    navigate('/account');
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-display text-3xl font-bold flex items-center gap-2">
                <Megaphone className="w-8 h-8 text-blue-600" />
                Advertise Your Brand
              </h1>
              <p className="text-muted-foreground">Create targeted ad campaigns on Tranyer</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-blue-600' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Campaign Details */}
            {step === 1 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Campaign Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="brandName">Brand Name *</Label>
                    <Input
                      id="brandName"
                      value={formData.brandName}
                      onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                      placeholder="Your brand or company name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="campaignName">Campaign Name *</Label>
                    <Input
                      id="campaignName"
                      value={formData.campaignName}
                      onChange={(e) => setFormData(prev => ({ ...prev, campaignName: e.target.value }))}
                      placeholder="e.g., Summer Sale 2025"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Ad Copy / Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Write compelling ad copy..."
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="targetUrl">Landing Page URL *</Label>
                    <Input
                      id="targetUrl"
                      type="url"
                      value={formData.targetUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetUrl: e.target.value }))}
                      placeholder="https://your-website.com/campaign"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Ad Creative</Label>
                    <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center">
                      <ImageIcon className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload your ad banner image</p>
                      <Button type="button" variant="outline" size="sm" onClick={() => {
                        setFormData(prev => ({ ...prev, adImage: 'https://picsum.photos/1200/400' }));
                        toast.success('Image uploaded');
                      }}>
                        Upload Image
                      </Button>
                    </div>
                    {formData.adImage && (
                      <img src={formData.adImage} alt="Ad preview" className="mt-4 rounded-lg w-full h-40 object-cover" />
                    )}
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full bg-blue-600 hover:bg-blue-700" disabled={!formData.brandName || !formData.campaignName}>
                  Choose Placement
                </Button>
              </div>
            )}

            {/* Step 2: Placement & Budget */}
            {step === 2 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  Placement & Budget
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label>Select Ad Placement *</Label>
                    <RadioGroup value={formData.placement} onValueChange={(v) => setFormData(prev => ({ ...prev, placement: v }))} className="mt-3 space-y-3">
                      {adPlacements.map((placement) => (
                        <div key={placement.id} className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${formData.placement === placement.id ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-muted-foreground/50'}`}>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={placement.id} id={placement.id} />
                            <div>
                              <Label htmlFor={placement.id} className="cursor-pointer font-medium">{placement.name}</Label>
                              <p className="text-sm text-muted-foreground">{placement.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">₦{placement.price.toLocaleString()}/day</p>
                            <p className="text-xs text-muted-foreground">{placement.impressions} views</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Campaign Duration: {formData.duration} days</Label>
                    <Slider
                      value={[formData.duration]}
                      onValueChange={([v]) => setFormData(prev => ({ ...prev, duration: v }))}
                      min={1}
                      max={30}
                      step={1}
                      className="mt-3"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 day</span>
                      <span>30 days</span>
                    </div>
                  </div>

                  {selectedPlacement && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span>Daily Rate</span>
                        <span>₦{selectedPlacement.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Duration</span>
                        <span>{formData.duration} days</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total Cost</span>
                        <span className="text-blue-600">₦{totalCost.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={!formData.placement}>
                    Review Campaign
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Launch */}
            {step === 3 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Campaign Preview
                </h2>

                <div className="space-y-4">
                  {formData.adImage && (
                    <img src={formData.adImage} alt="Ad preview" className="w-full h-48 object-cover rounded-lg" />
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Brand</p>
                      <p className="font-medium">{formData.brandName}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Campaign</p>
                      <p className="font-medium">{formData.campaignName}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Placement</p>
                      <p className="font-medium">{selectedPlacement?.name}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{formData.duration} days</p>
                    </div>
                  </div>

                  {/* Estimated Performance */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Estimated Performance</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <Eye className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                        <p className="text-xl font-bold">{selectedPlacement?.impressions}</p>
                        <p className="text-xs text-muted-foreground">Impressions</p>
                      </div>
                      <div>
                        <MousePointerClick className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                        <p className="text-xl font-bold">2-5%</p>
                        <p className="text-xs text-muted-foreground">CTR</p>
                      </div>
                      <div>
                        <DollarSign className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                        <p className="text-xl font-bold">₦{totalCost.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Total Cost</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? 'Launching...' : 'Launch Campaign'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Advertise;
