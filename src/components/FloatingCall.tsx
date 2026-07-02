/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function FloatingCall() {
  return (
    <div className="fixed bottom-6 right-6 z-40 sm:hidden" id="mobile-floating-call-container">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl active:scale-90 transition-transform duration-200"
        aria-label="Call Jamie Now"
      >
        {/* Pulsating Ring Effect */}
        <span className="absolute -inset-2 rounded-full bg-orange-500 animate-ping opacity-25" />
        <span className="absolute -inset-1 rounded-full bg-orange-400 opacity-20" />
        
        <Phone className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  );
}
