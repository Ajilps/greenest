import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/kanthalloor", label: "Kanthalloor" },
  { href: "/waitlist", label: "Early guest list" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="frosted-fog-footer relative overflow-hidden px-4 pb-5 pt-12 text-[#f5f1e7] sm:px-8 sm:pb-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="footer-content-panel grid gap-12 rounded-[1.75rem] px-5 py-8 sm:rounded-[2.25rem] sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_.7fr_1fr] lg:gap-16 lg:px-10 lg:py-12">
          <div>
            <Link
              href="/"
              className="footer-brand-glass block w-full max-w-[430px] rounded-[1.25rem] p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-4"
              aria-label="GreeNest Associates home"
            >
              <Image
                src="/brand/greenest-brand-footer-transparent-v2.png"
                alt="GreeNest Associates — Resorts and Tour Operators"
                width={1931}
                height={814}
                sizes="(max-width: 640px) calc(100vw - 40px), 430px"
                className="h-auto w-full"
              />
            </Link>
            <p className="mt-7 max-w-md text-[15px] leading-7 text-white/80">A nature-led mountain home taking shape among the orchards and mist of Kanthalloor, Kerala.</p>
            <a
              href="https://wa.me/916282077926?text=Hello%20greenest%20team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#dce8bf] px-5 py-3 text-xs font-bold uppercase tracking-[.08em] text-[#183421] shadow-[0_14px_30px_rgba(7,18,10,.2)] hover:-translate-y-0.5 hover:bg-[#edf4d9]"
            >
              Start a WhatsApp conversation <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-white/65">Explore</p>
            <ul className="space-y-1">
              {navigation.map((link) => (
                <li key={link.href}><Link href={link.href} className="inline-flex min-h-11 items-center font-heading text-xl text-white/90 hover:translate-x-1 hover:text-[#dce8bf]">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/65">Get in touch</p>
            <ul className="space-y-4 text-[15px] leading-6 text-white/82">
              <li className="flex gap-3"><MapPin size={17} className="mt-1 shrink-0 text-[#b9c894]" /><span>Kanthalloor, Idukki District<br />Kerala 685 619, India</span></li>
              <li><a href="mailto:greenest5000@gmail.com" className="flex min-h-11 items-center gap-3 break-all hover:text-[#dce8bf]"><Mail size={17} className="shrink-0 text-[#b9c894]" />greenest5000@gmail.com</a></li>
              <li><a href="tel:+916282077926" className="flex min-h-11 items-center gap-3 hover:text-[#dce8bf]"><Phone size={17} className="shrink-0 text-[#b9c894]" />+91 62820 77926</a></li>
            </ul>
            <div className="mt-7 flex items-center gap-3 rounded-full border border-white/10 bg-black/10 px-4 py-3 text-xs text-white/78">
              <span className="h-2 w-2 rounded-full bg-[#c6d49d] shadow-[0_0_0_5px_rgba(198,212,157,.12)]" />
              Current stage: planning &amp; construction
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-2 pt-6 text-[11px] uppercase leading-5 tracking-[.12em] text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-4">
          <p>© {new Date().getFullYear()} greenest. All rights reserved.</p>
          <p>greenestco.in · Where nature feels like home</p>
        </div>
      </div>
    </footer>
  );
}
