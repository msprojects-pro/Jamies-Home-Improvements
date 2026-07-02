/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>("painting-decorating");

  const handleOpenQuote = () => {
    setPreselectedService("painting-decorating");
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceIdOrName: string) => {
    setPreselectedService(serviceIdOrName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans scroll-smooth" id="app-root">
      {/* Sticky Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* About Company Section */}
        <About />

        {/* Services Showcase Section */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Gallery/Portfolio Section */}
        <Gallery onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Reviews Section */}
        <Testimonials />

        {/* Contact details & coverage map Section */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Mobile Floating Pulsating Call Button */}
      <FloatingCall />

      {/* Dynamic Free Quotation Modal Pop-up */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedServiceId={preselectedService}
      />
    </div>
  );
}
