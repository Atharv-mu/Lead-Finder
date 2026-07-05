export default function StatCard({ label, value, hint, accent = "signal" }) {
  const accentClass = accent === "alert" ? "text-alert" : "text-signal";
  return (
    <div className="bg-ink-panel border border-ink-border rounded-xl p-5 flex flex-col gap-1 relative overflow-hidden">
      <span className="text-xs uppercase tracking-widest text-muted font-medium">{label}</span>
      <span className={`font-display text-4xl font-semibold mono-num ${accentClass}`}>{value}</span>
      {hint ? <span className="text-xs text-muted">{hint}</span> : null}
    </div>
  );
}
