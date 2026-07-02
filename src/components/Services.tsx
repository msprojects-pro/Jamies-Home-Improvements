/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Paintbrush,
  Droplet,
  Sparkles,
  Hammer,
  Home,
  ShieldCheck,
  Layers,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Paintbrush":
        return <Paintbrush className="w-8 h-8 text-teal-500" />;
      case "Droplet":
        return <Droplet className="w-8 h-8 text-cyan-500" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-orange-500" />;
      case "Hammer":
        return <Hammer className="w-8 h-8 text-green-500" />;
      case "Home":
        return <Home className="w-8 h-8 text-amber-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-teal-500" />;
      case "Layers":
        return <Layers className="w-8 h-8 text-orange-500" />;
      default:
        return <Hammer className="w-8 h-8 text-teal-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Our Premium Professional Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-full mx-auto" />
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Jamie's Home Improvements handles interior, exterior, roofing, and fencing projects. We combine state-of-the-art methods with skilled craft.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((service: Service) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                layout="position"
                className={`rounded-2xl border bg-white p-6 transition-all duration-300 ${
                  isExpanded
                    ? "border-teal-500 shadow-xl shadow-teal-500/5 ring-1 ring-teal-500/20"
                    : "border-gray-100 shadow-md hover:shadow-xl hover:border-slate-200"
                }`}
              >
                {/* Card Header Info */}
                <div className="flex items-start justify-between">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100">
                    {getIcon(service.iconName)}
                  </div>
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className={`p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 transition-transform duration-300 cursor-pointer ${
                      isExpanded ? "rotate-180 text-teal-600 bg-teal-50 hover:bg-teal-100" : ""
                    }`}
                    aria-label="Toggle details"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Collapsible Details Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-gray-100 space-y-4"
                    >
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        What's Included:
                      </h4>
                      <ul className="space-y-2.5">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-slate-700 leading-normal">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card CTA Footer */}
                <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                  </button>
                  <button
                    onClick={() => onOpenQuoteWithService(service.id)}
                    className="text-xs font-extrabold text-teal-600 hover:text-orange-500 transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    Get Quote
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic bottom callout */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-3xl p-0.5 shadow-xl shadow-cyan-500/10">
          <div className="bg-slate-950 rounded-[22px] px-8 py-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
            <div className="space-y-2 mb-6 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Don't see your specific project listed?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                We handle custom home improvement tasks of all shapes and sizes in the East Antrim area. Get in touch for friendly advice!
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteWithService("custom")}
              className="bg-white hover:bg-slate-50 text-slate-950 font-extrabold text-sm py-4 px-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer shrink-0 active:scale-95 inline-flex items-center gap-2"
            >
              Ask For Custom Project
              <ArrowRight className="w-4 h-4 text-teal-500" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
