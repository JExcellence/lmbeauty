const baseURL = "lmbeauty.de";

import {Geist, Inter, Lora, Montserrat, Playfair_Display, Roboto_Mono} from "next/font/google";

const primary = Playfair_Display({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
});

const secondary = Lora({
  variable: '--font-secondary',
  subsets: ['latin'],
  display: 'swap'
});

const tertiary = Lora({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
});

const style = {
  theme: "dark",
  neutral: "gray",
  brand: "pink",
  accent: "custom",
  solid: "color",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "90",
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "LM Beauty Oldenburg – Expertin für Wimpernverlängerung & Lash Lifting",
    description: "Entdecke professionelle Wimpernverlängerung & Lash Lifting bei LM Beauty in Oldenburg. Hochwertige Produkte, langanhaltende Ergebnisse & individuelle Beratung.",
    image: "/images/avatar_1.png",
    canonical: "https://lmbeauty.de",
    robots: "index,follow",
    alternates: [
      { href: "https://lmbeauty.de", hrefLang: "de" },
    ],
  },
};

// default schema data
const schema = {
  logo: "https://lmbeauty.de/images/avatar_1.png",
  type: "Organization",
  name: meta.home.name,
  description: meta.home.description,
  email: "info@lmbeauty.de",
};

const social = {
  instagram: "https://www.instagram.com/_l.m_beauty_/",
};

export { baseURL, style, meta, schema, social };
