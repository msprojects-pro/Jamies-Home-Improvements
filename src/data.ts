/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem, Testimonial } from './types';

// Asset references
export const HERO_BG_URL = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';

export const BUSINESS_INFO = {
  name: "Jamie's Home Improvements",
  tagline: "Professional Painting, Decorating & Home Improvement Services",
  location: "Carrickfergus, County Antrim, United Kingdom",
  servingAreas: ["Carrickfergus", "Belfast", "Larne", "Newtownabbey", "Bangor", "East Antrim"],
  phone: "+44 7999 390898",
  phoneFormatted: "07999 390898",
  email: "Jamieshome24@gmail.com",
  hours: "Always Open / 24/7 Service & Quotes",
  facebookUrl: "https://www.facebook.com/JamiesHomeImprovements" // Standard professional touch
};

export const SERVICES: Service[] = [
  {
    id: "painting-decorating",
    title: "Painting & Decorating",
    description: "Flawless interior and exterior painting with immaculate preparation and premium materials for a high-end finish.",
    iconName: "Paintbrush",
    details: [
      "Full interior painting (walls, ceilings, woodwork)",
      "Exterior masonry and wood painting",
      "Wallpaper stripping and professional hanging",
      "Wood staining, varnishing & furniture revamping",
      "Meticulous sanding, filling, and caulking prep"
    ]
  },
  {
    id: "gutter-pvc-cleaning",
    title: "Gutter & uPVC Cleaning",
    description: "Clearing out blockages and restoring uPVC fascias, soffits, and gutters back to a pristine bright white finish.",
    iconName: "Droplet",
    details: [
      "Complete debris and moss clearing from gutter runs",
      "High-reach deep scrubbing of uPVC fascias & soffits",
      "Inspection of gutter joints & minor leak repairs",
      "Downspout unblocking and flow testing",
      "Full exterior uPVC cladding revival"
    ]
  },
  {
    id: "pressure-washing",
    title: "Pressure & Soft Washing",
    description: "Removing years of stubborn dirt, algae, moss, and lichen safely from driveways, patios, and delicate wall renders.",
    iconName: "Sparkles",
    details: [
      "High-power driveway & block paving pressure washing",
      "Gentle soft wash chemical treatment for delicate renders",
      "Patio, decking, and wooden fence restoration",
      "Moss and black spot treatment & removal",
      "Sanding block paving joints post-cleaning"
    ]
  },
  {
    id: "fencing-repairs",
    title: "Fencing Fitting & Repairs",
    description: "Sturdy new fencing installations and fast repair services to withstand Northern Ireland's toughest weather.",
    iconName: "Hammer",
    details: [
      "Full custom timber fence panel installations",
      "Concrete and wooden post installations & secures",
      "Gate fitting, heavy-duty latch & hinge upgrades",
      "Storm damage repairs & temporary bracing",
      "Wood preservative treatment & staining"
    ]
  },
  {
    id: "roof-scraping",
    title: "Roof Scraping & Repairs",
    description: "Safe, manual scrape of moss from tiles followed by repairs to tiles, cement work, and leaks.",
    iconName: "Home",
    details: [
      "Manual tile scraped moss removal (no pressure damaging tiles)",
      "Anti-fungal biocide treatment to delay future growth",
      "Broken tile replacements & flashing repairs",
      "Mortar pointing of ridge caps and valleys",
      "Chimney cowl fitting & structural checks"
    ]
  },
  {
    id: "dry-ridge-verge",
    title: "Dry Ridge & Dry Verge Systems",
    description: "High-performance, maintenance-free dry systems to completely secure your roof tiles against high winds and water ingress.",
    iconName: "ShieldCheck",
    details: [
      "Modern uPVC Dry Verge cap installations (no crumbling mortar)",
      "Roll-out Dry Ridge mechanical fix systems",
      "High wind resistance and ventilation compliant",
      "Eliminates regular mortar re-pointing maintenance",
      "Adds a clean, sharp, architectural border to your roofline"
    ]
  },
  {
    id: "driveway-sealing",
    title: "Driveway Sealing",
    description: "Premium weed-inhibiting, color-enhancing protective sealer application for newly cleaned block paving, tarmac, or concrete.",
    iconName: "Layers",
    details: [
      "Premium acrylic sealer coat application",
      "Inhibits future weed, moss, and lichen growth",
      "Restores natural colors and protects against oil stains",
      "Stabilizes joint sand to prevent wash-out",
      "Tarmac restorer coating for faded black driveways"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Stunning Exterior House Painting",
    category: "Painting & Decorating",
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    description: "Crisp white masonry paint with beautiful blue trim details, Carrickfergus."
  },
  {
    id: "gal-2",
    title: "Vibrant living room decor",
    category: "Painting & Decorating",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    description: "Modern interior feature wall with seamless paint borders and wood trim finish."
  },
  {
    id: "gal-3",
    title: "Deep Driveway Pressure Wash",
    category: "Pressure Washing",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    description: "Complete dirt, oil, and moss removal from brick block paving before re-sanding."
  },
  {
    id: "gal-4",
    title: "Bespoke uPVC Gutter Refresh",
    category: "Gutter & PVC",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    description: "Pristine white PVC cleaning showing brilliant transformation of the fascia boards."
  },
  {
    id: "gal-5",
    title: "Premium Timber Fence Fitting",
    category: "Fencing",
    imageUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
    description: "Robust hand-built timber panel fence with heavy duty concrete support posts."
  },
  {
    id: "gal-6",
    title: "Dry Verge System Upgrade",
    category: "Roof & Dry Ridge",
    imageUrl: "https://images.unsplash.com/photo-1632759162443-41e978453a94?auto=format&fit=crop&w=800&q=80",
    description: "uPVC protective edge caps installed to secure tiles and block storm water."
  },
  {
    id: "gal-7",
    title: "Perfect Block Paving Sealing",
    category: "Driveway Sealing",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    description: "Deep color lock acrylic sealant coat protecting paving stones from UV rays and oil spills."
  },
  {
    id: "gal-8",
    title: "Roof Moss Scraping Completion",
    category: "Roof & Dry Ridge",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Full safe tile moss scraping done, looking clean and structurally solid."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "David Montgomery",
    location: "Carrickfergus",
    text: "Jamie painted the entire exterior of our house and cleaned all uPVC gutters. Absolute stellar job! Friendly, fast, and left no mess at all. The house looks brand new.",
    rating: 5,
    date: "June 2026",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t-2",
    name: "Sarah Johnstone",
    location: "Greenisland",
    text: "Requested a quote for dry verge caps and roof scraping. Jamie arrived next day, gave a very competitive price, and completed the work to perfection. Highly recommended local service!",
    rating: 5,
    date: "May 2026",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t-3",
    name: "William Vance",
    location: "Larne",
    text: "Excellent pressure washing job on my driveway and back patio. It was covered in dark moss and lichen, now it looks freshly laid. Sealing looks great too. Reliable and hard worker.",
    rating: 5,
    date: "April 2026",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "t-4",
    name: "Margaret Clarke",
    location: "Newtownabbey",
    text: "Jamie and his team fitted a beautiful timber fence in my garden after the winter storms took down my old one. Very sturdy, looks brilliant, and they disposed of all the old broken timber. Exceptional service.",
    rating: 5,
    date: "March 2026",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
