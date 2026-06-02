import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kanthalloor Travel Guide – Kerala Highlands | GreenNest',
  description:
    'Discover what makes Kanthalloor, Kerala special — apple orchards, strawberry farms, high-range climate, mountain views, and eco-tourism. Your complete travel guide to Kanthalloor.',
  keywords:
    'Kanthalloor, Kanthalloor Kerala, Kanthalloor travel guide, Kanthalloor apple orchards, Kanthalloor strawberry farm, Kerala highlands, Kerala mountain tourism, Kanthalloor Munnar, Idukki Kerala',
};

const faqItems = [
  {
    question: 'What is Kanthalloor famous for?',
    answer:
      'Kanthalloor is famous for its apple orchards, strawberry farms, cool high-range climate, misty mountain views, and peaceful atmosphere. It is often called the "Apple Village of Kerala" and is a hidden gem in the Idukki District of the Western Ghats.',
  },
  {
    question: 'How do I get to Kanthalloor from Munnar?',
    answer:
      'Kanthalloor is located approximately 35 km from Munnar. You can drive via Rajamala Road (about 1.5 hours) through scenic mountain roads. The nearest town with regular bus services is Marayoor, from where Kanthalloor is about 12 km.',
  },
  {
    question: 'What is the best time to visit Kanthalloor?',
    answer:
      'The best time to visit Kanthalloor is between September and February when the weather is cool and clear, and the orchards are in full bloom. Strawberry season typically runs from December to February. Apple harvest season is September to November.',
  },
  {
    question: 'Is Kanthalloor better than Munnar?',
    answer:
      'Kanthalloor offers a very different experience from Munnar. While Munnar is well-developed and popular, Kanthalloor is quieter, more authentic, and less commercialised. For travellers seeking peace, privacy, and a genuine nature experience, Kanthalloor is the superior choice.',
  },
  {
    question: 'What fruits grow in Kanthalloor?',
    answer:
      'Kanthalloor is unique in Kerala for its temperate fruit cultivation. You can find apples, strawberries, plums, pears, peaches, and various vegetables like cabbage, carrots, and beetroot growing in the farms around the village.',
  },
  {
    question: 'What are the nearby attractions to Kanthalloor?',
    answer:
      'Nearby attractions include Marayoor Sandalwood Forest, Chinnar Wildlife Sanctuary, Rajamala (Eravikulam National Park), Thoovanam Waterfalls, and the scenic Kanthalloor viewpoints overlooking the Tamil Nadu plains.',
  },
];

const highlights = [
  {
    title: 'Apple Orchards',
    description:
      'One of the only places in India outside Himachal Pradesh where apples grow commercially. The high altitude and cool climate make Kanthalloor ideal for apple cultivation.',
  },
  {
    title: 'Strawberry Farms',
    description:
      'Kanthalloor\'s strawberry farms are a major draw between December and February. Fresh strawberries are sold roadside and at farm gates — an unforgettable taste of the highlands.',
  },
  {
    title: 'Mountain Climate',
    description:
      'Sitting at approximately 1,400 metres above sea level, Kanthalloor enjoys a cool, temperate climate year-round — a rare and refreshing escape from Kerala\'s tropical heat.',
  },
  {
    title: 'Scenic Drives',
    description:
      'The drive to and through Kanthalloor is itself a highlight — winding mountain roads with panoramic views of the Western Ghats, green valleys, and misty ridgelines.',
  },
  {
    title: 'Less Crowded',
    description:
      'Unlike Munnar which sees millions of visitors annually, Kanthalloor remains pleasantly quiet. You can enjoy the mountains without the traffic, noise, or commercial clutter.',
  },
  {
    title: 'Photography Paradise',
    description:
      'The misty mornings, fruit farms, mountain panoramas, and traditional village life make Kanthalloor a dream destination for landscape and travel photographers.',
  },
];

export default function KanthalloorPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f2a1e] via-[#2E5E4E] to-[#4F8A63]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#86efac] font-semibold mb-4">Kerala Highlands</p>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Why Kanthalloor?</h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              The apple village of Kerala. A high-range paradise at 1,400m above sea level in the
              Idukki District — breathtaking, peaceful, and beautifully unspoiled.
            </p>
          </div>
        </section>

        {/* What makes it special */}
        <section className="py-24 bg-white" aria-label="What makes Kanthalloor special">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">The Destination</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text mb-5">
                What Makes Kanthalloor Special
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kanthalloor is a rare place — where Kerala&rsquo;s tropical heritage meets a cool, mountain
                climate that nurtures orchards, farms, and an extraordinary way of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map(({ title, description }) => (
                <article key={title} className="bg-[#F7F6F2] rounded-2xl p-8 border border-gray-100">
                  <div className="w-2 h-8 bg-primary rounded-full mb-5" />
                  <h3 className="font-heading text-xl font-bold text-text mb-3">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Kanthalloor long-form SEO content */}
        <section className="py-24 bg-[#F7F6F2]" aria-label="About Kanthalloor Kerala">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <h2 className="font-heading text-3xl font-bold text-text not-prose">About Kanthalloor, Kerala</h2>
              <p>
                Kanthalloor is a picturesque village located in the Devikulam Taluk of Idukki District,
                Kerala. Situated in the high ranges of the Western Ghats at an altitude of approximately
                1,400 metres above mean sea level, Kanthalloor enjoys a unique microclimate that sets it
                apart from the rest of Kerala.
              </p>
              <p>
                Unlike much of Kerala which experiences a tropical climate, Kanthalloor&rsquo;s altitude
                gives it a temperate feel — cool, misty mornings, refreshing afternoons, and crisp starlit
                nights. This climate, more reminiscent of Himachal Pradesh than South India, has made
                Kanthalloor famous for something extraordinary: apple cultivation.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-10">Apple Cultivation in Kanthalloor</h2>
              <p>
                Kanthalloor is one of very few places in South India where apples grow. The Royal Gala and
                Anna varieties thrive in the cool highland air. Farmers here have successfully cultivated
                apples for decades, creating a cottage industry that draws visitors, researchers, and
                agricultural enthusiasts from across India.
              </p>
              <p>
                The apple orchards typically bloom between April and June, and the harvest season runs from
                September through November. Visiting during harvest season allows tourists to pick apples
                directly from the trees — an experience that feels almost surreal in the context of Kerala.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-10">Strawberry Farms and Other Produce</h2>
              <p>
                Alongside apples, Kanthalloor is known for its strawberry cultivation between December and
                February. Roadside strawberry stalls are a beloved part of the journey to Kanthalloor. The
                village also produces peaches, plums, pears, and a range of highland vegetables including
                cabbage, carrots, and beetroot — much of which supplies the broader Kerala market.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-10">Kanthalloor vs Munnar: What&rsquo;s the Difference?</h2>
              <p>
                Both Kanthalloor and Munnar sit in the Idukki District at high altitude, and both offer
                spectacular mountain scenery. But the experience is fundamentally different. Munnar receives
                millions of tourists annually and has a well-developed tourism infrastructure with hotels,
                resorts, and commercial attractions. Kanthalloor, by contrast, has far fewer visitors and
                retains its authentic village character.
              </p>
              <p>
                For travellers who want the beauty of the Kerala highlands without the crowds, traffic,
                and commercialisation, Kanthalloor is the clear choice. It is quieter, more personal, and
                offers a more genuine connection to mountain life.
              </p>

              <h2 className="font-heading text-3xl font-bold text-text not-prose mt-10">Family Travel and Weekend Getaways</h2>
              <p>
                Kanthalloor is ideal for family travel and weekend getaways from cities like Kochi, Coimbatore,
                and Madurai. The cool climate, safe environment, and farm-based activities make it particularly
                suitable for families with children. Nature walks, farm visits, and bonfire evenings provide
                wholesome experiences that screens simply cannot replicate.
              </p>
              <p>
                For city dwellers, Kanthalloor offers a genuine digital detox — mountains, orchards, clean air,
                and the kind of silence you didn&rsquo;t know you were missing.
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-white" aria-label="Kanthalloor location map">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-text text-center mb-8">Find Kanthalloor</h2>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31498.49!2d77.1200!3d10.2800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dea0e4df8a2f%3A0x29a5db09ef67f6c2!2sKanthalloor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanthalloor, Kerala location map"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={faqItems}
          title="Kanthalloor FAQs"
          subtitle="Common questions about visiting Kanthalloor, Kerala."
        />

        {/* CTA */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-heading text-4xl font-bold mb-4">Experience Kanthalloor with GreenNest</h2>
            <p className="text-white/65 mb-8">
              Join our waiting list to be the first to experience GreenNest — right in the heart of Kanthalloor.
            </p>
            <Link
              href="/waitlist"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-bold text-sm hover:bg-[#F7F6F2] transition-colors shadow-lg"
            >
              Join the Waiting List →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
