import Image from "next/image";

import FloatingCTA from "./components/FloatingCTA";
import WorkIndex from "./components/WorkIndex";
import { CAL_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, RESUME_PATH } from "./site";
import { sections } from "./work";

const experience = [
  { company: "Viralinn", role: "Founder & Product Engineer", dates: "2025 — Present" },
  { company: "Surplus", role: "Founder & Product Engineer", dates: "2026 — Present" },
  { company: "ADM8", role: "Lead Product Engineer", dates: "Sep 2026 — Present" },
  { company: "Capital Collab", role: "Product Engineer & Business Development", dates: "Dec 2025 — Present" },
  { company: "Found[ERS]", role: "Founder & Executive Director", dates: "2025 — Present" },
  { company: "GaaS Studios", role: "Owner & Lead Developer", dates: "2024 — Present" },
  { company: "PROVN Sport", role: "Web Developer (Contract)", dates: "2026" },
];

const highlights = [
  { value: "15+", label: "Brands delivered for", source: "Viralinn · AI marketing assets" },
  { value: "35%+", label: "Lower campaign CPC", source: "Viralinn · UK campaign vs. typical campaigns" },
  { value: "$35K+", label: "Automation revenue", source: "Capital Collab · Revenue generated" },
  { value: "92%", label: "Lower platform costs", source: "Capital Collab · $1,200 → $100/month" },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="hero-topline">
          <div className="header-id">
            <span className="header-photo">
              <Image
                src="/images/headshot.webp"
                alt="Jayden Quaynor"
                width={144}
                height={144}
                priority
              />
            </span>
            <div>
              <span className="header-name">Jayden Quaynor</span>
              <span className="header-wordmark">Product engineer · {LOCATION}</span>
            </div>
          </div>
          <nav aria-label="Quick links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={RESUME_PATH} target="_blank" rel="noreferrer">Resume ↗</a>
          </nav>
        </div>

        <div className="hero-main">
          <h1>AI products.<br /><span>Built from the<br className="hero-break" /> ground up.</span></h1>
          <div className="hero-intro">
            <p className="availability">Available for product engineering roles</p>
            <p className="hero-description">
              I design and build native apps, AI platforms, and tools that make teams work better.
              Founder of Surplus and Viralinn. I’m 19, building from {LOCATION}.
            </p>
            <div className="header-actions">
              <a className="cta" href="#featured">
                Explore my work ↓
              </a>
              <a className="cta secondary" href={RESUME_PATH} target="_blank" rel="noreferrer">
                View resume ↗
              </a>
            </div>
            <div className="hero-contact">
              <a href={`mailto:${EMAIL}`}>Email me ↗</a>
              <a href={CAL_URL} target="_blank" rel="noreferrer">Book a call ↗</a>
            </div>
          </div>
        </div>
      </header>

      <WorkIndex sections={sections}>
        <section className="highlights" aria-label="Selected results across product and client work">
          <p className="highlights-label">Selected results · Product & client work</p>
          <dl className="highlights-grid">
            {highlights.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}<span className="metric-source">{metric.source}</span></dd>
              </div>
            ))}
          </dl>
        </section>
      </WorkIndex>

      <section className="work-section">
        <div className="section-head">
          <h2>Experience</h2>
          <p>
            Full history and education are on the{" "}
            <a href={RESUME_PATH} download>
              resume
            </a>
            .
          </p>
        </div>
        <ul className="experience">
          {experience.map((job) => (
            <li key={job.company}>
              <span>{job.company}</span>
              <span>{job.role}</span>
              <span>{job.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <a className="footer-cta" href={CAL_URL} target="_blank" rel="noreferrer">
          Book a call ↗
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={RESUME_PATH} download>Resume</a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>

      <FloatingCTA />
    </main>
  );
}
