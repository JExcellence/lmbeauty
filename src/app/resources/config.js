const baseURL = "lmbeauty.de";

const routes = {
  "/": true,
  "/about": true,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

/*
* OPTION 1 LIGHT MODE
*
* data-theme="light"
* data-brand="magenta"
* data-accent="violet"
* data-neutral="gray"
* data-border="playful"
* data-solid="inverse"
* data-solid-style="flat"
* data-surface="filled"
* data-transition="all"
*
* OPTION 2 LIGHT MODE
*
* data-theme="light"
* data-brand="blue"
* data-accent="cyan"
* data-neutral="gray"
* data-border="playful"
* data-solid="inverse"
* data-solid-style="flat"
* data-surface="translucent"
* data-transition="all"
*
*/

const style = {
  theme: "light",
  neutral: "#4A3F3D",
  brand: "#F4AFA3",
  accent: "#D8B4A0",
  solid: "inverse",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 200,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 1,
    color: "brand-on-background-weak",
    opacity: 30,
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

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
