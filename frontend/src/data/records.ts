import type { VinylRecord } from "../types";

export const records: VinylRecord[] = [
  {
    id: "1",
    title: "Discovery",
    artist: "Daft Punk",
    price: 18000,
    compareAtPrice: 22000,
    genre: "Electrónica",
    catalogNumber: "SRC-001",
    cover: "/images/discovery.jpg",
    tracklist: [
      "One More Time",
      "Aerodynamic", 
      "Digital Love", 
      "Harder, Better, Faster, Stronger", 
      "Crescendolls", 
      "Nightvision",
      "Superheroes",
      "High Life",
      "Something About Us",
      "Voyager",
      "Veridis Quo",
      "Short Circuit",
      "Face to Face",
      "Too Long"
    ]
  },
  {
    id: "2",
    title: "La voz de los '80",
    artist: "Los prisioneros",
    price: 20000,
    genre: "Rock",
    catalogNumber: "SRC-002",
    cover: "/images/La_voz_de_los_80.jpg",
    tracklist: [
      "La voz de los '80",
      "Brigada de negro",
      "Sexo",
      "Who Killed Marilyn?",
      "Paramar",
      "No necesitamos banderas",
      "Mentalidad televisiva",
      "Eve-Evelyn",
      "Nunca quedas bien con nadie",
      "¿Quién tiene la culpa?"
    ]

  },
  {
    id: "3",
    title: "Giant Steps",
    artist: "John Coltrane",
    price: 24000,
    compareAtPrice: 28000,
    genre: "Jazz",
    catalogNumber: "SRC-003",
    cover: "/images/giant steps.jpg",
    tracklist: [
      "Giant Steps",
      "Cousin Mary",
      "Countdown",
      "Spiral",
      "Syeeda's Song Flute",
      "Naima",
      "Mr. P.C."
    ]
  },
  {
    id: "4",
    title: "Syro",
    artist: "Aphex Twin",
    price: 19500,
    genre: "Electrónica",
    catalogNumber: "SRC-004",
    cover: "/images/syro.jpg",
    tracklist: [
      "minipops 67 [120.2][source field mix]",
      "XMAS_EVET10 [120][thanaton3 mix]",
      "produk 29 [101]",
      "4bit 9d api+e+6 [126.6]",
      "180db_ [130]",
      "CIRCLONT6A [141.98][syrobonkus mix]",
      "CIRCLONT14 [152.97][shymmer mix]",
      "s950tx16wasr10 [163.97][earth portal mix]",
      "PAPAT4 [155][ping mix]",
      "aisatsana [102]"
    ]
  },
  {
    id: "5",
    title: "Fome",
    artist: "Los tres",
    price: 21000,
    genre: "Rock",
    catalogNumber: "SRC-005",
    cover: "/images/fome.jpg",
    tracklist: [
      "Claus",
      "Bolsa de mareo",
      "Tate quieto",
      "Olor a gas",
      "Fealdad",
      "Jarabe para la tos",
      "La torre de Babel",
      "Pancho",
      "El juego",
      "Silencio",
      "La respuesta",
      "Lágrimas negras",
      "De hacerse se va a hacer",
      "Antes",
      "Largo"
    ]
  },
  {
    id: "6",
    title: "Brasilian skies",
    artist: "Masayoshi Takanaka",
    price: 23000,
    compareAtPrice: 26000,
    genre: "Jazz",
    catalogNumber: "SRC-006",
    cover: "/images/brasilian-skies.jpg",
    tracklist: [
      "Beleza Pula",
      "Brasilian Skies",
      "Nights",
      "I Remember Clifford",
      "Star Wars Samba",
      "Marie",
      "When You Wish Upon A Star"
    ]
  },
  {
    id: "7",
    title: "Nuxx",
    artist: "Underworld",
    price: 17500,
    genre: "Electrónica",
    catalogNumber: "SRC-007",
    cover: "/images/Nuxx.jpg",
    tracklist: [
      "Dark & Long",
      "Mmm... Skyscraper I Love You",
      "Surfboy",
      "Spoonman",
      "Tongue",
      "Dirty Epic",
      "Cowgirl",
      "River of Bass",
      "M.E."
    ]
  },
  {
    id: "8",
    title: "Artaud",
    artist: "Pescado rabioso",
    price: 22500,
    genre: "Rock",
    catalogNumber: "SRC-008",
    cover: "/images/artaud.jpg",
    tracklist: [
      "Todas las hojas son del viento",
      "Cementerio Club",
      "Por",
      "Superchería",
      "La sed verdadera",
      "Cantata de puentes amarillos",
      "Bajan",
      "A Starosta el idiota",
      "Las habladurías del mundo"
    ]
  },
];

export function formatCLP(price: number): string {
  return `$${price.toLocaleString("es-CL")}`;
}
