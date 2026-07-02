/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-sans font-black text-sm tracking-wider border border-orange-500 shadow-md flex-shrink-0">
                JHI
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg text-white leading-tight tracking-tight">
                  Jamie's
                </span>
                <span className="font-sans font-bold text-[10px] text-teal-400 tracking-widest uppercase">
                  Home Improvements
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional, highly rated domestic and commercial home improvements based in Carrickfergus, UK. Fully insured with guaranteed neat results.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Serving Carrickfergus, Larne, Newtownabbey & Belfast</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-900 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Reviews", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-900 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="text-sm text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-900 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block p-4 bg-slate-900 rounded-2xl border border-slate-800/60 hover:border-orange-500/55 transition-all group"
              >
                <span className="text-[10px] text-slate-400 block uppercase font-bold mb-1">Call direct</span>
                <span className="text-base font-black text-white group-hover:text-orange-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500 animate-pulse" />
                  {BUSINESS_INFO.phoneFormatted}
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="block p-4 bg-slate-900 rounded-2xl border border-slate-800/60 hover:border-teal-500/55 transition-all group"
              >
                <span className="text-[10px] text-slate-400 block uppercase font-bold mb-1">Email directly</span>
                <span className="text-xs font-bold text-white group-hover:text-teal-400 transition-colors flex items-center gap-2 break-all">
                  <Mail className="w-4 h-4 text-teal-400" />
                  {BUSINESS_INFO.email}
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} <strong>Jamie's Home Improvements</strong>. All Rights Reserved. Based in Carrickfergus, County Antrim, Northern Ireland.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-600">Always Open 24/7/365</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 flex items-center gap-1 transition-colors"
            >
              Facebook <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
