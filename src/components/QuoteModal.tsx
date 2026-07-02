/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, Loader2, MapPin } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../data";
import { QuoteRequestData } from "../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedServiceId }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequestData>({
    name: "",
    email: "",
    phone: "",
    service: "painting-decorating",
    address: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync pre-selected service when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      if (preselectedServiceId) {
        // Match either key or descriptive text
        const found = SERVICES.find(
          (s) => s.id === preselectedServiceId || s.title.toLowerCase().includes(preselectedServiceId.toLowerCase())
        );
        if (found) {
          setFormData((prev) => ({ ...prev, service: found.id }));
        } else if (preselectedServiceId === "custom") {
          setFormData((prev) => ({ ...prev, service: "custom" }));
        } else {
          // If preselected matches a category from gallery, map appropriately
          if (preselectedServiceId.includes("Painting")) {
            setFormData((prev) => ({ ...prev, service: "painting-decorating" }));
          } else if (preselectedServiceId.includes("Pressure")) {
            setFormData((prev) => ({ ...prev, service: "pressure-washing" }));
          } else if (preselectedServiceId.includes("Gutter")) {
            setFormData((prev) => ({ ...prev, service: "gutter-pvc-cleaning" }));
          } else if (preselectedServiceId.includes("Fencing")) {
            setFormData((prev) => ({ ...prev, service: "fencing-repairs" }));
          } else if (preselectedServiceId.includes("Roof")) {
            setFormData((prev) => ({ ...prev, service: "roof-scraping" }));
          } else if (preselectedServiceId.includes("Sealing")) {
            setFormData((prev) => ({ ...prev, service: "driveway-sealing" }));
          }
        }
      }
    }
  }, [isOpen, preselectedServiceId]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("=== Quote Estimate Request Submission ===");
      console.log("Name:", formData.name);
      console.log("Email:", formData.email);
      console.log("Phone:", formData.phone);
      console.log("Service Category:", formData.service);
      console.log("Property Address:", formData.address);
      console.log("Additional Details:", formData.details);
      console.log("========================================");

      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "painting-decorating",
        address: "",
        details: "",
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 z-10 max-h-[90vh] flex flex-col"
            id="quote-modal"
          >
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50">
              <div className="text-left">
                <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block">Estimate Quote</span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">Get a Fast Free Quote</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {submitSuccess ? (
                <div className="py-8 text-center space-y-4" id="quote-success-state">
                  <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-teal-500/25">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Request Received!</h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thanks for requesting a quote. Jamie will review your details and call you back shortly (usually within a few hours) to arrange an inspection or provide an estimate.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left" id="quote-request-form">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      placeholder="e.g. David Montgomery"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none"
                    />
                  </div>

                  {/* Two Column details: Email / Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label htmlFor="modal-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        required
                        placeholder="e.g. 07999 390898"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="modal-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        required
                        placeholder="e.g. david@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none"
                      />
                    </div>

                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-service" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Service Category
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none appearance-none cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="custom">Other / General Maintenance</option>
                    </select>
                  </div>

                  {/* Property Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-address" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Property Address / Postal Code (in NI)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="modal-address"
                        name="address"
                        required
                        placeholder="e.g. Carrickfergus BT38"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-details" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Project Specifications
                    </label>
                    <textarea
                      id="modal-details"
                      name="details"
                      required
                      rows={3}
                      placeholder="e.g. Gutter clearing of 2-storey house + front driveway pressure washing..."
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:from-teal-400 disabled:to-cyan-400 text-white font-extrabold text-base py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer active:scale-98 disabled:pointer-events-none mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting Details...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request for Estimate
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center mt-3 leading-normal">
                    *We strictly protect your contact details. They are only used to calculate and coordinate your project estimate. No sales spam.
                  </p>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
