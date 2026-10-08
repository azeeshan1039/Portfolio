export const profile = {
  name: "Ali Zeeshan",
  title: "Your title",
  headline:
    "One sentence about what you do. Replace this with your headline.",
  about: [
    "Two to four sentences about your background, the kind of work you do, and what you are looking for. Replace this paragraph with your own about text.",
    "A second short paragraph can cover how you work, a focus area, or something specific you want visitors to know. Delete it if you only need one paragraph.",
  ],
  projects: [
    {
      name: "Project name",
      summary:
        "One or two sentences on what the project is and the problem it solves. Replace this with the real description.",
      role: "Your role on the project.",
      tech: "Language, framework, tool.",
      liveUrl: "https://example.com",
      repoUrl: "https://example.com",
    },
    {
      name: "Another project",
      summary:
        "One or two sentences on what this project is. Add or remove project blocks to match your list.",
      role: "Your role on the project.",
      tech: "Language, framework, tool.",
      liveUrl: "https://example.com",
      repoUrl: "https://example.com",
    },
  ],
  skills: [
    {
      group: "Languages",
      items: "Language one, language two, language three",
    },
    {
      group: "Frameworks",
      items: "Framework one, framework two, framework three",
    },
    {
      group: "Tools",
      items: "Tool one, tool two, tool three",
    },
  ],
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
