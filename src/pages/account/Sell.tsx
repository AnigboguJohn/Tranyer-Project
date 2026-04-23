import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Upload, X, Plus, ChevronLeft, Image as ImageIcon, DollarSign, Tag, Box, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { categories } from '@/data/mockData';

const Sell = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    price: '',
    originalPrice: '',
    quantity: '1',
    condition: 'new',
    brand: '',
    sku: '',
  });

  const handleImageUpload = () => {
    // Simulate image upload
    const newImage = `https://picsum.photos/400/400?random=${Date.now()}`;
    setImages(prev => [...prev, newImage]);
    toast.success('Image uploaded');
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Product listed successfully!');
    navigate('/account');
  };

  const selectedCategory = categories.find(c => c.id === formData.category);

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
                <ShoppingBag className="w-8 h-8 text-green-600" />
                Sell an Item
              </h1>
              <p className="text-muted-foreground">List your product on Tranyer</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Product Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Product Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., iPhone 15 Pro Max 256GB"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your product in detail..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Category *</Label>
                      <Select value={formData.category} onValueChange={(v) => setFormData(prev => ({ ...prev, category: v, subcategory: '' }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Subcategory</Label>
                      <Select 
                        value={formData.subcategory} 
                        onValueChange={(v) => setFormData(prev => ({ ...prev, subcategory: v }))}
                        disabled={!selectedCategory}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategory?.subcategories?.map((sub) => (
                            <SelectItem key={sub.slug} value={sub.slug}>{sub.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Condition *</Label>
                    <Select value={formData.condition} onValueChange={(v) => setFormData(prev => ({ ...prev, condition: v }))}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Brand New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full" disabled={!formData.title || !formData.category}>
                  Continue to Pricing
                </Button>
              </div>
            )}

            {/* Step 2: Pricing & Images */}
            {step === 2 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Pricing & Images
                </h2>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Selling Price (₦) *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                        placeholder="0.00"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="originalPrice">Original Price (₦)</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        value={formData.originalPrice}
                        onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                        placeholder="0.00"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        value={formData.brand}
                        onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                        placeholder="e.g., Apple"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <Label>Product Images *</Label>
                    <div className="mt-2 grid grid-cols-4 gap-3">
                      {images.map((img, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                          <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      {images.length < 8 && (
                        <button
                          type="button"
                          onClick={handleImageUpload}
                          className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 hover:border-primary flex flex-col items-center justify-center gap-2 transition-colors"
                        >
                          <ImageIcon className="w-6 h-6 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Add Image</span>
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Upload up to 8 images. First image will be the cover.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="flex-1" disabled={!formData.price || images.length === 0}>
                    Review Listing
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <h2 className="font-display text-xl font-bold flex items-center gap-2">
                  <Box className="w-5 h-5 text-primary" />
                  Review Your Listing
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {images[0] && (
                      <img src={images[0]} alt="Product" className="w-full aspect-square object-cover rounded-lg" />
                    )}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold">{formData.title}</h3>
                    <p className="text-2xl font-bold text-primary">₦{Number(formData.price).toLocaleString()}</p>
                    {formData.originalPrice && (
                      <p className="text-muted-foreground line-through">₦{Number(formData.originalPrice).toLocaleString()}</p>
                    )}
                    <p className="text-muted-foreground">{formData.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-muted rounded text-sm">{selectedCategory?.name}</span>
                      <span className="px-2 py-1 bg-muted rounded text-sm capitalize">{formData.condition}</span>
                      <span className="px-2 py-1 bg-muted rounded text-sm">{formData.quantity} in stock</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? 'Publishing...' : 'Publish Listing'}
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

export default Sell;
