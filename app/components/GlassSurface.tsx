"use client";

import type { PointerEvent, ReactNode } from "react";

export function trackGlassPointer(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === "touch") return;
  const node = event.currentTarget;
  const bounds = node.getBoundingClientRect();
  node.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
  node.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
}

export default function GlassSurface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass-surface ${className}`} onPointerMove={trackGlassPointer}>{children}</div>;
}
