import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact GreenNest – Get in Touch',
  description:
    'Contact the GreenNest team. Send us a message, find our location in Kanthalloor Kerala, or chat with us on WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">Say Hello</p>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Contact GreenNest</h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              Have a question, want to invest, or just curious about the project? We&rsquo;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24 bg-white" aria-label="Contact information">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Info */}
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">Get in Touch</p>
                <h2 className="font-heading text-4xl font-bold text-text mb-6">We&rsquo;re Here to Help</h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Whether you&rsquo;re a future guest, an investor, or simply someone who loves the idea of
                  GreenNest — reach out and let&rsquo;s talk. We respond to every message personally.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: MapPin, label: 'Location', value: 'Kanthalloor, Idukki District, Kerala 685 619, India' },
                    { icon: Mail, label: 'Email', value: 'hello@greennest.com', href: 'mailto:hello@greennest.com' },
                    { icon: Phone, label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-text font-medium hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-text font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Status */}
                <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-gray-100 mb-8">
                  <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Project Status</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                    <span className="font-heading text-lg font-bold text-text">Planning Phase</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Land acquired in Kanthalloor. Architectural planning underway. Expected construction to begin soon.
                  </p>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999?text=Hello%20GreenNest%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Form */}
              <div>
                <div className="bg-[#F7F6F2] rounded-3xl p-10 border border-gray-100">
                  <h2 className="font-heading text-2xl font-bold text-text mb-8">Send Us a Message</h2>
                  <ContactFormInline />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-24 bg-white" aria-label="GreenNest location map">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31498.49!2d77.1200!3d10.2800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dea0e4df8a2f%3A0x29a5db09ef67f6c2!2sKanthalloor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanthalloor location — GreenNest"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactFormInline() {
  // Simple static form — can be wired to API route later
  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400';
  const labelClass = 'block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2';

  return (
    <form
      action="mailto:hello@greennest.com"
      method="GET"
      className="space-y-5"
    >
      <div>
        <label htmlFor="c-name" className={labelClass}>Your Name</label>
        <input id="c-name" name="name" type="text" placeholder="Your name" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="c-email" className={labelClass}>Email Address</label>
        <input id="c-email" name="email" type="email" placeholder="you@example.com" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="c-subject" className={labelClass}>Subject</label>
        <input id="c-subject" name="subject" type="text" placeholder="What's this about?" className={inputClass} />
      </div>
      <div>
        <label htmlFor="c-message" className={labelClass}>Message</label>
        <textarea
          id="c-message"
          name="body"
          rows={5}
          placeholder="Tell us how we can help..."
          className={inputClass + ' resize-none'}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-secondary transition-colors duration-200 shadow-lg"
      >
        Send Message →
      </button>
    </form>
  );
}
