"use client";

import { SERVICES, SOURCES } from "../lib/data";

export default function FiltersBar({ filters, onChange }) {
  const industries = ["Healthcare", "D2C Retail", "Logistics", "Hospitality", "AgriTech", "Food & Beverage", "Automotive Services", "Beauty"];

  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value });

  return (
    <div className="flex flex-wrap items-center gap-3 bg-ink-panel border border-ink-border rounded-xl p-3">
      <input
        type="text"
        placeholder="Search company, founder, industry…"
        value={filters.search}
        onChange={set("search")}
        className="flex-1 min-w-[220px] bg-ink border border-ink-border rounded-lg px-3 py-2 text-sm placeholder:text-muted focus:outline-none"
      />

      <select value={filters.source} onChange={set("source")} className="bg-ink border border-ink-border rounded-lg px-3 py-2 text-sm text-ink_text">
        <option value="">All sources</option>
        {SOURCES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select value={filters.industry} onChange={set("industry")} className="bg-ink border border-ink-border rounded-lg px-3 py-2 text-sm text-ink_text">
        <option value="">All industries</option>
        {industries.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select value={filters.service} onChange={set("service")} className="bg-ink border border-ink-border rounded-lg px-3 py-2 text-sm text-ink_text">
        <option value="">All services</option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select value={filters.minScore} onChange={set("minScore")} className="bg-ink border border-ink-border rounded-lg px-3 py-2 text-sm text-ink_text">
        <option value="">Any score</option>
        <option value="80">80+ (High)</option>
        <option value="60">60+ (Medium)</option>
      </select>
    </div>
  );
}
