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
  { value: "15+", label: "Brands delivered for" },
  { value: "35%+", label: "Lower campaign CPC" },
  { value: "$35K+", label: "Automation revenue" },
  { value: "92%", label: "Lower platform costs" },
];

export default function Home() {
  return (
    <main>
      <header>
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
            <span className="header-wordmark" aria-hidden="true">JQ<span> / </span>PRODUCT ENGINEER</span>
            <h1>Jayden Quaynor</h1>
          </div>
        </div>
        <p>
          Product engineer in {LOCATION}. I build AI products, native apps, and tools that make teams work better.
        </p>
        <p>
          I am 19. My goal is to master the art of product and work with the best teams to make products that
          impact the world.
        </p>
        <div className="header-actions">
          <a className="cta" href={CAL_URL} target="_blank" rel="noreferrer">
            Book a call ↗
          </a>
          <a className="cta secondary" href={`mailto:${EMAIL}`}>
            Email me
          </a>
        </div>
        <p className="header-hint">
          Available for product engineering roles · Open any project for the decisions behind it
        </p>
      </header>

      <section className="highlights" aria-label="Selected results across product and client work">
        <p className="highlights-label">Selected results · Product & client work</p>
        <dl className="highlights-grid">
          {highlights.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <WorkIndex sections={sections} />

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
