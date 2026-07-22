import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl font-bold mb-3">GreeNest</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Where Nature Feels Like Home. A future eco-friendly mountain homestay in Kanthalloor, Kerala.
            </p>
            <a
              href="https://wa.me/919745648470?text=Hello%20GreeNest%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20b858] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/90">Navigate</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About GreeNest' },
                { href: '/kanthalloor', label: 'Why Kanthalloor' },
                { href: '/investment', label: 'Invest With Us' },
                { href: '/waitlist', label: 'Join Waitlist' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/90">Experiences</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                'Mountain Sunrise Views',
                'Farm Experiences',
                'Nature Walks',
                'Bonfire Evenings',
                'Family Gatherings',
                'Photography Retreats',
                'Homemade Food',
                'Stargazing',
              ].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/90">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Kanthalloor, Idukki District, Kerala 685 619, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:hello@greenestco.in" className="hover:text-white transition-colors">
                  hello@greenestco.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+919745648470" className="hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-sm uppercase tracking-widest mb-3 text-white/90">Project Status</h3>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-white/90 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                Planning Phase
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {year} GreeNest. All rights reserved.</p>
          <p>Kanthalloor, Kerala &bull; Eco-friendly Mountain Retreat &bull; Coming Soon</p>
        </div>
      </div>
    </footer>
  );
}
