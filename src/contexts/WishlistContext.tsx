import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

interface WishlistContextType {
  items: Product[];
  isLoading: boolean;
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
  itemCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
const WISHLIST_STORAGE_KEY = 'tranyer_wishlist';

const getWishlistKey = (userId: string | null) => {
  return userId ? `${WISHLIST_STORAGE_KEY}_${userId}` : `${WISHLIST_STORAGE_KEY}_guest`;
};

const loadWishlist = (userId: string | null) => {
  const stored = localStorage.getItem(getWishlistKey(userId));
  return stored ? (JSON.parse(stored) as Product[]) : [];
};

const saveWishlist = (userId: string | null, items: Product[]) => {
  localStorage.setItem(getWishlistKey(userId), JSON.stringify(items));
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    const loaded = loadWishlist(user?.id ?? null);
    setItems(loaded);
    setIsLoading(false);
  }, [user]);

  const persistWishlist = (updatedItems: Product[]) => {
    saveWishlist(user?.id ?? null, updatedItems);
    setItems(updatedItems);
  };

  const addToWishlist = async (product: Product) => {
    if (!user) {
      toast.error('Please sign in to add items to your wishlist');
      return;
    }

    if (items.some((item) => item.id === product.id)) {
      toast.info('Item already in wishlist');
      return;
    }

    const updatedItems = [...items, product];
    persistWishlist(updatedItems);
    toast.success(`Added ${product.name} to wishlist`);
  };

  const removeFromWishlist = async (productId: string) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    persistWishlist(updatedItems);
    toast.success('Removed from wishlist');
  };

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        isLoading,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        itemCount: items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
