import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { categories } from '@/data/mockData';

const Categories = () => {
  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold">All Categories</h1>
          <p className="text-muted-foreground mt-1">
            Browse our complete collection of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg line-clamp-2">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {category.productCount.toLocaleString()} products
                  </p>
                </div>
              </div>
              {category.subcategories && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub.id}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
