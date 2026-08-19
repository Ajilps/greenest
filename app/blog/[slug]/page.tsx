import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  'best-places-kanthalloor': {
    title: 'Best Places to Visit in Kanthalloor, Kerala',
    date: 'May 2026',
    category: 'Travel Guide',
    readTime: '6 min read',
    content: `
Kanthalloor, tucked into the high ranges of Idukki District at nearly 1,400 metres above sea level, is one of Kerala's most rewarding destinations for travellers who prefer nature over noise. Here are the must-visit spots.

## 1. Kanthalloor Apple Orchards

The star attraction. Walking through rows of apple trees in a subtropical Indian state is an experience that defies expectation. The orchards are accessible through local farm stays, and the best time to visit for harvest is September to November. Many farms allow visitors to pick apples directly — a truly unique experience.

## 2. Kanthalloor Strawberry Farms

Between December and February, the roadside stalls overflow with fresh strawberries. The fields are often open for farm visits, and the flavour of a freshly picked Kanthalloor strawberry is unlike anything you'll find in a supermarket. Don't leave without picking up a few kilograms to take home.

## 3. Kanthalloor Viewpoints

Several natural viewpoints offer panoramic views of the Tamil Nadu plains below and the rolling green peaks of the Western Ghats. Sunrise here — when the valley is still wrapped in cloud and the peaks glow orange — is one of the most spectacular sights in all of Kerala.

## 4. Chinnar Wildlife Sanctuary (Nearby)

About 35 km from Kanthalloor, Chinnar is a dry deciduous forest reserve bordering Tamil Nadu. It's home to grizzled giant squirrels, Indian leopards, elephants, and slender lorises. Guided treks and overnight forest stays are available.

## 5. Marayoor Sandalwood Forest

Just 12 km from Kanthalloor, Marayoor is home to the only natural sandalwood forest in Kerala — a rare and protected ecosystem. The nearby Muniyara Dolmens (prehistoric burial chambers) add historical intrigue to any visit.

## 6. Thoovanam Waterfalls

A beautiful waterfall accessible via a forest trek through Chinnar Wildlife Sanctuary. The falls cascade into a natural pool surrounded by dense forest — ideal for photography and nature walks.

## 7. Village Markets

The weekly markets in and around Kanthalloor are a window into highland farming life. Local fruits, vegetables, spices, and handicrafts are sold by farmers who have worked this land for generations.

## Getting There

Kanthalloor is approximately 35 km from Munnar (about 1.5 hours by road) and around 160 km from Kochi (4–5 hours). The drive through the mountains is itself a highlight — scenic, winding, and increasingly beautiful the higher you climb.

---

*greenest is a future eco-friendly mountain homestay coming soon to Kanthalloor. Join our waiting list to be the first to experience it.*
    `,
  },
  'kanthalloor-vs-munnar': {
    title: 'Kanthalloor vs Munnar: Which is Right for You?',
    date: 'April 2026',
    category: 'Comparison',
    readTime: '5 min read',
    content: `
Both Kanthalloor and Munnar offer the Kerala highlands experience — but they do so in very different ways. Understanding the differences will help you choose the right destination for your trip.

## Munnar: The Popular Choice

Munnar is Kerala's most visited hill station, and for good reason. Its vast tea estates, rolling green hills, and well-developed tourism infrastructure make it an easy, comfortable destination. Accommodation ranges from budget guesthouses to luxury resorts. Restaurants, shops, and guided tours are abundant.

The flip side: Munnar is busy. Very busy. Peak season traffic, crowded viewpoints, and commercial tourism have changed the character of many parts of the town. For travellers seeking true solitude and unspoiled nature, Munnar can feel overwhelming.

## Kanthalloor: The Discerning Traveller's Choice

Kanthalloor offers many of the same highland landscapes — misty mountains, cool climate, greenery — but without the crowds. The village is quieter, more authentic, and home to something Munnar simply cannot offer: apple orchards and strawberry farms.

The trade-off is infrastructure. Accommodation and dining options in Kanthalloor are fewer and more rustic. But for travellers who value peace, privacy, and genuine immersion in mountain life, this is a feature, not a bug.

## Side-by-Side Comparison

| Feature | Munnar | Kanthalloor |
|---|---|---|
| Crowd Level | High | Low |
| Accommodation | Extensive | Limited but growing |
| Unique Attraction | Tea estates | Apple & strawberry orchards |
| Altitude | ~1,600m | ~1,400m |
| Distance from Kochi | 130km | 160km |
| Best For | First-time visitors | Repeat travellers seeking authenticity |

## Our Verdict

If this is your first trip to the Kerala highlands, Munnar is a safe and rewarding choice. If you've been before and want something quieter, more unusual, and genuinely off the beaten path — Kanthalloor is calling.

---

*greenest is building a premium eco-friendly homestay in Kanthalloor — designed specifically for travellers who want more than a standard mountain holiday.*
    `,
  },
  'why-eco-tourism-matters': {
    title: 'Why Eco-Tourism Matters More Than Ever',
    date: 'January 2026',
    category: 'Sustainability',
    readTime: '5 min read',
    content: `
Travel has always had a complicated relationship with the environment. The same mountains, beaches, and forests that draw millions of visitors each year are often degraded by the weight of that attention.

Eco-tourism offers a different model — one where travel actively supports conservation, empowers local communities, and treads as lightly as possible on the ecosystems it celebrates.

## What Is Eco-Tourism?

Eco-tourism is responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves education and interpretation of the natural and cultural heritage.

It is not merely staying somewhere with solar panels (though that helps). True eco-tourism involves:

- **Minimal environmental impact** — from construction to waste management to energy use
- **Community integration** — local employment, local sourcing, local culture
- **Education** — helping guests understand and appreciate the ecosystem
- **Conservation support** — channelling tourism revenue toward protecting the natural environment

## Why It Matters Now

India's tourism sector is booming. Kerala alone saw over 15 million visitors in 2023. That volume of human traffic, channelled carelessly, puts immense pressure on fragile highland ecosystems like those around Kanthalloor, Munnar, and Wayanad.

The Western Ghats are a UNESCO World Heritage Site — one of the world's eight biodiversity hotspots. They deserve tourism that enhances rather than extracts.

## The greenest Approach

At greenest, sustainability is not a marketing strategy. It is a founding principle. Our upcoming Kanthalloor homestay is being designed with:

- Locally sourced construction materials wherever possible
- Solar energy and rainwater harvesting
- Organic farming and composting
- Partnerships with local farmers and artisans
- A strict no-single-use-plastic policy

We believe that luxury and responsibility are not opposites. The most meaningful travel experiences are those that leave a place — and a person — better than before.

---

*greenest is coming soon to Kanthalloor, Kerala. Join the waiting list to be part of sustainable tourism done right.*
    `,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Blog | greenest' };
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/[#\n]/g, ' ').trim(),
    openGraph: { title: post.title, type: 'article' },
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 text-center">
          <h1 className="font-heading text-4xl font-bold text-text mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-8">This article doesn&rsquo;t exist yet — check back soon.</p>
          <Link href="/blog" className="px-6 py-3 rounded-full bg-[#2E5E4E] text-white font-bold text-sm">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // Convert simple markdown to HTML-ish JSX for display
  const lines = post.content.trim().split('\n');

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/blog" className="text-white/60 text-sm hover:text-white transition-colors">
                ← Blog
              </Link>
              <span className="text-white/30">/</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#86efac] text-xs font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
              <span>&bull;</span>
              <span>greenest Blog</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white" aria-label={`Blog post: ${post.title}`}>
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-text prose-p:text-gray-600 prose-p:leading-relaxed max-w-none">
              {lines.map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="font-heading text-2xl font-bold text-text mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('| ')) {
                  return null; // Skip table rows for now
                }
                if (line.startsWith('- **')) {
                  const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
                  if (match) {
                    return (
                      <div key={i} className="flex gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E5E4E] mt-2 shrink-0" />
                        <p className="text-gray-600 text-base"><strong className="text-text">{match[1]}</strong> — {match[2]}</p>
                      </div>
                    );
                  }
                }
                if (line.startsWith('*') && line.endsWith('*')) {
                  return <p key={i} className="text-sm text-gray-400 italic mt-10 pt-6 border-t border-gray-100">{line.replace(/\*/g, '')}</p>;
                }
                if (line.trim() === '---') {
                  return <hr key={i} className="border-gray-200 my-8" />;
                }
                if (line.trim() === '') return null;
                return <p key={i} className="text-gray-600 text-base leading-relaxed mb-4">{line}</p>;
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-[#F7F6F2] border border-gray-100 text-center">
              <p className="font-heading text-xl font-bold text-text mb-3">
                Experience Kanthalloor with greenest
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Join the waiting list and be among the first to stay at our upcoming eco-friendly mountain homestay.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#2E5E4E] text-white font-bold text-sm hover:bg-[#4F8A63] transition-colors"
              >
                Join the Waiting List →
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
