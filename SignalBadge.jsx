import { scoreTier } from "../lib/data";

export default function SignalBadge({ score, size = "md" }) {
  const tier = scoreTier(score);
  const dotSize = size === "lg" ? "w-2.5 h-2.5" : "w-1.5 h-1.5";
  const textSize = size === "lg" ? "text-2xl" : "text-sm";

  const toneClasses = {
    alert: "bg-alert text-alert animate-blip_alert",
    signal: "bg-signal text-signal animate-blip",
    muted: "bg-muted text-muted",
  }[tier.tone];

  const [bgClass, colorClass, animClass] = toneClasses.split(" ");

  return (
    <div className="inline-flex items-center gap-2">
      <span className={`relative flex ${dotSize} rounded-full ${bgClass} ${animClass}`} aria-hidden="true" />
      <span className={`font-mono ${textSize} mono-num font-medium`}>{score}</span>
      <span className="text-xs text-muted uppercase tracking-wider">{tier.label}</span>
    </div>
  );
}
