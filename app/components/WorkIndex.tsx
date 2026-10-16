"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Project, Section } from "../work";

/**
 * The work list. Every section uses the same row model — hover floats the
 * screenshot, click opens the detail panel — so moving between sections never
 * feels like the interaction stopped working. Only the columns differ.
 */
export default function WorkIndex({ sections }: { sections: Section[] }) {
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
    lastFocused.current?.focus();
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
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panel.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closePanel]);

  return (
    <div onMouseMove={track}>
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

              {open.image ? (
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
