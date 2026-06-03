import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON request bodies
  app.use(express.json());

  // AI Safari Planner Endpoint
  app.post("/api/planner", async (req, res) => {
    try {
      const { 
        language = "it", 
        duration = 5, 
        departure = "Watamu", 
        travelers = 2, 
        interests = ["safari", "sea"], 
        budget = "standard" 
      } = req.body;

      // Lazy initialization of Gemini client
      const apiKey = process.env.GEMINI_API_KEY;
      const isMockKey = !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "";

      const systemPrompt = `You are Filippo, the legendary Italian-speaking Kenyan local guide from Watamu, famously known as "Filippo Bassa Marea".
Your agency provides spectacular wildlife safaris (Tsavo East, Tsavo West, Masai Mara, Amboseli) and Indian Ocean coastal boat excursions (Sardegna 2/Bassa Marea low-tide barbecue, Safari Blu, Mida Creek, Marafa Hell's Kitchen).

Your tone is incredibly warm, passionate, authentic, welcoming, and expert. You love Kenya and know how to give tourists an unforgettable, safe holiday. You speak Italian elegantly with friendly Swahili touches like "Jambo!", "Karibu sana!", and "Hakuna Matata!".

Prepare a customized travel itinerary based on these traveler choices:
- Language: ${language === "it" ? "Italiano" : "English"}
- Duration of stay: ${duration} days
- Base/Departure town: ${departure} (typically Watamu or Malindi)
- Number of travelers: ${travelers}
- Selected Interests: ${interests.join(", ")}
- Budget Tier: ${budget} (budget handles comfortable tented camps and group excursions; standard covers lodges and private tours; premium covers luxury lodges like Ashnil/Sarova, private 4x4 safaris, and exclusive shellfish boat dinners).

Structure your response perfectly utilizing Markdown:
1. **Welcome Title**: Start with a personalized, high-energy African greeting (e.g. "Jambo Rafiki! Ecco il tuo Sogno Kenyota con Filippo...")
2. **Overview**: A brief description of what makes this customized itinerary special.
3. **Day-by-Day Plan**: Create a compelling daily plan. Make sure to schedule:
   - For sea/coastal interest: A full-day excursion to **Sardegna 2 (Bassa Marea)**, describing the magical white sand banks emerging from the blue ocean, the coral snorkeling, and the fresh seafood beach barbecue (grilled lobster, prawns, fish, coconut rice "Wali wa nazi").
   - For safari interest: A 2-Day safari to **Tsavo East National Park** (close to Watamu, famous for its red soil, huge pride of lions, and red elephants dust-bathing), describing game drives and an overnight lodge adventure.
   - For local culture: Mention visiting the local Gede Ruins, experiencing local villages, or enjoying a sunset at Mida Creek / Marafa Sand Canyon (Hell's Kitchen).
4. **Filippo's Tips (Consigli dell'Esperto Filippo)**:
   - What to pack (Safari green/khaki light colors, safari shoes for red dust, water shoes for the reef rocks, mosquito repellent).
   - Local currency (Kenyan Shilling / Euro accepted).
   - "Mal d'Africa" preparation - get ready to fall in love with Kenya.
5. **WhatsApp Call to Action**: Explain to the user they can copy this itinerary and send it directly to Filippo's WhatsApp for a custom price quotation and booking.

Keep the presentation beautiful, using clear titles and bullet points.`;

      if (isMockKey) {
        // High-quality local fallback in case the API Key is not set or default
        console.log("No valid GEMINI_API_KEY provided. Using local rich fallback generator.");
        const fallbackResponse = generateLocalItinerary(language, duration, departure, budget, interests);
        return res.json({ text: fallbackResponse, isFallback: true });
      }

      // Initialize GoogleGenAI SDK safely
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: "Pianifica il miglior viaggio in Kenya per me secondo i parametri e le istruzioni seguenti.",
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.8,
        }
      });

      const resultText = response.text || "Ops! Non ho ricevuto risposta dal cielo d'Africa. Riprova più tardi!";
      return res.json({ text: resultText, isFallback: false });

    } catch (error: any) {
      console.error("Gemini API Error in /api/planner:", error);
      // Fallback to avoid crashing the app
      res.status(500).json({ 
        error: "Errore di generazione", 
        message: error?.message || "Errore sconosciuto",
        fallback: generateLocalItinerary(req.body.language || "it", req.body.duration || 5, req.body.departure || "Watamu", req.body.budget || "standard", req.body.interests || [])
      });
    }
  });

  // Serve static assets or use Vite dev server
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Full-Stack Server listening at http://localhost:${PORT}`);
  });
}

// Generates an exquisite default Kenyan vacation plan locally when API key is unconfigured
function generateLocalItinerary(lang: string, duration: number, departure: string, budget: string, interests: string[]) {
  const isIt = lang === "it";
  if (isIt) {
    return `### 🦁 Jambo! Il tuo Itinerario Kenyota con Filippo Bassa Marea!

*Nota: Questo itinerario è stato pre-calcolato ed elaborato con cura per darti una fantastica anteprima del viaggio! Abbina le dune della savana con le piscine dell'atollo marino.*

#### 🌟 Panoramica del Viaggio
- **Partenza:** ${departure}
- **Durata:** ${duration} Giorni
- **Stile di Viaggio:** ${budget.toUpperCase()} (${interests.includes("safari") ? "Savana Selvaggia" : ""} ${interests.includes("sea") ? "& Barriera Corallina" : ""})

---

#### 📅 Programma Giorno per Giorno

**Giorno 1: Benvenuto a ${departure}, Relax e Mida Creek al Tramonto**
- Arrivo alla tua struttura a ${departure}. Accoglienza calorosa da parte di Filippo con cocco fresco di benvenuto.
- Pomeriggio di relax sulle spiagge di sabbia finissima di Watamu.
- Ore 16:30: Escursione in canoa tradizionale a **Mida Creek**. Navigheremo tra le spettacolari foreste di mangrovie, ammirando aironi e fenicotteri rosa, coronando la serata con un tramonto mozzafiato sorseggiando una bibita fresca.

**Giorno 2: L'Incanto di "Sardegna 2" - Bassa Marea & Grigliata di Aragoste**
- **L'Excursione Regina con Filippo!** Partenza in dhow o barca dal fondo di vetro.
- Arrivo alle mitiche spiagge di **Sardegna 2**, maestose lingue di sabbia bianca accecante che emergono dal mare turchese solo durante la bassa marea.
- Snorkeling guidato nella barriera corallina popolata dapesci pagliaccio, stelle marine giganti e tartarughe.
- **Pranzo sulla barca/sandbank:** Il fantastico banchetto organizzato da Filippo! Aragoste freschissime grigliate sul momento, gamberoni, pesce del giorno alla brace, riso al cocco tipico e frutta tropicale fresca (mango, ananas, cocco). Un'esperienza indimenticabile e gustosissima!

**Giorno 3: Partenza per il Safari - Tsavo East National Park (Inizio Avventura)**
- Sore 06:00: Partenza in fuoristrada 4x4 con tetto apribile in direzione del leggendario **Tsavo East National Park**, attraversando i suggestivi villaggi locali e la natura incontaminata.
- Ore 10:00: Ingresso dal cancello di Tsavo East. Primo game drive alla ricerca di leoni, ghepardi e dei famosi elefanti rossi di Tsavo, coperti dalla caratteristica terra rossa ferrosa della savana.
- Pranzo e sistemazione nel lodge/tented camp con affaccio sulla pozza d'acqua degli animali.
- Pomeriggio: Secondo safari fino al tramonto, ammirando i colori caldi dell'Africa. Cena e notte magica sotto il cielo stellato della savana.

**Giorno 4: Alba nella Savana & Rientro sulla Costa**
- Ore 06:15: Fotosafari mattutino all'alba, il momento ideale in cui i grandi predatori (leoni e leopardi) sono più attivi per la caccia.
- Rientro al lodge per una colazione abbondante.
- Ultimo game drive uscendo dal parco e viaggio di rientro verso la costa di Watamu/Malindi. Ammireremo lungo la via il famoso fiume Galana selvaggio.
- Arrivo a Watamu nel tardo pomeriggio per un tuffo rilassante nell'Oceano Indiano.

**Giorno 5: Rovine Storiche di Gede, Safari Blu o Marafa Hell's Kitchen**
- Mattina: Visita guidata alla misteriosa **città perduta di Gede**, rovine del XII secolo sommerse da una magica foresta tropicale, popolata da amichevoli scimmiette pronte a prendere le noccioline dalle tue mani.
- Pomeriggio: Escursione a **Marafa (la Cucina dell'Inferno)**, un maestoso canyon di argilla e pietra arenaria rossa. Camminata guidata nelle gole e attesa del tramonto, dove le guglie si colorano d'oro, bronzo e porpora. Una degna conclusione di questo sogno kenyota.

---

#### 🧳 Consigli Utili da Filippo "Bassa Marea"
1. **Abbigliamento:** Porta vestiti leggeri e chiari (sabbia, verde o beige per il safari per non attirare le mosche tsetse). Calzature comode per camminare e scarpette da scoglio per le escursioni in mare!
2. **Attrezzatura:** Una buona crema solare protettiva 50+ biodegradabile per rispettare i coralli, occhiali da sole e una fotocamera con un buon zoom per catturare i dettagli della fauna selvaggia.
3. **Mance e Moneta:** L'euro è accettato ovunque, ma cambiare una piccola somma in Scellini Kenioti (KES) è ideale per piccoli acquisti artigianali e mance.

📞 *Ti piace questo piano? Clicca sul pulsante WhatsApp qui sotto per inviarlo direttamente a Filippo e ricevere una quotazione personalizzata senza impegno! Hakuna Matata!*`;
  } else {
    return `### 🦁 Jambo! Your Kenyan Holiday Itinerary with Filippo Bassa Marea!

*Note: This sample itinerary is beautifully pre-crafted to give you a dream view of Kenya! Combine deep savannah game drives with gorgeous Indian Ocean reef explorations.*

#### 🌟 Trip Overview
- **Departure:** ${departure}
- **Duration:** ${duration} Days
- **Travel Style:** ${budget.toUpperCase()} (${interests.includes("safari") ? "Savannah Wildlife" : ""} ${interests.includes("sea") ? "& Pristine Beaches" : ""})

---

#### 📅 Day-by-Day Program

**Day 1: Welcome to ${departure}, Rest & Sunset at Mida Creek**
- Arrive at your resort in ${departure}. Warm welcome by Filippo with fresh coconut water.
- Relax on the white sand beaches of Watamu or Malindi.
- 4:30 PM: Canoe adventure in **Mida Creek**. Glide through local mangrove channels, watch seasonal flamingos, and enjoy a breathtaking sunset on the water with a cold drink.

**Day 2: The Magic of "Sardegna 2" Low Tide - Ocean Snorkeling & Seafood Feast**
- **Filippo's signature experience!** Sail out on our glass-bottom dhow boat.
- Step onto the blindingly white, soft sand atolls of **Sardegna 2**, emerging in the middle of the turquoise sea during low tide.
- Enjoy guided snorkeling among coral gardens filled with clownfish, blue sea stars, and turtles.
- **Seafood Barbecue Picnic:** Filippo's famous fresh lunch! Savor freshly grilled lobster, jumbo prawns, catch-of-the-day fish, Swahili coconut rice, and a colorful buffet of sweet tropical mango, papaya, and pineapple.

**Day 3: Savannah Call - Tsavo East National Park (Day 1)**
- 6:00 AM: Depart in our specialized 4x4 safari cruiser with an open pop-up roof, travelling into the deep African wilderness.
- 10:00 AM: Enter Tsavo East. Begin your first game drive looking for large prides of lions, cheetahs, zebras, and the famous "red elephants of Tsavo" dusted with volcanic clay.
- Check-in and lunch at a lodge overlooking a natural drinking waterhole where herds of animals gather.
- Afternoon game drive until sunset. Dinner and night under the magical starry sky of the savannah.

**Day 4: Dawn Safari & Journey back to the Coast**
- 6:15 AM: Sunrise game drive to spot active predators like lions and leopards on their morning hunts.
- Return to the lodge for a hearty hot breakfast.
- Final game drive while exiting Tsavo East, passing scenic views of the Galana River.
- Return to Watamu/Malindi in the afternoon for a refreshing dip in the ocean.

**Day 5: Lost City of Gede & Marafa Hell's Kitchen Canyon**
- Morning: Explore the ancient **Gede Ruins**, a 13th-century Swahili city hidden in a tropical forest, feeding wild monkeys who love interacting with travelers.
- Afternoon: Journey to **Marafa (Hell's Kitchen)**, a gorgeous sandstone gorge where natural erosion has sculpted tall colored spires. Walk the trails and witness one of the most stunning sunsets in Africa as the rock glows orange and crimson.

---

#### 🧳 Smart Travel Tips from Filippo
1. **Packing:** Light, neutral clothing (khaki, beige, green) is best for the safari dusty trails. Remember to bring marine reef shoes for water excursions!
2. **Sun Protection:** Kenyan sun is strong. Use eco-friendly reef-safe SPF 50+ sunscreen, a wide-brimmed hat, and sunglasses.
3. **Currency:** Euros and Dollars are widely accepted, but having local Kenyan Shillings (KES) handy is great for custom tips/local marketplace crafts.

📞 *Love this custom draft? Click the WhatsApp Button below to dispatch this itinerary to Filippo instantly and get your tailor-made quote! Hakuna Matata!*`;
  }
}

startServer();
