import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Tech Gadgets to Watch in 2024',
    excerpt: 'Discover the hottest tech products that are taking the market by storm this year.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
    author: 'Tech Team',
    date: '2024-01-15',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'How to Shop Smart Online: A Complete Guide',
    excerpt: 'Learn the best practices for finding great deals and avoiding scams when shopping online.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600',
    author: 'Shopping Expert',
    date: '2024-01-10',
    category: 'Shopping Tips',
  },
  {
    id: 3,
    title: 'Fashion Trends You Need to Know',
    excerpt: 'Stay ahead of the curve with the latest fashion trends from top designers.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
    author: 'Fashion Team',
    date: '2024-01-05',
    category: 'Fashion',
  },
  {
    id: 4,
    title: 'Sustainable Shopping: Making Eco-Friendly Choices',
    excerpt: 'How to make environmentally conscious decisions while still getting what you need.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    author: 'Green Living',
    date: '2024-01-01',
    category: 'Sustainability',
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Tranyer Blog</h1>
          <p className="text-xl text-muted-foreground">
            News, tips, and insights about shopping, tech, fashion, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-xl border overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <h2 className="font-display text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <Link to="#" className="flex items-center gap-1 text-primary hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
