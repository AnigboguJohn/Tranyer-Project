import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, SlidersHorizontal } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, allProducts } from '@/data/mockData';
import { generateProducts } from '@/lib/productGenerator';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PRODUCTS_PER_PAGE = 20;

const Category = () => {
  const { slug, subcategorySlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popular');
  const [priceFilter, setPriceFilter] = useState('all');
  
  const category = useMemo(() => {
    return categories.find((c) => c.slug === slug);
  }, [slug]);

  const subcategory = useMemo(() => {
    if (!category || !subcategorySlug) return null;
    return category.subcategories?.find((s) => s.slug === subcategorySlug);
  }, [category, subcategorySlug]);

  // Get products from multiple sources and generate more if needed
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    
    // Get products from mock data
    let baseProducts = allProducts.filter((p) => p.categoryId === category.id);
    
    // If we have a subcategory, filter further or generate subcategory-specific products
    if (subcategory) {
      // For subcategories, generate products specific to that subcategory
      const generatedSubProducts = generateProducts(50, { categoryId: category.id });
      // Update names to reflect subcategory
      const subProducts = generatedSubProducts.map((p, i) => ({
        ...p,
        id: `${subcategory.id}-${i}`,
        name: `${p.brand} ${subcategory.name} ${i + 1}`,
        description: `Premium ${subcategory.name.toLowerCase()} product. High quality and excellent value.`,
      }));
      baseProducts = [...baseProducts.slice(0, 10), ...subProducts];
    }
    
    // If we still don't have enough products, generate more
    if (baseProducts.length < 50) {
      const generated = generateProducts(50 - baseProducts.length, { categoryId: category.id });
      baseProducts = [...baseProducts, ...generated];
    }

    // Apply price filter
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      baseProducts = baseProducts.filter(p => {
        const price = p.price / 100; // Convert kobo to naira
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        baseProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        baseProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        baseProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        baseProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        // Popular - sort by review count
        baseProducts.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    return baseProducts;
  }, [category, subcategory, sortBy, priceFilter]);

  // Pagination
  const totalPages = Math.ceil(categoryProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = categoryProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  if (!category) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/categories" className="text-primary hover:underline">
            Browse all categories
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/categories" className="hover:text-primary">Categories</Link>
          <ChevronRight className="h-4 w-4" />
          {subcategory ? (
            <>
              <Link to={`/category/${category.slug}`} className="hover:text-primary">{category.name}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{subcategory.name}</span>
            </>
          ) : (
            <span className="text-foreground">{category.name}</span>
          )}
        </nav>

        {/* Header */}
        <div className="relative h-40 md:h-56 rounded-xl overflow-hidden mb-8">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="px-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
                {subcategory ? subcategory.name : category.name}
              </h1>
              <p className="text-white/80 mt-2">
                {categoryProducts.length} products
              </p>
            </div>
          </div>
        </div>

        {/* Subcategories */}
        {!subcategory && category.subcategories && category.subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {category.subcategories.map((sub) => (
              <Link
                key={sub.id}
                to={`/category/${category.slug}/${sub.slug}`}
                className="px-4 py-2 bg-card border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* Filters and Sorting */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-6 p-4 bg-card rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Sort:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="discount">Best Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Price:</span>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-10000">Under ₦10,000</SelectItem>
                  <SelectItem value="10000-50000">₦10,000 - ₦50,000</SelectItem>
                  <SelectItem value="50000-100000">₦50,000 - ₦100,000</SelectItem>
                  <SelectItem value="100000-500000">₦100,000 - ₦500,000</SelectItem>
                  <SelectItem value="500000-">Above ₦500,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {paginatedProducts.length} of {categoryProducts.length} products
          </p>
        </div>

        {/* Products */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-card rounded-xl">
            <p className="text-muted-foreground">No products found matching your filters</p>
            <Button variant="outline" className="mt-4" onClick={() => { setPriceFilter('all'); setSortBy('popular'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
