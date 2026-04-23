export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  category: string;
  categoryId: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount?: number;
  features?: string[];
  specifications?: Record<string, string>;
  apiKey?: string;
  categoryApiKey?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  productId: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
  helpful: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id?: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  isDefault?: boolean;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  backgroundColor?: string;
}
