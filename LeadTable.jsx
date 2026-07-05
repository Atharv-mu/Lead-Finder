import Link from "next/link";
import SignalBadge from "./SignalBadge";

export default function LeadTable({ companies }) {
  if (companies.length === 0) {
    return (
      <div className="border border-dashed border-ink-border rounded-xl p-10 text-center text-muted">
        No companies match these filters yet. Adjust a filter, or check back after the next collection run.
      </div>
    );
  }

  return (
    <div className="border border-ink-border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-ink-raised text-left text-xs uppercase tracking-wider text-muted">
            <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Industry</th>
            <th className="px-4 py-3 font-medium">Stage</th>
            <th className="px-4 py-3 font-medium">Services likely needed</th>
            <th className="px-4 py-3 font-medium">Source</th>
            <th className="px-4 py-3 font-medium text-right">Lead score</th>
          </tr>
        </thead>
        <tbody>
          {companies
            .slice()
            .sort((a, b) => b.score - a.score)
            .map((c) => (
              <tr key={c.id} className="border-t border-ink-border hover:bg-ink-raised/60 transition-colors">
                <td className="px-4 py-3">
                  <Link href={`/company/${c.id}`} className="font-medium text-ink_text hover:text-signal transition-colors">
                    {c.name}
                  </Link>
                  <div className="text-xs text-muted">{c.founder}</div>
                </td>
                <td className="px-4 py-3 text-muted">{c.industry}</td>
                <td className="px-4 py-3 text-muted">{c.stage}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {c.services.slice(0, 2).map((s) => (
                      <span key={s} className="text-xs bg-ink-raised border border-ink-border rounded-full px-2 py-0.5 text-muted">
                        {s}
                      </span>
                    ))}
                    {c.services.length > 2 && (
                      <span className="text-xs text-muted">+{c.services.length - 2}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted">{c.source}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end">
                    <SignalBadge score={c.score} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
