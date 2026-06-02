'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/kanthalloor', label: 'Kanthalloor' },
  { href: '/investment', label: 'Invest' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L4 9v12h16V9L12 3z" fill="#F7F6F2" opacity="0.9" />
              <path d="M9 21v-8h6v8" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5 10l7-7 7 7" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">
            GreeNest
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-text hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/waitlist"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors duration-200"
        >
          Join Waitlist
        </Link>

        <button
          className="md:hidden p-2 rounded-md text-text"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-base font-medium text-text hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/waitlist"
                className="block py-3 text-center rounded-full bg-primary text-white font-bold text-sm"
                onClick={() => setOpen(false)}
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
