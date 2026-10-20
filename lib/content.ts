export const profile = {
  name: "Ali Zeeshan",
  initials: "AZ",
  availability: "Available for select projects",
  headlineLead: "Turning ideas into",
  headlineEmphasis: "reliable software.",
  lede: "I help startups and businesses design, build, and launch modern web applications — from early-stage MVPs to production-ready platforms.",
  footerBlurb:
    "Full-stack software engineer building reliable digital products.",
  email: "hello@yourname.dev",
  linkedin: "https://linkedin.com",
  github: "https://github.com/azeeshan1039",
  year: 2026,
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const expertise = [
  ["Frontend", "React · Next.js · Vue.js · Nuxt"],
  ["Backend", "Node.js · Express.js · REST APIs"],
  ["Data & infrastructure", "PostgreSQL · MySQL · Docker · Vercel"],
] as const;

export const projects = [
  {
    number: "01",
    title: "SaaS Analytics Platform",
    description:
      "A clear, decision-ready analytics experience for a subscription software product.",
    contribution: "Product strategy, UX, full-stack development",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    visual: "finance",
    className: "project-featured",
  },
  {
    number: "02",
    title: "Workflow Management Tool",
    description:
      "A focused internal platform that brings projects, tasks, and team progress into one place.",
    contribution: "UX architecture, frontend, API design",
    stack: ["React", "Express", "PostgreSQL"],
    visual: "workflow",
    className: "",
  },
  {
    number: "03",
    title: "Commerce Experience",
    description:
      "A high-performance storefront designed to make product discovery feel effortless.",
    contribution: "Frontend development, integrations",
    stack: ["Nuxt", "Node.js", "Vercel"],
    visual: "commerce",
    className: "",
  },
  {
    number: "04",
    title: "Customer Support Workspace",
    description:
      "An operational workspace that helps service teams manage conversations with less friction.",
    contribution: "Full-stack development, system design",
    stack: ["Vue.js", "Node.js", "MySQL"],
    visual: "support",
    className: "project-wide",
  },
] as const;

export const services = [
  [
    "01",
    "MVP Development",
    "Turn a promising idea into a focused, launch-ready product. I help define the right scope, remove uncertainty, and build what matters first.",
  ],
  [
    "02",
    "Full-Stack Web Development",
    "Modern frontend experiences backed by secure, maintainable systems — built as one cohesive product, not disconnected parts.",
  ],
  [
    "03",
    "SaaS & Internal Tools",
    "Purpose-built dashboards, customer portals, and workflow tools that simplify operations and help your team work better.",
  ],
  [
    "04",
    "Existing Product Improvements",
    "Resolve technical friction, improve performance, and add new capabilities without putting the stability of your product at risk.",
  ],
] as const;

export const process = [
  [
    "01",
    "Understand",
    "We clarify the business goals, users, requirements, and constraints before making technical decisions.",
  ],
  [
    "02",
    "Plan",
    "I define the scope, technical approach, and delivery milestones so the work stays focused.",
  ],
  [
    "03",
    "Build",
    "I develop, test, and refine the product through regular updates and transparent communication.",
  ],
  [
    "04",
    "Launch & improve",
    "We deploy with care, validate the result, and identify the right next improvements.",
  ],
] as const;

export const about = {
  titleLead: "Thoughtful engineering,",
  titleEmphasis: "grounded in business.",
  lede: "I'm a full-stack software engineer who enjoys solving practical problems through thoughtful engineering.",
  paragraphs: [
    "I work across frontend and backend systems, with a focus on building applications that are maintainable, reliable, and ready for real-world use.",
    "I value clear communication, sound technical decisions, and understanding the business behind the software.",
  ],
} as const;
