import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import ExperienceCard from '@/components/ExperienceCard';
import Link from 'next/link';
import {
  Sunrise,
  Sprout,
  TreePine,
  Flame,
  Users,
  Camera,
  UtensilsCrossed,
  Star,
  Leaf,
  Shield,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'GreeNest – Where Nature Feels Like Home | Kanthalloor, Kerala',
  description:
    'GreeNest is a premium eco-friendly mountain homestay coming soon to Kanthalloor, Kerala. Join the waiting list, explore future experiences, and discover investment opportunities in sustainable tourism.',
  alternates: { canonical: 'https://www.GreeNest.com' },
};

const experiences = [
  {
    icon: <Sunrise size={24} className="text-primary" />,
    title: 'Mountain Sunrise Views',
    description:
      'Wake up to breathtaking sunrises painting the Western Ghats in gold and amber from the comfort of your room.',
  },
  {
    icon: <Sprout size={24} className="text-primary" />,
    title: 'Farm Experiences',
    description:
      'Walk through apple orchards, strawberry farms, and vegetable gardens. Pick fresh produce and connect with the land.',
  },
  {
    icon: <TreePine size={24} className="text-primary" />,
    title: 'Nature Walks',
    description:
      'Guided trails through misty forests, with streams, birds, and the quiet hum of the Kerala highlands.',
  },
  {
    icon: <Flame size={24} className="text-primary" />,
    title: 'Bonfire Evenings',
    description:
      'Gather around a warm bonfire under a sky full of stars. Share stories, sip local tea, and unwind.',
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: 'Family Gatherings',
    description:
      'Private spaces designed for families to bond — spacious common areas, safe outdoor spaces, and curated activities.',
  },
  {
    icon: <Camera size={24} className="text-primary" />,
    title: 'Photography Retreats',
    description:
      "Kanthalloor's misty mornings and vibrant orchards offer endless opportunities for stunning landscape photography.",
  },
  {
    icon: <UtensilsCrossed size={24} className="text-primary" />,
    title: 'Homemade Food',
    description:
      'Savour authentic Kerala mountain cuisine — freshly prepared with local produce, herbs, and traditional recipes.',
  },
  {
    icon: <Star size={24} className="text-primary" />,
    title: 'Stargazing',
    description:
      'Far from city lights, Kanthalloor offers some of the clearest skies in Kerala for an unforgettable stargazing experience.',
  },
];

const faqItems = [
  {
    question: 'What is GreeNest?',
    answer:
      'GreeNest is a future premium eco-friendly mountain homestay being built in Kanthalloor, Idukki District, Kerala, India. It is designed for families and small groups seeking a peaceful, nature-immersive retreat with a focus on sustainability and authentic experiences.',
  },
  {
    question: 'Where exactly is GreeNest located?',
    answer:
      'GreeNest will be located in Kanthalloor, a picturesque village in the Idukki District of Kerala, situated in the high ranges of the Western Ghats at around 1,400 metres above sea level.',
  },
  {
    question: 'When will GreeNest open?',
    answer:
      "GreeNest is currently in the planning phase. We are working diligently to complete construction and welcome our first guests. Joining the waiting list ensures you receive updates and early access before the public launch.",
  },
  {
    question: 'How can I join the waiting list?',
    answer:
      "Simply click the 'Join Waiting List' button and fill in your details. You'll receive priority access, launch updates, and exclusive early-bird offers once GreeNest is ready to welcome guests.",
  },
  {
    question: 'Is GreeNest suitable for families with children?',
    answer:
      'Absolutely. GreeNest is specifically designed with families in mind — safe outdoor spaces, family-friendly activities, farm experiences, and a peaceful environment that children and adults alike will love.',
  },
  {
    question: 'Are there investment opportunities available?',
    answer:
      'Yes. GreeNest welcomes investors who believe in the future of sustainable eco-tourism in Kerala. Visit our Investment page to learn more or request an investment deck.',
  },
  {
    question: 'What makes Kanthalloor special?',
    answer:
      "Kanthalloor is known for its high-range climate, apple orchards, strawberry farms, misty mountain landscapes, and peaceful atmosphere. Unlike more crowded destinations like Munnar, Kanthalloor retains its unspoiled, authentic character.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* About Preview */}
        <section className="py-24 bg-white" aria-label="About GreeNest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">About GreeNest</p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
                  A Retreat Rooted in Nature, Designed for You
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  GreeNest is more than a place to stay — it&rsquo;s a living, breathing space where the mountains
                  become your backyard. Nestled in the pristine high ranges of Kanthalloor, Kerala, we are
                  building a homestay that honours the land while providing families and small groups with a
                  truly memorable escape.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Every detail — from the architecture to the food on your plate — will reflect our commitment
                  to sustainability, privacy, and authentic mountain living.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Shield, label: 'Privacy', desc: 'Your own mountain retreat' },
                    { icon: Leaf, label: 'Eco-Friendly', desc: 'Sustainable by design' },
                    { icon: Heart, label: 'Family First', desc: 'Curated for families' },
                    { icon: TreePine, label: 'Pure Nature', desc: 'Kanthalloor highlands' },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F6F2]">
                      <div className="w-8 h-8 rounded-lg bg-[#2E5E4E]/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-text">{label}</p>
                        <p className="text-xs text-gray-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Our Full Story →
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#2E5E4E] via-[#4F8A63] to-[#1a3d2e] overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="font-heading text-5xl font-bold text-white mb-3">GreeNest</p>
                    <p className="text-white/60 text-sm italic mb-10">Kanthalloor, Kerala</p>
                    <div className="flex flex-col gap-3 text-left">
                      {[
                        'Mist-covered hills at dawn',
                        'Apple & strawberry orchards',
                        'Starry highland nights',
                        'Homemade Kerala cuisine',
                      ].map((t) => (
                        <div key={t} className="flex items-center gap-3 text-white/80 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] shrink-0" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-1">Status</p>
                  <p className="font-heading text-lg font-bold text-text">Planning Phase</p>
                  <p className="text-xs text-gray-400 mt-1">Land Acquired · Kanthalloor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Kanthalloor */}
        <section className="py-24 bg-[#F7F6F2]" aria-label="Why Kanthalloor">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Location</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-5">Why Kanthalloor?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kanthalloor is Kerala&rsquo;s best-kept secret — a high-range paradise that remains unspoiled,
                uncrowded, and utterly breathtaking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stat: '1,400m',
                  label: 'Altitude',
                  desc: 'High-range climate with cool temperatures year-round — perfect for a mountain retreat.',
                },
                {
                  stat: '12+',
                  label: 'Fruit Varieties',
                  desc: 'Apple orchards, strawberry farms, plum, peach, and dozens of tropical fruit cultivations.',
                },
                {
                  stat: 'Less Crowded',
                  label: 'Than Munnar',
                  desc: 'Enjoy the same scenic beauty as Munnar but with far more peace, privacy, and authenticity.',
                },
              ].map(({ stat, label, desc }) => (
                <div key={label} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                  <p className="font-heading text-4xl font-bold text-primary mb-1">{stat}</p>
                  <p className="font-semibold text-sm text-text uppercase tracking-wider mb-3">{label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/kanthalloor"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-secondary transition-colors duration-200 shadow-lg"
              >
                Explore Kanthalloor →
              </Link>
            </div>
          </div>
        </section>

        {/* Future Experiences */}
        <section className="py-24 bg-white" aria-label="Future experiences at GreeNest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Experiences</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-5">What Awaits You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every moment at GreeNest will be crafted around nature, community, and genuine mountain living.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.title} {...exp} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Waitlist CTA */}
        <section
          className="py-24 bg-gradient-to-br from-[#1a3d2e] via-[#2E5E4E] to-[#4F8A63]"
          aria-label="Join GreeNest waiting list"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">Limited Spots</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">
              Be Among the First to Experience GreeNest
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Join the waiting list today and receive exclusive updates, early access to bookings,
              and special launch offers before anyone else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/waitlist"
                className="px-10 py-4 rounded-full bg-white text-primary font-bold text-sm hover:bg-[#F7F6F2] hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Join the Waiting List
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hello%20GreeNest%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full border-2 border-white/50 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={faqItems}
          title="Got Questions?"
          subtitle="Everything you need to know about GreeNest and Kanthalloor."
        />
      </main>
      <Footer />
    </>
  );
}
