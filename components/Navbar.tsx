"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/kanthalloor", label: "Kanthalloor" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-7 sm:pt-6">
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-[#0c160f]/55 backdrop-blur-[2px] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        className="frosted-fog-nav frosted-fog-nav--dark relative z-10 mx-auto flex h-[68px] max-w-[1420px] items-center justify-between overflow-hidden rounded-[1.15rem] px-3.5 text-[#123d25] sm:h-[76px] sm:rounded-[1.35rem] sm:px-6"
        aria-label="Main navigation"
      >
        <div className="nav-weather" aria-hidden="true">
          <span className="nav-drop" />
          <span className="nav-drop" />
          <span className="nav-drop" />
          <span className="nav-drop" />
          <span className="nav-drop" />
          <span className="nav-drop" />
          <span className="nav-drop" />
        </div>
        <Link href="/" className="group flex min-h-11 items-center gap-2.5 sm:gap-3" aria-label="greenest home">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#f4f1e8] shadow-inner sm:h-11 sm:w-11">
            <Image src="/brand/greenest-mark.png" alt="" width={42} height={42} className="h-10 w-10 object-cover sm:h-[42px] sm:w-[42px]" />
          </span>
          <span className="font-heading text-[1.55rem] leading-none tracking-[-.04em] sm:text-[1.75rem]">greenest</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-[13px] font-medium tracking-wide transition-opacity hover:opacity-65 ${active ? "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/waitlist"
          className="hidden items-center gap-2 rounded-full border border-[#123d25]/35 bg-white/18 px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-[#123d25] transition-all hover:-translate-y-0.5 hover:bg-[#123d25] hover:text-white lg:inline-flex"
        >
          Join waitlist <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-current/25 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="relative z-10 mx-auto mt-2 max-w-[1420px] rounded-[1.25rem] border border-[#263829]/10 bg-[#f4f0e7]/98 p-3 text-[#213325] shadow-2xl backdrop-blur-xl sm:p-5 lg:hidden">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between rounded-xl px-4 font-heading text-[1.65rem] hover:bg-[#213325]/6"
                >
                  {link.label}<span className={`h-1.5 w-1.5 rounded-full bg-[#cf6f49] ${pathname === link.href ? "opacity-100" : "opacity-0"}`} />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/waitlist" onClick={() => setOpen(false)} className="button mt-3 flex w-full justify-center bg-[#213325] text-white sm:mt-4">
            Join the early guest list <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
