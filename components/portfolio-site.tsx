"use client";

import { useEffect, type FormEvent } from "react";
import {
  about,
  expertise,
  nav,
  process,
  profile,
  projects,
  services,
} from "@/lib/content";

type IconProps = {
  className?: string;
};

function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CodeMark() {
  return (
    <svg className="code-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="34" height="34" rx="9" stroke="currentColor" />
      <path d="m14 12-6 6 6 6M22 12l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
}: {
  type: (typeof projects)[number]["visual"];
}) {
  if (type === "finance") {
    return (
      <div className="project-visual visual-finance">
        <div className="mock-window">
          <div className="mock-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-grid">
            <div className="mini-sidebar">
              <b>O</b>
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="dash-main">
              <div className="dash-header">
                <span>Overview</span>
                <small>Last 30 days</small>
              </div>
              <div className="metric-row">
                <div>
                  <small>Total revenue</small>
                  <b>$84,920</b>
                  <em>+12.4%</em>
                </div>
                <div>
                  <small>Subscriptions</small>
                  <b>2,840</b>
                  <em>+8.1%</em>
                </div>
                <div>
                  <small>Churn</small>
                  <b>1.8%</b>
                  <em className="neutral">−0.3%</em>
                </div>
              </div>
              <div className="chart-panel">
                <div className="chart-label">
                  <small>Revenue growth</small>
                  <b>$24,500</b>
                </div>
                <svg viewBox="0 0 500 145" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#6c8cff" stopOpacity=".34" />
                      <stop offset="1" stopColor="#6c8cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 125 C45 118 55 92 100 101 S165 72 205 82 S270 45 310 61 S380 30 420 39 S470 10 500 19 V145 H0Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 125 C45 118 55 92 100 101 S165 72 205 82 S270 45 310 61 S380 30 420 39 S470 10 500 19"
                    fill="none"
                    stroke="#7794ff"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "workflow") {
    return (
      <div className="project-visual visual-workflow">
        <div className="kanban-head">
          <span>Product roadmap</span>
          <b>+ Add task</b>
        </div>
        <div className="kanban">
          {(
            [
              ["BACKLOG", "Research user needs", "Map onboarding flow"],
              ["IN PROGRESS", "Billing integration", "Account settings"],
              ["REVIEW", "Usage dashboard", "Email notifications"],
            ] as const
          ).map(([title, ...cards]) => (
            <div className="kanban-column" key={title}>
              <small>
                {title} <i>{cards.length}</i>
              </small>
              {cards.map((card, index) => (
                <div className="task-card" key={card}>
                  <span className={index ? "tag-violet" : "tag-blue"}>
                    {index ? "Design" : "Product"}
                  </span>
                  <b>{card}</b>
                  <div>
                    <i />
                    <small>{index ? "FRI" : "WED"}</small>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "commerce") {
    return (
      <div className="project-visual visual-commerce">
        <div className="shop-nav">
          <b>MONO</b>
          <span>New arrivals&nbsp;&nbsp; Objects&nbsp;&nbsp; Journal</span>
          <i>Bag (0)</i>
        </div>
        <div className="shop-content">
          <div className="product-copy">
            <small>DESK SERIES / 01</small>
            <h3>Objects for focused work.</h3>
            <p>Quiet, considered tools designed for the everyday workspace.</p>
            <b>
              Explore the collection <ArrowUpRight />
            </b>
          </div>
          <div className="product-stage">
            <div className="product-object">
              <span />
              <i />
            </div>
            <small>01 — Arc lamp</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-support">
      <div className="support-sidebar">
        <b>North</b>
        <span>
          Inbox <i>8</i>
        </span>
        <span>Assigned</span>
        <span>Resolved</span>
        <small>WORKSPACES</small>
        <span>Product</span>
        <span>Billing</span>
      </div>
      <div className="support-list">
        <div className="support-title">
          <b>Customer inbox</b>
          <span>Filter</span>
        </div>
        {[
          "Unable to update billing details",
          "Question about team access",
          "Import from previous workspace",
          "Invoice request",
        ].map((item, index) => (
          <div className="message" key={item}>
            <i>{["MK", "AL", "SR", "JM"][index]}</i>
            <div>
              <b>{item}</b>
              <span>
                {index === 0
                  ? "Thanks for your help with our account…"
                  : "Hi, I have a quick question about…"}
              </span>
            </div>
            <small>{index + 1}h</small>
          </div>
        ))}
      </div>
      <div className="support-detail">
        <small>CONVERSATION</small>
        <b>Unable to update billing details</b>
        <div className="chat-bubble">
          Hi there, I am trying to update our company card but keep seeing an error.
        </div>
        <div className="reply-box">
          Write a reply…<span>Send</span>
        </div>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
      <CodeMark />
      <span>{profile.name}</span>
    </a>
  );
}

export function PortfolioSite() {
  useEffect(() => {
    const revealGroups = [
      ".section-intro",
      ".expertise-band > div",
      ".project-card",
      ".service-row",
      ".process-step",
      ".about-portrait",
      ".about-copy",
      ".contact-copy",
      ".contact-form",
      ".footer-brand",
      ".footer-links",
    ];
    const elements = document.querySelectorAll<HTMLElement>(revealGroups.join(","));

    document.documentElement.classList.add("motion-ready");
    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <header className="nav-wrap">
        <Brand />
        <nav aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-small button-outline" href="#contact">
          Let&apos;s talk <ArrowUpRight />
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="availability">
              <span /> {profile.availability}
            </div>
            <h1>
              {profile.headlineLead} <em>{profile.headlineEmphasis}</em>
            </h1>
            <p className="hero-lede">{profile.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Discuss your project <ArrowUpRight />
              </a>
              <a className="text-link" href="#work">
                Explore my work <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A visual representation of software engineering">
            <div className="editor-window">
              <div className="editor-top">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>project / dashboard.tsx</span>
                <b>⌘ K</b>
              </div>
              <div className="editor-body">
                <div className="line-numbers">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index}>
                      {String(index + 1).padStart(2, "0")}
                      <br />
                    </span>
                  ))}
                </div>
                <pre>
                  <span className="c-purple">export function</span>{" "}
                  <span className="c-blue">buildProduct</span>() {"{"}
                  <br />
                  {"  "}
                  <span className="c-purple">const</span> product = {"{"}
                  <br />
                  {"    "}strategy: <span className="c-green">&apos;clear&apos;</span>,
                  <br />
                  {"    "}experience: <span className="c-green">&apos;simple&apos;</span>,
                  <br />
                  {"    "}engineering: <span className="c-green">&apos;reliable&apos;</span>,
                  <br />
                  {"  "}
                  {"}"}
                  <br />
                  <br />
                  {"  "}
                  <span className="c-purple">return</span> launch(product)
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="c-muted">{"// Built for real-world use."}</span>
                </pre>
              </div>
            </div>
            <div className="system-card">
              <div className="system-head">
                <span>System status</span>
                <i>Live</i>
              </div>
              <div className="system-metric">
                <b>99.99%</b>
                <span>Uptime</span>
              </div>
              <div className="bars">
                {Array.from({ length: 12 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
            </div>
            <div className="deploy-pill">
              <span>✓</span>
              <div>
                <b>Deployment ready</b>
                <small>All checks passed</small>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise-band" aria-label="Technical expertise">
          <div className="expertise-label">
            <span>02</span>
            <b>
              Technical
              <br />
              expertise
            </b>
          </div>
          {expertise.map(([title, tech]) => (
            <div className="expertise-item" key={title}>
              <small>{title}</small>
              <p>{tech}</p>
            </div>
          ))}
        </section>

        <section className="section work-section" id="work">
          <SectionIntro
            eyebrow="Selected work"
            title="Products built with purpose."
            copy="A selection of digital products designed around real user needs and built for long-term reliability."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <ProjectVisual type={project.visual} />
                <div className="project-meta">
                  <div className="project-title-row">
                    <span>{project.number}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <dl>
                    <div>
                      <dt>Contribution</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                  </dl>
                  <div className="project-footer">
                    <div className="tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href="#contact" aria-label={`View case study for ${project.title}`}>
                      View case study <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <SectionIntro
            eyebrow="Services"
            title="From first idea to reliable product."
            copy="Focused technical partnership for teams that value clarity, quality, and forward momentum."
          />
          <div className="services-list">
            {services.map(([number, title, body]) => (
              <article className="service-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section process-header">
            <SectionIntro
              eyebrow="How I work"
              title="A clear path from problem to product."
              copy="You will always know what is being built, why it matters, and what comes next."
            />
          </div>
          <div className="process-grid section">
            {process.map(([number, title, body]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <div className="process-dot" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-portrait" aria-label={`Photo placeholder for ${profile.name}`}>
            <div className="portrait-grid" />
            <div className="portrait-monogram">{profile.initials}</div>
            <span>Photo / portrait</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About me</p>
            <h2>
              {about.titleLead}
              <br />
              <em>{about.titleEmphasis}</em>
            </h2>
            <p className="about-lede">{about.lede}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="text-link" href="#contact">
              More about how I can help <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2>
                Have a project
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                Tell me what you&apos;re building, what problem you&apos;re trying to solve, or
                where you need technical help. Let&apos;s explore how I can help.
              </p>
              <div className="contact-details">
                <div>
                  <small>Email</small>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                  <small>Elsewhere</small>
                  <p>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn <ArrowUpRight />
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      GitHub <ArrowUpRight />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@company.com" />
              </label>
              <label>
                Project details
                <textarea
                  name="details"
                  rows={5}
                  placeholder="A little about your project, goals, and timeline..."
                />
              </label>
              <button className="button button-primary" type="submit">
                Start a conversation <ArrowUpRight />
              </button>
              <small>Usually replies within 1–2 business days.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer-brand">
          <Brand />
          <p>{profile.footerBlurb}</p>
        </div>
        <div className="footer-links">
          <div>
            <small>Navigate</small>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <small>Connect</small>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {profile.year} {profile.name}
          </span>
          <span>Designed & built with care.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
