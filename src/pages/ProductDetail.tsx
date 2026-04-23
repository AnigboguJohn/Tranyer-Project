import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { products } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { formatPrice, t } = useLocalization();

  if (!product) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold">{t('product.notFound')}</h1>
          <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
            {t('product.backToProducts')}
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/category/${product.categoryId}`} className="hover:text-primary">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 deal-badge text-sm">
                  -{product.discount}%
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === selectedImage ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.brand}
            </p>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-rating-star text-rating-star'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="price-current text-3xl">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="price-old text-lg">{formatPrice(product.originalPrice)}</span>
                  <span className="deal-badge">-{product.discount}%</span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-success">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="font-medium">In Stock</span>
                  {product.stockCount && (
                    <span className="text-muted-foreground">
                      ({product.stockCount} available)
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-destructive">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Quantity & Actions */}
            {product.inStock && (
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-14 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 gap-2" onClick={handleAddToCart}>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-xl">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-muted-foreground">{product.description}</p>
              {product.features && (
                <>
                  <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="bg-card rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted">Brand</td>
                    <td className="py-3 px-4">{product.brand}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium bg-muted">Category</td>
                    <td className="py-3 px-4">{product.category}</td>
                  </tr>
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b">
                        <td className="py-3 px-4 font-medium bg-muted">{key}</td>
                        <td className="py-3 px-4">{value}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="text-center py-8 bg-card rounded-xl">
              <p className="text-muted-foreground">Reviews coming soon!</p>
              <Button className="mt-4">Write a Review</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <FeaturedProducts
          title="You May Also Like"
          filter={(p) => p.categoryId === product.categoryId && p.id !== product.id}
          limit={6}
          showViewAll={false}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;
