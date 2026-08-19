"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Flame,
  Leaf,
  MapPin,
  Mountain,
  Sprout,
  Star,
  Sunrise,
  Trees,
  UtensilsCrossed,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { icon: Sunrise, title: "Sunrise, unhurried", text: "Wake to soft light moving across the Western Ghats." },
  { icon: Sprout, title: "Orchard mornings", text: "Walk among apples, strawberries and highland farms." },
  { icon: Trees, title: "Forest trails", text: "Follow misty paths, birdsong and the quiet of the hills." },
  { icon: Flame, title: "Fireside evenings", text: "Slow down by the bonfire with local tea and good stories." },
  { icon: UtensilsCrossed, title: "Food from here", text: "Seasonal Kerala cooking made with produce grown nearby." },
  { icon: Star, title: "A sky full of stars", text: "Clear highland nights, far away from the city glow." },
];

const milestones = [
  { number: "01", title: "Land", text: "A quiet site in Kanthalloor has been secured.", state: "Complete" },
  { number: "02", title: "Planning", text: "The experience, architecture and landscape are being shaped.", state: "In progress" },
  { number: "03", title: "Construction", text: "A careful build with a light footprint follows planning.", state: "Current stage" },
  { number: "04", title: "Welcome", text: "Early guests from our waitlist will be invited first.", state: "Ahead" },
];

export default function HomeExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 48,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-group]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-stagger-item]"), {
          y: 44,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 78%", once: true },
        });
      });

      gsap.to("[data-parallax-image]", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: "[data-parallax-section]", start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  const handleHeroMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !heroImageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 16;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    gsap.to(heroImageRef.current, { x, y, scale: 1.035, duration: 1.2, ease: "power2.out" });
  };

  const resetHero = () => {
    if (heroImageRef.current) gsap.to(heroImageRef.current, { x: 0, y: 0, scale: 1.02, duration: 1.2 });
  };

  const tiltCard = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
    const rotateX = -((event.clientY - bounds.top) / bounds.height - 0.5) * 7;
    gsap.to(card, { rotateX, rotateY, y: -8, duration: 0.35, transformPerspective: 900, ease: "power2.out" });
  };

  const resetCard = (event: React.PointerEvent<HTMLElement>) => {
    gsap.to(event.currentTarget, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: "power3.out" });
  };

  return (
    <div ref={rootRef} className="overflow-clip bg-[#f3f0e8]">
      <Navbar />
      <main>
        <section
          className="hero-shell relative min-h-[100svh] overflow-hidden bg-[#182018] text-white"
          onPointerMove={handleHeroMove}
          onPointerLeave={resetHero}
          aria-label="greenest mountain retreat"
        >
          <div ref={heroImageRef} className="absolute -inset-4 scale-[1.02] will-change-transform">
            <Image
              src="/images/greenest-mountain-sunrise.png"
              alt="A mountain home and garden overlooking the misty Kanthalloor hills at sunrise"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center] sm:object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,18,11,.36)_0%,rgba(9,18,11,.10)_38%,rgba(9,18,11,.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,transparent_0%,rgba(7,16,10,.18)_42%,rgba(7,16,10,.5)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-6 pt-32 sm:px-10 sm:pb-10 sm:pt-40 lg:px-16 lg:pb-14">
            <div className="max-w-4xl pb-8 sm:pb-20">
              <p data-hero-reveal className="eyebrow mb-5 text-[#e7e6d6] sm:mb-6">
                <MapPin size={14} /> Kanthalloor · Kerala
              </p>
              <h1 data-hero-reveal className="max-w-4xl font-heading text-[clamp(3.55rem,16.5vw,5rem)] font-normal leading-[.84] tracking-[-0.055em] text-[#f7f4ec] sm:text-[clamp(4rem,10vw,9.25rem)] sm:leading-[.82]">
                Find your <span className="italic text-[#d8dea9]">wild</span> quiet.
              </h1>
              <p data-hero-reveal className="mt-6 max-w-xl text-[15px] leading-6 text-white/78 sm:mt-7 sm:text-lg sm:leading-7">
                A thoughtful mountain home taking shape among orchards, mist and the slow rhythms of Kanthalloor.
              </p>
              <div data-hero-reveal className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href="/waitlist" className="button button-light w-full sm:w-auto">Join the early guest list <ArrowUpRight size={16} /></Link>
                <a href="#story" className="button button-ghost w-full sm:w-auto">Discover greenest <ArrowDown size={16} /></a>
              </div>
            </div>

            <div data-hero-reveal className="flex flex-col gap-3 border-t border-white/25 pt-5 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-6 sm:text-sm">
              <p className="hidden sm:block">Where nature feels like home.</p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8dea9] opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#d8dea9]" /></span>
                Planning &amp; construction
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div data-reveal className="grid gap-6 border-b border-[#233326]/20 pb-12 sm:gap-8 sm:pb-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
              <p className="eyebrow text-[#3d563f]"><Leaf size={14} /> A home grown from place</p>
              <div>
                <h2 className="font-heading text-[clamp(2.45rem,12vw,3.3rem)] font-normal leading-[.98] tracking-[-0.045em] text-[#1f3022] sm:text-[clamp(2.7rem,5.3vw,5.7rem)]">
                  Close to the earth.<br />Far from the ordinary.
                </h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#526055] sm:mt-8 sm:text-lg">
                  greenest is being designed as an intimate, eco-conscious stay for families and small groups—where mountain views, garden paths and home-cooked food take centre stage.
                </p>
              </div>
            </div>

            <div className="mt-12 grid items-center gap-9 sm:mt-16 sm:gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-24">
              <div data-reveal className="image-shadow relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[4/3] sm:rounded-[3rem]">
                <Image src="/images/greenest-interior.png" alt="Warm timber and stone interior envisioned for greenest" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172217]/35 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#f4f0e6]/88 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#263b29] backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:text-xs sm:tracking-[.16em]">A warm mountain home</span>
              </div>
              <div data-reveal className="lg:pr-10">
                <p className="eyebrow mb-5 text-[#627663]"><Mountain size={14} /> The feeling</p>
                <h3 className="font-heading text-[2.45rem] leading-[1.02] text-[#213325] sm:text-5xl sm:leading-tight">Built for the moments you remember.</h3>
                <p className="mt-6 leading-7 text-[#5b685e]">Slow breakfasts. Rain on the roof. Children discovering an orchard. Long conversations by the fire. Every detail will make room for the kind of time that city life edits out.</p>
                <Link href="/about" className="text-link mt-8">Read our story <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1d3022] px-5 py-20 text-[#f4f0e6] sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div data-reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-5 text-[#b9c894]"><Leaf size={14} /> The experience</p>
                <h2 className="font-heading text-[clamp(2.55rem,12vw,3.5rem)] leading-none tracking-[-.04em] sm:text-[clamp(2.8rem,5vw,5.4rem)]">Life at nature&apos;s pace.</h2>
              </div>
              <p className="max-w-md leading-7 text-white/62">Authentic highland days shaped around the landscape, local food and meaningful time together.</p>
            </div>

            <div data-stagger-group className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/12 sm:mt-16 sm:grid-cols-2 sm:rounded-[2rem] lg:grid-cols-3">
              {experiences.map(({ icon: Icon, title, text }) => (
                <article key={title} data-stagger-item onPointerMove={tiltCard} onPointerLeave={resetCard} className="experience-card group min-h-52 bg-[#1d3022] p-6 will-change-transform sm:min-h-64 sm:p-9">
                  <Icon size={27} strokeWidth={1.4} className="text-[#c7d59d]" />
                  <div className="mt-12 sm:mt-20">
                    <h3 className="font-heading text-2xl">{title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-parallax-section className="relative min-h-[70svh] overflow-hidden text-white sm:min-h-[78svh]">
          <div data-parallax-image className="absolute -inset-y-[12%] inset-x-0">
            <Image src="/images/kanthalloor-tea-estate.jpg" alt="Green highland tea slopes and trees near Kanthalloor" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,25,14,.78),rgba(11,25,14,.18)_65%,rgba(11,25,14,.35))]" />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1320px] items-end px-5 py-14 sm:min-h-[78svh] sm:px-10 sm:py-16 lg:px-0 lg:py-24">
            <div data-reveal className="max-w-2xl">
              <p className="eyebrow mb-6 text-[#d9e1bd]"><MapPin size={14} /> 1,400 metres above sea level</p>
              <h2 className="font-heading text-[clamp(3rem,14vw,4.25rem)] leading-[.9] tracking-[-.045em] sm:text-[clamp(3.4rem,7vw,7rem)]">Kerala&apos;s quiet highlands.</h2>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/72">Kanthalloor is cool, orchard-filled and wonderfully unhurried—just 35 km from Munnar, yet a world away from the crowds.</p>
              <Link href="/kanthalloor" className="button button-light mt-8 w-full sm:mt-9 sm:w-auto">Explore Kanthalloor <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div data-reveal className="grid gap-8 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="eyebrow mb-5 text-[#5a705b]"><Camera size={14} /> Taking shape</p>
                <h2 className="font-heading text-[clamp(2.65rem,12.5vw,3.6rem)] leading-[.96] tracking-[-.045em] text-[#1e3022] sm:text-[clamp(3rem,5.5vw,5.8rem)]">The journey to your mountain home.</h2>
              </div>
              <p className="self-end max-w-lg pb-2 leading-7 text-[#5b685e]">We are currently moving through planning and construction with a clear goal: create something that belongs to the land and lasts.</p>
            </div>

            <div data-stagger-group className="mt-12 border-t border-[#263a29]/20 sm:mt-16">
              {milestones.map((item) => (
                <article key={item.number} data-stagger-item className="grid grid-cols-[44px_1fr] gap-x-3 gap-y-3 border-b border-[#263a29]/20 py-6 sm:grid-cols-[70px_1fr_1fr_auto] sm:items-center sm:gap-8 sm:py-7">
                  <span className="font-heading text-2xl text-[#829284] sm:text-3xl">{item.number}</span>
                  <h3 className="font-heading text-[1.7rem] leading-none text-[#213325] sm:text-3xl">{item.title}</h3>
                  <p className="col-start-2 text-sm leading-6 text-[#637067] sm:col-start-auto">{item.text}</p>
                  <span className="col-start-2 w-fit rounded-full border border-[#3b533d]/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#48604a] sm:col-start-auto">{item.state}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 pb-3 sm:px-6 sm:pb-6">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#cf6f49] px-5 py-16 text-center text-[#fff8ef] sm:rounded-[3rem] sm:px-10 sm:py-20 lg:py-28">
            <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]" />
            <div data-reveal className="relative mx-auto max-w-3xl">
              <p className="eyebrow justify-center text-white/75"><Leaf size={14} /> Be here from the beginning</p>
              <h2 className="mt-5 font-heading text-[clamp(2.7rem,13vw,3.8rem)] leading-[.92] tracking-[-.045em] sm:text-[clamp(3rem,6.5vw,6.5rem)] sm:leading-[.9]">Your place in the hills is taking shape.</h2>
              <p className="mx-auto mt-7 max-w-xl leading-7 text-white/78">Join the early guest list for thoughtful progress notes, first booking access and opening offers.</p>
              <Link href="/waitlist" className="button mt-8 w-full bg-[#213426] text-white hover:bg-[#16261b] sm:mt-9 sm:w-auto">Join the waiting list <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
