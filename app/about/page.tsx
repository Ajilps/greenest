import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Heart, Globe, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About GreeNest – Our Story, Vision & Mission',
  description:
    'Learn about GreeNest – why we chose Kanthalloor, our mission for sustainable eco-tourism, our core values, and the experience we are building for families and nature lovers.',
};

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    desc: 'Every decision we make — from architecture to food sourcing — prioritises the health of the ecosystem around us.',
  },
  {
    icon: Heart,
    title: 'Genuine Hospitality',
    desc: 'GreeNest will feel like a home, not a hotel. Warm, personal, and deeply connected to the local culture.',
  },
  {
    icon: Users,
    title: 'Community Rooted',
    desc: 'We are committed to uplifting the local Kanthalloor community through employment, sourcing, and partnership.',
  },
  {
    icon: Globe,
    title: 'Responsible Tourism',
    desc: 'We believe tourism should leave a place better than it found it. We will minimise our footprint and maximise positive impact.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">About Us</p>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              GreeNest was born from a simple belief: that the best holidays leave you feeling more alive,
              more present, and more connected to the natural world.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-white" aria-label="GreeNest story">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <h2 className="font-heading text-3xl font-bold text-text not-prose mb-6">How GreeNest Began</h2>
              <p>
                The idea for GreeNest came from a growing frustration with the state of travel in India.
                So many beautiful destinations have become overcrowded, commercialised, and disconnected
                from the very nature that made them special.
              </p>
              <p>
                When we first visited Kanthalloor — a quiet highland village in Idukki, Kerala — we knew
                we had found something different. The air was crisp, the hills were green, the people were
                warm, and the orchards were unlike anything we&rsquo;d seen at 1,400 metres above sea level.
                Apples, strawberries, plums — all growing in God&rsquo;s Own Country.
              </p>
              <p>
                We decided to build something worthy of this place. Not a resort that imposes on the landscape,
                but a homestay that emerges from it. A place where guests can sleep under a canopy of stars,
                wake to mist-covered mountains, walk through fruit orchards, and eat food grown metres from
                where they sit.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-12 mb-6">Our Vision</h2>
              <p>
                GreeNest will be Kerala&rsquo;s most thoughtfully designed mountain homestay — a place that
                balances premium comfort with genuine sustainability. We envision a retreat where every
                guest leaves having experienced the real Kanthalloor, not a packaged version of it.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-12 mb-6">Our Mission</h2>
              <p>
                To create a world-class, eco-responsible mountain retreat that celebrates the natural beauty
                of Kanthalloor, supports the local community, and provides families with memories they carry
                for a lifetime — all while demonstrating that luxury and sustainability are not at odds.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-12 mb-6">Why We Chose Kanthalloor</h2>
              <p>
                Most travellers in Kerala head to Munnar for their mountain fix. And while Munnar is beautiful,
                it has become saturated. Kanthalloor sits just 35 km north of Munnar — equally stunning, far
                quieter, and home to something Munnar can&rsquo;t claim: apple orchards. Yes, apples in Kerala.
              </p>
              <p>
                Kanthalloor&rsquo;s unique microclimate, its traditional farming communities, its strawberry and
                vegetable farms, and its spectacular viewpoints made it the perfect home for GreeNest.
                We are not just building a homestay here — we are investing in a future for this extraordinary place.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-12 mb-6">Sustainability Commitment</h2>
              <p>
                GreeNest will be built using locally sourced materials wherever possible. We will use solar
                energy, rainwater harvesting, composting, and organic farming practices. We will partner with
                local farmers for our food supply, hire from the local community, and ensure that tourism
                dollars stay in Kanthalloor.
              </p>
              <p>
                We are also committed to educating our guests about responsible tourism practices — because
                the best thing we can do for a beautiful place is help people love it without destroying it.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#F7F6F2]" aria-label="GreeNest core values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">What We Stand For</p>
              <h2 className="font-heading text-4xl font-bold text-text">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future guest experience */}
        <section className="py-24 bg-white" aria-label="Future guest experience">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">What to Expect</p>
            <h2 className="font-heading text-4xl font-bold text-text mb-6">Your Future GreeNest Experience</h2>
            <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Imagine arriving after a scenic drive through misty mountain roads. You step out to fresh, cool
              air scented with eucalyptus and wild herbs. Your room opens to a panoramic view of the Western Ghats.
              That evening, you gather around a bonfire. The next morning, you walk through apple orchards
              and pick strawberries while the valley below is still wrapped in cloud. That is GreeNest.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Privacy', value: 'Exclusive, non-commercial setting' },
                { label: 'Nature', value: 'Surrounded by orchards and hills' },
                { label: 'Comfort', value: 'Premium amenities, sustainable design' },
              ].map(({ label, value }) => (
                <div key={label} className="p-6 rounded-2xl bg-[#F7F6F2] border border-gray-100">
                  <p className="font-heading text-xl font-bold text-primary mb-2">{label}</p>
                  <p className="text-sm text-gray-500">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
