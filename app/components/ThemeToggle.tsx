"use client";

import { useSyncExternalStore } from "react";

const CHANGE_EVENT = "portfolio-theme-change";

function subscribe(notify: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === "portfolio-theme") {
      applyTheme(event.newValue === "dark");
      notify();
    }
  };
  window.addEventListener(CHANGE_EVENT, notify);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, notify);
    window.removeEventListener("storage", onStorage);
  };
}

function applyTheme(dark: boolean) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#12131a" : "#faf9f6");
}

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    applyTheme(!dark);
    try { localStorage.setItem("portfolio-theme", dark ? "light" : "dark"); } catch { /* Keep the current session usable when storage is unavailable. */ }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        {dark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" /></> : <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />}
      </svg>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
