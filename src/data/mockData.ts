import { Product, Category, PromoBanner } from '@/types';
import { generatedCategories, generateHeroBanners, formatPrice as formatPriceUtil, generateProducts } from '@/lib/productGenerator';

// Export all 20 categories
export const categories: Category[] = generatedCategories;

// Generate a massive dataset of 100,000+ products across all categories
// This simulates a real marketplace API with diverse products and prices
const generateMassiveProductDataset = (): Product[] => {
  const allProducts: Product[] = [];
  let productId = 1;

  // Generate products for each category
  generatedCategories.forEach((category) => {
    const categoryProducts = generateProducts(5000, { categoryId: category.id });
    categoryProducts.forEach((product) => {
      allProducts.push({
        ...product,
        id: productId.toString(),
        categoryId: category.id,
        category: category.name,
      });
      productId++;
    });
  });

  return allProducts;
};

// Generate the massive product dataset
export const products: Product[] = generateMassiveProductDataset();

// For backward compatibility and performance, export a smaller subset for initial loads
export const allProducts = products;

// Export the 20 hero banners
export const promoBanners: PromoBanner[] = generateHeroBanners();

// Format price utility
export const formatPrice = formatPriceUtil;