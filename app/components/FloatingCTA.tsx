"use client";

import { useEffect, useState } from "react";

import { CAL_URL } from "../site";

/**
 * The header CTA follows you down the page. Appears only once the real buttons
 * have scrolled out of view, so there are never two of them on screen at once.
 */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const anchor = document.querySelector(".header-actions");
    if (!anchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`float-cta${show ? " is-on" : ""}`}
      href={CAL_URL}
      target="_blank"
      rel="noreferrer"
      aria-hidden={!show}
      tabIndex={show ? undefined : -1}
    >
      Book a call ↗
    </a>
  );
}
