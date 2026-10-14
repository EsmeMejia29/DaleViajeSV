// src/lib/tours.ts

export interface TourDate {
  id: string;
  date: string;
  availableSlots: number;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  difficulty: "Fácil" | "Moderado" | "Difícil" | "Extremo";
  departureLocation: string;
  mainImage: string;
  gallery: string[];
  dates: TourDate[];
}

export const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    slug: "volcan-santa-ana",
    title: "Caminata al Cráter del Volcán de Santa Ana (Ilamatepec)",
    description:
      "Acompáñanos a una de las caminatas más icónicas de El Salvador. Disfruta de vistas panorámicas al Lago de Coatepeque y una laguna turquesa en el cráter.",
    price: 35.0,
    duration: "1 día (~7 horas)",
    difficulty: "Moderado",
    departureLocation: "Gasolinera Puma Los Héroes, San Salvador",
    mainImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
    ],
    dates: [
      { id: "d1", date: "24 Oct 2026", availableSlots: 12 },
      { id: "d2", date: "31 Oct 2026", availableSlots: 6 },
    ],
  },
  {
    id: "2",
    slug: "cascadas-de-tamanique",
    title: "Aventura y Pozas en Cascadas de Tamanique + El Tunco",
    description:
      "Senderismo entre la naturaleza costera, saltos a pozas naturales de agua fresca y un atardecer relajante en la playa El Tunco.",
    price: 30.0,
    duration: "1 día (~8 horas)",
    difficulty: "Fácil",
    departureLocation: "Centro Comercial Multiplaza, Antiguo Cuscatlán",
    mainImage: "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1000",
    gallery: [],
    dates: [
      { id: "d3", date: "25 Oct 2026", availableSlots: 15 },
      { id: "d4", date: "01 Nov 2026", availableSlots: 8 },
    ],
  },
];

export async function getAllTours(): Promise<Tour[]> {
  return MOCK_TOURS;
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  return MOCK_TOURS.find((tour) => tour.slug === slug);
}