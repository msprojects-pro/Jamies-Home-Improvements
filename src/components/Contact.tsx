/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, Send, Loader2 } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../data";
import { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "painting-decorating",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate submission
    setTimeout(() => {
      console.log("=== Contact Form Submission ===");
      console.log("Name:", formData.name);
      console.log("Email:", formData.email);
      console.log("Phone:", formData.phone);
      console.log("Service Selected:", formData.service);
      console.log("Message:", formData.message);
      console.log("===============================");

      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "painting-decorating",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-950 tracking-tight">
            Contact Jamie's Home Improvements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-full mx-auto" />
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Have a question or want to discuss a project? Contact us directly by phone or email, or drop us a message using our quick form below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info Cards & Coverage Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Quick Contact Info */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold">Direct Connection</h3>
              <p className="text-sm text-slate-400">
                Give Jamie a call directly for an immediate estimate, or email your photos/project specifications.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block font-bold">Call Now</span>
                    <span className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">
                      {BUSINESS_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-2xl group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block font-bold">Email Us</span>
                    <span className="text-base font-bold text-white group-hover:text-teal-400 transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block font-bold">Base Location</span>
                    <span className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest block font-bold">Business Hours</span>
                    <span className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.hours}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Removed */}
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-left" id="contact-form-container">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
            <p className="text-sm text-slate-500 mb-8">
              Fill in your contact details and specify which service you require. We will get back to you shortly with friendly expert advice.
            </p>

            {submitSuccess ? (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 p-8 rounded-2xl text-center space-y-4 animate-fade-in" id="contact-success-msg">
                <div className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-teal-500/25">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
                <p className="text-sm text-teal-700 leading-relaxed max-w-md mx-auto">
                  Thank you for contacting Jamie's Home Improvements. Jamie will review your request and call or email you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 text-xs font-extrabold text-teal-600 hover:text-teal-800 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                
                {/* Two-Column Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. David Montgomery"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. 07999 390898"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none"
                    />
                  </div>

                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. david@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none appearance-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="custom">Other / Custom Improvement</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Project Details / Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your project details, address (if comfortable), and when you'd like us to start..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:from-teal-400 disabled:to-cyan-400 text-white font-extrabold text-base py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-cyan-500/20 transition-all active:scale-98 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
