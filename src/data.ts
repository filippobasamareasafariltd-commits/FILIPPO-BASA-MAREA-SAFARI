import { TourExcursion, SafariPackage, Testimonial } from "./types";

export const EXCURSIONS: TourExcursion[] = [
  // --- WATAMU EXCURSIONS ---
  {
    id: "watamu-safariblu-mida",
    titleIt: "Safari Blu Mida Creek",
    titleEn: "Safari Blue Mida Creek",
    descriptionIt: "Splendida avventura marina nei canali di Mida Creek, alla scoperta delle mangrovie in barca. Avvisteremo uccelli tropicali e faremo snorkeling sulla favolosa barriera corallina con pranzo tipico incluso.",
    descriptionEn: "Splendid marine adventure inside the Mida Creek channels. Discover the mangrove forest by boat, spot tropical birds, snorkel on pristine coral reefs, and enjoy a traditional Swahili lunch.",
    durationIt: "Intera Giornata (08:30 - 16:30)",
    durationEn: "Full Day (08:30 AM - 4:30 PM)",
    category: "marina",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €45 a persona",
    priceEstimateEn: "from €45 per person",
    highlightsIt: [
      "Navigazione nei canali della laguna selvaggia di Mida",
      "Snorkeling guidato nel parco marino protetto",
      "Pranzo di pesce locale e granchi cucinati sulla barca dhow"
    ],
    highlightsEn: [
      "Quiet boat cruise in the deep mangrove inlet of Mida",
      "Guided coral reef snorkeling with rich fish species",
      "Freshly prepared seafood & Swahili style crab barbecue"
    ],
    includesIt: ["Trasferimento", "Pranzo e bevande", "Attrezzatura snorkeling", "Tasse del parco marino"],
    includesEn: ["Hotel pickup", "Lunch and beverages", "Snorkeling equipment", "Marine park entries"]
  },
  {
    id: "watamu-safariblu-sardegna",
    titleIt: "Safari Blu Sardegna 2",
    titleEn: "Safari Blue Sardegna 2",
    descriptionIt: "La regina delle escursioni a Watamu. Navigazione verso gli spettacolari atolli di sabbia bianca che emergono dal mare turchese a bassa marea. Squisita e abbondante grigliata di aragosta e gamberi cucinata sul momento.",
    descriptionEn: "The absolute crown jewel excursion of Watamu! Cruise to the breathtaking sandbanks of Sardegna 2 rising in mid-ocean at low tide. Settle for a legendary grilled lobster and prawns seaside barbecue.",
    durationIt: "Intera Giornata (08:30 - 16:00)",
    durationEn: "Full Day (08:30 AM - 4:00 PM)",
    category: "marina",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €50 a persona (Top Seller)",
    priceEstimateEn: "from €50 per person (Best Seller)",
    highlightsIt: [
      "Sosta sulle magiche lingue bianche di Sardegna 2",
      "Snorkeling spettacolare con pesci gatto e coralli",
      "Grigliata di aragoste fresche, riso al cocco e frutta fresca"
    ],
    highlightsEn: [
      "Stunning white sandbar structures visible at low tide",
      "Excellent snorkeling with starfish and tropical schools",
      "Fresh rock lobsters, prawns, traditional coconut rice and fruits"
    ],
    includesIt: ["Inbarco privato", "Aragostata sulla spiaggia", "Guida Filippo", "Bibite fresche"],
    includesEn: ["Dhow boat charter", "Lobster beach picnic", "Filippo & local crew", "Cold soft drinks"]
  },
  {
    id: "watamu-mezza-amore",
    titleIt: "Mezza Giornata Isola dell'Amore",
    titleEn: "Half Day Love Island",
    descriptionIt: "Un'escursione di mezza giornata per rilassarsi sulla spiaggia dell'Isola dell'Amore, una suggestiva lingua sabbiosa a forma di cuore visibile con la bassa marea a ridosso della costa di Watamu.",
    descriptionEn: "A beautiful half-day getaway to the peaceful Love Island, a unique heart-shaped sandbank that reveals itself beautifully near Watamu's coastline during the daily low tidings.",
    durationIt: "Mezza Giornata (Mattina o Pomeriggio)",
    durationEn: "Half Day (Morning or Afternoon)",
    category: "marina",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €25 a persona",
    priceEstimateEn: "from €25 per person",
    highlightsIt: [
      "Splendida passeggiata sulla sabbia bianca caldissima",
      "Piscine naturali di acqua limpida adatte al bagno",
      "Scenario magico a forma di cuore per fotografie incredibili"
    ],
    highlightsEn: [
      "Wonderful beach walk on soft hot African white sand",
      "Pristine crystal-clear natural warm water pools",
      "Cinematic heart-shaped beach outline perfect for couples"
    ],
    includesIt: ["Trasferimento in barca", "Frutta fresca locale", "Guida parlante italiano"],
    includesEn: ["Boat crossings", "Slices of tropical fruits", "Bilingual local guide"]
  },
  {
    id: "watamu-mezza-sardegna",
    titleIt: "Mezza Giornata Sardegna 2",
    titleEn: "Half Day Sardegna 2",
    descriptionIt: "Per chi ha poco tempo ma non vuole perdersi gli incredibili panorami degli atolli di Sardegna 2. Partenza di mattina per nuotare e rilassarsi sulla sabbia finissima della bassa marea prima del rientro a pranzo.",
    descriptionEn: "Perfect for travelers on tight schedules. Depart early in the morning to swim, bronze, and walk along the pure white sand dunes of Sardegna 2 at peak low tide, heading back in time for lunch.",
    durationIt: "Mezza Giornata (08:30 - 12:30)",
    durationEn: "Half Day (08:30 AM - 12:30 PM)",
    category: "marina",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €25 a persona",
    priceEstimateEn: "from €25 per person",
    highlightsIt: [
      "Passeggiata sugli atolli incontaminati",
      "Snorkeling rinfrescante sulla barriera",
      "Frutta tropicale assortita servita a bordo"
    ],
    highlightsEn: [
      "Walk over isolated ocean sand islands",
      "Refreshing high key coral marine snorkeling",
      "Freshly sliced pineapples, mangos and watermelon served on deck"
    ],
    includesIt: ["Barca dhow", "Attrezzatura", "Bevande analcoliche", "Assistente locale"],
    includesEn: ["Traditional dhow boat", "Masks & Snorkels", "Soft drinks & water", "Support guide"]
  },
  {
    id: "watamu-mezza-gede-marafa",
    titleIt: "Mezza Giornata Le Rovine di Gede e Canyon Marafa",
    titleEn: "Half Day Gede Ruins & Marafa Canyon",
    descriptionIt: "Unione favolosa di cultura e misticismo naturale. Visita le rovine secolari dell'antica città di Gede popolata da scimmiette curiose, e finisci il pomeriggio ammirando la maestosità del tramonto infuocato dentro il Canyon di Marafa.",
    descriptionEn: "An incredible blend of heritage and geology. Tour the medieval Gede ruins, feed the friendly monkeys, and spend your late afternoon gazing at the fiery sunset within the majestic Marafa Canyon (Hell's Kitchen).",
    durationIt: "Mezza Giornata (13:30 - 19:00)",
    durationEn: "Half Day (1:30 PM - 7:00 PM)",
    category: "cultura",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1473116763269-25541079c6e3?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €40 a persona",
    priceEstimateEn: "from €40 per person",
    highlightsIt: [
      "Misteri dell'antica città Swahili medievale di Gede nella giungla",
      "Incontro ravvicinato per nutrire a mano le scimmie nella foresta",
      "Canyon di Marafa con tinte rosse spettacolari alla luce del tramonto"
    ],
    highlightsEn: [
      "Jungle-shrouded ruins of the 13th-century Swahili town Gede",
      "Feeding wild forest monkeys with peanuts from your hands",
      "Stunning red-ochre sunset colors lighting the deep canyons of Marafa"
    ],
    includesIt: ["Auto privata A/C", "Tutti gli ingressi e tasse", "Noccioline per le scimmie", "Guida locale"],
    includesEn: ["Private A/C van transport", "All park & historical entry fees", "Peanut bags for monkeys", "Local certified tour interpreter"]
  },
  {
    id: "watamu-intera-robinson-marafa",
    titleIt: "Giornata Intera Isola di Robinson e Canyon Marafa",
    titleEn: "Full Day Robinson Island & Marafa Canyon",
    descriptionIt: "Giornata all'insegna d'altri tempi. Attraverseremo in piroga lo stagno per l'Isola di Robinson dove pranzeremo in un ristorante tipico di fango e mangrovie, per poi viaggiare verso lo spettacolare tramonto del Canyon di Marafa.",
    descriptionEn: "A rustic journey back in time. Cross by traditional canoe to the remote Robinson Island for an authentic seafood feast inside a mud-and-mangrove restaurant, followed by a scenic sunset trip to Marafa Canyon.",
    durationIt: "Intera Giornata (09:00 - 19:30)",
    durationEn: "Full Day (09:00 AM - 7:30 PM)",
    category: "natura",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1472214222541-d510753a49fa?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €55 a persona",
    priceEstimateEn: "from €55 per person",
    highlightsIt: [
      "Pranzo epico all'Isola di Robinson: granchi, ostriche giganti, riso al cocco",
      "Navigazione rilassante in piroga sul bacino salato",
      "Trekkings guidati nel Canyon di Marafa fino all'ora d'oro"
    ],
    highlightsEn: [
      "Famous seafood feast on Robinson: jumbo crabs, deep-sea oysters, coconut rice",
      "Canoe crossing through traditional salt flats",
      "Guided canyon hiking in Marafa up until golden sunset hour"
    ],
    includesIt: ["Minivan privato", "Pranzo all-inclusive di pesce", "Piroga a remi", "Ingressi ufficiali"],
    includesEn: ["Private vehicle", "All inclusive seafood feast", "Canoe ferry fare", "Official monument entry fees"]
  },
  {
    id: "watamu-vera-africa-tramonto",
    titleIt: "Vera Africa e l'Aperitivo al Tramonto",
    titleEn: "Real Africa Experience & Sunset Aperitif",
    descriptionIt: "Un bellissimo viaggio culturale nei veri villaggi Giriama nell'entroterra kenyota. Visiteremo le capanne sorridenti, osserveremo la vita locale dei bambini e concluderemo con un suggestivo aperitivo al tramonto bevendo vino di palma fresco.",
    descriptionEn: "A deep cultural journey to local Giriama mud-dwelling villages in the countryside. Meet native families, observe traditional lifestyles, and toast to the sunset with fresh palm wine picked directly from the trees.",
    durationIt: "Mezza Giornata (14:30 - 19:00)",
    durationEn: "Half Day (2:30 PM - 7:00 PM)",
    category: "cultura",
    departureFrom: "watamu",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €30 a persona",
    priceEstimateEn: "from €30 per person",
    highlightsIt: [
      "Visita ed accoglienza affettuosa in un villaggio tradizionale Giriama",
      "Passeggiata tra giganteschi baobab e coltivazioni agricole locali",
      "Aperitivo tipico con vino di palma (Mnazi) e cocco fresco di fronte al tramonto"
    ],
    highlightsEn: [
      "Warm traditional reception inside a native Giriama compound",
      "Stroll among ancient baobab trees and local family farms",
      "Toast with organic fresh palm wine (Mnazi) and sweet coconut water at sunset"
    ],
    includesIt: ["Trasporti in TukTuk o minivan", "Offerte di solidarietà per il villaggio", "Aperitivo rurale tipico", "Spiegazioni della cultura Swahili e Giriama"],
    includesEn: ["Transport by local TukTuk or van", "Village school and families solidarity donations", "Countryside snacks & palm wine testing", "Bicultural commentary and heritage insights"]
  },

  // --- DIANI EXCURSIONS ---
  {
    id: "diani-safari-wasini",
    titleIt: "Safari Blu Wasini da Diani",
    titleEn: "Safari Blue Wasini island from Diani",
    descriptionIt: "La favolosa escursione marina da fare a Diani Beach. Navigazione in dhow nel Parco Marino di Kisite-Mpunguti per nuotare con i delfini, snorkeling meraviglioso tra i coralli e pranzo a base di granchi all'Isola di Wasini.",
    descriptionEn: "The premier coastal marine outing in Diani Beach! Cruise by wooden dhow into Kisite-Mpunguti National Marine Reserve to watch dolphins, sample stellar snorkeling, and enjoy a rich crab lunch on Wasini Island.",
    durationIt: "Intera Giornata (07:00 - 17:00)",
    durationEn: "Full Day (07:00 AM - 5:00 PM)",
    category: "marina",
    departureFrom: "diani",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €65 a persona",
    priceEstimateEn: "from €65 per person",
    highlightsIt: [
      "Avvistamento quasi garantito di delfini tursiopi liberi",
      "Snorkeling sulla gloriosa barriera corallina incontaminata di Kisite",
      "Sontuoso pranzo di pesce in stile Swahili a Wasini"
    ],
    highlightsEn: [
      "Extremely high chance of swimming near wild Indian Ocean dolphins",
      "Snorkeling on Kisite's colorful and fully protected shallow coral reef",
      "Sumptuous traditional seafood & coconut crab lunch at Wasini restaurant"
    ],
    includesIt: ["Shuttle andata/ritorno da Diani", "Tasse parco marino protetto", "Pranzo e bevande analcoliche", "Attrezzatura da nuoto"],
    includesEn: ["Return hotel shuttles from Diani", "Kisite marine reserve park fees", "Full seafood lunch and soda/water", "Premium snorkel masks & life jackets"]
  },
  {
    id: "diani-citta-mombasa",
    titleIt: "Visita Città Mombasa da Diani",
    titleEn: "Mombasa City Tour from Diani",
    descriptionIt: "Esplora il cuore storico della costa. Visiteremo i famosi canini d'elefante simbolo di Mombasa, il mercato speziato tipico di Mackinnon Road, il meraviglioso centro storico antico dai vicoli intricati e l'imponente fortezza coloniale Fort Jesus.",
    descriptionEn: "Unwrap the ancient heart of the coast. Tour the iconic Mombasa Elephant Tusks, wander Mackinnon Road's bustling spice stalls, inspect the narrow alleyways of Old Town, and stand on the walls of the historic Fort Jesus.",
    durationIt: "Giornata Intera o Mezza (8:00 - 16:00)",
    durationEn: "Full or Half Day (8:00 AM - 4:00 PM)",
    category: "cultura",
    departureFrom: "diani",
    image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €45 a persona (Min. 2)",
    priceEstimateEn: "from €45 per person (Min. 2)",
    highlightsIt: [
      "I maestosi elefanti d'acciaio incrociati sul viale principale",
      "La fortezza UNESCO di Fort Jesus ad opera dei portoghesi",
      "I profumi orientali e speziati del mercato storico coloniale"
    ],
    highlightsEn: [
      "The massive historical Elephant Tusks metal arches on Moi avenue",
      "Fort Jesus, the fascinating UNESCO listed 16th-century Portuguese fortress",
      "Sensory overload of sights and scents in the old town spice market stalls"
    ],
    includesIt: ["Veicolo privato", "Ticket d'ingresso a Fort Jesus", "Guida locale esperta", "Acqua minerale"],
    includesEn: ["Private car/van", "Fort Jesus museum admission tickets", "Historical expert tour guide", "Bottled mineral water"]
  },
  {
    id: "diani-vera-africa",
    titleIt: "Vera Africa da Diani",
    titleEn: "Real Africa Village Life from Diani",
    descriptionIt: "Splendido itinerario per esplorare la comunità rurale di etnia Digo vicino a Diani Beach. Entra in contatto con le persone del luogo, scopri le tradizioni delle erbe curative indigene e assapora la cucina deliziosa dei villaggi locali.",
    descriptionEn: "Gorgeous cultural tour exploring rural Digo tribal villages right off the Diani Beach strip. Connect with warm locals, study traditional herbal medicine forests, and try delightful indigenous cooking styles.",
    durationIt: "Mezza Giornata (08:30 - 13:00)",
    durationEn: "Half Day (08:30 AM - 1:00 PM)",
    category: "cultura",
    departureFrom: "diani",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €35 a persona",
    priceEstimateEn: "from €35 per person",
    highlightsIt: [
      "Scoperte di vita quotidiana rurale lontano dall'asfalto turistico",
      "Visita alla scuola primaria locale e interazione allegra",
      "Merenda tipica con riso al cocco caldo grigliato e frutta fresca"
    ],
    highlightsEn: [
      "Uncover real daily life routines far away from resort highwalls",
      "Visit a regional primary village school and support student projects",
      "Tasting of hot coconut-infused snacks and biological fruits"
    ],
    includesIt: ["Pick-up in TukTuk rustico", "Guida indigena e traduttore", "Offerta scolastica solidale e pasti"],
    includesEn: ["Rustic TukTuk hotel pickup", "Native guide translator services", "Community school donations & snacks included"]
  },

  // --- NAIROBI EXCURSIONS ---
  {
    id: "nairobi-giraffe-centre",
    titleIt: "Giraffe Centre Nairobi",
    titleEn: "Giraffe Centre Nairobi",
    descriptionIt: "Visita al famoso centro di conservazione delle giraffe di Rothschild. Potrai accarezzare e nutrire dolcemente questi giganteschi animali da una pedana di legno rialzata a livello del loro muso.",
    descriptionEn: "Interactive visit to Nairobi's famous Rothschild Giraffe Sanctuary. Get the unique experience of hand-feeding and petting these gentle giants from a custom raised wooden deck at eye level.",
    durationIt: "Mezza Giornata (Mattina o Pomeriggio)",
    durationEn: "Half Day (Morning or Afternoon)",
    category: "natura",
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1541411110565-c27c9540c575?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €35 a persona",
    priceEstimateEn: "from €35 per person",
    highlightsIt: [
      "Incontro ravvicinato per baciare e nutrire le protette giraffe di Rothschild",
      "Percorso naturalistico a piedi nella foresta secca adiacente",
      "Progetti educativi di salvaguardia ambientale promossi dal centro"
    ],
    highlightsEn: [
      "Unforgettable moments feeding and taking close photos with endangered giraffes",
      "Quiet nature trail stroll under the indigenous dry-forest canopy",
      "Learn and contribute to educational environment projects of our sanctuary"
    ],
    includesIt: ["Trasporto privato", "Biglietti d'ingresso", "Mangime per giraffe", "Guida coordinata"],
    includesEn: ["Private transfer", "Admissions", "Ecology giraffe feed pellets", "Guide coordination"]
  },
  {
    id: "nairobi-museo",
    titleIt: "Museo Nazionale di Nairobi",
    titleEn: "Nairobi National Museum",
    descriptionIt: "Il custode della magnifica storia culturale, scientifica ed evolutiva del Kenya. Ammireremo una vasta collezioni di specie protette, reperti storici, strumenti nativi e i famosi fossili di ominidi primitivi scoperti in Africa orientale.",
    descriptionEn: "The ultimate national house of Kenya's history, culture, and science. Marvel at extensive bird exhibits, ancient Swahili artifacts, colonial artworks, and some of the world's most famous early human fossils discovered in East Africa.",
    durationIt: "Mezza Giornata",
    durationEn: "Half Day",
    category: "cultura",
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1473116763269-25541079c6e3?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €30 a persona",
    priceEstimateEn: "from €30 per person",
    highlightsIt: [
      "Stanza dei fossili umani fossili risalenti a milioni di anni fa",
      "Grande galleria dell'artigianato e costumi tipici delle 42 tribù del Kenya",
      "Parco dei serpenti vivi (Snake Park) adiacente al polo museale"
    ],
    highlightsEn: [
      "Unprecedented fossil rooms outlining human origins in Great Rift Valley",
      "Rich artifacts outlining deep history from Kenya's diverse 42 native tribes",
      "Interactive adjacent live Snake Park housing mambas and cobras"
    ],
    includesIt: ["Trasporti", "Biglietto d'ingresso cumulativo", "Guida storica"],
    includesEn: ["Transport", "All-in admission ticket", "Heritage historian guide"]
  },
  {
    id: "nairobi-sheldrick-elephant",
    titleIt: "Orfanotrofio degli Elefanti Sheldrick Wildlife Trust",
    titleEn: "Sheldrick Wildlife Elephant Orphanage",
    descriptionIt: "Il rifugio più famoso al mondo per elefanti orfani. Visita guidata esclusiva (disponibile solo un'ora al giorno dalle 11:00 alle 12:00) per vederli bere il latte dai biberon giganti e rotolarsi felici nel fango.",
    descriptionEn: "The world's most prominent sanctuary for orphaned baby elephants and black rhinos. Tour (open strictly from 11:00 AM to 12:00 PM daily) to watch these cute babies feed from huge bottles and play in mud baths.",
    durationIt: "Mezza Giornata (Ore 10:00 - 13:00)",
    durationEn: "Half Day (10:00 AM - 1:00 PM)",
    category: "natura",
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €40 a persona (Prenotazione anticipata obbligatoria)",
    priceEstimateEn: "from €40 per person (Prior advance booking mandatory)",
    highlightsIt: [
      "Vedere i cuccioli correre giocosi verso i guardiani per il latte",
      "Ascoltare la storia di riscatto e salvataggio di ogni singolo elefantino",
      "Opportunità di adottare a distanza un elefantino con certificato ufficiale"
    ],
    highlightsEn: [
      "Catch baby elephants running down pathways to seize giant milk bottles",
      "Hear deep inspiring rescue stories narrated directly by their foster keepers",
      "Option to foster a baby animal on site and receive official certificate"
    ],
    includesIt: ["Mezzo privato", "Donazione ufficiale obbligatoria d'ingresso", "Guida locale"],
    includesEn: ["Private car", "Compulsory sanctuary entrance donation", "Licensed guide"]
  },
  {
    id: "nairobi-1d-safari",
    titleIt: "1 Giorno Safari Parco Nazionale di Nairobi",
    titleEn: "1 Day Nairobi National Park Safari",
    descriptionIt: "L'unico parco nazionale al mondo dentro la linea dell'orizzonte di una metropoli. Fotosafari spettacolare in jeep aperta 4x4 per immortalare leoni, rinoceronti neri, giraffe e ghepardi con i grattacieli di Nairobi sullo sfondo.",
    descriptionEn: "The only national park in the world where you track wild predators against a modern city skyline. Settle into a 4x4 open-roof cruiser to capture lions, black rhinos, giraffes, and hippos set against Nairobi towers.",
    durationIt: "In Giornata (06:00 - 12:00)",
    durationEn: "Full Morning (6:00 AM - 12:00 PM)",
    category: "natura",
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    priceEstimateIt: "da €85 a persona",
    priceEstimateEn: "from €85 per person",
    highlightsIt: [
      "Primi avvistamenti di leoni e bufali a 10 minuti dal centro città",
      "Oasi protetta che ospita la più alta densità di rinoceronti neri in Kenya",
      "Giro naturalistico dell'area fluviale con coccodrilli e ippopotami"
    ],
    highlightsEn: [
      "Track free lions and massive buffalos just 10 minutes away from downtown",
      "The prime secure habitat housing over 50 protected critical black rhinos",
      "Fluvial bank walks spotting lazy crocodiles and floating hippos"
    ],
    includesIt: ["Minivan con tetto apribile", "Tasse del parco nazionale", "Acqua minerale", "Guida professionale"],
    includesEn: ["Open roof customized pop-up van", "National Park conservation fees", "Cold mineral water", "Professional driver ranger"]
  }
];

export const SAFARIS: SafariPackage[] = [
  // ==========================================
  // --- SAFARIS FROM WATAMU, MOMBASA, DIANI ---
  // ==========================================
  {
    id: "coast-tsavo-east-1d",
    titleIt: "1 Giorno Safari Tsavo Est",
    titleEn: "1 Day Tsavo East Safari",
    taglineIt: "La savana a portata di mano. Partenza all'alba da Watamu/Diani per una giornata intensa di emozioni selvagge.",
    taglineEn: "The savannah at your doorstep. Early dawn departure for an intense day of pure raw wildlife.",
    descriptionIt: "Fotosafari concentrato e indimenticabile nel parco nazionale più antico del Kenya. Perfetto per chi ha poco tempo o vuole spendere poco, garantendo l'avvistamento di elefanti rossi, leoni, gazze, zebre e giraffe con rientro in hotel per cena.",
    descriptionEn: "Unforgettable express game drive in Kenya's oldest national park. Ideal for travelers short on time or budget, delivering beautiful views of Tsavo's iron-red elephants, majestic lions, zebras, and giraffes.",
    durationIt: "1 Giorno (04:30 - 18:30)",
    durationEn: "1 Day (04:30 AM - 6:30 PM)",
    parksIt: ["Parco Nazionale di Tsavo Est"],
    parksEn: ["Tsavo East National Park"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €140 a €180 a persona (Tutto Incluso)",
    priceDetailsEn: "from €140 to €180 per person (All Included)",
    highlightsIt: [
      "Navigazione approfondita della savana nelle ore migliori del mattino",
      "Meraviglioso pranzo a buffet caldo dentro un lodge sul fiume",
      "Rientro in serata direttamente al tuo hotel o residence"
    ],
    highlightsEn: [
      "Extensive morning game drives looking for active predators",
      "Delicious hot lunch buffet at a river-facing safari lodge",
      "Return transport directly to your beach resort for dinner"
    ],
    bestForIt: "Chi ha tempi stretti ma non vuole assolutamente perdersi la magia della Savana d'Africa.",
    bestForEn: "Anyone on tight holiday calendars seeking a quick but full savanna rush."
  },
  {
    id: "coast-tsavo-east-2d",
    titleIt: "2 Giorni 1 Notte Tsavo Est",
    titleEn: "2 Days 1 Night Tsavo East",
    taglineIt: "Il safari classico per eccellenza: guarda il tramonto infuocato e svegliati circondato da animali liberi.",
    taglineEn: "The classic safari: watch the deep orange sunset and wake up in wild animal territory.",
    descriptionIt: "Il nostro safari best-seller con Filippo Bassa Marea. Partenza comoda dalla costa alla volta delle terre rosse di Tsavo East. Ammireremo leopardi, leoni, branchi di elefanti giganti e dormiremo in un lussuoso campo tendato o lodge con vista pozza d'acqua illuminata di notte.",
    descriptionEn: "Our best-selling savanna experience coached by Filippo Bassa Marea. Journey from the coast to Tsavo East. Spot hunting lions, huge herds of tuskers, and enjoy a night in a luxury safari camp with waterhole views.",
    durationIt: "2 Giorni / 1 Notte",
    durationEn: "2 Days / 1 Night",
    parksIt: ["Parco Nazionale di Tsavo Est"],
    parksEn: ["Tsavo East National Park"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €195 a €260 a persona (in Jeep 4x4 o pulmino)",
    priceDetailsEn: "from €195 to €260 per person (via 4x4 Jeep Cruiser or Van)",
    highlightsIt: [
      "Incredibile game drive notturno riflesso sulla pozza d'acqua del campo",
      "Pensione completa con piatti squisiti e bevande",
      "Incontro fantastico con gli elefanti rossi di Tsavo"
    ],
    highlightsEn: [
      "Stunning star-gazing next to illuminated watering holes",
      "Full Board accommodations with gourmet cooking and hot drinks",
      "High probability of tracking prides of lions and massive tuskers"
    ],
    bestForIt: "Famiglie, comitive e chiunque cerchi l'esperienza wild perfetta.",
    bestForEn: "Families, groups, and anyone desiring the ultimate balanced safari choice."
  },
  {
    id: "coast-tsavo-east-amboseli-3d",
    titleIt: "3 Giorni 2 Notti Tsavo Est & Amboseli",
    titleEn: "3 Days 2 Nights Tsavo East & Amboseli",
    taglineIt: "La terra del Kilimanjaro e i giganti elefanti di Amboseli fusi con le falesie rosse di Tsavo Est.",
    taglineEn: "Snowy peak of Kilimanjaro and Amboseli's giant elephant herds merged with Tsavo East.",
    descriptionIt: "Safari epico di 3 giorni. 1 Notte a Tsavo Est e 1 Notte ad Amboseli. Vivrai il contrasto incredibile tra le praterie palustri dominate dal massiccio del Kilimanjaro innevato e le piste aride color ocra di Tsavo East, guidati da sapienti driver esperti Giriama.",
    descriptionEn: "Epic 3-day deep wildlife safari. 1 Night in Tsavo East and 1 Night in Amboseli. Observe the dramatic contrast between wet marshlands backed by Mount Kilimanjaro and iron-red tracks of Tsavo East.",
    durationIt: "3 Giorni / 2 Notti",
    durationEn: "3 Days / 2 Nights",
    parksIt: ["Parco Nazionale Amboseli", "Parco Nazionale di Tsavo Est"],
    parksEn: ["Amboseli National Park", "Tsavo East National Park"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €380 a €470 a persona (Pensione Completa, ingressi inclusi)",
    priceDetailsEn: "from €380 to €470 per person (Full Board, park admissions included)",
    highlightsIt: [
      "Sveglia con vista unica sul maestoso Monte Kilimanjaro innevato",
      "Laguna salata di Amboseli ricca di fenicotteri ed ippopotami",
      "Fotosafari a 360 gradi in Jeep Land Cruiser 4x4"
    ],
    highlightsEn: [
      "Wake up under the jaw-dropping peak of Mount Kilimanjaro",
      "Wet Amboseli swamps home to thousands of migrating birds & rhinos",
      "Unrestricted viewing with standard open pop-up 4x4 Land Cruisers"
    ],
    bestForIt: "Chi ama la fotografia d'autore paesaggistica e l'avventura pura.",
    bestForEn: "Scenery fans, avid photographers, and couples seeking timeless vistas."
  },
  {
    id: "coast-tsavo-east-taita-3d",
    titleIt: "3 Giorni 2 Notti Tsavo Est & Taita Saltlick",
    titleEn: "3 Days 2 Nights Tsavo East & Taita Saltlick",
    taglineIt: "Il romanticismo eterno di Saltlick: dormire in palafitte lussuose sopra una pozza affollata di animali.",
    taglineEn: "The magic of Saltlick: sleep in luxury stilt-lodges suspended over active animal watering holes.",
    descriptionIt: "Incredibile tour di 3 giorni. 1 Notte a Tsavo Est e 1 Notte nell'esclusiva riserva privata di Taita Hills Saltlick. Alloggerai nell'iconico Sarova Salt Lick Game Lodge, famoso in tutto il mondo per le sue pittoresche dimore sospese su palafitte che lasciano passare liberi elefanti e bufali sotto i tuoi piedi.",
    descriptionEn: "Unbelievable 3-day combo safari. 1 Night in Tsavo East and 1 Night inside Taita Hills Private Sanctuary. Bed down in the famous Sarova Salt Lick Lodge, renowned for wooden stilt-cabins elevated directly over constant animal tracks.",
    durationIt: "3 Giorni / 2 Notti",
    durationEn: "3 Days / 2 Nights",
    parksIt: ["Parco Nazionale di Tsavo Est", "Riserva Privata di Taita Hills (Saltlick)"],
    parksEn: ["Tsavo East National Park", "Taita Hills Wildlife Sanctuary (Salt Lick)"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €390 a €480 a persona (Esperienza incredibile)",
    priceDetailsEn: "from €390 to €480 per person (Stunning luxury experience)",
    highlightsIt: [
      "Pernottamento in palafitta con oblò panoramici sulle pozze degli animali",
      "Fotosafari notturni facoltativi organizzati nella riserva privata",
      "Pranzi gourmet serviti su terrazze sospese con panorama infinito"
    ],
    highlightsEn: [
      "Priceless overnight stay in circular stilt houses above wild watering corridors",
      "Night safari drives in the reserve with high-strength spot lamps",
      "Fine dining atop gorgeous open-air wooden bridges with wild animals below"
    ],
    bestForIt: "Coppie, viaggi di nozze e chiunque cerchi alloggi unici ed iconici.",
    bestForEn: "Honeymooners, design enthusiasts, and travelers looking for special scenery."
  },
  {
    id: "coast-tsavo-east-west-3d",
    titleIt: "3 Giorni 2 Notti Tsavo Est & Tsavo Ovest",
    titleEn: "3 Days 2 Nights Tsavo East & Tsavo West",
    taglineIt: "La savana divisa a metà: le dune pianeggianti e le colline vulcaniche bagnate dalle sorgenti d'acqua.",
    taglineEn: "The two faces of Tsavo: iron flatlands and lush volcanic spring woods.",
    descriptionIt: "Splendido itinerario di 3 giorni. 1 Notte a Tsavo Est e 1 Notte a Tsavo Ovest. Ammireremo fiumi selvaggi, colline laviche nere, le sorgenti di Mzima Springs abitate da ippopotami giganti, e i rinoceronti neri protetti nel Rhino Sanctuary.",
    descriptionEn: "Stunning 3-day split expedition. 1 Night in Tsavo East and 1 Night in Tsavo West. Highlights include black lava flows, Mzima Springs holding giant hippos, and the strictly guarded Rhino Sanctuary.",
    durationIt: "3 Giorni / 2 Notti",
    durationEn: "3 Days / 2 Nights",
    parksIt: ["Parco Nazionale di Tsavo Est", "Parco Nazionale di Tsavo Ovest"],
    parksEn: ["Tsavo East National Park", "Tsavo West National Park"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €370 a €460 a persona (Pensione Completa)",
    priceDetailsEn: "from €370 to €460 per person (Full Board included)",
    highlightsIt: [
      "Incontro ravvicinato con gli ippopotami da un osservatorio subacqueo a Mzima Springs",
      "L'incredibile paesaggio vulcanico lavico delle colline di Shetani",
      "Fotosafari all'interno del Rhino Sanctuary protetto"
    ],
    highlightsEn: [
      "Spot swimming hippos underwater from a custom glass observatory at Mzima",
      "Spectacular landscape of black lava flows at Shetani hills",
      "Exciting game drives tracking rare massive black rhinos in their sanctuary"
    ],
    bestForIt: "Chi ama la geologia, gli ambienti lussureggianti e i documentari sugli animali.",
    bestForEn: "Geology geeks, nature walk lovers, and enthusiasts of wet and leafy biomes."
  },
  {
    id: "coast-taita-amboseli-tsavo-4d",
    titleIt: "4 Giorni Safari Taita Saltlick, Amboseli & Tsavo Est",
    titleEn: "4 Days Safari Taita Saltlick, Amboseli & Tsavo East",
    taglineIt: "La grande trilogia d'Africa: tre habitat magici e diversi per un quadro completo della fauna.",
    taglineEn: "The great African trilogy: three legendary ecosystems offering the ultimate wildlife view.",
    descriptionIt: "Spettacolare viaggio di 4 giorni e 3 notti (1 notte Taita Saltlick, 1 notte Amboseli, 1 notte Tsavo Est). Ti porterà nel cuore pulsante della natura keniota: dalle pozze delle palafitte di Salt Lick, passando per i panorami leggendari del Kilimanjaro ad Amboseli, terminando nell'immensità rossa di Tsavo Est con Filippo.",
    descriptionEn: "Spectacular 4 Days / 3 Nights package. (1 Night Taita Saltlick, 1 Night Amboseli, 1 Night Tsavo East). Experience a majestic loop: elevated stilt cabins, stunning Mount Kilimanjaro scenery, and final crimson plains of Tsavo.",
    durationIt: "4 Giorni / 3 Notti",
    durationEn: "4 Days / 3 Nights",
    parksIt: ["Parco Nazionale Amboseli", "Parco dell'Est Tsavo", "Taita Hills Wildlife Sanctuary (Saltlick)"],
    parksEn: ["Amboseli National Park", "Tsavo East National Park", "Taita Hills Private Reserve"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €540 a €650 a persona (Jeep 4x4 privata inclusa)",
    priceDetailsEn: "from €540 to €650 per person (Private 4x4 Cruiser included)",
    highlightsIt: [
      "Fotosafari ad ampio spettro alla ricerca dei Big Five",
      "Tre notti spettacolari in lodge pluristellati immersi nella savana",
      "Massimo comfort con autista dedicato e guide multilingue"
    ],
    highlightsEn: [
      "Comprehensive multi-day game drives tracing all Africa's Big Five",
      "Three beautiful nights booked inside highly rated national park resorts",
      "Superior luxury comfort with dedicated driver tour guides"
    ],
    bestForIt: "Chi desidera una vacanza lussuosa e indimenticabile, coprendo tutti i parchi simbolo della costa.",
    bestForEn: "Anyone demanding an expansive premium journey touching all iconic coastal destinations."
  },
  {
    id: "coast-west-amboseli-taita-tsavo-5d",
    titleIt: "5 Giorni Safari Tsavo Ovest, Amboseli, Taita Saltlick & Tsavo Est",
    titleEn: "5 Days Safari Tsavo West, Amboseli, Taita Saltlick & Tsavo East",
    taglineIt: "La grande odissea del Kenya: cinque giorni di esplorazione indimenticabile in fuoristrada 4x4.",
    taglineEn: "The great Kenyan Odyssey: five epic days cruising the wild savannah in private 4x4s.",
    descriptionIt: "Il massimo itinerario terrestre realizzabile partendo dalla costa (Watamu, Malindi, Diani o Mombasa). 5 Giorni intensi e lussuosi toccando 4 ecosistemi eccezionali (1 Notte Tsavo Ovest, 1 Notte Amboseli, 1 Notte Taita Saltlick, 1 Notte Tsavo Est). Alloggi pluristellati selezionati, pensione completa e fotosafari quotidiani all'alba, tramonto e serali.",
    descriptionEn: "The ultimate road-trip adventure starting from the coastal line. 5 grand days traversing 4 magnificent wildlife sanctuaries (1 Night Tsavo West, 1 Night Amboseli, 1 Night Taita Private Reserve, 1 Night Tsavo East) under our team's guidance.",
    durationIt: "5 Giorni / 4 Notti",
    durationEn: "5 Days / 4 Notti",
    parksIt: ["Tsavo Est", "Tsavo Ovest", "Amboseli", "Taita Hills Saltlick"],
    parksEn: ["Tsavo East", "Tsavo West", "Amboseli", "Taita Hills Private Sanctuary"],
    departureFrom: "watamu_mombasa_diani",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "Quotazione personalizzata scontata per gruppi e famiglie su richiesta",
    priceDetailsEn: "Bespoke custom budget quotes with generous group or family deals",
    highlightsIt: [
      "Visita completa e approfondita di Mzima Springs e pozze laviche",
      "Pozze popolate da centinaia di elefanti giganti ad Amboseli",
      "Pernottamenti iconici compreso lo spettacolare Sarova Salt Lick stilt lodge"
    ],
    highlightsEn: [
      "In-depth treks around crystalline volcanic pools at Mzima springs",
      "Beholding hundreds of jumbo elephants simultaneously in Amboseli salt pans",
      "Incredible array of premium lodges including the iconic stilted Sarova Salt Lick"
    ],
    bestForIt: "Chi vuole vivere l'Africa autentica della savana senza compromessi e in totale sicurezza.",
    bestForEn: "Wildlife lovers desiring an uncompromised full savannah safari covering all regional highlights."
  },

  // ==========================================
  // --- SAFARIS DEPARTING FROM NAIROBI --------
  // ==========================================
  {
    id: "nairobi-masai-mara-jeep-3d",
    titleIt: "3 Giorni Masai Mara Safari in Jeep",
    titleEn: "3 Days Maasai Mara Jeep Safari",
    taglineIt: "Il tempio dei felini d'Africa. Spettacolare viaggio guidato in fuoristrada 4x4 nel parco dei documentari.",
    taglineEn: "The sacred home of African wildcats. Classic 3-day guided 4x4 expedition into the Serengeti plains.",
    descriptionIt: "Partenza da Nairobi verso la riserva naturale più leggendaria del mondo: il Masai Mara. Attraverseremo la spaccatura della Rift Valley per fotosafari spettacolari nelle praterie sconfinate, incontrando leoni, leopardi, ghepardi, bufali ed assistendo (nei mesi estivi) alla Grande Migrazione degli gnu.",
    descriptionEn: "Depart from Nairobi towards the world's most legendary wildlife arena: the Maasai Mara. Cross the Great Rift Valley, entering the infinite savannah plains hosting unmatched numbers of lions, cheetahs, and the Great Wildebeest Migration.",
    durationIt: "3 Giorni / 2 Notti",
    durationEn: "3 Days / 2 Nights",
    parksIt: ["Riserva Nazionale del Masai Mara"],
    parksEn: ["Maasai Mara National Reserve"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €390 a €520 a persona (in Jeep 4x4 con ranger)",
    priceDetailsEn: "from €390 to €520 per person (via executive 4x4 Off-road Jeep)",
    highlightsIt: [
      "Jeep 4x4 professionale con tetto pop-up per angoli fotografici fantastici",
      "Visita facoltativa ad un autentico villaggio tribale Masai",
      "La più alta densità di felini e predatori d'Africa"
    ],
    highlightsEn: [
      "Premium 4x4 custom Pop-up Cruiser perfect for taking photography shots",
      "Optional cultural immersive walk into a live Maasai Manyatta village",
      "Unparalleled viewings of massive lion prides, wild dogs and leopards"
    ],
    bestForIt: "Chi ha come sogno assoluto l'avvistamento dei felini del Masai Mara.",
    bestForEn: "Anyone whose lifelong dream is tracking apex predators inside Maasai Mara."
  },
  {
    id: "nairobi-nakuru-mara-4d",
    titleIt: "4 Giorni Lago Nakuru & Masai Mara",
    titleEn: "4 Days Lake Nakuru & Maasai Mara",
    taglineIt: "Il paradiso dei fenicotteri rosa rari e i rinoceronti, seguito dall'immensità del Masai Mara.",
    taglineEn: "The paradise of pink flamingos, white rhinos, and endless wildcats in the Mara.",
    descriptionIt: "Splendido itinerario di 4 giorni da Nairobi. Sosta del primo giorno sul favoloso Lago Nakuru, patrimonio UNESCO famoso per migliaia di fenicotteri rosa e per la salvaguardia dei rari rinoceronti bianchi e neri. Successivamente vivremo 2 notti da sogno nel leggendario Masai Mara.",
    descriptionEn: "Outstanding 4-day tour departing from Nairobi. Spend Day 1 around the scenic Lake Nakuru, dynamic sanctuary of rare white/black rhinos and thousands of pink flamingos, continuing for 2 nights into Maasai Mara.",
    durationIt: "4 Giorni / 3 Notti",
    durationEn: "4 Days / 3 Nights",
    parksIt: ["Parco Nazionale del Lago Nakuru", "Riserva Nazionale del Masai Mara"],
    parksEn: ["Lake Nakuru National Park", "Maasai Mara National Reserve"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €520 a €680 a persona (Pensione Completa)",
    priceDetailsEn: "from €520 to €680 per person (Full Board included)",
    highlightsIt: [
      "Incontri Ravvicinati con rari rinoceronti bianchi e giraffe di Rothschild a Nakuru",
      "Due intere giornate dedicate ai grandi branchi del Masai Mara",
      "Pranzi caldi serviti sotto alberi di acacia all'interno della riserva"
    ],
    highlightsEn: [
      "Getting close to endangered white rhinos and Rothchild giraffes in Nakuru",
      "Two deep, full days tracking game inside Maasai Mara",
      "Wild picnic lunches served under scenic acacia trees inside the park borders"
    ],
    bestForIt: "Amanti del birdwatching, ornitologi e chi vuole vedere rinoceronti e leoni nello stesso viaggio.",
    bestForEn: "Birdwatchers, rhino conservation fans, and safari purists seeking variety."
  },
  {
    id: "nairobi-mara-amboseli-tsavo-5d",
    titleIt: "5 Giorni Masai Mara, Amboseli & Tsavo Est con soggiorno finale Watamu o Diani",
    titleEn: "5 Days Maasai Mara, Amboseli & Tsavo East with beach stay in Watamu or Diani",
    taglineIt: "Dal cuore della Rift Valley fino alla costa: il tour completo perfetto con volo o trasferte in jeep.",
    taglineEn: "From the dry Rift Valley to the blue Ocean: the ultimate combined safari & beach tour.",
    descriptionIt: "La combinazione perfetta per le tue vacanze in Kenya (2 notti Masai Mara, 1 notte Amboseli, 1 notte Tsavo Est). Partenza da Nairobi ed arrivo trionfale sulle spiagge tropicali di Watamu o Diani Beach, sperimentando la savana selvaggia, le paludi sotto il Kilimanjaro e la fantastica terra rossa del sud, terminando sul mare dei coralli.",
    descriptionEn: "Classic 5 Days / 4 Nights grand traverse (2 nights Maasai Mara, 1 night Amboseli, 1 night Tsavo East). Depart NBO, track through wildlife habitats, and arrive on the warm beaches of Watamu or Diani for your tropical resort stay.",
    durationIt: "5 Giorni + Soggiorno Mare",
    durationEn: "5 Days + Beach Vacation",
    parksIt: ["Masai Mara", "Amboseli", "Tsavo Est"],
    parksEn: ["Maasai Mara", "Amboseli", "Tsavo East"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "Quotazione su misura (supporto hotel spiaggia con Filippo)",
    priceDetailsEn: "Bespoke custom rates (coordinated including beach resort options with Filippo)",
    highlightsIt: [
      "Tratta completa che unisce il meglio dei parchi nazionali del nord e del sud",
      "Arrivo finale porta-a-porta direttamente nel tuo resort a Watamu o Diani",
      "Fotosafari unici con leoni, ghepardi ed elefanti giganti"
    ],
    highlightsEn: [
      "Unbelievable cross-country trip compiling both north and coastal national parks",
      "Drop-off directly at your private hotel cottage in Watamu / Diani coast",
      "Unmatched predator and megafauna views at every park milestone"
    ],
    bestForIt: "Chi desidera una vacanza totale tutto-compreso: safari epico e spiagge da sogno.",
    bestForEn: "Travelers seeking a fully integrated seamless holiday: premium safari + beach relaxation."
  },
  {
    id: "nairobi-nakuru-mara-amboseli-tsavo-6d",
    titleIt: "6 Giorni Lago Nakuru, Masai Mara, Amboseli & Tsavo Est con soggiorno finale Watamu o Diani",
    titleEn: "6 Days Lake Nakuru, Maasai Mara, Amboseli & Tsavo East with beach stay in Watamu or Diani",
    taglineIt: "Sei giorni nel regno degli animali. Fotosafari quotidiani fino alla perla dell'oceano indiano.",
    taglineEn: "Six glorious days across wildlife kingdoms ending at the beautiful ocean.",
    descriptionIt: "Spettacolare odissea di 6 giorni da Nairobi (1 notte Lago Nakuru, 2 notti Masai Mara, 1 notte Amboseli, 1 notte Tsavo Est). Progettata da Filippo Bassa Marea per regalarvi il meglio in assoluto del Kenya rurale e selvaggio. Un itinerario straordinario che si conclude sulle spiagge incontaminate di Watamu o Diani.",
    descriptionEn: "Spectacular 6-day odyssey departing from Nairobi (1 Night Lake Nakuru, 2 Nights Maasai Mara, 1 Night Amboseli, 1 Night Tsavo East). Designed by Filippo Bassa Marea to offer absolute immersion in Kenya's top parks, ending directly on the sandy shores of Watamu or Diani.",
    durationIt: "6 Giorni / 5 Notti",
    durationEn: "6 Days / 5 Nights",
    parksIt: ["Lago Nakuru", "Masai Mara", "Amboseli", "Tsavo Est"],
    parksEn: ["Lake Nakuru", "Maasai Mara", "Amboseli", "Tsavo East"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1541411110565-c27c9540c575?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "Quotazione personalizzata per gruppi e coppie",
    priceDetailsEn: "Custom quotes for couples and private groups",
    highlightsIt: [
      "Incontro ravvicinato con gli elefanti ai piedi del Kilimanjaro",
      "Grandi branchi di predatori del Masai Mara",
      "L'eleganza dei fenicotteri rosa del Lago Nakuru"
    ],
    highlightsEn: [
      "Breathtaking elephant encounters beneath Mount Kilimanjaro",
      "Excellent predator tracking throughout Maasai Mara plains",
      "Savoring the pink shores populated by millions of flamingos in Nakuru"
    ],
    bestForIt: "Chi ha a disposizione una settimana intera e vuole vivere l'Africa dei documentari d'autore.",
    bestForEn: "Nature-loving families wanting the ultimate deep-dive week of Kenya photography."
  },
  {
    id: "nairobi-safari-grand-7d",
    titleIt: "7 Giorni Lago Nakuru, Masai Mara, Naivasha/Nakuru, Taita Saltlick & Tsavo Est con soggiorno Watamu o Diani",
    titleEn: "7 Days Lake Nakuru, Maasai Mara, Naivasha, Taita Saltlick & Tsavo East ending in Watamu/Diani",
    taglineIt: "Il Grande Tour d'Africa: una settimana intera di pura meraviglia naturale prima del relax al mare.",
    taglineEn: "The Ultimate African Grand Tour: a full week of wild wonders before coastal paradise.",
    descriptionIt: "Il safari definitivo per eccellenza organizzato da Filippo Bassa Marea. 7 Giorni indimenticabili attraverso i santuari più amati del Kenya (1 notte Lago Nakuru, 2 notti Masai Mara, 1 notte Naivasha/Nakuru, 1 notte Taita Saltlick, 1 notte Tsavo Est). Un viaggio unico che termina sulle calde sabbie di Watamu o Diani.",
    descriptionEn: "The ultimate road safari organized by Filippo Bassa Marea. 7 unforgettable days mapping through Kenya's most legendary sanctuaries (1 Night Lake Nakuru, 2 Nights Maasai Mara, 1 Night Naivasha/Nakuru, 1 Night Taita Saltlick, 1 Night Tsavo East) culminating on the warm beaches of Watamu or Diani.",
    durationIt: "7 Giorni / 6 Notti",
    durationEn: "7 Days / 6 Nights",
    parksIt: ["Lago Nakuru", "Masai Mara", "Lago Naivasha", "Taita Saltlick", "Tsavo Est"],
    parksEn: ["Lake Nakuru", "Maasai Mara", "Lake Naivasha", "Taita Saltlick", "Tsavo East"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "Richiedi un preventivo scontato a Filippo per l'itinerario perfetto",
    priceDetailsEn: "Request discounted custom quote options directly from Captain Filippo",
    highlightsIt: [
      "Visita speciale e gita in barca sulle acque del Lago Naivasha con ippopotami",
      "Il romanticismo unico del Sarova Salt Lick stilt lodge in savana",
      "Grandi felini del Masai Mara ed elefanti rossi di Tsavo"
    ],
    highlightsEn: [
      "Exclusive boat cruise spotting rich hippos and eagles at Lake Naivasha",
      "Overnight stay inside the world-famous elevated Sarova Salt Lick lodge",
      "Unmatched chances to capture the entire Big Five portfolio in 7 days"
    ],
    bestForIt: "Viaggiatori esigenti che desiderano l'esperienza di conservazione e safari più completa d'Africa.",
    bestForEn: "Sophisticated explorers insisting on a comprehensive, premium bucket-list Kenyan journey."
  },
  {
    id: "nairobi-amboseli-west-tsavo-4d",
    titleIt: "4 Giorni Amboseli, Tsavo Ovest o Taita Saltlick & Tsavo Est con soggiorno Watamu o Diani",
    titleEn: "4 Days Amboseli, Tsavo West or Taita Saltlick & Tsavo East ending in Watamu/Diani",
    taglineIt: "Il grande sud del Kenya in fuoristrada. Ecosistemi pazzeschi vicino alle cime del Kilimanjaro.",
    taglineEn: "The Great South savannahs in premium 4x4s. Mindblowing wild landscapes under Kilimanjaro.",
    descriptionIt: "Fotosafari eccezionale di 4 giorni da Nairobi (1 notte Amboseli, 1 notte Tsavo Ovest o Taita Saltlick, 1 notte Tsavo Est). Viaggeremo e faremo game drive costanti ammirando l'incredibile biodiversità dei parchi meridionali prima di scendere in hotel nel clima di Watamu o Diani Beach.",
    descriptionEn: "Exceptional 4-day loop departing from Nairobi (1 Night Amboseli, 1 Night Tsavo West or Taita Saltlick, 1 Night Tsavo East). Experience a dynamic cross-cutting safari with top driver rangers before checking into your seaside resort.",
    durationIt: "4 Giorni / 3 Notti",
    durationEn: "4 Days / 3 Nights",
    parksIt: ["Amboseli", "Tsavo Ovest / Taita Saltlick", "Tsavo Est"],
    parksEn: ["Amboseli", "Tsavo West / Taita Saltlick", "Tsavo East"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €490 a €590 a persona (in Jeep 4x4)",
    priceDetailsEn: "from €490 to €590 per person (via 4x4 Pop-up Jeep)",
    highlightsIt: [
      "Incredibile vista imponente sul massiccio del Kilimanjaro",
      "Visita facoltativa alle grotte laviche e alla sorgente risorgiva di Mzima",
      "Rilassante discesa finale verso il calore dell'Oceano Indiano"
    ],
    highlightsEn: [
      "Bigger-than-life views of the snow-capped Kilimanjaro peak at dawn",
      "Optional walks inside volcanic caves and pristine Mzima springs",
      "Relaxing final descent directly towards the beach resorts of Watamu or Diani"
    ],
    bestForIt: "Chi vuole saltare la Rift Valley per concentrarsi esclusivamente sui grandi parchi del mitico sud.",
    bestForEn: "Wilderness fans seeking a quick, focused look at majestic southern Kenya parks."
  },
  {
    id: "nairobi-amboseli-tsavo-3d",
    titleIt: "3 Giorni Amboseli & Tsavo Est con soggiorno Watamu o Diani",
    titleEn: "3 Days Amboseli & Tsavo East ending in Watamu or Diani",
    taglineIt: "Dall'aeroporto di Nairobi alle pozze d'acqua di Amboseli e Tsavo fino al mare.",
    taglineEn: "From Nairobi airport to Amboseli and Tsavo waterholes, ending at the ocean.",
    descriptionIt: "Un bellissimo mini-safari di 3 giorni ideato per congiungere l'arrivo a Nairobi con il relax della costa (1 notte Amboseli, 1 notte Tsavo Est). Fotosafari entusiasmanti con elefanti giganti e leoni, per poi essere accompagnati direttamente nel vostro alloggio a Watamu o Diani.",
    descriptionEn: "A magnificent 3-day express safari matching your Nairobi arrival to coastal relaxation (1 Night Amboseli, 1 Night Tsavo East). Spot giant elephants and proud lions before being escorted directly to Watamu or Diani Beach.",
    durationIt: "3 Giorni / 2 Notti",
    durationEn: "3 Days / 2 Nights",
    parksIt: ["Parco Nazionale Amboseli", "Parco dell'Est Tsavo"],
    parksEn: ["Amboseli National Park", "Tsavo East National Park"],
    departureFrom: "nairobi",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
    priceDetailsIt: "da €350 a €430 a persona (Pensione Completa)",
    priceDetailsEn: "from €350 to €430 per person (Full Board included)",
    highlightsIt: [
      "Fotosafari multipli sulle praterie bagnate di Amboseli",
      "Fotosafari di Tsavo Est con il suo fiume Galana selvaggio",
      "Servizio comodo andata-ritorno con supporto bagagli"
    ],
    highlightsEn: [
      "Multiple game drives on Amboseli's water channels with huge elephant views",
      "Amazing Tsavo East run along the scenic Galana River banks",
      "Hassle-free transfers with dedicated luggage hosting"
    ],
    bestForIt: "Coppie, viaggiatori di passaggio e comitive che arrivano scaglionate sul territorio keniota.",
    bestForEn: "Anyone arriving at Nairobi airport eager to start their beach holiday with an immediate wildlife trip."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marco & Silvia Varese",
    location: "Milano, Italia",
    date: "Ottobre 2025",
    rating: 5,
    textIt: "Filippo Bassa Marea è eccezionale! Abbiamo fatto il Safari di 2 giorni a Tsavo East ed è stato pazzesco. Ci è venuto a prendere direttamente al resort a Watamu. Driver bravissimi ed attenti ai dettagli, ci hanno fatto vedere leonesse e ghepardi da mezzo metro d'altezza. Poi la giornata a Sardegna 2 con l'aragostata cotta sulla spiaggia è un ricordo indelebile. Onestà al 100%, consigliatissimo!",
    textEn: "Filippo Bassa Marea is extraordinary! We did the 2-day Tsavo East Safari and it was mindblowing. Shuttles picked us up directly from our Watamu resort. Professional, friendly drivers. Next, the Sardegna 2 beach dhow barbecue with fresh rock lobsters is a memory we will hold forever. 100% honest and safe!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Elena & Francesca Rossini",
    location: "Bologna, Italia",
    date: "Gennaio 2026",
    rating: 5,
    textIt: "Bellissima esperienza a Marafa (Hell's Kitchen) e alle rovine di Gede. Filippo e il suo team sono fantastici, sempre sorridenti e con un'ottima conoscenza dell'italiano e della storia Giriama locale. Nutrire le scimmiette a Gede è stato divertentissimo per le bimbe. Organizzazione e serietà incredibili, ci siamo sentite al sicuro tutto il viaggio.",
    textEn: "Beautiful experience in Marafa Canyon and Gede ruins. Filippo and his crew are fantastic, always smiling and sharing profound details about the native Giriama culture in clear Italian and English. Feeding Gede monkeys was incredibly fun. Top class organization and extreme safety throughout.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "The Sterling Family",
    location: "London, UK",
    date: "February 2026",
    rating: 5,
    textIt: "Safari Blu favoloso con avvistamento delfini! Io e la mia famiglia abbiamo passato una giornata magica. Filippo parla un ottimo italiano ed inglese, gestisce gli orari perfettamente per evitare la calca di turisti, garantendo un'esperienza esclusiva. Il cibo era superbo e delizioso. Un vero capitano locale!",
    textEn: "Fabulous Safari Blue day! We spotted lovely dolphins. Filippo handles schedules wonderfully such that we avoided the heavy tourist crowds, granting us a quiet snorkeling and marine experience. Coconut crabs and fish were exquisite. True local captain!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS = [
  {
    qIt: "Filippo Bassa Marea è un operatore locale certificato? È sicuro?",
    qEn: "Is Filippo Bassa Marea a certified local operator? Is it safe?",
    aIt: "Sì, assolutamente! Filippo Bassa Marea opera con licenza regolare di operatore turistico certificato ed è affiliato con i driver autorizzati KWS (Kenya Wildlife Service). Le nostre barche private per le escursioni marine dispongono di dotazioni di sicurezza e assicurazione completa per i viaggiatori. Viaggiare con Filippo e il suo team significa divertimento in totale relax senza brutte sorprese.",
    aEn: "Yes, fully! Filippo Bassa Marea is a licensed Kenyan tour operator cooperating with certified KWS (Kenya Wildlife Service) drivers and boat guides. All sea vessels and open-top 4x4 Safari Land Cruisers carry active safety gear and full passenger liability insurance. Booking with Filippo guarantees comfort and peace of mind."
  },
  {
    qIt: "Come funzionano i pagamenti ed è necessario un acconto?",
    qEn: "How do payments work and is a deposit required?",
    aIt: "Per le escursioni locali e marine (Sardegna 2, Marafa, Gede, Safari Blu) il pagamento si effettua con tranquillità direttamente in contanti (Euro o Scellini Kenioti) il giorno stesso dell'escursione. Per i Safari di più giorni che includono il pernotto nei lodge e parchi nazionali, chiediamo un piccolo acconto sicuro tramite bonifico o servizi di trasferimento digitale per poter bloccare istantaneamente camera ed auto, saldando la restante parte in contanti o carta all'arrivo in agenzia in Kenya.",
    aEn: "For single-day marine and coastal trips (like Sardegna 2 or Marafa), payments can be easily settled in cash (Euros or Shillings) directly on the morning of your activity. For multi-day safaris, a small secure deposit is required in advance via bank or secure digital transfers to book your park permits and lodges immediately, with the remainder paid in Kenya."
  },
  {
    qIt: "È richiesta la profilassi antimalarica per i Safari?",
    qEn: "Is malaria prophylaxis recommended for these safaris?",
    aIt: "Non è obbligatoria per legge. La costa di Watamu, Malindi e Diani è costantemente bagnata dalla brezza marina che riduce al minimo la presenza di insetti. Nei parchi nazionali secchi come Tsavo Est la presenza è ridottissima. Suggeriamo l'uso di un buon repellente tropicale per zanzare (DEET) durante il tramonto ed abbigliamento chiaro a maniche lunghe. Nel caso specifico, si prega di fare riferimento alle raccomandazioni ufficiali della propria azienda sanitaria locale dell'Asl prima della partenza.",
    aEn: "It is not legally mandatory. Coastal regions of Watamu or Diani enjoy deep dry breezes, making mosquitoes very rare outdoors. National parks like Tsavo East are dry and hot. We advise standard preventive tropical spray (DEET), wearing long shirts in evening golden hours, and consulting with your doctor/travel clinic for formal personalized medical paths."
  },
  {
    qIt: "Qual è il documento necessario per entrare in Kenya (eTA)?",
    qEn: "What travel document is required to enter Kenya (eTA)?",
    aIt: "Per entrare in Kenya è necessario richiedere l'eTA (Electronic Travel Authorization) compilando la richiesta online sul portale ministeriale ufficiale (etakenya.go.ke) almeno 3-5 giorni prima del volo. Il costo complessivo è di circa 30 USD e l'approvazione viene stampata dal viaggiatore ed esibita in aeroporto alla partenza e all'arrivo. Avrai bisogno del passaporto con almeno 6 mesi di validità residua.",
    aEn: "To enter Kenya, visitors must apply for an Electronic Travel Authorization (eTA) prior to boarding. Lodge your application online via the official government portal (etakenya.go.ke) at least 3-5 days ahead of departure. It costs approximately 30 USD, remains valid for single entries, and requires a passport with at least six months of validity."
  }
];
