const baseURL = "lmbeauty.de";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "pink", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "pink", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "90", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 100,
  },
  dots: {
    display: false,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

// default metadata
const meta = {
  title: "LMBeauty | Professionelles Make-up sowie Wimpern in Oldenburg",
  description: "Entdecke die Kunst der Schönheit mit LM-Beauty in Oldenburg. Als professionelle Make-up und Wimpernstylistin verwandle ich Deine Vorstellungskraft in atemberaubende Realität. Vereinbare noch heute einen Termin und lasse Dich von meinem Fachwissen und meiner Leidenschaft verzaubern.",
};

// default open graph data
const og = {
  title: "Once UI for Next.js",
  description: "We let designers code and developers design.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "/images/lm.jpg",
  type: "Organization",
  name: "LM Beauty",
  description: "Entdecke die Kunst der Schönheit mit LM-Beauty in Oldenburg. Als professionelle Make-up und Wimpernstylistin verwandle ich Deine Vorstellungskraft in atemberaubende Realität. Vereinbare noch heute einen Termin und lasse Dich von meinem Fachwissen und meiner Leidenschaft verzaubern.",
  email: "info@lmbeauty.de",
};

const social = {
  instagram: "https://www.instagram.com/_l.m_beauty_/",
};

export { baseURL, style, meta, og, schema, social, effects };
