import { Product, Category } from '@/types';

// Configuration for different product data sources
interface ProductAPISource {
  name: string;
  baseUrl: string;
  apiKey?: string;
  enabled: boolean;
  categories: string[];
  region: 'nigeria' | 'global';
}

// Available API sources for Nigeria
const PRODUCT_API_SOURCES: ProductAPISource[] = [
  {
    name: 'jumia',
    baseUrl: 'https://api.jumia.com/v1',
    enabled: false, // Enable when you have API access
    categories: ['phones-tablets', 'electronics', 'fashion', 'home-kitchen'],
    region: 'nigeria'
  },
  {
    name: 'konga',
    baseUrl: 'https://api.konga.com/v1',
    enabled: false, // Enable when you have API access
    categories: ['phones-tablets', 'electronics', 'fashion', 'health-beauty'],
    region: 'nigeria'
  },
  {
    name: 'aliexpress',
    baseUrl: 'https://api-sg.aliexpress.com/sync',
    enabled: false, // Enable when you have API access
    categories: ['electronics', 'fashion', 'home-kitchen', 'sports-outdoors'],
    region: 'global'
  }
];

// Nigerian market-specific product data
// This provides realistic product data for the Nigerian market
const NIGERIAN_PRODUCT_DATABASE = {
  categories: [
    {
      id: 'phones-tablets',
      name: 'Phones & Tablets',
      products: [
        {
          name: 'iPhone 15 Pro Max',
          price: 1850000,
          brand: 'Apple',
          description: 'Latest iPhone with advanced camera system and A17 Pro chip'
        },
        {
          name: 'Samsung Galaxy S24 Ultra',
          price: 1650000,
          brand: 'Samsung',
          description: 'Premium Android smartphone with S Pen and 200MP camera'
        },
        {
          name: 'Infinix Note 40 Pro',
          price: 285000,
          brand: 'Infinix',
          description: 'Affordable smartphone with 108MP camera and 68W fast charging'
        },
        {
          name: 'iPad Pro 12.9-inch M2',
          price: 2250000,
          brand: 'Apple',
          description: 'Professional tablet with M2 chip and Liquid Retina XDR display'
        },
        {
          name: 'Samsung Galaxy Tab S9 Ultra',
          price: 1850000,
          brand: 'Samsung',
          description: 'Premium Android tablet with S Pen and 14.6-inch display'
        }
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics',
      products: [
        {
          name: 'MacBook Pro 16-inch M3 Max',
          price: 4250000,
          brand: 'Apple',
          description: 'Professional laptop with M3 Max chip for intensive workloads'
        },
        {
          name: 'Dell XPS 13 Plus',
          price: 1850000,
          brand: 'Dell',
          description: 'Ultra-thin laptop with 12th Gen Intel processors'
        },
        {
          name: 'HP Pavilion Gaming Laptop',
          price: 950000,
          brand: 'HP',
          description: 'Gaming laptop with RTX 4060 and AMD Ryzen 7'
        },
        {
          name: 'Samsung 55" QLED 4K Smart TV',
          price: 1250000,
          brand: 'Samsung',
          description: '4K QLED TV with Quantum Dot technology and smart features'
        },
        {
          name: 'LG 65" OLED C3 Series',
          price: 2850000,
          brand: 'LG',
          description: 'Premium OLED TV with perfect blacks and vibrant colors'
        }
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion',
      products: [
        {
          name: 'Nike Air Max 270',
          price: 185000,
          brand: 'Nike',
          description: 'Comfortable sneakers with Air Max cushioning technology'
        },
        {
          name: 'Adidas Ultraboost 23',
          price: 195000,
          brand: 'Adidas',
          description: 'Running shoes with Boost technology for energy return'
        },
        {
          name: 'Gucci Marmont Mini Bag',
          price: 850000,
          brand: 'Gucci',
          description: 'Luxury leather handbag with GG Supreme canvas'
        },
        {
          name: 'Louis Vuitton Neverfull MM',
          price: 1250000,
          brand: 'Louis Vuitton',
          description: 'Iconic monogram canvas tote bag'
        },
        {
          name: 'Zara Wool Blend Coat',
          price: 285000,
          brand: 'Zara',
          description: 'Elegant wool blend coat for winter styling'
        }
      ]
    },
    {
      id: 'home-kitchen',
      name: 'Home & Kitchen',
      products: [
        {
          name: 'KitchenAid Stand Mixer 5Qt',
          price: 485000,
          brand: 'KitchenAid',
          description: 'Professional stand mixer with multiple attachments'
        },
        {
          name: 'Dyson V15 Detect Vacuum',
          price: 685000,
          brand: 'Dyson',
          description: 'Cordless vacuum with laser dust detection'
        },
        {
          name: 'Instant Pot Duo 7-in-1',
          price: 185000,
          brand: 'Instant Pot',
          description: 'Multi-cooker that replaces 7 kitchen appliances'
        },
        {
          name: 'Nespresso Vertuo Coffee Maker',
          price: 285000,
          brand: 'Nespresso',
          description: 'Premium coffee maker with barcode technology'
        },
        {
          name: 'Breville Fast Slow Pro',
          price: 395000,
          brand: 'Breville',
          description: 'Multi-cooker with pressure cook and slow cook functions'
        }
      ]
    },
    {
      id: 'health-beauty',
      name: 'Health & Beauty',
      products: [
        {
          name: 'Dyson Airwrap Complete',
          price: 485000,
          brand: 'Dyson',
          description: 'Multi-styling tool for curling, waving, smoothing and drying'
        },
        {
          name: 'The Ordinary Hyaluronic Acid',
          price: 8500,
          brand: 'The Ordinary',
          description: 'Hydrating serum with hyaluronic acid for all skin types'
        },
        {
          name: 'CeraVe Moisturizing Cream',
          price: 12500,
          brand: 'CeraVe',
          description: 'Daily facial moisturizer for normal to dry skin'
        },
        {
          name: 'Foreo Luna 3 Facial Cleanser',
          price: 95000,
          brand: 'Foreo',
          description: 'Silicone facial brush for deep cleansing'
        },
        {
          name: 'Anastasia Beverly Hills Brow Wiz',
          price: 18500,
          brand: 'Anastasia Beverly Hills',
          description: 'Ultra-slim pencil for natural-looking brows'
        }
      ]
    }
  ]
};

// Generate realistic product data for Nigeria market
const generateNigerianProduct = (
  baseProduct: any,
  categoryId: string,
  index: number
): Product => {
  const productId = `${categoryId}-${index + 1}`;

  // Generate realistic ratings and review counts
  const rating = Math.round((3.5 + Math.random() * 1.5) * 10) / 10;
  const reviewCount = Math.floor(Math.random() * 500) + 10;

  // Generate stock status (90% in stock)
  const inStock = Math.random() > 0.1;
  const stockCount = inStock ? Math.floor(Math.random() * 50) + 1 : 0;

  // Generate discount occasionally (20% chance)
  const hasDiscount = Math.random() > 0.8;
  const discount = hasDiscount ? Math.floor(Math.random() * 30) + 5 : undefined;
  const originalPrice = hasDiscount ? Math.round(baseProduct.price / (1 - discount! / 100)) : undefined;

  // Generate product images (using placeholder for now - replace with real images)
  const image = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000)}?w=400&h=400&fit=crop&auto=format`;

  return {
    id: productId,
    name: baseProduct.name,
    description: baseProduct.description,
    price: baseProduct.price,
    originalPrice,
    discount,
    image,
    images: [image], // Add more images as needed
    category: baseProduct.category || categoryId,
    categoryId,
    brand: baseProduct.brand,
    rating,
    reviewCount,
    inStock,
    stockCount,
    features: [
      'Premium quality',
      'Official warranty',
      'Fast delivery available',
      'Secure payment options'
    ],
    specifications: {
      'Brand': baseProduct.brand,
      'Warranty': '1 Year Official Warranty',
      'Delivery': 'Nationwide Delivery',
      'Payment': 'Multiple Payment Options'
    }
  };
};

// Fetch products from real APIs or fallback to Nigerian market data
export const fetchRealProducts = async (
  categoryId?: string,
  page: number = 1,
  limit: number = 24
): Promise<{ products: Product[]; total: number; hasMore: boolean }> => {
  try {
    // Try to fetch from enabled APIs first
    const enabledSources = PRODUCT_API_SOURCES.filter(source => source.enabled);

    if (enabledSources.length > 0) {
      // TODO: Implement real API calls here
      // For now, fall back to Nigerian market data
      console.log('Real API sources enabled but not implemented yet. Using Nigerian market data.');
    }

    // Fallback to Nigerian market data
    const categoryData = categoryId
      ? NIGERIAN_PRODUCT_DATABASE.categories.find(cat => cat.id === categoryId)
      : null;

    if (categoryData) {
      // Return products for specific category
      const allCategoryProducts = categoryData.products.map((product, index) =>
        generateNigerianProduct({ ...product, category: categoryData.name }, categoryId, index)
      );

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedProducts = allCategoryProducts.slice(startIndex, endIndex);

      return {
        products: paginatedProducts,
        total: allCategoryProducts.length,
        hasMore: endIndex < allCategoryProducts.length
      };
    } else {
      // Return products from all categories
      const allProducts: Product[] = [];

      NIGERIAN_PRODUCT_DATABASE.categories.forEach(category => {
        category.products.forEach((product, index) => {
          allProducts.push(
            generateNigerianProduct(
              { ...product, category: category.name },
              category.id,
              allProducts.length + index
            )
          );
        });
      });

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedProducts = allProducts.slice(startIndex, endIndex);

      return {
        products: paginatedProducts,
        total: allProducts.length,
        hasMore: endIndex < allProducts.length
      };
    }

  } catch (error) {
    console.error('Error fetching real products:', error);
    // Return empty result on error
    return {
      products: [],
      total: 0,
      hasMore: false
    };
  }
};

// Get all available categories
export const getRealCategories = (): Category[] => {
  return NIGERIAN_PRODUCT_DATABASE.categories.map(cat => ({
    id: cat.id,
    name: cat.name,
    slug: cat.id,
    image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000)}?w=400&h=400&fit=crop&auto=format`,
    productCount: cat.products.length,
    subcategories: [] // Add subcategories as needed
  }));
};

// Search products across all sources
export const searchRealProducts = async (
  query: string,
  page: number = 1,
  limit: number = 24
): Promise<{ products: Product[]; total: number; hasMore: boolean }> => {
  try {
    // For now, search within Nigerian market data
    const allProducts: Product[] = [];

    NIGERIAN_PRODUCT_DATABASE.categories.forEach(category => {
      category.products.forEach((product, index) => {
        allProducts.push(
          generateNigerianProduct(
            { ...product, category: category.name },
            category.id,
            allProducts.length + index
          )
        );
      });
    });

    // Filter by search query
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      total: filteredProducts.length,
      hasMore: endIndex < filteredProducts.length
    };

  } catch (error) {
    console.error('Error searching products:', error);
    return {
      products: [],
      total: 0,
      hasMore: false
    };
  }
};

// Configuration for enabling real APIs
export const configureProductAPIs = (configs: Partial<ProductAPISource>[]) => {
  configs.forEach(config => {
    const sourceIndex = PRODUCT_API_SOURCES.findIndex(s => s.name === config.name);
    if (sourceIndex !== -1) {
      PRODUCT_API_SOURCES[sourceIndex] = { ...PRODUCT_API_SOURCES[sourceIndex], ...config };
    }
  });
};

// Export default configuration
export default {
  fetchRealProducts,
  getRealCategories,
  searchRealProducts,
  configureProductAPIs
};