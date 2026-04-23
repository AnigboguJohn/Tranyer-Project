/**
 * Products Page Component
 * 
 * Main product listing page with filtering and sorting capabilities.
 * Features:
 * - Search functionality via URL parameters
 * - Price range filter with slider
 * - Brand filtering with checkboxes
 * - Rating filter
 * - Sort by: featured, newest, price, rating
 * - Grid/List view toggle
 * - Responsive sidebar filters (sheet on mobile)
 * - Full multi-language support
 * 
 * @component
 */

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { products } from '@/data/mockData';
import { useLocalization } from '@/contexts/LocalizationContext';

const Products = () => {
  // Get search query from URL parameters
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  // Get translation and price formatting functions
  const { t, formatPrice } = useLocalization();

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  /**
   * Extract unique brands from products
   * Memoized to prevent recalculation on every render
   */
  const brands = useMemo(() => {
    return [...new Set(products.map((p) => p.brand))];
  }, []);

  /**
   * Filter and sort products based on current filter state
   * Memoized for performance optimization
   */
  const filteredProducts = useMemo(() => {
    let result = products;

    // Apply search filter if query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Apply price range filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Apply brand filter if any brands selected
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Apply rating filter if set
    if (selectedRating) {
      result = result.filter((p) => p.rating >= selectedRating);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = [...result].reverse();
        break;
    }

    return result;
  }, [searchQuery, priceRange, selectedBrands, selectedRating, sortBy]);

  /**
   * Toggle brand selection in filter
   * @param brand - Brand name to toggle
   */
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  /**
   * Reset all filters to default values
   */
  const clearAllFilters = () => {
    setPriceRange([0, 2000000]);
    setSelectedBrands([]);
    setSelectedRating(null);
  };

  /**
   * Filters Content Component
   * Reusable filter UI for both sidebar and mobile sheet
   */
  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <div>
        <h4 className="font-semibold mb-4">{t('common.price')}</h4> {/* Translated: Price Range */}
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={2000000}
          step={10000}
          className="mb-3"
        />
        {/* Display current price range */}
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Brands Filter */}
      <div>
        <h4 className="font-semibold mb-4">Brands</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Minimum Rating Filter */}
      <div>
        <h4 className="font-semibold mb-4">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedRating === rating}
                onCheckedChange={() =>
                  setSelectedRating(selectedRating === rating ? null : rating)
                }
              />
              <span className="text-sm">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} & up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Filters Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={clearAllFilters}
      >
        {t('common.cancel')} {t('common.filter')} {/* Translated: Clear All Filters */}
      </Button>
    </div>
  );

  return (
    <Layout>
      <div className="container py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="font-display text-2xl md:text-3xl font-bold">
            {/* Show search query or "All Products" */}
            {searchQuery ? `${t('common.search')}: "${searchQuery}"` : t('nav.products')}
          </h1>
          <p className="text-muted-foreground mt-1">
            {filteredProducts.length} {t('nav.products').toLowerCase()}
          </p>
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar Filters - Hidden on mobile */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-card rounded-xl p-6 sticky top-24">
              <h3 className="font-display font-bold text-lg mb-6">
                {t('common.filter')} {/* Translated: Filters */}
              </h3>
              <FiltersContent />
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Toolbar - Filter button (mobile), Sort, View toggle */}
            <div className="flex items-center justify-between gap-4 mb-6 bg-card rounded-xl p-4">
              
              {/* Mobile Filter Button - Opens sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    {t('common.filter')} {/* Translated: Filters */}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>{t('common.filter')}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort and View Mode Controls */}
              <div className="flex items-center gap-3 ml-auto">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder={t('common.sort')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">{t('common.price')}: Low to High</SelectItem>
                    <SelectItem value="price-high">{t('common.price')}: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* Grid/List View Toggle - Hidden on small screens */}
                <div className="hidden sm:flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              // Empty state when no products match filters
              <div className="text-center py-12 bg-card rounded-xl">
                <p className="text-muted-foreground text-lg">
                  {t('nav.products')} not found
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
