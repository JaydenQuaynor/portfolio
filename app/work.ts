export type Metric = {
  /** The number or outcome. Keep it short — it renders large. */
  value: string;
  /** What the number is. */
  label: string;
};

export type Client = {
  name: string;
  /** What I did for them. */
  work: string;
  /** A measured outcome, when there is one. */
  result?: string;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  /** One plain sentence for the list row. */
  what: string;
  year: string;
  role: string;
  /** Who else was involved. Omit for solo work. */
  team?: string;
  url?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  imageCaption?: string;
  status?: string;

  /** Panel content. */
  problem: string;
  approach: string;
  shipped: string[];
  /** Only real, defensible numbers. Omitted entirely when there are none. */
  metrics?: Metric[];
  /** Brands and teams the work was delivered for. */
  clients?: Client[];
  learned: string;
  stack: string[];
};

export type Section = {
  id: string;
  title: string;
  blurb: string;
  projects: Project[];
};

/**
 * Metrics are the load-bearing part of this page, so every entry below is
 * something that actually happened and can be defended in an interview.
 * Anything not yet measured is left out rather than estimated — see
 * UNMEASURED at the bottom of this file for the open list.
 */
export const sections: Section[] = [
  {
    id: "products",
    title: "My products",
    blurb: "Started from nothing. I owned the product decisions and wrote the code.",
    projects: [
      {
        slug: "surplus",
        name: "Surplus",
        type: "Native iOS nutrition coach",
        what: "An iPhone app for gaining weight and muscle. Tracks meals, adapts your plan, and helps you decide what to eat next.",
        year: "2026 — Present",
        role: "Founder, product and engineering",
        url: "https://trysurplus.app",
        image: "/images/work/surplus-hero.webp",
        imageFit: "contain",
        imageCaption: "Surplus brand and product positioning. Currently in TestFlight beta.",
        status: "TestFlight beta",
        problem:
          "For people trying to gain weight, knowing yesterday's calories does not solve today's missed meal. The hard parts are eating consistently, finding something that fits the plan, and knowing what to do when the day gets off track.",
        approach:
          "I built the product around the next useful action: notice a gap, suggest a meal, let the user confirm it, and adjust the plan as progress changes. The native SwiftUI app subscribes to Convex for live data. Its AI coach works through approved tools, while deterministic code owns nutrition calculations, target changes, streaks, and rewards.",
        shipped: [
          "Native SwiftUI app with onboarding, meal logging, macro targets, and weight progress",
          "AI coach for meal suggestions and confirmed food logging",
          "Adaptive nutrition plans, saved meals, streaks, and recovery flows",
          "Nearby food discovery and optional messaging integration",
          "Branded landing site, waitlist, and TestFlight beta builds",
        ],
        learned:
          "An AI coach needs a clear boundary between interpreting a request and changing a user's plan. Keeping calculations and state changes in deterministic code makes the experience easier to test and keeps the model focused on the conversation.",
        stack: ["SwiftUI", "Swift", "Convex", "TypeScript", "Clerk", "OpenRouter"],
      },
      {
        slug: "viralinn",
        name: "Viralinn",
        type: "AI production platform",
        what: "An AI content platform I built and used to deliver marketing assets for 15+ brands.",
        year: "2025 — Present",
        role: "Founder and product engineer",
        team: "Brand and growth teams at Astro Club, Lifesum, Starteryou, Scrupp, Engyne, and Carousel Studio",
        url: "https://www.viralinn.com",
        image: "/images/work/viralinn-hero.webp",
        problem:
          "An agency making AI content juggles a brief in one doc, four generation tools in four tabs, feedback in Slack, approvals over email, and publishing somewhere else. Nothing knows about anything else, so every asset gets re-explained at each handoff and clients wait on people, not on work.",
        approach:
          "I refused to build a fifth disconnected AI utility. The bet was that the pipeline itself is the product: one canvas where a brief becomes generations, generations get reviewed in place, approval is a state on the asset rather than a message about it, and distribution reads from that state. That decision drove everything else, including eating the complexity of orchestrating vendor APIs so the user never sees a model name unless they want to. I also ran real client delivery on the platform while building it, so every product decision was tested against work I had to hand over to a paying brand that week.",
        shipped: [
          "Infinite studio canvas where a brief, its generations, and its revisions stay attached to each other",
          "AI Composer orchestrating image, image-to-video, voice, and music APIs behind one interface",
          "Multi-client workspaces with review, approval state, and distribution",
          "An MCP server exposing the generation tools to AI agents, so the pipeline is drivable by an assistant",
          "Marketing site, auth, and Stripe billing",
          "Client delivery on top of the platform: UGC pipelines, ad creative, organic content engines, and cold-email infrastructure",
        ],
        metrics: [
          { value: "15+", label: "Brands delivered AI marketing assets for" },
          { value: "35%+", label: "Lower CPC for a Swedish app's UK campaign vs. its typical campaigns" },
          { value: "30K", label: "Views generated for Astro Club" },
        ],
        clients: [
          {
            name: "Astro Club",
            work: "Built their UGC content branch and wired it into the business funnel.",
            result: "30K views generated",
          },
          {
            name: "Lifesum",
            work: "AI-generated ad creative produced through the platform.",
          },
          {
            name: "Starteryou",
            work: "Ad creative plus internal tooling for their employer-matching product.",
          },
          {
            name: "Scrupp",
            work: "Organic content engine and cold-email campaign infrastructure.",
          },
          {
            name: "Engyne",
            work: "Organic content production run through the platform, and the parent of Carousel Studio.",
          },
          {
            name: "Carousel Studio",
            work: "Organic content infrastructure at scale for their app.",
          },
        ],
        learned:
          "Third-party AI APIs fail differently than normal APIs — they are slow, non-deterministic, and fail halfway through. I had to design the job pipeline around partial failure and resumability instead of request/response, which is the single most useful thing I now know about building on top of models.",
        stack: ["Next.js", "React", "TypeScript", "Convex", "MCP", "Stripe", "R2"],
      },
      {
        slug: "founders",
        name: "Found[ERS]",
        type: "Community and events platform",
        what: "A student founder community with 50 NYC members, plus the platform and pitch events I built to bring them together.",
        year: "2025 — Present",
        role: "Founder, executive director, and the engineer",
        team: "Student chapter leads across multiple campuses",
        url: "https://foundersers.com",
        image: "/images/work/founders-hero.webp",
        problem:
          "Student organizations lose people in the gap between interest and attendance. Someone hears about it, fills a form that lands in a spreadsheet, maybe gets an email, maybe finds the event, maybe shows up. Every gap in that chain is a person who quietly leaves.",
        approach:
          "I built the member journey and the operator workflow as one system rather than two. Every public action has an internal continuation: an application creates a record someone can act on, an RSVP creates a check-in code, a check-in updates who is actually active. The org's operations and the product are the same thing.",
        shipped: [
          "Member applications with an admin review queue",
          "Event discovery, RSVP, and paid ticketing",
          "QR check-in that turns attendance into data",
          "Member communications and an admin console",
          "The Founder & Pitch Summit, produced end to end",
        ],
        metrics: [
          { value: "50", label: "NYC community members" },
          { value: "35+", label: "Entrepreneurs and VC participants at the pitch event" },
          { value: "$500", label: "Awarded to the top startup" },
        ],
        learned:
          "Running the organization on the software I wrote made me a much harsher judge of my own product decisions. Every friction I left in the admin flow, I paid for personally at 11pm before an event. That feedback loop is the closest thing to real product sense I have found.",
        stack: ["Next.js", "Convex", "Stripe", "Resend", "PostHog"],
      },
      {
        slug: "gaas",
        name: "GaaS Studios",
        type: "Churn-prevention SaaS and studio",
        what: "Software that spots customers before they cancel. Also the studio I ship client work under.",
        year: "2024 — Present",
        role: "Owner, lead developer",
        problem:
          "Subscription businesses find out about churn when the cancellation email arrives, which is the one moment it is too late to do anything. The signals that predict it — usage dropping off, key features going untouched, logins thinning out — are all visible weeks earlier and nobody is watching them.",
        approach:
          "Rather than bolt onto an analytics vendor, I built a custom event tracker so the risk score is computed on behavior the customer actually cares about, not on generic pageview data. The studio side funds the product side and keeps me shipping against real client deadlines.",
        shipped: [
          "Custom event-tracking system",
          "Risk-scoring logic that surfaces at-risk accounts before cancellation",
          "Client sites and landing pages in React and Next.js",
          "Automated cold-outbound email infrastructure integrating several third-party APIs",
        ],
        metrics: [
          { value: "$5K+", label: "Revenue from websites, AI automation, and marketing assets" },
          { value: "75%+", label: "Increase in client website traffic" },
        ],
        learned:
          "Running outbound for my own clients taught me that the deliverable is a booked call, not a working script. I stopped measuring my automation by whether it ran and started measuring it by what it produced, which changed how I scope every project now.",
        stack: ["Next.js", "React", "TypeScript", "Node.js", "REST APIs"],
      },
      {
        slug: "truce",
        name: "Truce AI",
        type: "AI mobile app",
        what: "Rewrites heated messages between partners so an argument doesn't escalate.",
        year: "2026",
        role: "Founder, product and engineering",
        url: "https://www.truceai.app",
        image: "/images/work/truce-hero.webp",
        problem:
          "Most damage in a relationship argument happens in the thirty seconds between feeling something and sending it. The message is not wrong about the feeling, it is just shaped to wound. There is no tool sitting in that gap.",
        approach:
          "The product is deliberately narrow: it does not mediate, advise, or therapize. It takes one message and returns the same intent said in a way the other person can hear. Narrow scope is the whole safety argument — a tool that reframes is defensible, a tool that counsels is not.",
        shipped: [
          "Brand and positioning",
          "Full product specification",
          "Public waitlist site",
          "App in development",
        ],
        metrics: [{ value: "200+", label: "Waitlist signups before launch" }],
        learned:
          "Writing the spec for an emotionally sensitive product forced me to define what the app must refuse to do before defining what it does. I now start specs with the non-goals.",
        stack: ["React Native", "Expo", "TypeScript", "LLM integration"],
      },
    ],
  },
  {
    id: "clients",
    title: "Client and contract work",
    blurb: "Built on someone else's team, inside their business and their constraints.",
    projects: [
      {
        slug: "adm8",
        name: "ADM8",
        type: "Enterprise product engineering",
        what: "Product improvements and custom enterprise workflows that reduced team time investment by 35%.",
        year: "Sep 2026 — Present",
        role: "Lead Product Engineer · Forward-Deployed Development & GTM Engineering",
        team: "Product team and enterprise users",
        status: "Ongoing role",
        problem:
          "Enterprise teams need content tools that fit the way they actually work. Repeated handoffs and production tasks take time away from delivering creative for their brands.",
        approach:
          "I work from user feedback and enterprise requirements, then translate those needs into product improvements and custom workflows. Running real creative work through the tools keeps the changes tied to the team's day-to-day needs.",
        shipped: [
          "Product improvements shaped by enterprise user feedback",
          "Custom workflows and internal tooling aligned with company objectives",
          "AI content trailers for European brands",
        ],
        metrics: [{ value: "35%", label: "Reduction in team time investment" }],
        learned:
          "A workflow improvement matters when the team can use it in real delivery. Working directly with users helps me decide which steps to automate and where people still need control.",
        stack: ["Product engineering", "AI media pipelines", "Workflow automation", "GTM engineering"],
      },
      {
        slug: "astro-club",
        name: "Astro Club",
        type: "Contract — growth and content engineering",
        what: "Built their UGC content pipeline and wired it into the business. 30K views.",
        year: "2025",
        role: "Contract — built the pipeline and ran it",
        team: "Astro Club brand and growth team",
        url: "https://www.astroclub.com",
        image: "/images/work/astro-club-hero.webp",
        problem:
          "The brand needed short-form content at a volume a person cannot hand-make, and needed it to actually feed the business rather than sit on a profile collecting views that go nowhere.",
        approach:
          "I treated it as a systems problem, not a content problem. Instead of producing posts as a one-off deliverable, I stood up a repeatable UGC branch on top of Viralinn and connected its output to their funnel, so volume and distribution were one pipeline instead of two jobs.",
        metrics: [{ value: "30K", label: "Views generated for the brand" }],
        shipped: [
          "A repeatable UGC content pipeline for the brand",
          "Content output wired into their business funnel rather than posted in isolation",
          "Production run on the pipeline, not just handed over",
        ],
        learned:
          "Views only matter if they land somewhere. Connecting the content output to the funnel was worth more to this client than any individual piece of creative, and it is the part I now insist on scoping first.",
        stack: ["Viralinn", "Next.js", "TypeScript", "AI media pipelines"],
      },
      {
        slug: "lifesum",
        name: "Lifesum",
        type: "Contract — AI ad creative",
        what: "AI ad creative for the health app's marketing.",
        year: "2025",
        role: "Contract — creative production",
        team: "Lifesum marketing team",
        url: "https://lifesum.com",
        image: "/images/work/lifesum-hero.webp",
        problem:
          "Paid creative burns out fast. A marketing team needs many variants to test against, and traditional production cannot supply them at the rate the ad accounts consume them.",
        approach:
          "I ran their creative production through Viralinn so variant generation was a pipeline step rather than a new project each time. Building the tool and using it under a real brand's deadline is what kept the tool honest.",
        shipped: ["AI-generated ad creative delivered for the brand's marketing"],
        learned:
          "Delivering for a brand with real standards is a harder test of an AI pipeline than any demo. Output that is 90% right is not shippable, and closing that last 10% is where the engineering actually lives.",
        stack: ["Viralinn", "AI media pipelines"],
      },
      {
        slug: "carousel-studio",
        name: "Carousel Studio",
        type: "Contract — content infrastructure",
        what: "Organic content infrastructure at scale for their app.",
        year: "2025",
        role: "Contract — built and ran the content infrastructure",
        team: "Carousel Studio product team (Engyne)",
        url: "https://carouselstudio.design",
        image: "/images/work/carousel-studio-hero.webp",
        problem:
          "A large app needs organic content produced continuously, not in campaigns. At that scale the bottleneck stops being creative and becomes infrastructure: who generates, who reviews, what ships, and how none of it stalls.",
        approach:
          "I built the content operation as infrastructure with the same seriousness as product code — a defined pipeline with state, review, and throughput — rather than an ad-hoc content calendar.",
        shipped: [
          "Organic content infrastructure sized for a large app",
          "Repeatable production and review flow rather than one-off campaigns",
        ],
        learned:
          "At volume, the interesting problems are all operational. Designing for throughput and review state mattered far more than any single piece of output.",
        stack: ["Viralinn", "Next.js", "TypeScript"],
      },
      {
        slug: "starteryou",
        name: "Starteryou",
        type: "Contract — creative and internal tooling",
        what: "Ad creative plus internal tools for their employer-matching product.",
        year: "2025",
        role: "Contract — creative production and internal tooling",
        team: "Starteryou product team",
        url: "https://starteryou.com",
        image: "/images/work/starteryou-hero.webp",
        problem:
          "They needed two different things that most vendors split between two suppliers: outward-facing ad creative, and internal tooling to support the employer-matching side of the product.",
        approach:
          "I took both. Understanding the matching product from the inside made the ad creative sharper, and having produced the creative made it obvious what the internal tools needed to surface. Doing both is the argument for hiring a product engineer over two specialists.",
        shipped: [
          "Ad creative for the product",
          "Internal tooling supporting employer matching",
        ],
        learned:
          "Owning both the marketing surface and the internal tool for the same product is a real advantage. The two informed each other in ways a handoff between two vendors would have lost.",
        stack: ["Next.js", "React", "TypeScript", "Viralinn"],
      },
      {
        slug: "scrupp",
        name: "Scrupp",
        type: "Contract — content and outbound",
        what: "Organic content engine and cold-email campaign infrastructure.",
        year: "2025",
        role: "Contract — content and outbound systems",
        team: "Scrupp growth team",
        url: "https://scrupp.com",
        image: "/images/work/scrupp-hero.webp",
        problem:
          "Two demand channels, organic and outbound, usually run as separate efforts with separate tooling, and both stall when they depend on someone doing them manually every week.",
        approach:
          "I built both as systems rather than campaigns: an organic content engine that produces continuously, and cold-email infrastructure integrating several third-party APIs so outbound runs without a person driving it.",
        shipped: [
          "Organic content engine",
          "Cold-email campaign infrastructure integrating multiple third-party APIs",
        ],
        learned:
          "Outbound is an integration problem wearing a marketing costume. Most of the work was in the joins between services and in handling the failure cases nobody plans for.",
        stack: ["Node.js", "REST APIs", "Third-party integrations", "Viralinn"],
      },
      {
        slug: "capital-collab",
        name: "Capital Collab",
        type: "Business capital platform",
        what: "Helped replace legacy Salesforce workflows, cut monthly platform costs from $1,200 to $100, and build automations that generated $35K+.",
        year: "2025 — Present",
        role: "Product Engineer & Business Development · Contributor on the internal build",
        team: "Internal engineering, underwriting, and sales teams",
        url: "https://www.capitalcollab.com",
        image: "/images/work/capital-collab-hero.webp",
        problem:
          "Fifteen years inside one CRM leaves you with a business whose real process lives in nobody's head and everybody's workarounds. Intake, referrals, lender matching, offers, signatures, and reporting had each grown their own path, and the paths did not agree with each other.",
        approach:
          "I pushed to map every user, handoff, and decision in the operation as it actually ran before rebuilding any of it. Sitting on the business-development side while contributing to the build meant I was documenting a workflow I also worked inside daily — I could tell which steps were load-bearing and which were fifteen-year-old scar tissue.",
        shipped: [
          "Contributions to the internal platform: applicant intake, affiliate pipelines, lender routing, offers, administration",
          "The supporting public-facing front-end sites",
          "Automations connecting the pieces",
        ],
        metrics: [
          { value: "92%", label: "Lower monthly platform costs: $1,200 to $100 (rounded)" },
          { value: "$35K+", label: "Revenue generated by automations" },
          { value: "45K+", label: "U.S. business owners reached through email and GTM systems" },
        ],
        learned:
          "Working the sales side while building the tool is the most direct product research I have ever had. Requirements gathered in a meeting are a wish list; requirements gathered by having to do the job yourself are a spec.",
        stack: ["Next.js", "Supabase", "Salesforce", "TypeScript", "Resend"],
      },
      {
        slug: "bpt",
        name: "BPT Overhead",
        type: "Commerce and internal tooling",
        what: "A garage-door company's sales site, the lead handling behind it, and a CAD tool their team uses to spec jobs.",
        year: "2025",
        role: "Developer",
        team: "Owner and field/install team",
        url: "https://bptoverhead.com",
        image: "/images/work/bpt-overhead-hero.webp",
        problem:
          "A service business with a brochure site gets leads it cannot act on quickly and spends hours specifying jobs by hand. The website problem and the operations problem look separate but they are the same problem: information arriving in a form nobody can use.",
        approach:
          "I treated the public site and the internal tooling as one build. The site is written to convert, and what it captures flows directly into lead operations rather than into an inbox. The CAD studio exists because specifying a door is the actual bottleneck, not the marketing.",
        shipped: [
          "Conversion-focused service site",
          "Lead capture wired into operations rather than an inbox",
          "A production-ready CAD studio the team uses to spec jobs",
        ],
        learned:
          "The client asked for a website. The valuable half of the project was the tool nobody asked for, which I only found by asking what their day actually looked like. I now treat the stated brief as the opening of the conversation.",
        stack: ["Next.js", "React", "TypeScript"],
      },
      {
        slug: "provn",
        name: "PROVN Sports",
        type: "Sports representation platform",
        what: "A full rebuild for a sports-performance brand.",
        year: "2026",
        role: "Web developer (contract)",
        team: "Brand founders",
        url: "https://provnsports.com",
        image: "/images/work/proven-sports-hero.webp",
        problem:
          "The existing site did not make it clear what the brand offered or what a visitor should do next. Athletes and prospective clients landed and left without a path.",
        approach:
          "Rather than restyle the existing pages, I rebuilt the information architecture first and let the design follow the new structure. Clarity of offer was the deliverable; the visual refresh was a consequence.",
        shipped: [
          "New homepage",
          "Athlete roster",
          "Dynamic contact form",
          "Rebuilt information architecture clarifying the offer and the next step",
        ],
        learned:
          "A redesign that keeps a broken structure is decoration. Arguing for the architecture change before touching the visuals is a conversation worth having early, even when the client came in asking for a new look.",
        stack: ["Next.js", "React", "TypeScript"],
      },
      {
        slug: "opalkadia",
        name: "OpalKadia",
        type: "Holding company site",
        what: "A calm, credible web presence for a holding company.",
        year: "2025",
        role: "Developer",
        url: "https://www.opalkadia.com",
        image: "/images/work/opal-kadia-hero.webp",
        problem:
          "A holding company has the opposite marketing problem to a startup. Enthusiasm reads as instability. The site has to communicate a portfolio and a long time horizon without sounding like it is selling something.",
        approach:
          "I designed against the instinct to add energy. Restraint was the strategy: quiet typography, no urgency, and a structure that lets the portfolio speak for the company.",
        shipped: ["Company site built around long-term ownership and clear portfolio communication"],
        learned:
          "Matching tone to the audience's definition of credibility matters more than my own design preferences. For this client, the most persuasive choice was the least expressive one.",
        stack: ["Next.js", "React", "TypeScript"],
      },
      {
        slug: "otr",
        name: "OTR Health Club",
        type: "Health and performance site",
        what: "A site for a performance-led health club, built around one job.",
        year: "2025",
        role: "Developer",
        url: "https://otrhealthclub.com",
        image: "/images/sitepics/OtrSP.webp",
        problem:
          "Gym sites tend to list everything the facility contains and leave the visitor to work out whether it is for them. Amenity lists do not convert; a clear path to membership does.",
        approach: "I built the whole experience around the single conversion the business cares about: becoming a member.",
        shipped: ["Focused digital experience directing visitors toward membership"],
        learned:
          "Cutting content that the client is proud of is the hard part of conversion work. Showing why a shorter path serves them better is a persuasion problem, not a design problem.",
        stack: ["Next.js", "React", "TypeScript"],
      },
    ],
  },
];

/**
 * Numbers worth adding once measured — each would materially strengthen the
 * panels above. Left out deliberately rather than estimated.
 *
 * - Viralinn: MRR, assets generated
 * - Lifesum: ad variants delivered, spend or performance the creative supported
 * - Carousel Studio: posts/month, reach, size of the app's audience
 * - Starteryou: creative volume, hours saved by the internal matching tools
 * - Scrupp: emails sent, reply or meeting rate, organic reach
 * - Capital Collab: hours/week saved vs the Salesforce process, loan volume touched
 * - Surplus: active beta users, meal completion, retention
 * - ADM8: adoption of individual workflows
 * - GaaS Studios: calls booked, churn caught
 * - BPT Overhead: lead volume before/after, hours saved per job spec
 * - PROVN / OTR: conversion or inquiry lift after launch
 */
