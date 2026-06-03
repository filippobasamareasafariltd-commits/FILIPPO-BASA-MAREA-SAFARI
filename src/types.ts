export interface TourExcursion {
  id: string;
  titleIt: string;
  titleEn: string;
  descriptionIt: string;
  descriptionEn: string;
  durationIt: string;
  durationEn: string;
  category: "marina" | "cultura" | "natura";
  departureFrom?: "watamu" | "diani" | "nairobi";
  image: string;
  priceEstimateIt: string;
  priceEstimateEn: string;
  highlightsIt: string[];
  highlightsEn: string[];
  includesIt: string[];
  includesEn: string[];
}

export interface SafariPackage {
  id: string;
  titleIt: string;
  titleEn: string;
  taglineIt: string;
  taglineEn: string;
  descriptionIt: string;
  descriptionEn: string;
  durationIt: string;
  durationEn: string;
  parksIt: string[];
  parksEn: string[];
  departureFrom?: "watamu_mombasa_diani" | "nairobi";
  image: string;
  priceDetailsIt: string;
  priceDetailsEn: string;
  highlightsIt: string[];
  highlightsEn: string[];
  bestForIt: string;
  bestForEn: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  textIt: string;
  textEn: string;
  avatar: string;
}

export interface PlannerInput {
  name: string;
  language: "it" | "en";
  duration: number;
  departure: string;
  travelers: number;
  interests: string[];
  budget: "budget" | "standard" | "premium";
}
