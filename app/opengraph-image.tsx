import { ImageResponse } from "next/og";
import { NAME, ROLE } from "./site";

export const alt = `${NAME} | ${ROLE} — AI products, native apps, and tools for teams`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#faf9f6", color: "#20211f", fontFamily: "sans-serif", borderTop: "8px solid #be421d" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <path d="M12 20h13v20a7 7 0 0 1-14 0" fill="none" stroke="#20211f" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="34" y="20" width="18" height="27" rx="9" fill="none" stroke="#20211f" strokeWidth="5.5" />
              <path d="m46 42 9 10" fill="none" stroke="#be421d" strokeWidth="5.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 20, color: "#64665f", letterSpacing: 3 }}>PRODUCT ENGINEER</span>
          </div>
          <span style={{ color: "#64665f", fontSize: 20 }}>Storrs, CT</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -4 }}>{NAME}</div>
          <div style={{ maxWidth: 900, fontSize: 34, lineHeight: 1.3, color: "#64665f" }}>AI products, native apps, and tools that make teams work better.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid #ddded6", fontSize: 21 }}>
          <span style={{ color: "#be421d" }}>Viralinn · Surplus · ADM8</span>
          <span>jaydenquaynor.com</span>
        </div>
      </div>
    ),
    size,
  );
}
