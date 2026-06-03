import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, Bell, DollarSign, Heart } from "lucide-react";

interface FaqSectionProps {
  language: "it" | "en";
}

export default function FaqSection({ language }: FaqSectionProps) {
  const isIt = language === "it";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <div id="faq-accordions-group" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Informative Side-Panel */}
      <div className="lg:col-span-4 bg-stone-900 text-white rounded-3xl p-6 md:p-8 border border-amber-500/10 shadow-xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/5 blur-3xl pointer-events-none" />
        
        <span className="text-amber-500 font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
          {isIt ? "INFO IMPORTANTI" : "ESSENTIAL PRE-TRAVEL INFO"}
        </span>

        <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tight mb-4">
          {isIt ? "Preparati al Sogno con Filippo" : "Prepare for your Dream Journey"}
        </h3>

        <p className="text-stone-300 text-xs leading-relaxed mb-6">
          {isIt 
            ? "Kenya è ospitale, sicuro e regala ricordi indelebili. Prima di fare le valigie per Watamu, ecco alcune brevi regole d'oro per viaggiare in tranquillità:"
            : "Kenya is stable, extremely welcoming, and guarantees memories that last a lifetime. Before packing your trunks for Watamu, keep these key local guidelines in mind:"}
        </p>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-white font-mono uppercase tracking-wide">eTA Visa</p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isIt 
                  ? "Richiedi l'eTA online almeno 3 giorni prima del volo sul sito ufficiale del governo Kenya."
                  : "Apply for the online eTA visa at least 3 days before flights on the official Kenya site."}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-white font-mono uppercase tracking-wide">
                {isIt ? "Salute & Farmacia" : "Health & Care"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isIt 
                  ? "Porta repellenti per zanzare ad alta efficacia, crema solare protettiva 50+ e scarpe di gomma marina."
                  : "Bring high-strength insect spray, protective coral reef shoes, and SPF 50+ solar screen."}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-white font-mono uppercase tracking-wide">
                {isIt ? "Acconti & Valute" : "Deposits & Currency"}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                {isIt 
                  ? "Gli Euro vengono accettati ovunque sulla costa. Filippo accetta pagamenti contanti locali ed acconti sicuri."
                  : "Euros and USD bills are accepted all over Watamu coast. Filippo supports local cash and secure bank transfers."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion list */}
      <div className="lg:col-span-8 space-y-4">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          const question = isIt ? item.qIt : item.qEn;
          const answer = isIt ? item.aIt : item.aEn;

          return (
            <div 
              key={index}
              className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-amber-900/10"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="font-sans font-bold text-sm md:text-base text-stone-900">
                    {question}
                  </span>
                </div>
                <div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-stone-100 animate-fade-in">
                  <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
