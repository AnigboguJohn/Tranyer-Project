import { Product } from '@/types';

export type ProductRegion = 'africa' | 'asia' | 'europe' | 'americas' | 'global';

interface RegionModifier {
  multiplier: number;
  priorityCategories: string[];
  label: string;
}

const REGION_MODIFIERS: Record<ProductRegion, RegionModifier> = {
  global: {
    multiplier: 1,
    priorityCategories: [],
    label: 'Global',
  },
  africa: {
    multiplier: 0.95,
    priorityCategories: ['Phones & Tablets', 'Electronics', 'Accessories'],
    label: 'Africa',
  },
  asia: {
    multiplier: 0.92,
    priorityCategories: ['Phones & Tablets', 'Accessories', 'Electronics'],
    label: 'Asia',
  },
  europe: {
    multiplier: 1.08,
    priorityCategories: ['Electronics', 'Computers', 'Home Appliances'],
    label: 'Europe',
  },
  americas: {
    multiplier: 1,
    priorityCategories: ['Audio', 'Electronics', 'Gaming'],
    label: 'Americas',
  },
};

const getRegionFromCoordinates = (latitude: number, longitude: number): ProductRegion => {
  if (longitude >= -170 && longitude <= -30 && latitude >= -60 && latitude <= 72) {
    return 'americas';
  }

  if (longitude >= -25 && longitude <= 45 && latitude >= 35 && latitude <= 72) {
    return 'europe';
  }

  if (longitude >= -20 && longitude <= 60 && latitude >= -35 && latitude <= 37) {
    return 'africa';
  }

  if (longitude >= 45 && longitude <= 180 && latitude >= -10 && latitude <= 60) {
    return 'asia';
  }

  return 'global';
};

const getCurrentPosition = (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not available')); 
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 1000 * 60 * 5,
      timeout: 4000,
    });
  });

const applyRegionalPricing = (products: Product[], region: ProductRegion): Product[] => {
  const modifier = REGION_MODIFIERS[region] || REGION_MODIFIERS.global;

  return products
    .map((product) => {
      const adjustedPrice = Math.max(1, Math.round(product.price * modifier.multiplier));
      const adjustedOriginalPrice = product.originalPrice
        ? Math.max(1, Math.round(product.originalPrice * modifier.multiplier))
        : undefined;

      return {
        ...product,
        price: adjustedPrice,
        originalPrice: adjustedOriginalPrice,
      };
    })
    .sort((a, b) => {
      const aPriority = modifier.priorityCategories.includes(a.category) ? 0 : 1;
      const bPriority = modifier.priorityCategories.includes(b.category) ? 0 : 1;

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      return a.price - b.price;
    });
};

export interface LocationProductResponse {
  region: ProductRegion;
  products: Product[];
}

export const fetchProductsByLocation = async (baseProducts: Product[]): Promise<LocationProductResponse> => {
  let region: ProductRegion = 'global';

  try {
    const position = await getCurrentPosition();
    region = getRegionFromCoordinates(position.coords.latitude, position.coords.longitude);
  } catch {
    region = 'global';
  }

  const products = applyRegionalPricing(baseProducts, region);

  return { products, region };
};
