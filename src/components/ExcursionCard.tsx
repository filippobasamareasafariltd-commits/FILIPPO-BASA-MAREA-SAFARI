import React from "react";
import { TourExcursion } from "../types";
import { Clock, MapPin, Check, Compass, Sparkles } from "lucide-react";

interface ExcursionCardProps {
  key?: string;
  excursion: TourExcursion;
  language: "it" | "en";
  onBook: (title: string) => void;
}

export default function ExcursionCard({ excursion, language, onBook }: ExcursionCardProps) {
  const isIt = language === "it";
  const title = isIt ? excursion.titleIt : excursion.titleEn;
  const description = isIt ? excursion.descriptionIt : excursion.descriptionEn;
  const duration = isIt ? excursion.durationIt : excursion.durationEn;
  const price = isIt ? excursion.priceEstimateIt : excursion.priceEstimateEn;
  const highlights = isIt ? excursion.highlightsIt : excursion.highlightsEn;
  const inclusions = isIt ? excursion.includesIt : excursion.includesEn;

  return (
    <div 
      id={`excursion-card-${excursion.id}`}
      className="bg-stone-50 rounded-2xl overflow-hidden border border-amber-900/10 shadow-lg shadow-amber-900/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image & Category Tag */}
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={excursion.image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Tag */}
        <span className="absolute top-4 left-4 bg-emerald-950/90 text-amber-200 border border-amber-500/20 text-xs px-3 py-1.5 rounded-full font-sans tracking-wide uppercase font-medium flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          {isIt ? excursion.category : excursion.category}
        </span>

        {/* Pricing tag over image corner */}
        <span className="absolute bottom-4 right-4 bg-amber-500/95 text-stone-900 font-bold px-3 py-1 rounded-lg text-sm shadow-md">
          {price}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-stone-500 text-xs font-mono mb-2">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>{duration}</span>
        </div>

        <h3 className="font-sans text-xl font-bold text-stone-900 mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Highlights bullets */}
        <div className="mb-4 bg-white p-3 rounded-xl border border-stone-100">
          <p className="text-stone-800 text-xs font-bold mb-2 font-mono tracking-wide uppercase flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {isIt ? "In Evidenza:" : "Highlights:"}
          </p>
          <ul className="space-y-1">
            {highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-snug">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Inclusions list */}
        <div className="mb-5">
          <p className="text-stone-500 text-[11px] font-mono tracking-wide uppercase mb-1">
            {isIt ? "Include:" : "Includes:"}
          </p>
          <div className="flex flex-wrap gap-1">
            {inclusions.map((inc, index) => (
              <span key={index} className="bg-stone-200/60 text-stone-700 text-[10px] px-2 py-0.5 rounded-md font-medium">
                {inc}
              </span>
            ))}
          </div>
        </div>

        {/* Quick WhatsApp CTA Button */}
        <button
          id={`book-btn-${excursion.id}`}
          onClick={() => onBook(title)}
          className="w-full mt-auto bg-emerald-800 hover:bg-emerald-900 text-white font-medium py-3 px-4 rounded-xl shadow-md cursor-pointer hover:shadow-emerald-900/10 transition-all text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.832 1.452 5.43.003 9.85-4.413 9.854-9.843.002-2.63-1.018-5.101-2.872-6.957C16.548 1.95 14.075.932 11.45.932c-5.434 0-9.858 4.417-9.863 9.848-.001 1.762.474 3.486 1.38 5.011L1.93 21.164l5.421-1.42a9.799 9.799 0 0 0 4.59.01z" />
          </svg>
          {isIt ? "Chiedi su WhatsApp" : "Inquire on WhatsApp"}
        </button>
      </div>
    </div>
  );
}
