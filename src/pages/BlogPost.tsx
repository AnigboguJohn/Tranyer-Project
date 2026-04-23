import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  { id: '1', title: 'Top 10 Tech Gadgets to Watch in 2025', excerpt: 'Discover the hottest tech products taking the market by storm.', content: 'The tech industry continues to evolve at a rapid pace. From AI-powered devices to sustainable gadgets, here are the top 10 tech products you need to watch this year. First on our list is the new generation of foldable smartphones that have finally achieved mainstream appeal with improved durability and competitive pricing. Second, we have AI assistants that can now understand context better than ever before...', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200', author: 'Tech Team', date: '2025-01-15', category: 'Technology' },
  { id: '2', title: 'How to Shop Smart Online: A Complete Guide', excerpt: 'Learn best practices for finding great deals online.', content: 'Online shopping has revolutionized the way we buy products. But with so many options available, how do you ensure you\'re getting the best deals while staying safe? This comprehensive guide covers everything from comparing prices across platforms to identifying genuine reviews. Always start by checking multiple retailers for the same product...', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200', author: 'Shopping Expert', date: '2025-01-10', category: 'Shopping Tips' },
  { id: '3', title: 'Fashion Trends You Need to Know', excerpt: 'Stay ahead with the latest fashion trends.', content: 'Fashion is ever-evolving, and 2025 brings exciting new trends. From sustainable fashion to bold color combinations, here\'s what\'s hot this season. Oversized silhouettes continue to dominate, while vintage-inspired pieces make a strong comeback. Earthy tones mixed with vibrant accents create stunning contrasts...', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200', author: 'Fashion Team', date: '2025-01-05', category: 'Fashion' },
  { id: '4', title: 'Sustainable Shopping: Making Eco-Friendly Choices', excerpt: 'How to make environmentally conscious decisions.', content: 'Sustainability isn\'t just a buzzword—it\'s becoming a lifestyle choice for millions. Learn how to reduce your environmental impact while still getting what you need. Look for products with minimal packaging, choose items made from recycled materials, and support brands with transparent supply chains...', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200', author: 'Green Living', date: '2025-01-01', category: 'Sustainability' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container py-8 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{post.category}</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString()}</span>
          <Button variant="ghost" size="sm"><Share2 className="w-4 h-4 mr-1" />Share</Button>
        </div>

        <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-xl mb-8" />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">{post.content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;