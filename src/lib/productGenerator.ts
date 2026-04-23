import { Product, Category, PromoBanner } from '@/types';

// Category data with deep subcategories - 20 total categories
export const generatedCategories: Category[] = [
  {
    id: '1',
    name: 'Phones & Tablets',
    slug: 'phones-tablets',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    productCount: 2450,
    subcategories: [
      { id: '1-1', name: 'Smartphones', slug: 'smartphones' },
      { id: '1-2', name: 'Tablets', slug: 'tablets' },
      { id: '1-3', name: 'Phone Accessories', slug: 'phone-accessories' },
      { id: '1-4', name: 'Power Banks', slug: 'power-banks' },
      { id: '1-5', name: 'Smartwatches', slug: 'smartwatches' },
      { id: '1-6', name: 'Phone Cases', slug: 'phone-cases' },
    ]
  },
  {
    id: '2',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    productCount: 3890,
    subcategories: [
      { id: '2-1', name: 'Laptops', slug: 'laptops' },
      { id: '2-2', name: 'TVs & Displays', slug: 'tvs-displays' },
      { id: '2-3', name: 'Audio & Speakers', slug: 'audio-speakers' },
      { id: '2-4', name: 'Cameras', slug: 'cameras' },
      { id: '2-5', name: 'Gaming', slug: 'gaming' },
      { id: '2-6', name: 'Computer Accessories', slug: 'computer-accessories' },
    ]
  },
  {
    id: '3',
    name: 'Fashion - Women',
    slug: 'fashion-women',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400',
    productCount: 8920,
    subcategories: [
      { id: '3-1', name: 'Dresses', slug: 'dresses' },
      { id: '3-2', name: 'Tops & Blouses', slug: 'tops-blouses' },
      { id: '3-3', name: 'Shoes', slug: 'women-shoes' },
      { id: '3-4', name: 'Bags', slug: 'bags' },
      { id: '3-5', name: 'Jewelry', slug: 'jewelry' },
    ]
  },
  {
    id: '4',
    name: 'Fashion - Men',
    slug: 'fashion-men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400',
    productCount: 6780,
    subcategories: [
      { id: '4-1', name: 'Shirts', slug: 'shirts' },
      { id: '4-2', name: 'Pants & Trousers', slug: 'pants-trousers' },
      { id: '4-3', name: 'Shoes', slug: 'men-shoes' },
      { id: '4-4', name: 'Watches', slug: 'men-watches' },
      { id: '4-5', name: 'Accessories', slug: 'men-accessories' },
    ]
  },
  {
    id: '5',
    name: 'Home & Office',
    slug: 'home-office',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    productCount: 5420,
    subcategories: [
      { id: '5-1', name: 'Furniture', slug: 'furniture' },
      { id: '5-2', name: 'Kitchen', slug: 'kitchen' },
      { id: '5-3', name: 'Office Supplies', slug: 'office-supplies' },
      { id: '5-4', name: 'Appliances', slug: 'appliances' },
      { id: '5-5', name: 'Decor', slug: 'decor' },
    ]
  },
  {
    id: '6',
    name: 'Health & Beauty',
    slug: 'health-beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
    productCount: 4890,
    subcategories: [
      { id: '6-1', name: 'Skincare', slug: 'skincare' },
      { id: '6-2', name: 'Makeup', slug: 'makeup' },
      { id: '6-3', name: 'Fragrances', slug: 'fragrances' },
      { id: '6-4', name: 'Haircare', slug: 'haircare' },
      { id: '6-5', name: 'Wellness', slug: 'wellness' },
    ]
  },
  {
    id: '7',
    name: 'Supermarket',
    slug: 'supermarket',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
    productCount: 7560,
    subcategories: [
      { id: '7-1', name: 'Food & Pantry', slug: 'food-pantry' },
      { id: '7-2', name: 'Beverages', slug: 'beverages' },
      { id: '7-3', name: 'Household', slug: 'household' },
      { id: '7-4', name: 'Baby Products', slug: 'baby-products' },
    ]
  },
  {
    id: '8',
    name: 'Computing',
    slug: 'computing',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    productCount: 2340,
    subcategories: [
      { id: '8-1', name: 'Desktops', slug: 'desktops' },
      { id: '8-2', name: 'Laptops', slug: 'computing-laptops' },
      { id: '8-3', name: 'Printers', slug: 'printers' },
      { id: '8-4', name: 'Storage', slug: 'storage' },
      { id: '8-5', name: 'Software', slug: 'software' },
    ]
  },
  {
    id: '9',
    name: 'Gaming',
    slug: 'gaming',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    productCount: 1890,
    subcategories: [
      { id: '9-1', name: 'Consoles', slug: 'consoles' },
      { id: '9-2', name: 'Games', slug: 'games' },
      { id: '9-3', name: 'Controllers', slug: 'controllers' },
      { id: '9-4', name: 'VR', slug: 'vr' },
      { id: '9-5', name: 'Gaming Accessories', slug: 'gaming-accessories' },
    ]
  },
  {
    id: '10',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    productCount: 3450,
    subcategories: [
      { id: '10-1', name: 'Exercise Equipment', slug: 'exercise-equipment' },
      { id: '10-2', name: 'Sportswear', slug: 'sportswear' },
      { id: '10-3', name: 'Outdoor', slug: 'outdoor' },
      { id: '10-4', name: 'Supplements', slug: 'supplements' },
    ]
  },
  {
    id: '11',
    name: 'Baby & Kids',
    slug: 'baby-kids',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
    productCount: 4560,
    subcategories: [
      { id: '11-1', name: 'Clothing', slug: 'kids-clothing' },
      { id: '11-2', name: 'Toys', slug: 'toys' },
      { id: '11-3', name: 'Diapers & Wipes', slug: 'diapers-wipes' },
      { id: '11-4', name: 'Strollers', slug: 'strollers' },
      { id: '11-5', name: 'Nursery', slug: 'nursery' },
    ]
  },
  {
    id: '12',
    name: 'Automobile',
    slug: 'automobile',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    productCount: 2890,
    subcategories: [
      { id: '12-1', name: 'Car Parts', slug: 'car-parts' },
      { id: '12-2', name: 'Car Accessories', slug: 'car-accessories' },
      { id: '12-3', name: 'Motorcycles', slug: 'motorcycles' },
      { id: '12-4', name: 'Tools', slug: 'auto-tools' },
    ]
  },
  {
    id: '13',
    name: 'Garden & Outdoor',
    slug: 'garden-outdoor',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    productCount: 1670,
    subcategories: [
      { id: '13-1', name: 'Outdoor Furniture', slug: 'outdoor-furniture' },
      { id: '13-2', name: 'Garden Tools', slug: 'garden-tools' },
      { id: '13-3', name: 'Plants & Seeds', slug: 'plants-seeds' },
      { id: '13-4', name: 'Outdoor Lighting', slug: 'outdoor-lighting' },
    ]
  },
  {
    id: '14',
    name: 'Books & Media',
    slug: 'books-media',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    productCount: 5670,
    subcategories: [
      { id: '14-1', name: 'Books', slug: 'books' },
      { id: '14-2', name: 'Movies', slug: 'movies' },
      { id: '14-3', name: 'Music', slug: 'music' },
      { id: '14-4', name: 'Magazines', slug: 'magazines' },
    ]
  },
  {
    id: '15',
    name: 'Pet Supplies',
    slug: 'pet-supplies',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
    productCount: 1230,
    subcategories: [
      { id: '15-1', name: 'Pet Food', slug: 'pet-food' },
      { id: '15-2', name: 'Pet Toys', slug: 'pet-toys' },
      { id: '15-3', name: 'Pet Accessories', slug: 'pet-accessories' },
      { id: '15-4', name: 'Pet Health', slug: 'pet-health' },
    ]
  },
  {
    id: '16',
    name: 'Jewelry & Watches',
    slug: 'jewelry-watches',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    productCount: 3450,
    subcategories: [
      { id: '16-1', name: 'Necklaces', slug: 'necklaces' },
      { id: '16-2', name: 'Rings', slug: 'rings' },
      { id: '16-3', name: 'Bracelets', slug: 'bracelets' },
      { id: '16-4', name: 'Watches', slug: 'watches' },
    ]
  },
  {
    id: '17',
    name: 'Industrial & Scientific',
    slug: 'industrial-scientific',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
    productCount: 890,
    subcategories: [
      { id: '17-1', name: 'Lab Equipment', slug: 'lab-equipment' },
      { id: '17-2', name: 'Safety', slug: 'safety' },
      { id: '17-3', name: 'Janitorial', slug: 'janitorial' },
    ]
  },
  {
    id: '18',
    name: 'Arts & Crafts',
    slug: 'arts-crafts',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400',
    productCount: 2340,
    subcategories: [
      { id: '18-1', name: 'Art Supplies', slug: 'art-supplies' },
      { id: '18-2', name: 'Fabrics', slug: 'fabrics' },
      { id: '18-3', name: 'Sewing', slug: 'sewing' },
      { id: '18-4', name: 'Drawing', slug: 'drawing' },
    ]
  },
  {
    id: '19',
    name: 'Musical Instruments',
    slug: 'musical-instruments',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400',
    productCount: 1120,
    subcategories: [
      { id: '19-1', name: 'Guitars', slug: 'guitars' },
      { id: '19-2', name: 'Keyboards', slug: 'keyboards' },
      { id: '19-3', name: 'Drums', slug: 'drums' },
      { id: '19-4', name: 'Audio Equipment', slug: 'audio-equipment' },
    ]
  },
  {
    id: '20',
    name: 'Grocery Essentials',
    slug: 'grocery-essentials',
    image: 'https://images.unsplash.com/photo-1543168256-418811576931?w=400',
    productCount: 4560,
    subcategories: [
      { id: '20-1', name: 'Fresh Foods', slug: 'fresh-foods' },
      { id: '20-2', name: 'Pantry Staples', slug: 'pantry-staples' },
      { id: '20-3', name: 'Snacks', slug: 'snacks' },
      { id: '20-4', name: 'Drinks', slug: 'drinks' },
    ]
  },
];

// Brand names by category
const brandsByCategory: Record<string, string[]> = {
  '1': ['Apple', 'Samsung', 'Xiaomi', 'Tecno', 'Infinix', 'OnePlus', 'Google', 'Oppo', 'Huawei', 'Realme'],
  '2': ['Sony', 'Samsung', 'LG', 'Apple', 'JBL', 'Bose', 'Dell', 'HP', 'Canon', 'Nikon'],
  '3': ['Zara', 'H&M', 'Nike', 'Adidas', 'Gucci', 'Louis Vuitton', 'Chanel', 'Forever 21', 'Mango', 'Primark'],
  '4': ['Nike', 'Adidas', 'Ralph Lauren', 'Tommy Hilfiger', 'Hugo Boss', 'Zara', 'H&M', 'Lacoste', 'Uniqlo', 'Calvin Klein'],
  '5': ['IKEA', 'Dyson', 'Philips', 'Samsung', 'LG', 'Bosch', 'Whirlpool', 'KitchenAid', 'Electrolux', 'Breville'],
  '6': ['L\'Oreal', 'Maybelline', 'MAC', 'Nivea', 'Olay', 'Estee Lauder', 'Clinique', 'The Ordinary', 'Cerave', 'Neutrogena'],
  '7': ['Nestle', 'Coca-Cola', 'PepsiCo', 'Unilever', 'P&G', 'Kellogg\'s', 'Kraft', 'Mondelez', 'Danone', 'Mars'],
  '8': ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer', 'Microsoft', 'Intel', 'AMD', 'Logitech'],
  '9': ['Sony', 'Microsoft', 'Nintendo', 'Razer', 'Corsair', 'SteelSeries', 'Logitech', 'HyperX', 'ASUS ROG', 'MSI'],
  '10': ['Nike', 'Adidas', 'Under Armour', 'Puma', 'Reebok', 'New Balance', 'Asics', 'Fitbit', 'Garmin', 'Decathlon'],
};

// Product name templates
const productTemplates: Record<string, string[]> = {
  '1': [
    '{brand} {model} Smartphone {storage}GB',
    '{brand} Tablet {size}" Display',
    'Wireless Earbuds Pro by {brand}',
    '{brand} Power Bank {capacity}mAh',
    '{brand} Smart Watch Series {version}',
    'Premium Phone Case for {model}',
  ],
  '2': [
    '{brand} {size}" 4K Smart TV',
    '{brand} Wireless Headphones',
    '{brand} Laptop {processor} {ram}GB RAM',
    '{brand} DSLR Camera {megapixels}MP',
    '{brand} Bluetooth Speaker',
    '{brand} Gaming Monitor {size}"',
  ],
  '3': [
    '{brand} Designer Dress - {color}',
    '{brand} Premium Handbag',
    '{brand} Women\'s Running Shoes',
    '{brand} Gold Plated Necklace',
    '{brand} Casual Blouse - {style}',
  ],
  '4': [
    '{brand} Men\'s Casual Shirt - {color}',
    '{brand} Leather Belt Premium',
    '{brand} Sports Watch',
    '{brand} Sneakers - {style}',
    '{brand} Slim Fit Trousers',
  ],
  '5': [
    '{brand} Vacuum Cleaner Pro',
    '{brand} Coffee Machine',
    '{brand} Air Purifier',
    '{brand} Ergonomic Office Chair',
    '{brand} Kitchen Blender {power}W',
  ],
};

const images = {
  phones: [
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600',
    'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600',
    'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
  ],
  electronics: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600',
    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600',
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
  ],
  fashion: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600',
    'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600',
  ],
  home: [
    'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600',
  ],
  beauty: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600',
  ],
  general: [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
  ],
};

// Generate random price in kobo (Nigerian currency)
const generatePrice = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min) * 100;
};

// Generate random rating
const generateRating = (): number => {
  return Math.round((3.5 + Math.random() * 1.5) * 10) / 10;
};

// Get image for category
const getImageForCategory = (categoryId: string): string => {
  const id = parseInt(categoryId);
  if (id === 1) return images.phones[Math.floor(Math.random() * images.phones.length)];
  if (id === 2 || id === 8 || id === 9) return images.electronics[Math.floor(Math.random() * images.electronics.length)];
  if (id === 3 || id === 4) return images.fashion[Math.floor(Math.random() * images.fashion.length)];
  if (id === 5) return images.home[Math.floor(Math.random() * images.home.length)];
  if (id === 6) return images.beauty[Math.floor(Math.random() * images.beauty.length)];
  return images.general[Math.floor(Math.random() * images.general.length)];
};

// Generate products for a category
export const generateProducts = (count: number, options?: {
  categoryId?: string;
  isFlashSale?: boolean;
  isTopDeal?: boolean;
  isNewArrival?: boolean;
}): Product[] => {
  const products: Product[] = [];
  const categoryIds = options?.categoryId ? [options.categoryId] : generatedCategories.map(c => c.id);
  
  for (let i = 0; i < count; i++) {
    const categoryId = categoryIds[Math.floor(Math.random() * categoryIds.length)];
    const category = generatedCategories.find(c => c.id === categoryId)!;
    const brands = brandsByCategory[categoryId] || ['Generic', 'Premium', 'Value', 'Pro', 'Elite'];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    
    const basePrice = generatePrice(5000, 500000);
    const hasDiscount = options?.isFlashSale || options?.isTopDeal || Math.random() > 0.6;
    const discount = hasDiscount ? Math.floor(Math.random() * 50) + 10 : undefined;
    const originalPrice = discount ? Math.floor(basePrice / (1 - discount / 100)) : undefined;
    
    products.push({
      id: `gen-${Date.now()}-${i}`,
      name: `${brand} ${category.name} Product ${i + 1}`,
      description: `High quality ${category.name.toLowerCase()} product from ${brand}. Features premium materials and excellent craftsmanship.`,
      price: basePrice,
      originalPrice,
      discount,
      image: getImageForCategory(categoryId),
      category: category.name,
      categoryId,
      brand,
      rating: generateRating(),
      reviewCount: Math.floor(Math.random() * 500) + 10,
      inStock: Math.random() > 0.1,
      stockCount: Math.floor(Math.random() * 100) + 5,
      features: [
        'Premium Quality',
        'Fast Shipping',
        '1 Year Warranty',
        'Easy Returns',
      ],
    });
  }
  
  return products;
};

// Generate flash sales
export const generateFlashSales = (count: number): Product[] => {
  return generateProducts(count, { isFlashSale: true });
};

// Generate top deals
export const generateTopDeals = (count: number): Product[] => {
  return generateProducts(count, { isTopDeal: true });
};

// Generate new arrivals
export const generateNewArrivals = (count: number): Product[] => {
  return generateProducts(count, { isNewArrival: true });
};

// Generate hero banners
export const generateHeroBanners = (): PromoBanner[] => {
  return [
    { id: '1', title: 'Flash Sale! Up to 70% Off', subtitle: 'Limited time offers on Electronics & Gadgets', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200', link: '/deals', backgroundColor: '#f97316' },
    { id: '2', title: 'New Arrivals', subtitle: 'Latest smartphones at the best prices', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200', link: '/new-arrivals', backgroundColor: '#1e293b' },
    { id: '3', title: 'Fashion Week Sale', subtitle: 'Top brands at unbeatable prices', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200', link: '/category/fashion-women', backgroundColor: '#ec4899' },
    { id: '4', title: 'Home & Living Deals', subtitle: 'Transform your space for less', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200', link: '/category/home-office', backgroundColor: '#10b981' },
    { id: '5', title: 'Gaming Paradise', subtitle: 'Consoles, games & accessories', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200', link: '/category/gaming', backgroundColor: '#7c3aed' },
    { id: '6', title: 'Beauty Bonanza', subtitle: 'Skincare & makeup essentials', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200', link: '/category/health-beauty', backgroundColor: '#f472b6' },
    { id: '7', title: 'Tech Week Specials', subtitle: 'Laptops, tablets & more', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200', link: '/category/computing', backgroundColor: '#0ea5e9' },
    { id: '8', title: 'Sports & Fitness', subtitle: 'Gear up for your goals', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200', link: '/category/sports-fitness', backgroundColor: '#14b8a6' },
    { id: '9', title: 'Kids Collection', subtitle: 'Everything for your little ones', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200', link: '/category/baby-kids', backgroundColor: '#a855f7' },
    { id: '10', title: 'Automotive Deals', subtitle: 'Car parts & accessories', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200', link: '/category/automobile', backgroundColor: '#ef4444' },
    { id: '11', title: 'Garden & Outdoor', subtitle: 'Create your outdoor oasis', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200', link: '/category/garden-outdoor', backgroundColor: '#22c55e' },
    { id: '12', title: 'Book Fair', subtitle: 'Best sellers & new releases', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200', link: '/category/books-media', backgroundColor: '#854d0e' },
    { id: '13', title: 'Pet Shop Sale', subtitle: 'Everything for furry friends', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200', link: '/category/pet-supplies', backgroundColor: '#ea580c' },
    { id: '14', title: 'Jewelry Collection', subtitle: 'Elegant pieces for every occasion', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200', link: '/category/jewelry-watches', backgroundColor: '#b45309' },
    { id: '15', title: 'Arts & Crafts', subtitle: 'Unleash your creativity', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200', link: '/category/arts-crafts', backgroundColor: '#0369a1' },
    { id: '16', title: 'Music Store', subtitle: 'Instruments & equipment', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200', link: '/category/musical-instruments', backgroundColor: '#7c2d12' },
    { id: '17', title: 'Grocery Essentials', subtitle: 'Stock up on daily needs', image: 'https://images.unsplash.com/photo-1543168256-418811576931?w=1200', link: '/category/grocery-essentials', backgroundColor: '#16a34a' },
    { id: '18', title: 'Weekend Flash Deals', subtitle: 'Extra discounts this weekend only', image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200', link: '/top-deals', backgroundColor: '#dc2626' },
    { id: '19', title: 'Back to School', subtitle: 'Everything students need', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200', link: '/products', backgroundColor: '#0891b2' },
    { id: '20', title: 'Premium Brands', subtitle: 'Shop luxury for less', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200', link: '/products', backgroundColor: '#4f46e5' },
  ];
};

// Export format price function
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price / 100);
};