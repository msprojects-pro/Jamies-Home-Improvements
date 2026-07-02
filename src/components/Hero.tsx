/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight, ShieldCheck, CheckCircle, Clock, MapPin } from "lucide-react";
import { HERO_BG_URL, BUSINESS_INFO } from "../data";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const handleScrollToNext = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_URL}
          alt="Beautiful Carrickfergus Renovated House"
          className="w-full h-full object-cover scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-layer gradient overlay for high contrast and vibrance */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/95 via-slate-900/80 to-teal-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-md border border-teal-500/30 py-1.5 px-4 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 font-semibold text-xs uppercase tracking-wider">
                Carrickfergus & Surrounding Areas Local Expert
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-none"
              >
                Let's Transform Your Home. <br />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  Professional & Built to Last.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
              >
                {BUSINESS_INFO.tagline}. High-quality painting, uPVC restoration, roofing systems, and exterior improvements crafted in Carrickfergus, United Kingdom.
              </motion.p>
            </div>

            {/* Actions / Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
              id="hero-ctas"
            >
              <button
                onClick={onOpenQuote}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-extrabold text-base py-4 px-8 rounded-xl shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer active:scale-95"
              >
                Request a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-base py-4 px-8 rounded-xl shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10"
              id="hero-trust-badges"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Guaranteed Quality</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Free Quotations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Open 24/7 / Always On</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Carrickfergus Local</span>
              </div>
            </motion.div>

          </div>

          {/* Side Visual Feature Badge Panel */}
          <div className="hidden lg:col-span-4 lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/10">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Why Choose Jamie's?</h3>
              <p className="text-sm text-slate-300 mb-6">
                From pressure washing driveways to fully installing dry verge systems, we treat every Carrickfergus home as our own.
              </p>
              <div className="space-y-3 text-left">
                {["Competitive Rates", "Highly Rated Clean-ups", "Always Professional", "Fully Insured"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-xs font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <a
          href="#about"
          onClick={handleScrollToNext}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-semibold">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-500 group-hover:border-white rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
