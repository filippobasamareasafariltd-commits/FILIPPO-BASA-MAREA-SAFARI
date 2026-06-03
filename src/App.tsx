import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  MapPin, 
  Flame, 
  Sparkles, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Languages, 
  Menu, 
  X, 
  Check, 
  MessageCircle, 
  Map, 
  Waves,
  Award,
  ChevronRight,
  Calculator,
  UserCheck,
  Facebook
} from "lucide-react";

import { EXCURSIONS, SAFARIS, TESTIMONIALS } from "./data";
import ExcursionCard from "./components/ExcursionCard";
import SafariCard from "./components/SafariCard";
import AIPlanner from "./components/AIPlanner";
import FaqSection from "./components/FaqSection";

export default function App() {
  // Application global states
  const [language, setLanguage] = useState<"it" | "en">("it");
  const [activeTab, setActiveTab] = useState<"all" | "safari" | "excursions">("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic cost Calculator states
  const [calcSafariId, setCalcSafariId] = useState(SAFARIS[0].id);
  const [calcExcursionIds, setCalcExcursionIds] = useState<string[]>([]);
  const [calcDays, setCalcDays] = useState(2);
  const [calcTravelers, setCalcTravelers] = useState(2);

  // Quick form states
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const isIt = language === "it";

  // Toggle selected excursions inside the calculator
  const toggleCalcExcursion = (id: string) => {
    if (calcExcursionIds.includes(id)) {
      setCalcExcursionIds(calcExcursionIds.filter(x => x !== id));
    } else {
      setCalcExcursionIds([...calcExcursionIds, id]);
    }
  };

  // Triggers WhatsApp booking for a specific package
  const handleDirectBook = (tourTitle: string) => {
    const text = isIt 
      ? `Ciao Filippo! Ho visto la tua bellissima pagina web ed ho una richiesta speciale per l'escursione: *${tourTitle}*. Mi piacerebbe ricevere informazioni sui prezzi e sulla disponibilità delle date! Hakuna Matata!`
      : `Hi Filippo! I saw your tour website and would love to inquire about the package: *${tourTitle}*. Please share pricing and dates availability! Hakuna Matata!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254734945928?text=${encoded}`, "_blank");
  };

  // Contacts Filippo via custom message
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = contactName || (isIt ? "Splendido Ospite" : "Dear Guest");
    const text = isIt
      ? `Ciao Filippo! Sono ${finalName}. Vorrei mettermi in contatto per organizzare le mie vacanze in Kenya.\nMessaggio: ${contactMessage}`
      : `Hi Filippo! I am ${finalName}. I would love to connect and plan my upcoming Kenya holiday excursions.\nMessage: ${contactMessage}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254734945928?text=${encoded}`, "_blank");
  };

  // Auto-calculated quote estimates
  const calculateEstimate = () => {
    const selectedSafari = SAFARIS.find(s => s.id === calcSafariId);
    let total = 0;

    // Safari precise baseline modeling
    if (selectedSafari) {
      const safariRates: { [key: string]: number } = {
        "coast-tsavo-east-1d": 150,
        "coast-tsavo-east-2d": 220,
        "coast-tsavo-east-amboseli-3d": 420,
        "coast-tsavo-east-taita-3d": 430,
        "coast-tsavo-east-west-3d": 410,
        "coast-taita-amboseli-tsavo-4d": 590,
        "coast-west-amboseli-taita-tsavo-5d": 780,
        "nairobi-masai-mara-jeep-3d": 450,
        "nairobi-nakuru-mara-4d": 600,
        "nairobi-mara-amboseli-tsavo-5d": 890,
        "nairobi-nakuru-mara-amboseli-tsavo-6d": 1090,
        "nairobi-safari-grand-7d": 1290,
        "nairobi-amboseli-west-tsavo-4d": 540,
        "nairobi-amboseli-tsavo-3d": 390
      };
      if (safariRates[selectedSafari.id]) {
        total += safariRates[selectedSafari.id];
      }
    }

    // Excursions precise baseline additions
    calcExcursionIds.forEach(id => {
      const excursionRates: { [key: string]: number } = {
        "watamu-safariblu-mida": 45,
        "watamu-safariblu-sardegna": 50,
        "watamu-mezza-amore": 25,
        "watamu-mezza-sardegna": 25,
        "watamu-mezza-gede-marafa": 40,
        "watamu-intera-robinson-marafa": 55,
        "watamu-vera-africa-tramonto": 30,
        "diani-safari-wasini": 65,
        "diani-citta-mombasa": 45,
        "diani-vera-africa": 35,
        "nairobi-giraffe-centre": 35,
        "nairobi-museo": 30,
        "nairobi-sheldrick-elephant": 40,
        "nairobi-1d-safari": 85
      };
      if (excursionRates[id]) {
        total += excursionRates[id];
      }
    });

    // Class travelers multiplier with standard group logic scale discount
    let discountedPPP = total;
    if (calcTravelers >= 8) {
      discountedPPP = total * 0.85; // 15% discount for large parties
    } else if (calcTravelers >= 4) {
      discountedPPP = total * 0.92; // 8% group discount
    }

    return Math.round(discountedPPP * calcTravelers);
  };

  // Builds WhatsApp summary for estimated packages
  const handleWhatsAppFromCalculator = () => {
    const selectedSafari = SAFARIS.find(s => s.id === calcSafariId);
    const selectedExcursionsNames = EXCURSIONS
      .filter(e => calcExcursionIds.includes(e.id))
      .map(e => isIt ? e.titleIt : e.titleEn)
      .join(", ");

    const text = isIt
      ? `Ciao Filippo! Ho usato il calcolatore sul tuo sito per pianificare una vacanza di gruppo:\n\n` +
        `- No. Viaggiatori: ${calcTravelers}\n` +
        `- Safari Selezionato: *${selectedSafari ? selectedSafari.titleIt : "Nessuno"}*\n` +
        `- Escursioni Marine/Locali: *${selectedExcursionsNames || "Nessuna"}*\n` +
        `- Preventivo Indicativo: circa €${calculateEstimate()} totali\n\n` +
        `Ci piacerebbe ricevere un preventivo formale scontato e definitivo. Potresti aiutarci? Grazie!`
      : `Hi Filippo! I used your web calculator to map out our Kenya holiday:\n\n` +
        `- Travelers Group: ${calcTravelers}\n` +
        `- Savannah Safari: *${selectedSafari ? selectedSafari.titleEn : "None"}*\n` +
        `- Coastal Excursions: *${selectedExcursionsNames || "None"}*\n` +
        `- Estimate Sum: ~€${calculateEstimate()} total\n\n` +
        `Please provide us with a formal discounted offer. Thanks!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254734945928?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-stone-100/40 text-stone-900 font-sans tracking-tight selection:bg-amber-100">
      
      {/* Upper Announcement Bar */}
      <div className="bg-emerald-950 text-amber-200 py-2.5 px-4 text-xs font-mono tracking-wider text-center flex items-center justify-center gap-1.5 border-b border-amber-500/10">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>
          {isIt 
            ? "Miglior Prezzo Garantito & Sconti Speciali per Gruppi! Contattaci su WhatsApp diretto" 
            : "Best Rates Guaranteed & Special Group Discounts! Inquire directly on WhatsApp"}
        </span>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-white border-b border-stone-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-display font-black text-xs shadow-md shadow-amber-500/10">
              FBM
            </div>
            <div>
              <h1 className="font-display font-black text-lg leading-none tracking-tight text-white group-hover:text-amber-400 transition-colors">
                FILIPPO BASSA MAREA
              </h1>
              <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase block mt-0.5">
                Safari & Escursioni Kenya
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-200">
            <a href="#about" className="hover:text-amber-400 transition-colors">{isIt ? "Chi Siamo" : "About"}</a>
            <a href="#tours" className="hover:text-amber-400 transition-colors">{isIt ? "I Nostri Safari" : "Wild Safaris"}</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">{isIt ? "Calcolatore Prezzi" : "Rate Builder"}</a>
            <a href="#planner" className="hover:text-amber-400 transition-colors bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-xl border border-amber-500/20 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {isIt ? "AI Pianificatore" : "AI Planner"}
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">{isIt ? "Faq Viaggio" : "FAQs"}</a>
            <a href="#contacts" className="hover:text-amber-400 transition-colors">{isIt ? "Contatti" : "Contact"}</a>
          </nav>

          {/* Language & WhatsApp buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => setLanguage(language === "it" ? "en" : "it")}
              className="bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl px-3 py-2 text-xs font-mono font-bold flex items-center gap-1.5 text-stone-200 cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-amber-500" />
              <span>{language.toUpperCase()}</span>
            </button>

            <a 
              href="https://wa.me/254734945928" 
              target="_blank" 
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-sans py-2.5 px-4 rounded-xl shadow-md cursor-pointer flex items-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Filippo</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setLanguage(language === "it" ? "en" : "it")}
              className="bg-stone-800 border border-stone-700 p-2 rounded-xl text-xs font-mono font-bold text-stone-200 cursor-pointer flex items-center"
            >
              <Languages className="w-4 h-4 text-amber-500" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-stone-800 border border-stone-700 p-2 rounded-xl text-white block focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-900 text-white border-b border-stone-800 sticky top-20 z-30"
          >
            <div className="p-6 space-y-4 flex flex-col text-sm font-semibold">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1 transition-colors">{isIt ? "Chi Siamo con Filippo" : "About Filippo"}</a>
              <a href="#tours" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1 transition-colors">{isIt ? "I Nostri Safari e Atolli" : "Safaris & Beach Excursions"}</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1 transition-colors">{isIt ? "Calcolatore dei Costi" : "Price Estimator"}</a>
              <a href="#planner" onClick={() => setMobileMenuOpen(false)} className="text-amber-400 py-1 flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                {isIt ? "AI Itinerario Custom" : "AI Custom Planner"}
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1 transition-colors">{isIt ? "Faq e Consigli Utili" : "Travel FAQs"}</a>
              <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1 transition-colors">{isIt ? "Invia Richiesta" : "Send Booking Inquiry"}</a>

              <a 
                href="https://wa.me/254734945928"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 font-bold shadow-md mt-4"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Filippo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] bg-stone-950 flex items-center justify-center text-white overflow-hidden py-16 md:py-24">
        {/* Unsplash beautiful Kenya savannah slide banner */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1920" 
            alt="Kenya Savannah Landscape" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 filter brightness-90 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Tagline Badge */}
            <span className="inline-flex items-center gap-1.5 bg-amber-500/25 text-amber-300 border border-amber-500/20 text-xs py-1.5 px-4 rounded-full font-mono uppercase tracking-wider font-bold">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
              {isIt ? "Vivi il Sogno d'Africa con Filippo" : "Experience the African Dream with Filippo"}
            </span>

            {/* Main Display Typography */}
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight">
              {isIt ? "SAFARI KENYA" : "KENYA SAVANNAH"}<br />
              <span className="text-amber-500 italic block mt-1">Con Filippo Bassa Marea</span>
            </h2>

            {/* Core intro paragraph */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
              {isIt
                ? "Scopri i misteri della Savana del Tsavo e Amboseli abbinati al mare di smeraldo di Watamu. Dal safari classico con avvistamento leoni alle grigliate divine di aragosta sull'atollo di Sardegna 2 a bassa marea. Tutto all'insegna dell'onestà e della fantastica simpatia Swahili."
                : "Embark on an unforgettable Kenyan journey blending Tsavo East safaris containing lions and rhinos with Watamu marine sandbanks. From classic 4x4 savanna rides to our legendary grilled lobster picnic. Always delivered with local warmth, safety, and top budget rates."}
            </p>

            {/* Group stats layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-8">
              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-850">
                <p className="text-amber-500 font-display font-black text-2xl md:text-3xl">10+</p>
                <p className="text-stone-400 text-[11px] font-mono tracking-wider uppercase mt-1">
                  {isIt ? "Anni di Esperienza" : "Years Experience"}
                </p>
              </div>

              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-850">
                <p className="text-amber-500 font-display font-black text-2xl md:text-3xl">100%</p>
                <p className="text-stone-400 text-[11px] font-mono tracking-wider uppercase mt-1">
                  {isIt ? "Aragoste Fresche" : "Fresh Rock Lobsters"}
                </p>
              </div>

              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-850">
                <p className="text-amber-500 font-display font-black text-2xl md:text-3xl">1.5k+</p>
                <p className="text-stone-400 text-[11px] font-mono tracking-wider uppercase mt-1">
                  {isIt ? "Ospiti Felici" : "Happy Travelers"}
                </p>
              </div>

              <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-850">
                <p className="text-amber-500 font-display font-black text-2xl md:text-3xl">0</p>
                <p className="text-stone-400 text-[11px] font-mono tracking-wider uppercase mt-1">
                  {isIt ? "Pensieri (Hakuna Matata)" : "Worries (No Stress)"}
                </p>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#tours" 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-stone-950 font-display font-bold py-4 px-8 rounded-2xl text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                <span>{isIt ? "Esplora i Safari ed Escursioni" : "Explore Tours & Safaris"}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a 
                href="#planner" 
                className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 font-display font-bold py-4 px-8 rounded-2xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                <span>{isIt ? "Crea Itinerario Personalizzato AI" : "Build Itinerary with AI"}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filippo Presentation Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border-8 border-stone-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544526226-d4568090ffb8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Watamu Low Tide Sardegna 2" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Float Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-stone-900/95 backdrop-blur-md p-4 rounded-2xl border border-stone-800 text-white">
                  <p className="text-amber-500 font-mono text-[9px] uppercase tracking-wider block">
                    {isIt ? "IL FENOMENO" : "LOCAL PHENOMENON"}
                  </p>
                  <p className="font-sans font-bold text-sm text-stone-100">
                    {isIt 
                      ? "La splendida Bassa Marea di Watamu: lingue di sabbia bianca spuntano dall'oceano." 
                      : "Watamu's miraculous low tide: spotless white islands rise in the mid-ocean."}
                  </p>
                </div>
              </div>
            </div>

            {/* Written Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-mono text-xs uppercase tracking-wider block font-bold">
                {isIt ? "CHI È FILIPPO BASSA MAREA?" : "MEET GUIDE FILIPPO BASSA MAREA"}
              </span>

              <h2 className="font-sans text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                {isIt 
                  ? "Capitano del mare, esploratore della savana ed amico fidato in Kenya." 
                  : "Savannah tracker, boat captain, and your true holiday partner in Kenya."}
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {isIt
                  ? "Filippo Bassa Marea è un'istituzione locale per chi visita Watamu, Malindi e Jacaranda Beach. Nato e cresciuto tra le meraviglie naturali di questa fantastica costa, Filippo coordina un team esperto di autisti, guide nei parchi nazionali (ritenuti patrimonio protetto UNESCO) e marinai, curando con un tocco saporito e attento ogni escursione dal vivo."
                  : "Captain Filippo is a certified beach operator and safari expert in the Malindi/Watamu district. Renowned for custom private itineraries, Filippo orchestrates a flawless local fleet of open-roof vehicles, traditional snorkeling boats, and native Giriama rangers to offer majestic tour experiences."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                <div className="flex gap-2 text-stone-800 text-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isIt ? "Guida in Italiano e Inglese:" : "Multilingual Service:"}</strong>{" "}
                    {isIt ? "Spiegazioni storiche e risate assicurate nella tua lingua." : "Clear communication, safety compliance, and no barriers."}
                  </span>
                </div>

                <div className="flex gap-2 text-stone-800 text-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isIt ? "Prezzi Chiari & Trasparenti:" : "Value Driven Quotations:"}</strong>{" "}
                    {isIt ? "Nessun costo nascosto. Rispetto alle boutique d'hotel si risparmia fino al 40%." : "Saves up to 45% compared to resort travel desks with higher service quality."}
                  </span>
                </div>

                <div className="flex gap-2 text-stone-800 text-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isIt ? "Assistenza Personalizzata h24:" : "24/7 Coast Support:"}</strong>{" "}
                    {isIt ? "Ti veniamo a prendere direttamente al villaggio resort, senza alcuno stress." : "Door-to-door shuttle pickup at any resort or villa checkpoint."}
                  </span>
                </div>

                <div className="flex gap-2 text-stone-800 text-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isIt ? "Sardegna 2 Esclusiva:" : "Prisinte Sardegna 2 BBQ:"}</strong>{" "}
                    {isIt ? "Il pranzo con grigliata favolosa preparato sulla nostra barca privata." : "Special reef-side lobster cooking with fresh tropical beverages."}
                  </span>
                </div>
              </div>

              {/* Filippo Quote Block */}
              <div className="bg-stone-50 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                <p className="text-stone-700 italic text-sm leading-relaxed font-serif">
                  {isIt
                    ? "\"Viaggiare in Kenya non significa solo scattare foto agli animali della savana. Significa incontrare la cultura Giriama, assaggiare il riso al cocco grigliato sul dhow nel tramonto e lasciarsi trascinare dal ritmo Hakuna Matata. Vi aspetto! Jambo!\""
                    : "\"Coming to Kenya is not only about tracking animals. It is about feeling the Giriama breeze, tasting freshly grilled coconut rice while sunset highlights the mangroves, and adopting Hakuna Matata. Karibu sana!\""}
                </p>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="font-display font-bold text-xs uppercase tracking-wide text-stone-900">— Filippo Bassa Marea</span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Layout */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-amber-700 font-mono text-xs uppercase tracking-wider block font-bold">
              {isIt ? "I NOSTRI CATALOGHI" : "SAFARI & EXCURSION CATALOGUE"}
            </span>

            <h2 className="font-sans text-3xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              {isIt ? "Scegli il tuo Viaggio Perfetto" : "Unlock Your Timeless Kenya Journey"}
            </h2>

            <p className="text-stone-600 text-xs md:text-sm">
              {isIt
                ? "Filtra tra le magiche escursioni marine sulla costa di Watamu o avventurati nelle dune della vera savana d'Africa con i safari in 4x4 targati Filippo."
                : "Browse our dynamic roster of traditional coastal marine trips and deep national park wildlife multi-day savannah safaris in Kenya."}
            </p>

            {/* Filter controls */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`py-2 px-4 rounded-xl text-xs font-bold font-mono tracking-wide transition-all uppercase ${
                  activeTab === "all"
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-200/80 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {isIt ? "Tutte le proposte" : "All Proposals"}
              </button>
              
              <button
                onClick={() => setActiveTab("safari")}
                className={`py-2 px-4 rounded-xl text-xs font-bold font-mono tracking-wide transition-all uppercase ${
                  activeTab === "safari"
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-200/80 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {isIt ? "Safari (Savana)" : "Wild Safaris"}
              </button>

              <button
                onClick={() => setActiveTab("excursions")}
                className={`py-2 px-4 rounded-xl text-xs font-bold font-mono tracking-wide transition-all uppercase ${
                  activeTab === "excursions"
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-200/80 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {isIt ? "Escursioni (Costa)" : "Marine & Coast"}
              </button>
            </div>
          </div>

          {/* Dynamic Grid list */}
          <div className="space-y-12">
            
            {/* Savannah Safari Section */}
            {(activeTab === "all" || activeTab === "safari") && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                  <Waves className="w-5 h-5 text-amber-600 animate-pulse" />
                  <h3 className="font-display font-bold text-xl text-stone-900 uppercase tracking-tight">
                    {isIt ? "🏜️ I Safari d'Avventura (Tsavo & Masai Mara)" : "🏜️ Deep Savannah Safaris (Tsavo & Maasai Mara)"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {SAFARIS.map(safari => (
                    <SafariCard 
                      key={safari.id} 
                      safari={safari} 
                      language={language} 
                      onBook={handleDirectBook} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Coastal & Marine Section */}
            {(activeTab === "all" || activeTab === "excursions") && (
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                  <Compass className="w-5 h-5 text-amber-600 animate-pulse" />
                  <h3 className="font-display font-bold text-xl text-stone-900 uppercase tracking-tight">
                    {isIt ? "🏝️ Escursioni Marine e Territoriali" : "🏝️ Marine & Local Coastal Trips"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {EXCURSIONS.map(excursion => (
                    <ExcursionCard 
                      key={excursion.id} 
                      excursion={excursion} 
                      language={language} 
                      onBook={handleDirectBook} 
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Dynamic Rate Builder Section */}
      <section id="calculator" className="py-20 bg-stone-900 text-white relative">
        <div className="absolute inset-0 bg-stone-950/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Builder panel */}
            <div className="lg:col-span-7 space-y-6 bg-stone-950 p-6 md:p-10 rounded-3xl border border-stone-800">
              <span className="text-amber-500 font-mono text-xs uppercase tracking-wider block font-bold">
                {isIt ? "STRUMENTO PREVENTIVI" : "FLEXIBLE ESTIMATOR"}
              </span>

              <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight">
                {isIt ? "Calcola e Costruisci il tuo Preventivo" : "Build Your Custom Package Rate"}
              </h3>

              <div className="space-y-6">
                
                {/* Safari Picker */}
                <div>
                  <label className="block text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                    {isIt ? "Scegli il tuo Safari d'Avventura:" : "Choose your Adventure Safari:"}
                  </label>
                  <select
                    value={calcSafariId}
                    onChange={(e) => setCalcSafariId(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 text-white font-medium p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  >
                    {SAFARIS.map(s => (
                      <option key={s.id} value={s.id}>
                        {isIt ? s.titleIt : s.titleEn}
                      </option>
                    ))}
                    <option value="none">{isIt ? "Nessun Safari (Solo mare)" : "No Safari (Coastal only)"}</option>
                  </select>
                </div>

                {/* Combined Excursions */}
                <div>
                  <label className="block text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                    {isIt ? "Associa i tuoi Atolli preferiti e le attrazioni Locali (Seleziona multipli):" : "Mix and Match coastal marine activities (Select multiple):"}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {EXCURSIONS.map(e => {
                      const active = calcExcursionIds.includes(e.id);
                      return (
                        <button
                          key={e.id}
                          type="button"
                          onClick={() => toggleCalcExcursion(e.id)}
                          className={`p-3 rounded-xl border text-xs text-left font-sans font-bold flex items-center justify-between transition-all ${
                            active 
                              ? "bg-amber-500/20 border-amber-500 text-amber-300"
                              : "bg-stone-900 border-stone-850 text-stone-300 hover:bg-stone-850"
                          }`}
                        >
                          <span>{isIt ? e.titleIt : e.titleEn}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[10px] ${
                            active ? "bg-amber-500 border-amber-500 text-stone-950 font-black" : "border-stone-600"
                          }`}>
                            {active && "✓"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Group size adjustment */}
                <div>
                  <label className="block text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                    {isIt ? "Numero totale di Viaggiatori (Sconti applicati per gruppi):" : "Total group members (Discounts applied automatically):"}
                  </label>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setCalcTravelers(prev => Math.max(1, prev - 1))}
                      className="w-12 h-12 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 font-bold flex items-center justify-center text-lg select-none cursor-pointer"
                    >
                      -
                    </button>
                    <div className="bg-stone-900 flex-grow py-3 rounded-xl border border-stone-700 text-center font-display font-black text-lg">
                      {calcTravelers} {calcTravelers === 1 ? (isIt ? "Persona" : "Traveler") : (isIt ? "Persone" : "Travelers")}
                    </div>
                    <button 
                      onClick={() => setCalcTravelers(prev => Math.min(20, prev + 1))}
                      className="w-12 h-12 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 font-bold flex items-center justify-center text-lg select-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Calculations and Output Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-stone-950 p-6 md:p-8 rounded-3xl border border-amber-500/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl pointer-events-none" />
                
                <Calculator className="w-8 h-8 text-amber-500 mb-4" />

                <h4 className="text-white font-display text-lg font-bold tracking-tight">
                  {isIt ? "Preventivo Indicativo di Gruppo" : "Real-time Multi-pack Estimate"}
                </h4>

                <p className="text-stone-400 text-xs mt-1">
                  {isIt
                    ? "Calcoliamo una stima basata sul costo medio ponderato degli alloggi nei lodge a Tsavo East ed i pasti completi."
                    : "Estimating package components including full National Park access fees and standard lodging options."}
                </p>

                {/* Final Estimated Sum */}
                <div className="py-6 border-y border-stone-800 my-6">
                  <span className="text-stone-500 text-[10px] uppercase font-mono tracking-wider block">
                    {isIt ? "Totale Stimato per il Gruppo" : "Aggregated Group Estimate"}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black font-display text-amber-500">
                      €{calculateEstimate()}
                    </span>
                    <span className="text-stone-400 text-xs font-mono">
                      {isIt ? "Tutto Incluso" : "All Included"}
                    </span>
                  </div>
                  <span className="text-stone-500 text-[10px] block mt-1.5 leading-snug">
                    {calcTravelers > 3 && (isIt ? "⭐️ Sconto comitiva applicato con successo!" : "⭐️ Large party team discount added successfully!")}
                  </span>
                </div>

                {/* WhatsApp booking CTA */}
                <button
                  id="wa-calculator-submit-btn"
                  onClick={handleWhatsAppFromCalculator}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-display font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all text-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.832 1.452 5.43.003 9.85-4.413 9.854-9.843.002-2.63-1.018-5.101-2.872-6.957C16.548 1.95 14.075.932 11.45.932c-5.434 0-9.858 4.417-9.863 9.848-.001 1.762.474 3.486 1.38 5.011L1.93 21.164l5.421-1.42a9.799 9.799 0 0 0 4.59.01z" />
                  </svg>
                  {isIt ? "Invia Preventivo a Filippo" : "Inquire Estimate on WhatsApp"}
                </button>

                <p className="text-[10px] text-stone-500 text-center mt-3">
                  {isIt
                    ? "Inviare questa bozza non comporta alcun obbligo di acquisto. Filippo ti risponderà con le tariffe precise scontate e date libere."
                    : "No prepayment needed. Captain Filippo will reply back with flexible custom package adjustments."}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive AI Smart Travel Planner */}
      <section id="planner" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AIPlanner language={language} />
        </div>
      </section>

      {/* Testimonials Review Slider */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
            <span className="text-amber-700 font-mono text-xs uppercase tracking-wider block font-bold">
              {isIt ? "DICONO DI NOI" : "TRAVELER STORIES"}
            </span>

            <h2 className="font-sans text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              {isIt ? "Ricordi Indelebili dei Nostri Ospiti" : "Timeless Memories from Real Customers"}
            </h2>

            <p className="text-stone-600 text-xs md:text-sm">
              {isIt
                ? "Scopri il livello di onestà e simpatia d'Africa leggendo i racconti di chi ha vissuto escursioni e safari con Filippo."
                : "Read the authentic experiences of families and couples who explored Kenya alongside Captain Filippo."}
            </p>
          </div>

          {/* Testimonial cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div 
                key={t.id}
                className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-3xl relative flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                    "{isIt ? t.textIt : t.textEn}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div>
                    <h5 className="text-xs font-black text-stone-950 uppercase font-sans tracking-wide">
                      {t.name}
                    </h5>
                    <span className="text-[10px] text-stone-500 block font-mono">
                      {t.location} • {t.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions (Visas, Malaria, Prophylaxis etc) */}
      <section id="faq" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
            <span className="text-amber-700 font-mono text-xs uppercase tracking-wider block font-bold">
              {isIt ? "CONSIGLI E PREPARAZIONE" : "TRAVEL COMPLIANCE GUIDE"}
            </span>

            <h2 className="font-sans text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
              {isIt ? "Tutto quello che c'è da sapere" : "Everything You Need to Know"}
            </h2>

            <p className="text-stone-600 text-xs md:text-sm">
              {isIt
                ? "Ottieni risposte in tempo reale sui dubbi sanitari, il visto eTA elettronico del Kenya, pagamenti e sicurezza."
                : "Learn about the new Electronic Travel Authorization (eTA), malaria precautions, local water safety, and payments."}
            </p>
          </div>

          <FaqSection language={language} />

        </div>
      </section>

      {/* Safe Contacts and Booking Forms */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 bg-stone-950 text-white rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <span className="bg-amber-500 text-stone-950 text-[10px] font-mono leading-none px-2.5 py-1 rounded font-bold uppercase tracking-wider inline-block">
                {isIt ? "CONTATTO DIRETTO" : "DIRECT HOTLINE"}
              </span>

              <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight">
                {isIt ? "Mettiti in contatto con Filippo" : "Connect with Filippo Bassa Marea"}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed">
                {isIt
                  ? "Hai domande personalizzate o desideri organizzare un pacchetto vacanza su misura? Scrivi a Filippo! Riceverai una risposta Hakuna Matata in tempo di record direttamente sul tuo telefono."
                  : "Have customized group travel plans or want to patch up custom itineraries together? Send a quick message to Captain Filippo now!"}
              </p>

              <div className="space-y-3 pt-2">
                <a href="https://wa.me/254734945928" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-stone-300 text-xs font-mono hover:text-amber-400 transition-all">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>WhatsApp: +254 734 945928</span>
                </a>

                <a href="mailto:filippobassamareasafariltd@gmail.com" className="flex items-center gap-3 text-stone-300 text-xs font-mono hover:text-amber-400 transition-all">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>Email: filippobassamareasafariltd@gmail.com</span>
                </a>

                <a href="https://facebook.com/safarikenyaconfilippobassamarea" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-stone-300 text-xs font-mono hover:text-amber-400 transition-all">
                  <Facebook className="w-3.5 h-3.5 text-amber-500" />
                  <span>Facebook: safarikenyaconfilippobassamarea</span>
                </a>

                <div className="flex items-center gap-3 text-stone-300 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    {isIt 
                      ? "Operatore turistico con licenza ufficiale turistica Kenya." 
                      : "Official licensed Tour Operator partner based in Kilifi coast."}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action form */}
            <form onSubmit={handleContactSubmit} className="bg-stone-900/90 p-6 rounded-2xl border border-stone-800 space-y-4">
              <div>
                <label className="block text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                  {isIt ? "Il Tuo Nome" : "Your Name"}
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Es. Roberta"
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                  {isIt ? "Come possiamo aiutarti?" : "How can we assist you?"}
                </label>
                <textarea
                  rows={3}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder={isIt ? "Es. Arriverò a Watamu il 15 Agosto e vorrei organizzare una Sardegna 2 ed un Safari 2 giorni Tsavo East!" : "E.g. Inquiring for custom family safari discounts..."}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                id="submit-contacts-btn"
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                {isIt ? "Invia Messaggio WhatsApp" : "Send WhatsApp Inquiry"}
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-stone-900 text-stone-400 text-xs py-10 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="space-y-2">
            <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
              {isIt ? "Sicurezza & Assicurazione" : "Safety & Protection"}
            </h5>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              {isIt
                ? "Tutte le nostre barche marine e fuoristrada 4x4 da Safari dispongono di licenze governative regolari e polizze di assicurazione turistica a tutela del viaggiatore."
                : "All sea vessels and open-top 4x4 Land Cruisers carry formal passenger travel coverage certified by Kenya Kilifi Board."}
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
              {isIt ? "Cancellazione Flessibile" : "Flexible Cancellations"}
            </h5>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              {isIt
                ? "Siamo flessibili! In caso di imprevisti o cancellazioni voli e ritardi, concordiamo insieme il rinvio delle date o il rimborso degli acconti."
                : "No strict lock-ins. In case of unexpected flight shifts or travel changes, easily postpone travel schedules with zero cancellation fees."}
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
              {isIt ? "Tradizione Giriama & Locale" : "Native Giriama Community Support"}
            </h5>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              {isIt
                ? "Supportiamo l'economia locale di Watamu e i villaggi limitrofi. Una percentuale del costo di ogni tour va direttamente alle comunità locali Giriama."
                : "We strongly support sustainable tourism. A direct share from every tour payout goes directly to regional Giriama village schools and water wells."}
            </p>
          </div>

        </div>
      </section>

      {/* Core Footer */}
      <footer className="bg-black text-stone-500 py-12 px-4 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-wider">
          
          <div className="text-center md:text-left">
            <p className="text-white font-display font-black text-sm">FILIPPO BASSA MAREA KENYA</p>
            <p className="text-[10px] text-stone-500 mt-1">
              © {new Date().getFullYear()} Safari Kenya s.r.l. All rights reserved. Registered Beach Association, Kilifi / Watamu Office.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-stone-400">
            <a href="#about" className="hover:text-amber-500">{isIt ? "Chi Siamo" : "About"}</a>
            <span className="text-stone-700">•</span>
            <a href="#tours" className="hover:text-amber-500">{isIt ? "Tours" : "Packages"}</a>
            <span className="text-stone-700">•</span>
            <a href="#faq" className="hover:text-amber-500">{isIt ? "Visto & eTA FAQ" : "Regulatory FAQ"}</a>
            <span className="text-stone-700">•</span>
            <a href="https://facebook.com/safarikenyaconfilippobassamarea" target="_blank" rel="noreferrer" className="hover:text-amber-500">Facebook</a>
            <span className="text-stone-700">•</span>
            <a href="https://wa.me/254734945928" target="_blank" rel="noreferrer" className="hover:text-amber-500">{isIt ? "WhatsApp Filippo" : "Inquire Direct"}</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
