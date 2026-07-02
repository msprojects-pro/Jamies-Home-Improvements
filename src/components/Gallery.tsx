/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ChevronRight, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";

interface GalleryProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function Gallery({ onOpenQuoteWithService }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Painting & Decorating",
    "Pressure Washing",
    "Gutter & PVC",
    "Fencing",
    "Roof & Dry Ridge",
    "Driveway Sealing",
  ];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest block">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Showcase of Completed Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-full mx-auto" />
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Take a look at some of our recent work in Carrickfergus, Larne, and Belfast. Quality, clean finishes that speak for themselves.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" id="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                  : "bg-white text-slate-600 border border-gray-100 hover:border-gray-200 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-xl cursor-pointer aspect-square"
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-white line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold pt-2 text-teal-300 hover:text-white transition-colors">
                      View Project <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              id="gallery-lightbox"
            >
              <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-teal-400 transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Lightbox Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Photo side */}
                  <div className="md:col-span-8 bg-black/50 aspect-[4/3] md:aspect-auto md:h-[500px]">
                    <img
                      src={activeItem.imageUrl}
                      alt={activeItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Detail side */}
                  <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                    <div className="space-y-4">
                      <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wider">
                        {activeItem.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {activeItem.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {activeItem.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-xs text-slate-300 space-y-1">
                        <span className="font-bold text-slate-200">Location:</span> Carrickfergus Area <br />
                        <span className="font-bold text-slate-200">Standard:</span> Premium Grade Finish
                      </div>

                      <button
                        onClick={() => {
                          const category = activeItem.category;
                          setActiveItem(null);
                          // pre-select matching service
                          onOpenQuoteWithService(category);
                        }}
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/10 active:scale-95 transition-all cursor-pointer"
                      >
                        I want something similar done
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
