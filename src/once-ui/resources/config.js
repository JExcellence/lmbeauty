const baseURL = "lmbeauty.de";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "custom", // sand | gray | slate
  brand: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
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

export { baseURL, style, meta, og, schema, social };
