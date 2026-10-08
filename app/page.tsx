import { nav, profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a
        href="#intro"
        className="absolute left-3 top-3 -translate-y-[150%] bg-white px-2 py-1 focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-2xl flex-wrap items-baseline justify-between gap-x-6 gap-y-3 px-5 pt-5">
        <a href="#intro" className="font-semibold no-underline">
          {profile.name}
        </a>
        <nav aria-label="Page">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-5 pt-8 pb-16">
        <section id="intro" aria-labelledby="intro-heading">
          <p>{profile.title}</p>
          <h1 id="intro-heading" className="mt-1 text-3xl leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2">{profile.headline}</p>
        </section>

        <section id="about" aria-labelledby="about-heading" className="mt-10">
          <h2 id="about-heading" className="text-xl">
            About
          </h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="mt-3">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mt-10"
        >
          <h2 id="projects-heading" className="text-xl">
            Projects
          </h2>
          <ul className="mt-3 space-y-5">
            {profile.projects.map((project) => (
              <li key={project.name}>
                <h3>{project.name}</h3>
                <p className="mt-1">{project.summary}</p>
                <p className="mt-1">Role: {project.role}</p>
                <p className="mt-1">Tech: {project.tech}</p>
                <p className="mt-1 flex flex-wrap gap-x-4">
                  <a href={project.liveUrl}>Live site</a>
                  <a href={project.repoUrl}>Repository</a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="mt-10">
          <h2 id="skills-heading" className="text-xl">
            Skills
          </h2>
          <ul className="mt-3 space-y-4">
            {profile.skills.map((skill) => (
              <li key={skill.group}>
                <h3>{skill.group}</h3>
                <p className="mt-1">{skill.items}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mt-10"
        >
          <h2 id="contact-heading" className="text-xl">
            Contact
          </h2>
          <p className="mt-3">Email and the profiles you want people to use.</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {profile.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
