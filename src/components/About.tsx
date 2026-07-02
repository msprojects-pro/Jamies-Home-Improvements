/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Award, ShieldCheck, ThumbsUp, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function About() {
  const stats = [
    { value: "100%", label: "Satisfaction", icon: ThumbsUp, color: "text-teal-500" },
    { value: "24/7", label: "Availability", icon: Award, color: "text-orange-500" },
    { value: "Local", label: "Carrickfergus Owned", icon: MapPin, color: "text-cyan-500" },
    { value: "Insured", label: "Fully Protected", icon: ShieldCheck, color: "text-green-500" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vector shape background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Column / Brand Showcase Cards */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="relative z-10 space-y-6">
              
              {/* Feature Box 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-teal-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950 mb-1">Unmatched Attention to Detail</h4>
                    <p className="text-sm text-slate-600">
                      We treat every brushstroke, roof scrape, and fence fitting with perfectionist standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Box 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950 mb-1">Fully Insured & Local Experts</h4>
                    <p className="text-sm text-slate-600">
                      Based in Carrickfergus, we are fully insured and heavily familiar with Northern Irish coastal weathering.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Box 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-cyan-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-xl">
                    <ThumbsUp className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-950 mb-1">Highly Recommended Local Business</h4>
                    <p className="text-sm text-slate-600">
                      We've built our sterling reputation on reliability, fair pricing, and leaving sites completely clean.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Glowing Background Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-orange-500/10 rounded-3xl -m-4 filter blur-xl -z-10" />
          </div>

          {/* Copy Description Column */}
          <div className="lg:col-span-7 space-y-8" id="about-content">
            <div className="space-y-4">
              <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
                Dedicated Home Improvements in{" "}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Carrickfergus
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full" />
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              At <strong>Jamie's Home Improvements</strong>, we provide high-quality home renovation, painting, and exterior maintenance services tailored for domestic and commercial properties. We operate around Carrickfergus and surrounding areas including Newtownabbey, Belfast, Larne, and Bangor.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Our business is built upon trust, neat workmanship, and robust results. Whether you need your uPVC gutters cleaned back to their original white sheen, your roof cleared of destructive moss, or a professional paint job to revitalize your home's exterior, we deliver with the best materials and friendly local service.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Professional Painting & Decorating",
                "Gutter & PVC deep restorations",
                "Pressure washing & soft wash renders",
                "Dry Ridge & Dry Verge systems",
                "Fencing installations & storm repairs",
                "Always open for emergencies & quote requests",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-2xl font-black text-slate-900 leading-none">{stat.value}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
