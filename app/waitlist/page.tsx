import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import { Bell, Zap, Gift, CalendarCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join the Waiting List – GreenNest Mountain Homestay',
  description:
    'Be among the first to experience GreenNest in Kanthalloor, Kerala. Join the waiting list for early access, launch updates, special offers, and priority reservations.',
};

const benefits = [
  {
    icon: Bell,
    title: 'Launch Updates',
    desc: 'Be the first to know when GreenNest opens. Get behind-the-scenes progress updates straight to your inbox.',
  },
  {
    icon: Zap,
    title: 'Early Access',
    desc: 'Waitlist members get exclusive early access to book before the public launch.',
  },
  {
    icon: Gift,
    title: 'Special Offers',
    desc: 'Enjoy exclusive launch-period discounts and perks available only to waiting list members.',
  },
  {
    icon: CalendarCheck,
    title: 'Priority Reservations',
    desc: 'Secure your preferred dates before anyone else. Your spot in the mountains is waiting.',
  },
];

export default function WaitlistPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-[#86efac] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              Limited Spots Available
            </span>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Be Among the First to Experience GreenNest
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Kanthalloor&rsquo;s most anticipated eco-retreat is coming. Join the waiting list today and
              unlock exclusive benefits before the doors open.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white" aria-label="Waiting list benefits">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6 rounded-2xl bg-[#F7F6F2] border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-[#F7F6F2]" aria-label="Waiting list registration form">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Register Your Interest</p>
                <h2 className="font-heading text-4xl font-bold text-text mb-4">Join the Waiting List</h2>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Takes less than 2 minutes. No spam — only meaningful updates about GreenNest.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
