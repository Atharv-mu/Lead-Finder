export default function Header() {
  return (
    <header className="relative border-b border-ink-border overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-signal/10 to-transparent animate-sweep" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-blip" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted font-mono">Live monitoring</span>
          </div>
          <h1 className="font-display text-2xl font-semibold mt-1">Signalboard</h1>
        </div>
        <p className="hidden md:block text-sm text-muted max-w-xs text-right">
          Businesses showing signals they need a website, product, or automation — ranked by how likely they are to buy.
        </p>
      </div>
    </header>
  );
}
