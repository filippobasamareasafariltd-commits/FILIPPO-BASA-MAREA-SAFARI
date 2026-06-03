import React from "react";
import { SafariPackage } from "../types";
import { Trees, Compass, Map, UserCheck, Flame } from "lucide-react";

interface SafariCardProps {
  key?: string;
  safari: SafariPackage;
  language: "it" | "en";
  onBook: (title: string) => void;
}

export default function SafariCard({ safari, language, onBook }: SafariCardProps) {
  const isIt = language === "it";
  const title = isIt ? safari.titleIt : safari.titleEn;
  const tagline = isIt ? safari.taglineIt : safari.taglineEn;
  const description = isIt ? safari.descriptionIt : safari.descriptionEn;
  const duration = isIt ? safari.durationIt : safari.durationEn;
  const parks = isIt ? safari.parksIt : safari.parksEn;
  const priceDetails = isIt ? safari.priceDetailsIt : safari.priceDetailsEn;
  const highlights = isIt ? safari.highlightsIt : safari.highlightsEn;
  const bestFor = isIt ? safari.bestForIt : safari.bestForEn;

  return (
    <div 
      id={`safari-card-${safari.id}`}
      className="bg-stone-950 text-stone-100 rounded-3xl overflow-hidden border border-amber-500/10 shadow-2xl relative flex flex-col lg:flex-row h-full"
    >
      {/* Decorative Warm Accent Light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Hero Image Block */}
      <div className="lg:w-2/5 relative h-72 lg:h-auto min-h-[300px] overflow-hidden">
        <img 
          src={safari.image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-950 via-stone-950/40 to-transparent" />
        
        {/* Duration badge on image */}
        <span className="absolute top-4 left-4 bg-amber-500 text-stone-950 text-xs px-3.5 py-1.5 rounded-full font-bold font-mono tracking-wide uppercase">
          {duration}
        </span>
      </div>

      {/* Description & Detailed Specs */}
      <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between relative z-10">
        <div>
          {/* Tagline/Pre-header */}
          <span className="text-amber-500 text-xs font-mono tracking-wider uppercase font-medium flex items-center gap-1.5 mb-2">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            {isIt ? "SAVANA SELVAGGIA KENYA" : "AUTHENTIC SAVANNAH WILDLIFE"}
          </span>

          <h3 className="font-sans text-2xl font-black text-white tracking-tight mb-3">
            {title}
          </h3>

          <p className="text-amber-100/60 text-xs font-serif italic mb-4">
            "{tagline}"
          </p>

          <p className="text-stone-300 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Parks & Locations */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-stone-400 text-xs font-mono uppercase tracking-wider block mr-1">
              {isIt ? "Parchi:" : "Parks visited:"}
            </span>
            {parks.map((park, index) => (
              <span 
                key={index} 
                className="bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1"
              >
                <Map className="w-3.5 h-3.5 shrink-0" />
                {park}
              </span>
            ))}
          </div>

          {/* Bullet highlights */}
          <div className="mb-6 bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
            <h4 className="text-amber-400 text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <Trees className="w-4 h-4" />
              {isIt ? "Cosa vivrai in questa avventura:" : "Highlights of this tour:"}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-300">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & Call to Action Footer */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mt-4">
          <div>
            <span className="text-stone-500 text-[10px] font-mono uppercase tracking-wider block">
              {isIt ? "Dettaglio Tariffe" : "Rate Details"}
            </span>
            <p className="text-amber-200 text-xs md:text-sm font-semibold max-w-sm">
              {priceDetails}
            </p>
            <span className="text-stone-400 text-[11px] block mt-0.5 font-sans">
              <UserCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-500" />
              {isIt ? `Consigliato per: ${bestFor}` : `Best for: ${bestFor}`}
            </span>
          </div>

          <button
            id={`book-safari-${safari.id}`}
            onClick={() => onBook(title)}
            className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-sans font-bold py-3.5 px-6 rounded-2xl cursor-pointer shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.832 1.452 5.43.003 9.85-4.413 9.854-9.843.002-2.63-1.018-5.101-2.872-6.957C16.548 1.95 14.075.932 11.45.932c-5.434 0-9.858 4.417-9.863 9.848-.001 1.762.474 3.486 1.38 5.011L1.93 21.164l5.421-1.42a9.799 9.799 0 0 0 4.59.01z" />
            </svg>
            {isIt ? "Chiedi Preventivo WhatsApp" : "Get Free Quote on WhatsApp"}
          </button>
        </div>
      </div>
    </div>
  );
}
