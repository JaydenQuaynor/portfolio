"use client";

import Image from "next/image";
import { useState } from "react";

import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, RESUME_PATH } from "../site";

type CaseStudy = {
  name: string;
  type: string;
  headline: string;
  summary: string;
  context: string;
  decision: string;
  shipped: string;
  ownership: string;
  stack: string[];
  image: string;
  url: string;
  imagePosition?: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Viralinn",
    type: "AI production platform",
    headline: "One workspace from creative brief to distributed campaign.",
    summary:
      "Viralinn gives agencies a shared operating layer for planning, generating, reviewing, approving, and distributing AI-native content across multiple clients.",
    context:
      "Creative production was fragmented across briefs, generation tools, review threads, and publishing workflows.",
    decision:
      "Design the product around one continuous production canvas instead of another collection of disconnected AI utilities.",
    shipped:
      "A working multi-client product with an infinite studio canvas, AI Composer, approvals, distribution, and performance-informed iteration. Multiple third-party AI APIs (image, image-to-video, voice, music) orchestrated into one pipeline, plus an MCP server exposing generation tools to AI agents.",
    ownership: "Founder and full-stack developer. Built end to end, marketing site through authenticated product.",
    stack: ["Next.js", "React", "TypeScript", "Convex", "MCP", "Stripe", "R2"],
    image: "/images/work/viralinn-hero.webp",
    url: "https://viralin.vercel.app",
  },
  {
    name: "Capital Collab",
    type: "Business capital platform",
    headline: "Fifteen years of Salesforce operations, moved onto a modern system.",
    summary:
      "An internal web application to migrate the company off fifteen years of Salesforce, plus the supporting public sites and automations around it.",
    context:
      "A long-running Salesforce operation had accumulated separate processes for intake, referrals, lender matching, offers, signatures, and reporting.",
    decision:
      "Map every user, handoff, and decision in the existing operation before rebuilding it as one connected product.",
    shipped:
      "Contributed to the internal platform covering applicant intake, affiliate pipelines, lender routing, offers, and administration, and built the supporting front-end sites and automations.",
    ownership:
      "Business Development Associate, Private Credit. Contributed to the internal application build and owned supporting front-end sites and automations.",
    stack: ["Next.js", "Supabase", "Salesforce", "TypeScript", "Resend"],
    image: "/images/work/capital-collab-hero.webp",
    url: "https://www.capitalcollab.com",
  },
  {
    name: "Found[ERS]",
    type: "Community and events platform",
    headline: "A community product that connects interest to attendance.",
    summary:
      "Found[ERS] is a national student entrepreneurship organization. I founded it, built its platform, grew it to 35+ active student founders, and produced the Founder & Pitch Summit.",
    context:
      "Applications, event discovery, ticketing, attendance, and administration needed to feel like one experience rather than separate tools.",
    decision:
      "Build the member journey and the operator workflow together so every public action had a clear internal continuation.",
    shipped:
      "Member applications, event discovery, RSVP and ticketing, QR check-in, communications, and administration in one platform.",
    ownership: "Founder and Executive Director. Full-stack engineering, product UI, and launch.",
    stack: ["Next.js", "Convex", "Stripe", "Resend", "PostHog"],
    image: "/images/work/founders-hero.webp",
    url: "https://founders-gules.vercel.app",
  },
];

type SmallProject = {
  name: string;
  type: string;
  summary: string;
  url?: string;
  image?: string;
  initials?: string;
  tone?: "cobalt" | "chartreuse" | "ink";
};

const additionalWork: SmallProject[] = [
  {
    name: "BPT Overhead",
    type: "Commerce and internal tooling",
    summary: "A conversion-focused service site paired with lead operations and a production-ready CAD studio.",
    image: "/images/work/bpt-overhead-hero.webp",
    url: "https://bridgeport-overhead-door.vercel.app",
  },
  {
    name: "PROVN Sports",
    type: "Sports representation platform",
    summary:
      "A full rebuild for a sports-performance brand: new homepage, dynamic contact form, athlete roster, and a clearer information architecture.",
    image: "/images/work/proven-sports-hero.webp",
    url: "https://provn-one.vercel.app",
  },
  {
    name: "OpalKadia",
    type: "Holding company website",
    summary: "A quiet, credible company presence designed around long-term ownership and clear portfolio communication.",
    image: "/images/work/opal-kadia-hero.webp",
    url: "https://www.opalkadia.com",
  },
  {
    name: "OTR Health Club",
    type: "Health and performance website",
    summary: "A focused digital experience for a performance-led health club, built to move visitors toward membership.",
    image: "/images/sitepics/OtrSP.webp",
    url: "https://otrhealthclub.com",
  },
  {
    name: "GaaS Studios",
    type: "Churn-prevention SaaS",
    summary:
      "A tool that flags at-risk customers before they cancel, built on a custom event-tracking system and risk-scoring logic.",
    initials: "GA",
    tone: "chartreuse",
  },
  {
    name: "Truce AI",
    type: "AI mobile app",
    summary:
      "An app that reframes emotionally charged messages between partners to de-escalate conflict. Brand, product spec, and public waitlist.",
    initials: "TR",
    tone: "cobalt",
  },
];

const experience = [
  {
    company: "Viralinn",
    role: "Founder & Full-Stack Developer",
    dates: "2025 — Present",
    points: [
      "Designed and built an AI-powered UGC platform full-stack in React, Next.js, TypeScript, and Convex, from the marketing site through the authenticated product.",
      "Integrated image, image-to-video, voice, and music generation APIs into one orchestrated production pipeline, and built an MCP server exposing generation tools to AI agents.",
    ],
  },
  {
    company: "GaaS Studios",
    role: "Owner & Lead Developer",
    dates: "2024 — Present",
    points: [
      "Built and shipped client websites and landing pages in React and Next.js, along with the backend automation behind them.",
      "Designed and deployed automated cold-outbound email infrastructure integrating multiple third-party APIs to book qualified sales calls for SaaS and D2C clients.",
    ],
  },
  {
    company: "Capital Collab",
    role: "Business Development Associate, Private Credit",
    dates: "Dec 2025 — Present",
    points: [
      "Contributed to development of an internal web application migrating the company off fifteen years of Salesforce, and built supporting front-end sites and automations.",
      "Advise small-business owners on financing options and coordinate with underwriting to reach term sheets.",
    ],
  },
  {
    company: "Found[ERS]",
    role: "Founder & Executive Director",
    dates: "2025 — Present",
    points: [
      "Founded a national student entrepreneurship organization, built its website, and grew it to 35+ active student founders.",
      "Produced the Founder & Pitch Summit (May 2026).",
    ],
  },
  {
    company: "PROVN Sport",
    role: "Web Developer (Contract)",
    dates: "2026",
    points: [
      "Led a full website rebuild for a sports-performance brand, shipping a new homepage, dynamic contact form, and athlete roster.",
      "Rebuilt the site's information architecture to clarify the offer and the next step.",
    ],
  },
];

const skills = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "HTML", "CSS", "MATLAB"] },
  { label: "Frontend", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  {
    label: "Backend & data",
    items: ["Node.js", "Convex", "REST APIs", "Third-party & webhook integrations", "Authentication"],
  },
  {
    label: "AI & automation",
    items: ["LLM integration", "Agentic AI", "Prompt engineering", "Workflow automation", "MCP servers", "AI media pipelines"],
  },
  { label: "Agentic coding", items: ["Claude Code", "AI-assisted development", "Spec-to-ship workflows"] },
  { label: "Tools & platforms", items: ["Git", "GitHub", "Vercel", "Figma", "Notion", "Slack"] },
];

const stats = [
  { value: "7", label: "Products shipped and live" },
  { value: "35+", label: "Student founders in Found[ERS]" },
  { value: "15 yrs", label: "Of Salesforce operations migrated" },
  { value: "2029", label: "BS Computer Science, UConn" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={diagonal ? "icon diagonal" : "icon"}>
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <Arrow diagonal />
    </a>
  );
}

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#content">Skip to work</a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Jayden Quaynor, home" onClick={closeMenu}>
            Jayden <span>Quaynor</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
          </nav>

          <a className="header-contact" href={`mailto:${EMAIL}`}>
            Email Jayden
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <i aria-hidden="true" />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href={RESUME_PATH} onClick={closeMenu}>Resume</a>
          <a href={`mailto:${EMAIL}`} onClick={closeMenu}>Email Jayden</a>
        </nav>
      </header>

      <main id="content">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="kicker">Jayden Quaynor · Product engineer · {LOCATION}</p>
            <h1>I turn ambitious ideas into polished, scalable software.</h1>
            <p className="hero-intro">
              Full-stack developer and Computer Science undergraduate. I help businesses and brands move from the
              first hard product decision to a working system—shaping the experience, building the interface, and
              connecting what has to happen behind it.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                See what I&apos;ve built <Arrow />
              </a>
              <a className="button secondary" href={RESUME_PATH} download>
                Download resume
              </a>
            </div>
            <p className="availability"><span /> Available for product engineering roles</p>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait-image">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Jayden Quaynor"
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                priority
              />
              <span>Product · Interface · Engineering</span>
            </div>
            <figcaption>
              <div>
                <strong>Jayden Quaynor</strong>
                <span>{LOCATION}</span>
              </div>
              <p>Recent work spans AI production, business capital, community operations, commerce, and sports.</p>
            </figcaption>
          </figure>
        </section>

        <section className="stat-band" aria-label="Proof points">
          <div className="shell stat-band-inner">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="work-intro shell" id="work">
          <p className="kicker">Selected product systems</p>
          <div>
            <h2>Proof is in the decisions, not the adjectives.</h2>
            <p>
              These projects show the operating problem, the product decision, and the system that shipped.
              Each one crossed product, interface, and engineering boundaries.
            </p>
          </div>
        </section>

        <section className="case-studies shell" aria-label="Featured case studies">
          {caseStudies.map((project) => (
            <article className="case-study" id={`case-${project.name.toLowerCase().replace(/[^a-z]+/g, "-")}`} key={project.name}>
              <div className="case-visual">
                <div className="case-visual-topline">
                  <span>{project.name}</span>
                  <span>{project.type}</span>
                </div>
                <a className="case-image-link" href={project.url} target="_blank" rel="noreferrer">
                  <Image
                    src={project.image}
                    alt={`${project.name} product interface`}
                    fill
                    sizes="(max-width: 900px) 100vw, 54vw"
                    style={{ objectPosition: project.imagePosition ?? "top center" }}
                  />
                  <span className="image-link-label">Open live product</span>
                </a>
              </div>

              <div className="case-content">
                <p className="kicker">{project.type}</p>
                <h3>{project.headline}</h3>
                <p className="case-summary">{project.summary}</p>

                <dl className="decision-trail">
                  <div>
                    <dt>Operating problem</dt>
                    <dd>{project.context}</dd>
                  </div>
                  <div>
                    <dt>Product decision</dt>
                    <dd>{project.decision}</dd>
                  </div>
                  <div>
                    <dt>What shipped</dt>
                    <dd>{project.shipped}</dd>
                  </div>
                </dl>

                <div className="case-meta">
                  <div>
                    <span>Role</span>
                    <strong>{project.ownership}</strong>
                  </div>
                  <div>
                    <span>Stack</span>
                    <ul>
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>

                <ExternalLink href={project.url} className="text-link">Visit {project.name}</ExternalLink>
              </div>
            </article>
          ))}
        </section>

        <section className="additional-work shell">
          <div className="section-title-row">
            <div>
              <p className="kicker">Additional launches</p>
              <h2>Smaller scope. Same ownership.</h2>
            </div>
            <p>More shipped interfaces across service operations, sports, holding companies, health, and SaaS.</p>
          </div>

          <div className="project-grid">
            {additionalWork.map((project) => {
              const body = (
                <>
                  <div className={project.image ? "project-card-image" : `project-card-image is-tile tone-${project.tone ?? "ink"}`}>
                    {project.image ? (
                      <Image src={project.image} alt={`${project.name} website`} fill sizes="(max-width: 720px) 100vw, 50vw" />
                    ) : (
                      <span aria-hidden="true">{project.initials}</span>
                    )}
                  </div>
                  <div className="project-card-body">
                    <p className="kicker">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    {project.url ? (
                      <span>Open project <Arrow diagonal /></span>
                    ) : (
                      <span className="is-muted">In development</span>
                    )}
                  </div>
                </>
              );

              return project.url ? (
                <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="project-card">
                  {body}
                </a>
              ) : (
                <div key={project.name} className="project-card is-static">
                  {body}
                </div>
              );
            })}
          </div>
        </section>

        <section className="experience shell" id="experience">
          <div className="section-title-row">
            <div>
              <p className="kicker">Professional experience</p>
              <h2>Where the work happened.</h2>
            </div>
            <p>
              Full history, dates, and education are on the resume.{" "}
              <a className="text-link inline" href={RESUME_PATH} download>Download it <Arrow diagonal /></a>
            </p>
          </div>

          <ol className="experience-list">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="experience-head">
                  <h3>{job.company}</h3>
                  <p className="experience-dates">{job.dates}</p>
                </div>
                <p className="experience-role">{job.role}</p>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="skills-slab" id="skills">
          <div className="shell">
            <div className="section-title-row">
              <div>
                <p className="kicker">Technical skills</p>
                <h2>What I build with.</h2>
              </div>
              <p>Everything listed here is something I have shipped with, not something I have read about.</p>
            </div>

            <dl className="skills-grid">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="about shell" id="about">
          <div className="about-image">
            <Image src="/images/headshot.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 38vw" />
          </div>
          <div className="about-copy">
            <p className="kicker">About Jayden</p>
            <h2>I am most useful when the brief is still ambiguous and the product has to become real.</h2>
            <p>
              I work across full-stack development, frontend systems, product design, and AI-enabled workflows.
              My strength is keeping the product coherent while moving from messy business context to a clear interface and a working system.
            </p>
            <p>
              I care about the handoffs other people avoid: product to design, design to engineering, and the public experience to the operations behind it.
            </p>

            <div className="education">
              <p className="kicker">Education</p>
              <p className="education-school">University of Connecticut · Storrs, CT</p>
              <p className="education-degree">
                BS Computer Science, expected May 2029. Transferred from New York Institute of Technology (2024—2026).
              </p>
              <p className="education-coursework">
                Coursework: Object-Oriented Programming (Java), Calculus, Physics, MATLAB, Research Writing, Engineering Ethics.
              </p>
            </div>

            <div className="about-links">
              <ExternalLink href={LINKEDIN_URL} className="text-link">LinkedIn</ExternalLink>
              <ExternalLink href={GITHUB_URL} className="text-link">GitHub</ExternalLink>
              <a className="text-link" href={RESUME_PATH} download>Resume <Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="shell footer-inner">
          <div className="footer-lead">
            <p className="kicker">Available for the right product team</p>
            <h2>Have a complicated product problem?</h2>
            <a className="footer-email" href={`mailto:${EMAIL}`}>
              {EMAIL} <Arrow diagonal />
            </a>
          </div>

          <div className="footer-columns">
            <div>
              <p className="kicker">Work</p>
              <a href="#work">Case studies</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
            </div>
            <div>
              <p className="kicker">About</p>
              <a href="#about">Background</a>
              <a href={RESUME_PATH} download>Download resume</a>
            </div>
            <div>
              <p className="kicker">Elsewhere</p>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div>
              <p className="kicker">Contact</p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="footer-meta">
            <span>Jayden Quaynor · Product Engineer</span>
            <span>{LOCATION} · 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}
