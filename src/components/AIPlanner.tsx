import React, { useState } from "react";
import { PlannerInput } from "../types";
import { Sparkles, Calendar, Users, MapPin, Compass, AlertCircle, RefreshCw, Send, CheckCircle } from "lucide-react";

interface AIPlannerProps {
  language: "it" | "en";
}

// Light markdown renderer that formats basic header tags, bold elements, and lists safely in the UI
function SimpleMarkdownRenderer({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-3 font-sans text-stone-800 leading-relaxed text-sm selection:bg-amber-100">
      {lines.map((line, index) => {
        const trimmed = line.trim();

        // Level 3 Headers (### Jambo)
        if (trimmed.startsWith("###")) {
          return (
            <h4 key={index} className="text-stone-900 font-bold text-lg pt-4 pb-1 border-b border-stone-100 flex items-center gap-1.5 font-sans tracking-tight">
              {trimmed.replace("###", "").trim()}
            </h4>
          );
        }
        
        // Level 2 Headers (## Jambo)
        if (trimmed.startsWith("##")) {
          return (
            <h3 key={index} className="text-stone-900 font-black text-xl pt-5 pb-1 flex items-center gap-1.5 font-sans tracking-tight">
              {trimmed.replace("##", "").trim()}
            </h3>
          );
        }

        // Bold and list titles (**Giorno 1:**)
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <h5 key={index} className="text-stone-900 font-bold text-sm pt-2 tracking-wide uppercase font-mono text-amber-800">
              {trimmed.replace(/\*\*/g, "").trim()}
            </h5>
          );
        }

        // Standard bullet points (- Snorkeling) or (* Snorkeling)
        if (trimmed.startsWith("-") || trimmed.startsWith("* ")) {
          // Remove bullet and format bold sections inside bullets
          const rawBullet = trimmed.replace(/^[\s-*]+/, "").trim();
          return (
            <div key={index} className="pl-4 flex items-start gap-2 text-stone-700">
              <span className="text-amber-500 font-bold mt-1 shrink-0">•</span>
              <p className="text-sm">
                {formatBoldText(rawBullet)}
              </p>
            </div>
          );
        }

        // Blank lines
        if (trimmed === "") {
          return <div key={index} className="h-2" />;
        }

        // Regular paragraphs (supporting embedded bold text like **bold word**)
        return (
          <p key={index} className="text-stone-700 text-sm">
            {formatBoldText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

// Helper function to safely render **bold** syntax using React elements
function formatBoldText(rawText: string) {
  const parts = rawText.split(/\*\*([^*]+)\*\*/g);
  if (parts.length === 1) return rawText;

  return parts.map((part, index) => {
    // Odd indices correspond to capturing groups inside the split (the bold text)
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-extrabold text-stone-950 bg-stone-100/80 px-1 rounded-md">
          {part}
        </strong>
      );
    }
    return part;
  });
}

const LEADING_MESSAGES_IT = [
  "Contattando Filippo nella barriera corallina...",
  "Cambiando marcia al fuoristrada 4x4...",
  "Consultando le guide Maasai per l'avvistamento dei leoni...",
  "Cucinando virtualmente un'aragosta alla brace...",
  "Filippo sta scrivendo l'itinerario perfetto... HAKUNA MATATA!",
];

const LEADING_MESSAGES_EN = [
  "Contacting Filippo near the coral sandbanks...",
  "Shifting gears on the 4x4 safari cruiser...",
  "Consulting Maasai rangers for active lion prides...",
  "Grilling a virtual fresh rock lobsters...",
  "Filippo is stitching your dream itinerary... HAKUNA MATATA!",
];

export default function AIPlanner({ language }: AIPlannerProps) {
  const isIt = language === "it";

  // Form states
  const [userName, setUserName] = useState("");
  const [duration, setDuration] = useState(5);
  const [departure, setDeparture] = useState("Watamu");
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState<"budget" | "standard" | "premium">("standard");
  const [interests, setInterests] = useState<string[]>(["safari", "sea"]);

  // Application engine states
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [generatedItinerary, setGeneratedItinerary] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Interest toggling helper
  const handleInterestToggle = (id: string) => {
    if (interests.includes(id)) {
      if (interests.length > 1) {
        setInterests(interests.filter((i) => i !== id));
      }
    } else {
      setInterests([...interests, id]);
    }
  };

  // Triggers the generation process
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorStatus(null);
    setGeneratedItinerary("");
    setCopied(false);

    // Loop through cute loading messages
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % LEADING_MESSAGES_IT.length);
    }, 2800);

    try {
      const response = await fetch("/api/planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          duration: Number(duration),
          departure: departure,
          travelers: Number(travelers),
          interests: interests,
          budget: budget,
          name: userName || "Amico"
        }),
      });

      if (!response.ok) {
        throw new Error(isIt ? "Impossibile contattare il server. Errore di rete." : "Could not reach the server network.");
      }

      const data = await response.json();
      
      if (data.text) {
        setGeneratedItinerary(data.text);
      } else {
        throw new Error("Formato di risposta non valido.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err?.message || (isIt ? "Qualcosa è andato storto nella savana..." : "Something went wrong in the savannah..."));
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  // Copies itinerary text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedItinerary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Constructs direct WhatsApp route
  const handleWhatsAppBooking = () => {
    const defaultName = userName || (isIt ? "Viaggiatore" : "Traveler");
    const intro = isIt 
      ? `Ciao Filippo! Sono ${defaultName}. Ho appena creato questo itinerario con il tuo assistente AI di ${duration} giorni da ${departure} con budget ${budget.toUpperCase()}.\n\n`
      : `Hi Filippo! I am ${defaultName}. I just created this awesome ${duration}-day itinerary from ${departure} with budget ${budget.toUpperCase()}.\n\n`;

    // Extract a brief summary of the itinerary
    const messageContent = intro + generatedItinerary.substring(0, 700) + "...\n\n" + (isIt ? "Vorrei ricevere un preventivo personalizzato! Grazie!" : "I would like to get a personalized price quote! Thanks!");
    const encoded = encodeURIComponent(messageContent);
    window.open(`https://wa.me/254734945928?text=${encoded}`, "_blank");
  };

  return (
    <div id="ai-planner-module" className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
      <div className="bg-stone-900 px-6 py-8 md:p-10 text-white relative">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-amber-500 text-stone-950 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
            AI POWERED
          </span>
          <span className="text-amber-400 font-mono text-xs font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Gemini 3.5
          </span>
        </div>
        <h3 className="font-sans text-2xl md:text-3xl font-black tracking-tight text-white">
          {isIt ? "Pianifica il tuo Viaggio da Sogno in 10 secondi" : "Plan Your Dream Kenya Holiday in 10 Seconds"}
        </h3>
        <p className="text-stone-300 text-xs md:text-sm max-w-2xl mt-2">
          {isIt 
            ? "Indica le tue preferenze: il nostro assistente AI elaborerà una bozza di itinerario combinando i Safari mozzafiato selvaggi con le escursioni della barriera corallina guidate da Filippo Bassa Marea."
            : "Select your options: our smart assistant drafts a premium daily log fusing African savannah game drives and custom Indian Ocean beach trips led by Captain Filippo."}
        </p>
      </div>

      <div className="p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Form setup */}
          <form onSubmit={handleGenerate} className="lg:col-span-5 space-y-6">
            
            {/* Passenger Name */}
            <div>
              <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                {isIt ? "Il tuo Nome / Cognome" : "Your Name / Family"}
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={isIt ? "Es. Mario Rossi" : "E.g. John Doe"}
                required
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Duration Slider */}
              <div>
                <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-amber-600" />
                  {isIt ? "Durata Viaggio" : "Duration"}
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-3 text-stone-900 text-sm font-medium transition-all focus:ring-2 focus:ring-amber-500"
                >
                  <option value={2}>{isIt ? "2 Giorni" : "2 Days"}</option>
                  <option value={3}>{isIt ? "3 Giorni" : "3 Days"}</option>
                  <option value={4}>{isIt ? "4 Giorni" : "4 Days"}</option>
                  <option value={5}>{isIt ? "5 Giorni" : "5 Days"}</option>
                  <option value={7}>{isIt ? "7 Giorni (Consigliato)" : "7 Days (Recommended)"}</option>
                  <option value={10}>{isIt ? "10 Giorni" : "10 Days"}</option>
                </select>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                  <Users className="w-3.5 h-3.5 inline mr-1 text-amber-600" />
                  {isIt ? "Partecipanti" : "Travelers"}
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 text-sm font-medium focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Departure point */}
            <div>
              <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-amber-600" />
                {isIt ? "Punto di Partenza in Kenya" : "Kenya Base Basecamp"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Watamu", "Malindi", "Mombasa"].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setDeparture(loc)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold tracking-wide transition-all ${
                      departure === loc
                        ? "bg-amber-500 border-amber-500 text-stone-950 shadow-md"
                        : "bg-stone-50 border-stone-300 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Budget */}
            <div>
              <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                {isIt ? "Categoria Costo / Alloggio" : "Estimated Budget / Lodging"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["budget", "standard", "premium"].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setBudget(tier as any)}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center ${
                      budget === tier
                        ? "bg-stone-900 text-white border-stone-900 shadow-lg"
                        : "bg-stone-50 border-stone-300 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="capitalize">{tier}</span>
                    <span className="text-[9px] opacity-70 mt-1 font-normal font-mono">
                      {tier === "budget" && (isIt ? "Gruppi / Tende" : "Groups / Tents")}
                      {tier === "standard" && (isIt ? "Lodge Primi" : "Elite Lodges")}
                      {tier === "premium" && (isIt ? "Lusso Privato" : "Private Luxury")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Multi-Select Interests */}
            <div>
              <label className="block text-stone-700 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 inline mr-1 text-amber-600" />
                {isIt ? "Cosa vuoi vivere assolutamente? (Seleziona)" : "Core Experience Interests"}
              </label>
              <div className="space-y-2">
                {[
                  { id: "safari", labelIt: "🦁 Safari Savana (Tsavo East / Amboseli)", labelEn: "🦁 Savannah Safari (Tsavo / Amboseli)" },
                  { id: "sea", labelIt: "🏝️ Sardegna 2 & Escursioni in Mare", labelEn: "🏝️ Sardegna 2 Atoll & Marine Trips" },
                  { id: "culture", labelIt: "🛖 Rovine Storiche & Villaggi Giriama", labelEn: "🛖 Historic Ruins & Giriama Tribes" },
                  { id: "nature", labelIt: "🌅 Canyon di Marafa & Tramonto Mida Creek", labelEn: "🌅 Marafa Canyon & Mangrove Sunsets" },
                ].map((item) => {
                  const active = interests.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleInterestToggle(item.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                        active
                          ? "bg-amber-100/50 border-amber-600/30 text-amber-950"
                          : "bg-stone-50 border-stone-300 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      <span>{isIt ? item.labelIt : item.labelEn}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        active ? "bg-amber-600 border-amber-600 text-white" : "border-stone-400"
                      }`}>
                        {active && "✓"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submission Button */}
            <button
              id="ai-generate-submit-btn"
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-2xl cursor-pointer text-sm font-sans font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                loading
                  ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
              }`}
            >
              <Send className="w-4 h-4" />
              {loading 
                ? (isIt ? "Pianificazione in Corso..." : "Drafting Itinerary...") 
                : (isIt ? "Genera Itinerario con AI!" : "Generate Custom Plan with AI!")}
            </button>
          </form>

          {/* Results Block */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[400px]">
            <div className="border border-stone-200 bg-stone-50 rounded-2xl flex-grow flex flex-col overflow-hidden relative">
              
              {/* Card Header controls */}
              <div className="bg-stone-100 px-5 py-3 border-b border-stone-200 flex items-center justify-between">
                <span className="text-stone-500 text-xs font-mono font-bold tracking-wide flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  {isIt ? "PROGRAMMA PERSONALIZZATO" : "YOUR CUSTOM TRAVEL LOG"}
                </span>

                {generatedItinerary && (
                  <button
                    onClick={copyToClipboard}
                    className="text-stone-600 hover:text-stone-900 text-xs font-mono font-bold flex items-center gap-1 bg-white border border-stone-300 rounded-lg px-2.5 py-1 transition-all"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">{isIt ? "Copiato!" : "Copied!"}</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-3 h-3 text-stone-500" />
                        <span>{isIt ? "Copia Itinerario" : "Copy Log"}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Dynamic Loading Overlay */}
              {loading && (
                <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-6" />
                  <p className="text-stone-900 font-bold mb-2 text-base font-serif animate-pulse">
                    {isIt ? LEADING_MESSAGES_IT[loadingStep] : LEADING_MESSAGES_EN[loadingStep]}
                  </p>
                  <p className="text-stone-400 text-xs max-w-sm">
                    {isIt 
                      ? "I maestosi leoni della savana e l'aragosta grigliata sulla barca di Sardegna 2 stanno per connettersi..."
                      : "Connecting with deep savanna wildlife records and the legendary grilled beach barbecues..."}
                  </p>
                </div>
              )}

              {/* Dynamic state layouts */}
              {!loading && !generatedItinerary && !errorStatus && (
                <div className="flex-grow flex flex-col items-center justify-center p-12 text-center text-stone-400">
                  <Compass className="w-16 h-16 text-stone-300 animate-bounce mb-4" style={{ animationDuration: "3s" }} />
                  <h4 className="font-serif text-lg font-bold text-stone-600 mb-1">
                    {isIt ? "Nessun Itinerario Pronto" : "Waiting for Your Inputs"}
                  </h4>
                  <p className="text-xs max-w-sm">
                    {isIt 
                      ? "Inserisci il tuo nome e seleziona le tue preferenze a sinistra, quindi premi il pulsante dorato per iniziare l'avventura!"
                      : "Fill in your vacation metrics on the left, then click the golden button to consult our database."}
                  </p>
                </div>
              )}

              {/* Error Layout */}
              {errorStatus && (
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center text-red-600">
                  <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                  <h4 className="font-bold text-stone-900 mb-2">
                    {isIt ? "Errore di Connessione Savana" : "Savannah Cloud Timeout"}
                  </h4>
                  <p className="text-xs text-stone-600 max-w-md mb-4 bg-red-50 p-3 rounded-xl border border-red-100">
                    {errorStatus}
                  </p>
                  <button
                    onClick={handleGenerate}
                    className="bg-stone-900 hover:bg-stone-800 text-white text-xs px-4 py-2.5 rounded-xl font-bold font-sans transition-all"
                  >
                    {isIt ? "Riprova Generazione" : "Retry Generation"}
                  </button>
                </div>
              )}

              {/* Itinerary Result Display */}
              {generatedItinerary && (
                <div className="p-6 md:p-8 flex-grow overflow-y-auto max-h-[500px]">
                  <SimpleMarkdownRenderer text={generatedItinerary} />
                </div>
              )}

              {/* Action footer for live quoting */}
              {generatedItinerary && (
                <div className="bg-stone-100 p-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <span className="text-stone-500 text-[10px] font-mono uppercase tracking-wide block">
                      {isIt ? "Vuoi bloccare questa proposta?" : "Lock in this proposal"}
                    </span>
                    <span className="text-stone-800 text-xs font-bold font-sans">
                      {isIt ? "Invia l'itinerario a Filippo su WhatsApp!" : "Send to Filippo on WhatsApp now!"}
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-700/10 hover:shadow-emerald-700/20 transition-all font-sans"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.832 1.452 5.43.003 9.85-4.413 9.854-9.843.002-2.63-1.018-5.101-2.872-6.957C16.548 1.95 14.075.932 11.45.932c-5.434 0-9.858 4.417-9.863 9.848-.001 1.762.474 3.486 1.38 5.011L1.93 21.164l5.421-1.42a9.799 9.799 0 0 0 4.59.01z" />
                    </svg>
                    {isIt ? "Invia Proposta a Filippo" : "Dispatch Proposal to Filippo"}
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
