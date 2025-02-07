const person = {
  firstName: "Lisa Marie",
  lastName: "Pinske",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Kosmetikerin",
  avatar: "/images/avatar.jpg",
  location: "Europe/Berlin",
  languages: ["", ""],
};

const newsletter = {
  display: true,
  title: <>Abonniere meinen Newsletter</>,
  description: (
      <>
        Ich teile regelmäßig Tipps zur Wimpernpflege, Beauty-Trends und Erfahrungsberichte.
        Ebenfalls kannst du hier die ein oder anderen Aktionen mitbekommen.
      </>
  ),
};

const social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_l.m_beauty_/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/+4915259675346?text=Hallo%20Lisa%2C%20ich%20bin%20%C3%BCber%20deine%20Webseite%20auf%20dich%20gesto%C3%9Fen!%F0%9F%A5%B0",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:justin.eiletz@outlook.com",
  },
];

const home = {
  label: "Home",
  title: "LM Beauty - Wimpernstylings in Oldenburg",
  description: "Professionelle Wimpernverlängerungen in Oldenburg",
  headline: <>Willkommen bei LM Beauty</>,
  subline: (
      <>
        Deine Beauty-Expertin in Oldenburg.
        Lasse Dich uns gemeinsam Deine natürliche Schönheit zum Vorschein bringen.
      </>
  ),
};

const about = {
  label: "Über uns",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Über mich",
    description: (
        <>
          Als zertifizierte Kosmetikerin mit langjähriger Erfahrung in renommierten Salons bin ich
          spezialisiert auf Wimpernstylings. Mein besonderes Augenmerk liegt auf maßgeschneiderten
          Lösungen, die perfekt zu Ihren Wünschen und Ihrem Gesicht passen. Bei mir geht es nicht nur
          um die äußere Schönheit, sondern auch um das Wohlbefinden meiner Kundinnen.
        </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Arbeiten",
  title: "Meine Fähigkeiten",
  description: `Meine Arbeiten aus meinem Studio`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/einzel1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/einzel2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/einzel3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/hybrid1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hybrid2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hybrid3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/lm.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/nails2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/nails3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/volumen1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/volumen2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/volumen3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/volumen4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/volumen5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
