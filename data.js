// lib/data.js
// In-memory mock data layer. This mirrors the shape the real backend
// (FastAPI + PostgreSQL, per the project spec) is expected to return,
// so swapping this file for real API calls later is a drop-in change.

export const SERVICES = [
  "Website Development",
  "Custom Software",
  "Mobile App",
  "AI Solutions",
  "Automation",
  "CRM/ERP",
  "UI/UX Design",
  "Branding",
];

export const SOURCES = [
  "Google Search",
  "Reddit",
  "Product Hunt",
  "Startup Directory",
  "Company Website",
  "Job Board",
  "News",
];

const now = new Date();
const daysAgo = (n) => new Date(now.getTime() - n * 86400000).toISOString();

export const COMPANIES = [
  {
    id: "c-001",
    name: "Norvane Health",
    founder: "Priya Deshmukh",
    website: "norvanehealth.example.com",
    industry: "Healthcare",
    stage: "Seed",
    source: "Product Hunt",
    score: 91,
    confidence: "High",
    services: ["Custom Software", "AI Solutions", "UI/UX Design"],
    summary:
      "Recently launched a patient-scheduling MVP on Product Hunt but is still running manual intake on spreadsheets, and top comments flag the UI as confusing.",
    reason:
      "Public launch feedback repeatedly asks for a proper booking flow, and the founder replied asking for developer recommendations — a direct buying signal.",
    contact: { email: "hello@norvanehealth.example.com", location: "Pune, IN" },
    timeline: [
      { date: daysAgo(1), type: "signal", label: "Founder asked for dev recommendations in PH comments" },
      { date: daysAgo(4), type: "launch", label: "Launched MVP on Product Hunt" },
      { date: daysAgo(19), type: "hiring", label: "Posted a part-time ops role, no engineering hire yet" },
    ],
  },
  {
    id: "c-002",
    name: "Fennel & Co",
    founder: "Arjun Mehta",
    website: "fennelco.example.com",
    industry: "D2C Retail",
    stage: "Bootstrapped",
    source: "Google Search",
    score: 74,
    confidence: "Medium",
    services: ["Website Development", "Branding"],
    summary:
      "Sells through Instagram DMs only; no storefront website found in search results, despite steady product drops.",
    reason:
      "Zero owned web presence combined with active weekly product launches suggests real revenue with no checkout infrastructure.",
    contact: { email: "team@fennelco.example.com", location: "Jaipur, IN" },
    timeline: [
      { date: daysAgo(2), type: "activity", label: "New product drop announced on Instagram" },
      { date: daysAgo(30), type: "signal", label: "No indexed website found across three search passes" },
    ],
  },
  {
    id: "c-003",
    name: "Loopbridge Logistics",
    founder: "Ken Osei",
    website: "loopbridge.example.com",
    industry: "Logistics",
    stage: "Series A",
    source: "News",
    score: 88,
    confidence: "High",
    services: ["Automation", "CRM/ERP"],
    summary:
      "Announced a new regional expansion; a trade-press article quotes the COO admitting fleet dispatch is still coordinated over spreadsheets and phone calls.",
    reason:
      "Named, funded company, on-record admission of manual back-office process, and headcount growth to support the expansion.",
    contact: { email: "info@loopbridge.example.com", location: "Nairobi, KE" },
    timeline: [
      { date: daysAgo(3), type: "news", label: "Regional expansion covered in trade press" },
      { date: daysAgo(6), type: "hiring", label: "Opened 4 operations roles" },
      { date: daysAgo(40), type: "activity", label: "Raised Series A" },
    ],
  },
  {
    id: "c-004",
    name: "Studio Mirin",
    founder: "Hana Kobayashi",
    website: "studiomirin.example.com",
    industry: "Hospitality",
    stage: "Idea",
    source: "Reddit",
    score: 52,
    confidence: "Low",
    services: ["Branding", "Website Development"],
    summary:
      "A Reddit thread about opening a small izakaya mentions wanting 'something online eventually' but no timeline or funding confirmed.",
    reason:
      "Early intent signal only — pre-revenue and no concrete next step yet, worth a light-touch follow-up rather than an active push.",
    contact: { email: null, location: "Osaka, JP" },
    timeline: [
      { date: daysAgo(5), type: "signal", label: "Mentioned wanting a website 'eventually' in r/smallbusiness" },
    ],
  },
  {
    id: "c-005",
    name: "Verdant Robotics Labs",
    founder: "Sofia Marchetti",
    website: "verdantrobotics.example.com",
    industry: "AgriTech",
    stage: "Series B",
    source: "Startup Directory",
    score: 95,
    confidence: "High",
    services: ["AI Solutions", "Mobile App", "Custom Software"],
    summary:
      "Crunchbase-style directory listing shows a large new funding round; three open reqs for 'Head of Digital Product' remain unfilled after 60 days.",
    reason:
      "Fresh capital plus a stalled senior digital hire is a strong outsourcing signal — they need product delivery capacity now, not later.",
    contact: { email: "partnerships@verdantrobotics.example.com", location: "Turin, IT" },
    timeline: [
      { date: daysAgo(1), type: "hiring", label: "Head of Digital Product req re-posted, 60+ days open" },
      { date: daysAgo(10), type: "activity", label: "Closed Series B" },
    ],
  },
  {
    id: "c-006",
    name: "Kettle & Vine",
    founder: "Marcus Webb",
    website: null,
    industry: "Food & Beverage",
    stage: "Bootstrapped",
    source: "Job Board",
    score: 63,
    confidence: "Medium",
    services: ["Website Development", "CRM/ERP"],
    summary:
      "Posted a generic 'front desk / admin' listing that mentions juggling orders across WhatsApp, email, and a paper ledger.",
    reason:
      "Manual, fragmented order handling described directly in a public job listing — a light CRM and simple ordering site would resolve most of it.",
    contact: { email: "orders@kettleandvine.example.com", location: "Cape Town, ZA" },
    timeline: [
      { date: daysAgo(7), type: "hiring", label: "Posted admin role describing manual order tracking" },
    ],
  },
  {
    id: "c-007",
    name: "Piston & Pine",
    founder: "Rae Coulter",
    website: "pistonpine.example.com",
    industry: "Automotive Services",
    stage: "Bootstrapped",
    source: "Company Website",
    score: 68,
    confidence: "Medium",
    services: ["Website Development", "UI/UX Design"],
    summary:
      "Existing site is a single unstyled page with a broken contact form, discovered while crawling local service directories.",
    reason:
      "Live business with an existing but non-functional web presence — a redesign is a near-immediate, low-friction need.",
    contact: { email: "contact@pistonpine.example.com", location: "Denver, US" },
    timeline: [
      { date: daysAgo(12), type: "signal", label: "Contact form on live site returns a 404" },
    ],
  },
  {
    id: "c-008",
    name: "Solene Beauty Bar",
    founder: "Ines Dubois",
    website: "solenebeauty.example.com",
    industry: "Beauty",
    stage: "Bootstrapped",
    source: "Reddit",
    score: 45,
    confidence: "Low",
    services: ["Branding", "Mobile App"],
    summary:
      "Founder posted asking r/entrepreneur whether a booking app is 'worth it yet' at their current size.",
    reason:
      "Genuine interest but explicitly early-stage and price-sensitive; queue for nurture rather than immediate outreach.",
    contact: { email: null, location: "Lyon, FR" },
    timeline: [
      { date: daysAgo(8), type: "signal", label: "Asked community whether a booking app is worth building yet" },
    ],
  },
];

export function getStats(companies = COMPANIES) {
  return {
    total: companies.length,
    newThisWeek: companies.filter((c) => {
      const latest = c.timeline[0]?.date;
      return latest && (now.getTime() - new Date(latest).getTime()) / 86400000 <= 7;
    }).length,
    highPriority: companies.filter((c) => c.score >= 80).length,
  };
}

export function filterCompanies(companies, { search, source, industry, service, minScore } = {}) {
  return companies.filter((c) => {
    if (search) {
      const q = search.toLowerCase();
      const hay = `${c.name} ${c.founder} ${c.industry} ${c.summary}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (source && c.source !== source) return false;
    if (industry && c.industry !== industry) return false;
    if (service && !c.services.includes(service)) return false;
    if (minScore && c.score < Number(minScore)) return false;
    return true;
  });
}

export function getCompany(id) {
  return COMPANIES.find((c) => c.id === id) || null;
}

export function scoreTier(score) {
  if (score >= 80) return { label: "High", tone: "alert" };
  if (score >= 60) return { label: "Medium", tone: "signal" };
  return { label: "Low", tone: "muted" };
}
