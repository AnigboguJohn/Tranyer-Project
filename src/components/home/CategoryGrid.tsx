/**
 * CategoryGrid Component
 * 
 * Displays a grid of product categories on the homepage.
 * Features:
 * - Shows first 8 categories from mock data
 * - Each category is a clickable card with image and product count
 * - "See All" link to view all categories
 * - Fully translated using useLocalization hook
 * 
 * @component
 */

import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import { useLocalization } from '@/contexts/LocalizationContext';

const CategoryGrid = () => {
  // Get translation function from LocalizationContext
  const { t } = useLocalization();
  
  // Display only first 8 categories on homepage for clean layout
  const displayCategories = categories.slice(0, 8);

  return (
    <section className="py-8">
      {/* Section Header with title and "See All" link */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold">
          {t('sections.categories')} {/* Translated: Shop by Category */}
        </h2>
        <Link to="/categories" className="text-primary font-medium hover:underline">
          {t('common.viewAll')} ({categories.length}) {/* Translated: See All */}
        </Link>
      </div>

      {/* Categories Grid - Responsive: 2 cols mobile, 4 cols desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayCategories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className="category-card group"
          >
            {/* Category Card with image overlay */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Category Name and Product Count */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-xs mt-1">
                  {category.productCount.toLocaleString()} {t('nav.products').toLowerCase()}
                  {/* Translated: X products */}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
