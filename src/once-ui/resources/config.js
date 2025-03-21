const baseURL = "lmbeauty.de";

const style = {
  theme: "dark",
  neutral: "gray",
  brand: "pink",
  accent: "pink",
  solid: "color",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "90",
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

const meta = {
  title: "LMBeauty | Professionelle Wimpern in Oldenburg",
  description: "Entdecke die Kunst der Schönheit mit LM Beauty in Oldenburg. Als professionelle Make-up und Wimpernstylistin verwandle ich Deine Vorstellungskraft in atemberaubende Realität. Vereinbare noch heute einen Termin und lasse Dich von meinem Fachwissen und meiner Leidenschaft verzaubern.",
};

const og = {
  title: "LMBeauty | Professionelle Wimpern in Oldenburg",
  description: "Entdecke die Kunst der Schönheit mit LM Beauty in Oldenburg. Als professionelle Make-up und Wimpernstylistin verwandle ich Deine Vorstellungskraft in atemberaubende Realität. Vereinbare noch heute einen Termin und lasse Dich von meinem Fachwissen und meiner Leidenschaft verzaubern.",
  type: "website",
  image: "/images/avatar_1.png"
};

const schema = {
  logo: "/images/avatar_1.png",
  type: "website",
  name: "LM Beauty",
  description: "Entdecke die Kunst der Schönheit mit LM-Beauty in Oldenburg. Als professionelle Make-up und Wimpernstylistin verwandle ich Deine Vorstellungskraft in atemberaubende Realität. Vereinbare noch heute einen Termin und lasse Dich von meinem Fachwissen und meiner Leidenschaft verzaubern.",
  email: "info@lmbeauty.de",
};

const social = {
  instagram: "https://www.instagram.com/_l.m_beauty_/",
};

export { baseURL, style, meta, og, schema, social, effects };
