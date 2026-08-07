import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { DESCRIPTION, EMAIL, GITHUB_URL, LINKEDIN_URL, NAME, ROLE, SITE_URL } from "./site";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${NAME} | ${ROLE}`,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "Jayden Quaynor",
    "product engineer",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Convex",
    "Storrs CT",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: `${NAME} | ${ROLE}`,
    description: "I turn ambitious ideas into polished, scalable software.",
    type: "profile",
    url: SITE_URL,
    siteName: NAME,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${NAME}, ${ROLE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} | ${ROLE}`,
    description: "I turn ambitious ideas into polished, scalable software.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: ROLE,
  description: DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Storrs", addressRegion: "CT", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Connecticut" },
    { "@type": "CollegeOrUniversity", name: "New York Institute of Technology" },
  ],
  knowsAbout: [
    "Full-stack development",
    "Next.js",
    "React",
    "TypeScript",
    "Convex",
    "LLM integration",
    "Agentic AI",
    "Product design",
  ],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${familjenGrotesk.variable} ${ibmPlexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
