import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InvestorForm from '@/components/InvestorForm';
import { TrendingUp, MapPin, Leaf, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Invest in GreeNest – Sustainable Mountain Tourism | Kanthalloor Kerala',
  description:
    'Invest in GreeNest, a premium eco-friendly mountain homestay coming to Kanthalloor, Kerala. Explore the opportunity in sustainable tourism, projected growth, and partnership models.',
};

const whyInvest = [
  {
    icon: TrendingUp,
    title: 'Growing Eco-Tourism Market',
    desc: 'India\'s eco-tourism sector is growing at over 15% annually. Kerala alone sees 15M+ tourists per year. Sustainable accommodation is the fastest-growing segment.',
  },
  {
    icon: MapPin,
    title: 'Prime Location Advantage',
    desc: 'Kanthalloor is an emerging destination with limited quality accommodation options. GreeNest is positioned to capture the early-mover advantage in this undiscovered market.',
  },
  {
    icon: Leaf,
    title: 'Sustainable = Premium',
    desc: 'Eco-conscious travellers consistently pay a premium for authentic, sustainable stays. GreeNest\'s model targets this high-value, high-intent segment.',
  },
  {
    icon: Users,
    title: 'Family & Group Focus',
    desc: 'Families and groups have longer stays, higher spending, and stronger repeat rates. GreeNest is purpose-built for this lucrative, underserved audience.',
  },
];

export default function InvestmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a2a1f] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">Investment Opportunity</p>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Invest in the Future of Sustainable Mountain Tourism
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              GreeNest represents a rare opportunity to invest in a premium, eco-focused hospitality
              project in one of Kerala&rsquo;s most promising emerging destinations.
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-24 bg-white" aria-label="Project overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">The Project</p>
                <h2 className="font-heading text-4xl font-bold text-text mb-6">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  GreeNest is a carefully planned eco-friendly mountain homestay being developed in
                  Kanthalloor, Idukki District, Kerala. The project involves acquiring and developing
                  land into a boutique retreat designed for families and small groups.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our approach prioritises sustainable construction, community integration, and a premium
                  guest experience that cannot be replicated by large hotel chains. This is boutique
                  hospitality at its finest — and the market is hungry for it.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The project is currently in the planning phase with land already acquired. We are seeking
                  strategic partners and investors who share our vision for responsible, profitable tourism.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'Kanthalloor', label: 'Location', sub: 'Idukki, Kerala' },
                  { value: 'Planning', label: 'Current Phase', sub: 'Land Acquired' },
                  { value: '15%+', label: 'Eco-Tourism CAGR', sub: 'India Market' },
                  { value: '15M+', label: 'Kerala Tourists', sub: 'Annual (2023)' },
                ].map(({ value, label, sub }) => (
                  <div key={label} className="bg-[#F7F6F2] rounded-2xl p-6 border border-gray-100">
                    <p className="font-heading text-3xl font-bold text-primary mb-1">{value}</p>
                    <p className="font-semibold text-sm text-text">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-24 bg-[#F7F6F2]" aria-label="Why invest in GreeNest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">The Opportunity</p>
              <h2 className="font-heading text-4xl font-bold text-text mb-5">Why GreeNest? Why Now?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The convergence of rising eco-tourism demand, an undiscovered destination, and a thoughtful
                concept creates a compelling investment case.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyInvest.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-24 bg-white" aria-label="Partnership opportunities">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">How to Partner</p>
              <h2 className="font-heading text-4xl font-bold text-text mb-5">Partnership Opportunities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  level: 'Seed',
                  range: '₹10L – ₹50L',
                  desc: 'Early-stage capital to support planning, design, and pre-construction activities.',
                  perks: ['Investor updates', 'Early recognition', 'Priority access'],
                },
                {
                  level: 'Growth',
                  range: '₹50L – ₹2Cr',
                  desc: 'Mid-stage investment supporting construction and infrastructure development.',
                  perks: ['Equity discussion', 'Revenue sharing potential', 'Annual retreats'],
                  featured: true,
                },
                {
                  level: 'Strategic',
                  range: '₹2Cr+',
                  desc: 'Major partnership with full involvement in vision, operations, and expansion.',
                  perks: ['Board representation', 'Profit participation', 'Brand co-ownership'],
                },
              ].map(({ level, range, desc, perks, featured }) => (
                <div
                  key={level}
                  className={`rounded-2xl p-8 border ${
                    featured
                      ? 'bg-primary text-white border-primary shadow-xl scale-105'
                      : 'bg-[#F7F6F2] text-text border-gray-100'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${featured ? 'text-[#86efac]' : 'text-secondary'}`}>
                    {level}
                  </p>
                  <p className={`font-heading text-3xl font-bold mb-3 ${featured ? 'text-white' : 'text-primary'}`}>{range}</p>
                  <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-white/70' : 'text-gray-600'}`}>{desc}</p>
                  <ul className="space-y-2">
                    {perks.map((p) => (
                      <li key={p} className={`text-sm flex items-center gap-2 ${featured ? 'text-white/80' : 'text-gray-600'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${featured ? 'bg-[#86efac]' : 'bg-primary'}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Form */}
        <section className="py-24 bg-[#F7F6F2]" aria-label="Investor inquiry form">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Get in Touch</p>
                <h2 className="font-heading text-4xl font-bold text-text mb-4">Request the Investment Deck</h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Fill in your details and we&rsquo;ll send you the full GreeNest investment deck along with
                  financial projections and partnership terms.
                </p>
              </div>
              <InvestorForm />
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-3">Prefer to talk directly?</p>
              <a
                href="https://wa.me/919999999999?text=Hello%20GreeNest%20Team%2C%20I%20am%20interested%20in%20the%20investment%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-colors"
              >
                Chat with the Founder on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
