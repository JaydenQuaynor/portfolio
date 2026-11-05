"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import type { Project, Section } from "../work";

/**
 * The work list. Every section uses the same row model — hover floats the
 * screenshot, click opens the detail panel — so moving between sections never
 * feels like the interaction stopped working. Only the columns differ.
 */
const brands = [
  { slug: "adm8", name: "ADM8", logo: "/images/logos/adm8-on-light.png", relationship: "Lead product engineer" },
  { slug: "lifesum", name: "Lifesum", logo: "/images/logos/lifesum.svg", relationship: "AI ad creative" },
  { slug: "capital-collab", name: "Capital Collab", logo: "/images/logos/capital-collab.png", relationship: "Product engineering" },
  { slug: "scrupp", name: "Scrupp", logo: "/images/logos/scrupp.png", relationship: "Content & outbound" },
];

const featuredSlugs = ["surplus", "viralinn"];

function ProductPreview({ slug, priority = false }: { slug: string; priority?: boolean }) {
  return (
    <span className={`featured-visual product-preview-${slug}`}>
      <Image className="featured-logo" src={`/images/logos/${slug}.svg`} alt={slug === "surplus" ? "Surplus" : "Viralinn"} width={160} height={45} />
      {slug === "surplus" ? (
        <span className="surplus-screens">
          <Image className="surplus-today" src="/images/work/surplus-today.webp" alt="Surplus daily nutrition dashboard with meal logging and macro targets" width={600} height={1305} sizes="(max-width: 48rem) 55vw, 20vw" priority={priority} />
          <Image className="surplus-coach" src="/images/work/surplus-coach.webp" alt="Surplus AI coach conversation" width={500} height={1087} sizes="(max-width: 48rem) 45vw, 17vw" />
        </span>
      ) : (
        <Image className="viralinn-screen" src="/images/work/viralinn-studio.webp" alt="Viralinn studio canvas connecting briefs, AI generations, and revisions" width={1114} height={703} sizes="(max-width: 48rem) 100vw, 50vw" priority={priority} />
      )}
    </span>
  );
}

export default function WorkIndex({ sections, children }: { sections: Section[]; children?: ReactNode }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState<Project | null>(null);
  const [drag, setDrag] = useState(0);
  const preview = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const rows = useRef(new Map<string, HTMLLIElement>());
  const dragStart = useRef<number | null>(null);

  const all = sections.flatMap((section) => section.projects);

  /* Touch has no cursor, so scroll position picks the focused row instead:
     whichever row is crossing the middle of the screen lights up and reveals
     its screenshot. Same one-row-at-a-time reading as the desktop hover.
     Runs everywhere — only the touch stylesheet gives `is-active` any meaning,
     so desktop pays one observer and renders nothing differently. */
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const slug = (entry.target as HTMLElement).dataset.slug;
          if (!slug) continue;
          if (entry.isIntersecting) seen.add(slug);
          else seen.delete(slug);
        }
        // Topmost row in the band wins, so scrolling advances one at a time.
        let next: string | null = null;
        let top = Infinity;
        for (const slug of seen) {
          const node = rows.current.get(slug);
          if (!node) continue;
          const y = node.getBoundingClientRect().top;
          if (y < top) {
            top = y;
            next = slug;
          }
        }
        setActive(next);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    rows.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  const track = (event: React.MouseEvent) => {
    const node = preview.current;
    if (!node) return;
    node.style.setProperty("--x", `${event.clientX}px`);
    node.style.setProperty("--y", `${event.clientY}px`);
  };

  const openPanel = (project: Project) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setHovered(null);
    setOpen(project);
  };

  const closePanel = useCallback(() => {
    setOpen(null);
    setDrag(0);
  }, []);

  /* Swipe the sheet down to dismiss — only from the top of its scroll, so the
     gesture never fights the panel's own scrolling. */
  const onTouchStart = (event: React.TouchEvent) => {
    dragStart.current = (panel.current?.scrollTop ?? 0) <= 0 ? event.touches[0].clientY : null;
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (dragStart.current === null) return;
    setDrag(Math.max(0, event.touches[0].clientY - dragStart.current));
  };

  const onTouchEnd = () => {
    dragStart.current = null;
    if (drag > 110) closePanel();
    else setDrag(0);
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
      if (event.key !== "Tab") return;
      const controls = panel.current?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const siblings = Array.from(document.querySelector("main")?.children ?? [])
      .filter((element): element is HTMLElement => element instanceof HTMLElement && !element.contains(panel.current));
    const priorInert = siblings.map((element) => element.inert);
    siblings.forEach((element) => { element.inert = true; });
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panel.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      siblings.forEach((element, index) => { element.inert = priorInert[index]; });
      lastFocused.current?.focus();
    };
  }, [open, closePanel]);

  return (
    <div onMouseMove={track}>
      <div inert={open ? true : undefined}>
      <section className="brand-section" aria-labelledby="brands-title">
        <h2 id="brands-title">Teams I’ve built for</h2>
        <ul className="brand-list">
          {brands.map((brand) => {
            const project = all.find((item) => item.slug === brand.slug);
            return project ? (
              <li key={brand.slug}>
                <button type="button" onClick={() => openPanel(project)} aria-label={`View ${brand.name} case study`}>
                  <span className={`brand-mark brand-${brand.slug}`}>
                    <Image src={brand.logo} alt={brand.name} width={180} height={48} />
                    {brand.slug === "scrupp" ? <span>Scrupp</span> : null}
                  </span>
                  <span className="brand-relationship">{brand.relationship}</span>
                </button>
              </li>
            ) : null;
          })}
        </ul>
      </section>

      <section id="featured" className="featured-section" aria-labelledby="featured-title">
        <div className="section-head">
          <h2 id="featured-title">Selected work</h2>
          <p>Two products I own, from product decisions to code.</p>
        </div>
        <div className="featured-grid">
          {featuredSlugs.map((slug, index) => {
            const project = all.find((item) => item.slug === slug);
            if (!project) return null;
            return (
              <button className={`featured-project featured-${slug}`} key={slug} type="button" onClick={() => openPanel(project)} aria-label={`Explore ${project.name} case study`}>
                <ProductPreview slug={slug} priority />
                <span className="featured-heading"><span><span className="featured-number">0{index + 1} / </span>{project.name}</span><span className="featured-arrow" aria-hidden="true">↗</span></span>
                <span className="featured-description">{slug === "surplus" ? "A native iOS coach for gaining weight. Meals, macros, and an AI coach that helps you decide what to eat next." : "An AI production platform I built and used to deliver marketing assets for 15+ brands."}</span>
                <span className="featured-meta">{slug === "surplus" ? "SwiftUI · Convex · AI coaching" : "Next.js · Convex · AI orchestration"}<span>{slug === "surplus" ? project.status : "Founder & engineer"}</span></span>
                <span className="featured-read">Explore case study <span aria-hidden="true">↗</span></span>
              </button>
            );
          })}
        </div>
      </section>

      {children}

      <details className="work-archive">
        <summary><span>Explore all {all.length} projects</span><span className="archive-hint">Products, client work, and the decisions behind them</span><span className="archive-toggle" aria-hidden="true">+</span></summary>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="work-section">
          <div className="section-head">
            <h2>{section.title}</h2>
            <p>{section.blurb}</p>
          </div>

          <ul className="work-list">
            {section.projects.map((project) => (
              <li
                key={project.slug}
                data-slug={project.slug}
                className={active === project.slug ? "is-active" : undefined}
                ref={(node) => {
                  if (node) rows.current.set(project.slug, node);
                  else rows.current.delete(project.slug);
                }}
                onMouseEnter={() => setHovered(project.image ? project.slug : null)}
                onMouseLeave={() => setHovered(null)}
              >
                <button type="button" onClick={() => openPanel(project)}>
                  <span className="work-name">{project.name}</span>
                  <span className="work-type">{project.type}</span>
                  <span className="work-what">{project.what}</span>
                  <span className="work-year">{project.year}</span>
                  <span className="work-more">Details</span>
                  {/* Touch-only stand-in for the cursor-following preview. */}
                  {project.image ? (
                    <span className="work-thumb" aria-hidden="true">
                      <Image src={project.image} alt="" width={520} height={340} sizes="100vw" style={{ objectFit: project.imageFit }} />
                    </span>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
      </details>

      <div className="work-preview" ref={preview} aria-hidden="true">
        {all.map((project) =>
          project.image ? (
            <Image
              key={project.slug}
              src={project.image}
              alt=""
              width={520}
              height={340}
              sizes="30vw"
              style={{ objectFit: project.imageFit }}
              className={hovered === project.slug ? "is-visible" : undefined}
            />
          ) : null,
        )}
      </div>
      </div>

      {open ? (
        <>
          <div className="panel-scrim" onClick={closePanel} />
          <aside
            className="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="panel-title"
            tabIndex={-1}
            ref={panel}
            style={
              drag
                ? { transform: `translateY(${drag}px)`, animation: "none", transition: "none" }
                : undefined
            }
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="panel-grab" aria-hidden="true" />

            <div className="panel-bar">
              <span>{open.type}</span>
              <button type="button" onClick={closePanel} aria-label="Close details">
                Close
              </button>
            </div>

            <div className="panel-body">
              <h3 id="panel-title">{open.name}</h3>
              <p className="panel-role">
                {open.role} · {open.year}
              </p>
              {open.status ? <p className="panel-status">{open.status}</p> : null}
              {open.team ? <p className="panel-team">Worked with: {open.team}</p> : null}

              {featuredSlugs.includes(open.slug) ? (
                <div className="panel-product-preview"><ProductPreview slug={open.slug} /></div>
              ) : open.image ? (
                <div className="panel-image">
                  <Image src={open.image} alt={`${open.name} project preview`} fill sizes="(max-width: 40rem) 100vw, 34rem" style={{ objectFit: open.imageFit }} />
                </div>
              ) : null}
              {open.imageCaption ? <p className="panel-caption">{open.imageCaption}</p> : null}

              {/* Numbers first — a hiring manager skims before they read. */}
              {open.metrics?.length ? (
                <dl className="panel-metrics is-lead">
                  {open.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <h4>The problem</h4>
              <p>{open.problem}</p>

              <h4>The call I made</h4>
              <p>{open.approach}</p>

              <h4>What I shipped</h4>
              <ul className="panel-shipped">
                {open.shipped.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {open.clients ? (
                <>
                  <h4>Brands I delivered for</h4>
                  <ul className="panel-clients">
                    {open.clients.map((client) => (
                      <li key={client.name}>
                        <strong>{client.name}</strong>
                        <span>{client.work}</span>
                        {client.result ? <em>{client.result}</em> : null}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <h4>What it taught me</h4>
              <p>{open.learned}</p>

              <h4>Built with</h4>
              <ul className="panel-stack">
                {open.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {open.url ? (
                <a className="panel-visit" href={open.url} target="_blank" rel="noreferrer">
                  Open {open.name} ↗
                </a>
              ) : (
                <p className="panel-visit is-muted">{open.status ?? "In development"}</p>
              )}
            </div>
          </aside>
        </>
      ) : null}
    </div>
  );
}
