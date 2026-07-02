/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of sticky navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
            : "bg-gradient-to-b from-black/50 via-black/25 to-transparent text-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-3 group"
              id="nav-logo-link"
            >
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-sans font-black text-sm tracking-wider border-2 border-orange-500 shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                JHI
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-sans font-bold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  Jamie's
                </span>
                <span className="font-sans font-semibold text-xs text-teal-500 tracking-wider uppercase">
                  Home Improvements
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-medium text-sm transition-colors duration-200 relative py-1 hover:text-teal-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                    isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-4" id="nav-actions">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`flex items-center gap-2 font-semibold text-sm transition-all duration-300 py-2 px-3 rounded-lg border ${
                  isScrolled
                    ? "text-slate-800 border-gray-200 hover:bg-slate-50 hover:border-teal-500"
                    : "text-white border-white/20 hover:bg-white/10"
                }`}
                id="nav-call-btn"
              >
                <Phone className="w-4 h-4 text-orange-500 animate-pulse" />
                <span className="hidden md:inline">Call:</span> {BUSINESS_INFO.phoneFormatted}
              </a>
              <button
                onClick={onOpenQuote}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 group cursor-pointer active:scale-95"
                id="nav-quote-btn"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`sm:hidden p-2 rounded-lg border ${
                  isScrolled
                    ? "text-slate-800 border-gray-200"
                    : "text-white border-white/20"
                }`}
              >
                <Phone className="w-5 h-5 text-orange-500" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle mobile menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-10 shadow-2xl lg:hidden"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col gap-6">
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-2xl font-bold text-slate-950 hover:text-teal-500 transition-colors border-b border-gray-100 pb-3"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors text-lg"
              >
                <Phone className="w-5 h-5 text-orange-500 animate-pulse" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-cyan-500/25 cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
