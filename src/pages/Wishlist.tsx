import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { formatPrice } from '@/data/mockData';

const Wishlist = () => {
  const { items, isLoading, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="max-w-md mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="font-display text-2xl font-bold mb-2">Your Wishlist</h1>
            <p className="text-muted-foreground mb-6">
              Sign in to view and manage your wishlist
            </p>
            <Button onClick={() => navigate('/auth')}>
              Sign In
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold">My Wishlist</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-xl font-semibold mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save items you love by clicking the heart icon on any product
            </p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border overflow-hidden group"
              >
                <Link to={`/product/${product.id}`} className="block relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
