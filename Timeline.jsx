const TYPE_LABEL = {
  signal: "Signal",
  launch: "Launch",
  hiring: "Hiring",
  news: "News",
  activity: "Activity",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function Timeline({ events }) {
  if (!events || events.length === 0) {
    return <p className="text-sm text-muted">No activity recorded yet.</p>;
  }

  return (
    <ol className="flex flex-col gap-4">
      {events.map((e, i) => (
        <li key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="w-2 h-2 rounded-full bg-signal mt-1.5" aria-hidden="true" />
            {i < events.length - 1 && <span className="w-px flex-1 bg-ink-border" />}
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-2 text-xs text-muted font-mono">
              <span>{formatDate(e.date)}</span>
              <span className="uppercase tracking-wider text-signal">{TYPE_LABEL[e.type] || e.type}</span>
            </div>
            <p className="text-sm mt-0.5">{e.label}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
