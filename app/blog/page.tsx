import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog – Travel Guides, Kerala & Eco-Tourism | GreenNest',
  description:
    'Read GreenNest blog posts about Kanthalloor travel, Kerala highland adventures, eco-tourism, and sustainable mountain living.',
};

const posts = [
  {
    slug: 'best-places-kanthalloor',
    title: 'Best Places to Visit in Kanthalloor, Kerala',
    excerpt: 'From apple orchards to mountain viewpoints — a complete guide to the best spots in Kanthalloor.',
    date: 'May 2026',
    category: 'Travel Guide',
    readTime: '6 min read',
  },
  {
    slug: 'kanthalloor-vs-munnar',
    title: 'Kanthalloor vs Munnar: Which is Right for You?',
    excerpt: 'Two of Kerala\'s most beautiful highland destinations — but they offer very different experiences.',
    date: 'April 2026',
    category: 'Comparison',
    readTime: '5 min read',
  },
  {
    slug: 'fruit-farms-kanthalloor',
    title: 'Inside Kanthalloor\'s Remarkable Fruit Farms',
    excerpt: 'Apples, strawberries, peaches — how a Kerala village became one of South India\'s most unusual farming destinations.',
    date: 'March 2026',
    category: 'Agriculture',
    readTime: '7 min read',
  },
  {
    slug: 'weekend-getaway-kochi',
    title: 'Perfect Weekend Getaway from Kochi: Kanthalloor',
    excerpt: 'Just 160 km from Kochi, Kanthalloor is the ideal weekend escape. Here\'s your complete road trip guide.',
    date: 'February 2026',
    category: 'Travel Guide',
    readTime: '8 min read',
  },
  {
    slug: 'why-eco-tourism-matters',
    title: 'Why Eco-Tourism Matters More Than Ever',
    excerpt: 'As travel rebounds post-pandemic, the choices we make as tourists have profound implications for fragile ecosystems.',
    date: 'January 2026',
    category: 'Sustainability',
    readTime: '5 min read',
  },
  {
    slug: 'best-time-visit-kanthalloor',
    title: 'Best Time to Visit Kanthalloor: A Month-by-Month Guide',
    excerpt: 'Every season in Kanthalloor has something magical to offer. Here\'s how to pick the perfect time for your trip.',
    date: 'December 2025',
    category: 'Travel Tips',
    readTime: '6 min read',
  },
  {
    slug: 'nature-retreats-kerala',
    title: 'Top Nature Retreats in Kerala\'s High Ranges',
    excerpt: 'Kerala\'s highlands are home to some of India\'s most spectacular nature escapes. Kanthalloor leads the pack.',
    date: 'November 2025',
    category: 'Destination',
    readTime: '7 min read',
  },
  {
    slug: 'hidden-gems-kerala-highlands',
    title: 'Hidden Gems in the Kerala Highlands',
    excerpt: 'Beyond Munnar and Wayanad lie some of Kerala\'s most breathtaking and least-visited mountain destinations.',
    date: 'October 2025',
    category: 'Destination',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">Stories & Guides</p>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">GreenNest Blog</h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              Travel guides, Kanthalloor stories, eco-tourism insights, and behind-the-scenes updates from the GreenNest journey.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-24 bg-[#F7F6F2]" aria-label="Blog articles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card top color band */}
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-text mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary text-sm font-semibold hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
