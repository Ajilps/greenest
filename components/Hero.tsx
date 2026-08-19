"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="greenest hero section"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a1e] via-[#1a3d2e] to-[#2E5E4E]" />

      {/* Layered radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(79,138,99,0.3)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(139,106,78,0.15)_0%,transparent_60%)]" />

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #F7F6F2 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 200L120 120L280 170L440 80L600 140L720 40L880 110L1020 60L1200 130L1440 80V200H0Z"
            fill="#F7F6F2"
          />
        </svg>
      </div>

      {/* Animated mist */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F7F6F2]/10 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coming soon badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/25 text-white/85 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
          Coming Soon — Kanthalloor, Kerala, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading text-7xl sm:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Gree<span className="text-[#86efac]">Nest</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-heading text-xl sm:text-2xl lg:text-3xl text-white/75 italic mb-5 font-normal"
        >
          Where Nature Feels Like Home
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experience peaceful mornings, mist-covered hills, fruit orchards, and
          unforgettable memories in one of Kerala&rsquo;s most beautiful
          high-range destinations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/waitlist"
            className="px-8 py-4 rounded-full bg-white text-primary font-bold text-sm hover:bg-[#F7F6F2] hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Join the Waiting List
          </Link>
          <a
            href="https://wa.me/916282077926?text=Hello%20greenest%20team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/40 text-xs uppercase tracking-widest"
        >
          {[
            "Eco-Friendly Design",
            "Family Focused",
            "Kanthalloor, Kerala",
            "Sustainable Tourism",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/40" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path
            d="M1 1l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
