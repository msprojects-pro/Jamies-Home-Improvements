/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes background graphic */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center -z-10 opacity-50">
        <MessageSquareQuote className="w-32 h-32 text-slate-100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-full mx-auto" />
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            We are incredibly proud of our reputation for quality and cleanliness. Here is honest feedback from homeowners around County Antrim.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 border border-gray-100 p-8 rounded-2xl relative shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-950 text-sm sm:text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {testimonial.location}, NI
                    </span>
                  </div>
                </div>

                {/* Verified Tag */}
                <div className="flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-1 bg-teal-500/15 text-teal-400 font-black text-2xl py-1.5 px-3 rounded-xl">
              5.0
              <Star className="w-5 h-5 fill-teal-400 text-teal-400" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-white text-base">Perfect 5-Star Average Rating</h4>
              <p className="text-xs text-slate-400">Based on domestic and commercial jobs done across Carrickfergus.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
